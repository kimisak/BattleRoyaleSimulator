import type { Player } from './types/player.types';

import {
	SUBJECT_PRONOUN,
	OBJECT_PRONOUN,
	POSSESSIVE_PRONOUN,
	REFLEXIVE_PRONOUN,
	SUBJECT_PRONOUN_REGEX,
	OBJECT_PRONOUN_REGEX,
	POSSESSIVE_PRONOUN_REGEX,
	REFLEXIVE_PRONOUN_REGEX,
	GAME_EVENT_TEXT_PRONOUN_DIVIDER,
	PRONOUN_TYPES,
	GENDER_TYPES,
	GAME_EVENT_TEXT_PLAYER_REGEX,
	GAME_EVENT_TEXT_PRONOUN_DYNAMIC_REGEX
} from './constants';
import type { GameEvent } from './types/game.types';
import type { Gender, PronounType, Pronouns } from './types/gender_and_pronouns.types';

// Pronoun helpers used to create constants in src/lib/constants.ts
export type PronounRegexStrings = {
	subject: string;
	object: string;
	possessive: string;
	reflexive: string;
};

export const generatePronounRegExpStrings = (...genders: Gender[]): PronounRegexStrings => {
	const regExpStrings: PronounRegexStrings = {
		subject: '',
		object: '',
		possessive: '',
		reflexive: ''
	};

	PRONOUN_TYPES.forEach((pronounType) => {
		let regexString = '';
		genders.forEach((gender, index) => {
			const isLastGender = index === GENDER_TYPES.length - 1;
			// Append the regex string for the current pronounType
			regexString += isLastGender
				? `${gender.pronouns[pronounType]}` // Don't append the divider
				: `${gender.pronouns[pronounType]}\\${GAME_EVENT_TEXT_PRONOUN_DIVIDER}`; // Append the divider
			regExpStrings[pronounType] = GAME_EVENT_TEXT_PRONOUN_DYNAMIC_REGEX(regexString);
		});
	});
	return regExpStrings;
};

// Player
export const getPlayerName = (player: Player): string => {
	if (player.nickname === '') {
		return player.givenName;
	}
	return player.nickname ?? player.givenName;
};

// GameEvent
const getPronounsInText = (text: string): PronounType[] => {
	const pronounsInText: PronounType[] = [];
	SUBJECT_PRONOUN_REGEX.test(text) && pronounsInText.push(SUBJECT_PRONOUN);
	OBJECT_PRONOUN_REGEX.test(text) && pronounsInText.push(OBJECT_PRONOUN);
	POSSESSIVE_PRONOUN_REGEX.test(text) && pronounsInText.push(POSSESSIVE_PRONOUN);
	REFLEXIVE_PRONOUN_REGEX.test(text) && pronounsInText.push(REFLEXIVE_PRONOUN);
	return pronounsInText;
};

const replacePlayerNamePlaceholders = (text: string, players: Player[]): string => {
	// Replace placeholders with player names
	const filledSentence = text.replace(
		GAME_EVENT_TEXT_PLAYER_REGEX,
		(match: string, textPlayerIndex: string) => {
			const index = parseInt(textPlayerIndex, 10) - 1;
			const player = players[index];
			if (player) {
				return getPlayerName(player);
			}
			// If player is not found, return the placeholder
			return match;
		}
	);

	return filledSentence;
};

const replaceSingularPronounTypePlaceholders = (
	text: string,
	players: Player[],
	regex: RegExp,
	divider: string
): string => {
	// Replaces all matches with the g flag set in the regex
	const filledSentence = text.replace(
		regex,
		(match: string, textPlayerPronouns: string, textPlayerIndex: string): string => {
			const pronouns: Pronouns[] = textPlayerPronouns.split(divider) as Pronouns[];
			const index: number = parseInt(textPlayerIndex, 10) - 1;
			const player: Player = players[index];
			if (player) {
				const playerPronouns = Object.values(player.gender.pronouns);
				const foundPlayerPronoun = pronouns.find((pronoun) => playerPronouns.includes(pronoun));
				return foundPlayerPronoun ?? match;
			}
			return match;
		}
	);
	return filledSentence;
};

const replaceMultiplePronounTypePlaceholders = (text: string, players: Player[]): string => {
	const pronounsInText: PronounType[] = getPronounsInText(text);
	for (const pronounType of pronounsInText) {
		let pronounRegex: RegExp = new RegExp('');
		switch (pronounType) {
			case SUBJECT_PRONOUN:
				pronounRegex = SUBJECT_PRONOUN_REGEX;
				break;
			case OBJECT_PRONOUN:
				pronounRegex = OBJECT_PRONOUN_REGEX;
				break;
			case POSSESSIVE_PRONOUN:
				pronounRegex = POSSESSIVE_PRONOUN_REGEX;
				break;
			case REFLEXIVE_PRONOUN:
				pronounRegex = REFLEXIVE_PRONOUN_REGEX;
				break;
			default:
				break;
		}
		text = replaceSingularPronounTypePlaceholders(
			text,
			players,
			pronounRegex,
			GAME_EVENT_TEXT_PRONOUN_DIVIDER
		);
	}
	return text;
};

export const replaceEventTextPlaceholders = (event: GameEvent, players: Player[]): string => {
	event.text = replacePlayerNamePlaceholders(event.text, players);
	event.text = replaceMultiplePronounTypePlaceholders(event.text, players);
	return event.text;
};
