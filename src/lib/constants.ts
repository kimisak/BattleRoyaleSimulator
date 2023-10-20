import type { Gender } from './types/PlayerTypes';

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

export const NONBINARY: Gender = {
	gender: 'non-binary',
	pronouns: {
		subject: 'they',
		object: 'them',
		possessive: 'their',
		reflexive: 'themself'
	}
};

// Player Status
export const ALIVE = "alive";
export const DEAD = "dead";

// Team Status
export const ACTIVE = "active";
export const ELIMINATED = "eliminated";
export const DISQUALIFIED = "disqualified";

// Pronouns regexes
export const SUBJECT_PRONOUN_PATTERN = /\((he\|she\|they)(\d+)\)/g;
export const OBJECT_PRONOUN_PATTERN = /\((him\|her\|them)(\d+)\)/g;
export const POSSESSIVE_PRONOUN_PATTERN = /\((his\|her\|their)(\d+)\)/g;
export const REFLEXIVE_PRONOUN_PATTERN = /\((himself\|herself\|themself)(\d+)\)/g;