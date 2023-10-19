import type { Gender } from './types/PlayerTypes';

export const MALE: Gender = {
	name: 'male',
	pronouns: {
		subject: 'he',
		object: 'him',
		possessive: 'his',
		reflexive: 'himself'
	}
};

export const FEMALE: Gender = {
name: 'female',
	pronouns: {
		subject: 'she',
		object: 'her',
		possessive: 'her',
		reflexive: 'herself'
	}
};

export const NONBINARY: Gender = {
	name: 'non-binary',
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