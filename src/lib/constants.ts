import { generatePronounRegExpStrings } from './helper';
import type { Gender, PronounType } from './types/PlayerTypes';

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
export const GENDER_TYPES: Gender[] = [MALE, FEMALE, NON_BINARY];

// Pronoun Types
export const SUBJECT_PRONOUN_TYPE = 'subject';
export const OBJECT_PRONOUN_TYPE = 'object';
export const POSSESSIVE_PRONOUN_TYPE = 'possessive';
export const REFLEXIVE_PRONOUN_TYPE = 'reflexive';
export const PRONOUN_TYPES: PronounType[] = [
	SUBJECT_PRONOUN_TYPE,
	OBJECT_PRONOUN_TYPE,
	POSSESSIVE_PRONOUN_TYPE,
	REFLEXIVE_PRONOUN_TYPE
];

// Finds all occurences in a string on the form (Player#)
export const GAME_EVENT_TEXT_PLAYER_REGEX = /\(Player(\d+)\)/g;

export const GAME_EVENT_TEXT_PRONOUN_DYNAMIC_REGEX = (pronouns: string) => `\\((${pronouns})(\\d+)\\)`;
export const GAME_EVENT_TEXT_PRONOUN_DIVIDER = '/';
const PRONOUN_REGEX_STRINGS = generatePronounRegExpStrings(MALE, FEMALE, NON_BINARY);

export const SUBJECT_PRONOUN_REGEX_STRING = PRONOUN_REGEX_STRINGS[SUBJECT_PRONOUN_TYPE];
export const OBJECT_PRONOUN_REGEX_STRING = PRONOUN_REGEX_STRINGS[OBJECT_PRONOUN_TYPE];
export const POSSESSIVE_PRONOUN_REGEX_STRING = PRONOUN_REGEX_STRINGS[POSSESSIVE_PRONOUN_TYPE];
export const REFLEXIVE_PRONOUN_REGEX_STRING = PRONOUN_REGEX_STRINGS[REFLEXIVE_PRONOUN_TYPE];

// Pronouns Regexes set with Flag 'g'
export const SUBJECT_PRONOUN_REGEX = new RegExp(SUBJECT_PRONOUN_REGEX_STRING, 'g');
export const OBJECT_PRONOUN_REGEX = new RegExp(OBJECT_PRONOUN_REGEX_STRING, 'g');
export const POSSESSIVE_PRONOUN_REGEX = new RegExp(POSSESSIVE_PRONOUN_REGEX_STRING, 'g');
export const REFLEXIVE_PRONOUN_REGEX = new RegExp(REFLEXIVE_PRONOUN_REGEX_STRING, 'g');

// Player Status
export const ALIVE = 'alive';
export const DEAD = 'dead';

// Team Status
export const ACTIVE = 'active';
export const ELIMINATED = 'eliminated';
export const DISQUALIFIED = 'disqualified';

