import type { Team } from './types/team.types';
import { ACTIVE } from './constants';
import { createMultiplePlayers } from './helper';

const hunger_games_characters = [
	'Katniss, Everdeen, Girl on Fire, female',
	'Peeta, Mellark, The Boy with the Bread, male',
	'Gale, Hawthorne, The Hunter, male',
	'Haymitch, Abernathy, Haymitch, male',
	'Effie, Trinket, Effie, female',
	'Cinna, None, Cinna, male',
	'Primrose, Everdeen, Prim, female',
	'Rue, None, Rue, female',
	'Thresh, None, Thresh, male',
	'Cato, None, Cato, male',
	'Clove, None, Clove, female',
	'Foxface, None, Foxface, female',
	'Finnick, Odair, Finnick, male',
	'Johanna, Mason, Johanna, female',
	'Beetee, Latier, Beetee, male',
	'Wiress, None, Wiress, female',
	'Enobaria, None, Enobaria, female',
	'Boggs, None, Boggs, male',
	'Pollux, None, Pollux, male',
	'Coriolanus, Snow, President Snow, male',
	'Alma, Coin, President Coin, female'
];

const players = createMultiplePlayers(hunger_games_characters);

const team1: Team = {
	name: 'Team 1',
	motto: 'We are number one',
	players: [players[1], players[2]],
	leader: players[1],
	status: ACTIVE
};

const team2: Team = {
	name: 'Team 2',
	motto: 'Second to none except team 1 aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	players: [players[3], players[4]],
	leader: players[3],
	status: ACTIVE
};

export const teams = [team1, team2, team2, team2, team2, team2, team1];
