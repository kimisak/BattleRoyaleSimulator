import type { Gender, PronounRegexStrings, PronounType } from '$lib/types/gender_and_pronouns.types';

// TODO: switch 'gender' to enum?
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

// TODO: switch to enum?
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
// This function has to be here, and not in ./helper.ts. I don't know why, but I get a TypeError
// when I try to import it from ./helper.ts, saying that
// "__vite_ssr_import_0__.generatePronounRegExpStrings is not a function" :D
// I tried to make it async in ./helper.ts and await it here, but that didn't work.
const generatePronounRegExpStrings = (genders: Gender[]): PronounRegexStrings => {
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
const PRONOUN_REGEX_STRINGS = generatePronounRegExpStrings(GENDERS);
// Pronouns Regexes set with Flag 'g'
export const SUBJECT_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[SUBJECT_PRONOUN], 'g');
export const OBJECT_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[OBJECT_PRONOUN], 'g');
export const POSSESSIVE_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[POSSESSIVE_PRONOUN], 'g');
export const REFLEXIVE_PRONOUN_REGEX = new RegExp(PRONOUN_REGEX_STRINGS[REFLEXIVE_PRONOUN], 'g');

// TODO: switch to enum?
// Player Status
export const ALIVE = 'alive';
export const DEAD = 'dead';

// TODO: switch to enum?
// Team Status
export const ACTIVE = 'active';
export const ELIMINATED = 'eliminated';
export const DISQUALIFIED = 'disqualified';

// Team
export const TEAM_SIZE = 2;