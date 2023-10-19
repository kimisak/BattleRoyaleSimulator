import type { Player, Gender } from './types/PlayerTypes';
import type { Team, TeamStatus } from './types/TeamTypes';

const maleGender: Gender = {
	name: 'male',
	pronouns: {
		subject: 'he',
		object: 'him',
		possessive: 'his',
		reflexive: 'himself'
	}
};

const femaleGender: Gender = {
	name: 'female',
	pronouns: {
		subject: 'she',
		object: 'her',
		possessive: 'her',
		reflexive: 'herself'
	}
};

const nonBinaryGender: Gender = {
	name: 'non-binary',
	pronouns: {
		subject: 'they',
		object: 'them',
		possessive: 'their',
		reflexive: 'themself'
	}
};

const player1: Player = {
	givenName: 'Kim Isak',
	familyName: 'Olsen',
	nickname: 'Kimmi',
	image: 'https://i.pravatar.cc/',
	gender: maleGender,
	status: 'alive'
};

const player2: Player = {
	givenName: 'Solveig',
	familyName: 'Langås',
	nickname: 'Sunroad',
	image: 'https://i.pravatar.cc/',
	gender: femaleGender,
	status: 'alive'
};

const player3: Player = {
	givenName: 'Ingrid Amalie',
	familyName: 'Solbjørg',
	nickname: 'IA',
	image: 'https://i.pravatar.cc/',
	gender: femaleGender,
	status: 'alive'
};

const player4: Player = {
	givenName: 'Oscar',
	familyName: 'Selnes Bognæs',
	nickname: 'Osci',
	image: 'https://i.pravatar.cc/',
	gender: maleGender,
	status: 'alive'
};

const teamStatusActive: TeamStatus = "active";
const teamStatusEliminated = "eliminated";
const teamSTatusDisqualified = "disqualified";

const team1: Team = {
	name: 'Team 1',
	motto: 'We are number one',
	players: [player1, player2],
	leader: player1,
	status: teamStatusActive,
};

const team2: Team = {
	name: 'Team 2',
	motto: 'Second to none',
	players: [player3, player4],
	leader: player3,
	status: teamStatusActive,
};

export const players = [player1, player2, player3, player4];
export const teams = [team1, team2];
