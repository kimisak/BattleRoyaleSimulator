import type { Player } from './types/PlayerTypes';
import type { Team } from './types/TeamTypes';
import { MALE, FEMALE, ACTIVE, ALIVE } from './constants';

const player1: Player = {
	givenName: 'Kim Isak',
	familyName: 'Olsen',
	nickname: 'Kimmi',
	image: 'https://i.pravatar.cc/',
	gender: MALE,
	status: ALIVE,
};

const player2: Player = {
	givenName: 'Solveig',
	familyName: 'Langås',
	nickname: 'Sunroad',
	image: 'https://i.pravatar.cc/',
	gender: FEMALE,
	status: ALIVE,
};

const player3: Player = {
	givenName: 'Ingrid Amalie',
	familyName: 'Solbjørg',
	nickname: 'IA',
	image: 'https://i.pravatar.cc/',
	gender: FEMALE,
	status: ALIVE,
};

const player4: Player = {
	givenName: 'Oscar',
	familyName: 'Selnes Bognæs',
	nickname: 'Osci',
	image: 'https://i.pravatar.cc/',
	gender: MALE,
	status: ALIVE,
};

const team1: Team = {
	name: 'Team 1',
	motto: 'We are number one',
	players: [player1, player2],
	leader: player1,
	status: ACTIVE,
};

const team2: Team = {
	name: 'Team 2',
	motto: 'Second to none',
	players: [player3, player4],
	leader: player3,
	status: ACTIVE,
};

export const players = [player1, player2, player3, player4];
export const teams = [team1, team2];
