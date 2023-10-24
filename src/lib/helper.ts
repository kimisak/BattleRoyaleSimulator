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
	PRONOUNS,
	GAME_EVENT_TEXT_PLAYER_REGEX,
	GAME_EVENT_TEXT_PRONOUN_DYNAMIC_REGEX,
	NON_BINARY,
	FEMALE,
	MALE,
	ALIVE
} from './constants';
import type { Gender, PronounType, Pronouns } from './types/gender_and_pronouns.types';

// Pronoun helpers used to create constants in src/lib/constants.ts
// This type could probably be moved, but it's only used in the following function.
export type PronounRegexStrings = {
	subject: string;
	object: string;
	possessive: string;
	reflexive: string;
};

export const generatePronounRegExpStrings = (genders: Gender[]): PronounRegexStrings => {
	// This type is used to access the keys of the PronounRegexStrings object
	// in ./constants.ts based on the PronounType keys.
	const regExpStrings: PronounRegexStrings = {
		subject: '',
		object: '',
		possessive: '',
		reflexive: ''
	};

	// For each pronoun type, generate a regex string
	PRONOUNS.forEach((pronounType) => {
		let regexString = '';
		// with values from each gender
		genders.forEach((gender, index) => {
			const isLastGender = index === genders.length - 1;
			// appended and seprarated by the divider
			regexString += isLastGender
				? `${gender.pronouns[pronounType]}` // Don't append the divider
				: `${gender.pronouns[pronounType]}\\${GAME_EVENT_TEXT_PRONOUN_DIVIDER}`; // Append the divider
			regExpStrings[pronounType] = GAME_EVENT_TEXT_PRONOUN_DYNAMIC_REGEX(regexString);
		});
	});
	return regExpStrings;
};

// Player helpers
const setGenderFromString = (gender: string): Gender => {
	switch (gender) {
		case MALE.gender:
			return MALE;
		case FEMALE.gender:
			return FEMALE;
		case NON_BINARY.gender:
			return NON_BINARY;
		default:
			throw new Error('Gender not found');
	}
};

const createSinglePlayer = (data: string): Player => {
	const [givenName, familyName, nickname, gender] = data.split(', ');
	return {
		givenName,
		familyName: familyName != 'None' ? familyName : null,
		nickname: nickname != 'None' ? nickname : null,
		gender: setGenderFromString(gender),
		image: 'https://i.pravatar.cc/',
		status: ALIVE,
		kills: 0
	} as Player;
};

export const createMultiplePlayers = (data: string[]): Player[] => {
	return data.map((player) => createSinglePlayer(player));
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

const checkPlayersAgainstPlaceholderIndexes = (text: string, players: Player[]): void => {
	// Regex assumes the index is formatted as '[a-z]#)'
	// Example: 'y1)' as in 'they1)'
	// Could be moved to constants.ts along with the other index regex assumptions
	const regex = new RegExp(/[a-z](\d+)\)/g);
	let match: RegExpExecArray | null;
	let highestNumber = 0;
	while ((match = regex.exec(text)) !== null) {
		// match[1] is the capture group of \d+
		const index = parseInt(match[1], 10);
		if (index > highestNumber) {
			highestNumber = index;
		}
	}
	if (highestNumber > players.length) {
		throw new Error(
			`The highest player placeholder index in the text is ${highestNumber}, but there are only ${players.length} players.`
		);
	} else if (highestNumber < players.length) {
		console.warn(
			'There are more players than player placeholders in the text: but it will still work.'
		);
	} else {
		console.log('The number of players matches the number of player placeholders in the text.');
	}
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

// TODO: perhaps move the capitalization concern below to the regex strings creation
// Example: \(((he\/she\/they)|(He\/She\/They))(\d+)\)
// This could be done in generatePronounRegExpStrings(...)'s RegexString creation.

// Used to capitalize the first letter of sentences that begin with a lowercase.
// Useful when a sentence begins with a player's lowercase pronoun.
const capitalizeSentencesStartingWithLowercase = (text: string): string => {
	const sentences = text.split('. ');
	// beware the regex does not concern accented characters, vowel mutations, or graphemes etc.
	const lowerCaseSentences = sentences.filter((sentence) => /^[a-z]/.test(sentence));
	lowerCaseSentences.map((sentence) => {
		const firstLetter = sentence.charAt(0).toUpperCase();
		const restOfSentence = sentence.slice(1);
		// replace the lowercase sentence with the capitalized one
		sentences.splice(sentences.indexOf(sentence), 1, `${firstLetter}${restOfSentence}`);
	});
	return sentences.join('. ');
};

const addHtmlTagsToText = (text: string, players: Player[]): string => {
	return '';
};

// Replaces placeholders with player names and pronouns
export const createContentfulGameEventText = (text: string, players: Player[]): string => {
	checkPlayersAgainstPlaceholderIndexes(text, players);
	text = replacePlayerNamePlaceholders(text, players);
	text = replaceMultiplePronounTypePlaceholders(text, players);
	text = capitalizeSentencesStartingWithLowercase(text);
	// text = addHtmlTagsToText(text, players);
	return text;
};
