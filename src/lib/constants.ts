import { generatePronounRegExpStrings } from './helper';
import type { Gender, PronounType } from './types/gender_and_pronouns.types';

// Genders
export const MALE: Gender = {
	gender: 'male',
	pronouns: {
		subject: 'he',
		object: 'him',
		possessive: 'his',
		reflexive: 'himself'
	}
};
export const FEMALE: Gender = {
	gender: 'female',
	pronouns: {
		subject: 'she',
		object: 'her',
		possessive: 'her',
		reflexive: 'herself'
	}
};
export const NON_BINARY: Gender = {
	gender: 'non-binary',
	pronouns: {
		subject: 'they',
		object: 'them',
		possessive: 'their',
		reflexive: 'themself'
	}
};
export const GENDERS: Gender[] = [MALE, FEMALE, NON_BINARY];

// Pronoun Types
export const SUBJECT_PRONOUN = 'subject';
export const OBJECT_PRONOUN = 'object';
export const POSSESSIVE_PRONOUN = 'possessive';
export const REFLEXIVE_PRONOUN = 'reflexive';
export const PRONOUNS: PronounType[] = [
	SUBJECT_PRONOUN,
	OBJECT_PRONOUN,
	POSSESSIVE_PRONOUN,
	REFLEXIVE_PRONOUN
];

// Finds all occurences in a string on the form (Player#), example (Player1)
export const GAME_EVENT_TEXT_PLAYER_REGEX = /\(Player(\d+)\)/g;
// Finds all occurences in a string on the form (pronoun<divider>pronoun<divider>...pronoun#)
// Example: (he/she/they1), (him/her/them1), (his/her/their1), (himself/herself/themself1)
export const GAME_EVENT_TEXT_PRONOUN_DYNAMIC_REGEX = (pronouns: string) =>
	`\\((${pronouns})(\\d+)\\)`;
export const GAME_EVENT_TEXT_PRONOUN_DIVIDER = '/';
// The regex strings for all pronoun types
const PRONOUN_REGEX_STRINGS = generatePronounRegExpStrings(GENDERS);
// Pronouns Regexes set with Flag 'g'
export const SUBJECT_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[SUBJECT_PRONOUN], 'g');
export const OBJECT_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[OBJECT_PRONOUN], 'g');
export const POSSESSIVE_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[POSSESSIVE_PRONOUN], 'g');
export const REFLEXIVE_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[REFLEXIVE_PRONOUN], 'g');

// Player Status
export const ALIVE = 'alive';
export const DEAD = 'dead';

// Team Status
export const ACTIVE = 'active';
export const ELIMINATED = 'eliminated';
export const DISQUALIFIED = 'disqualified';
