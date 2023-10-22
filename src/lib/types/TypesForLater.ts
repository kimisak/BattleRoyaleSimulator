import type { Player } from './player.types';
import type { Team } from './team.types';

type Achievement = {
	icon: string;
	name: string;
	description: string;
	points: number;
	unlockedBy: Player | Team;
	dateUnlocked?: Date;
	requirements: string;
	hidden: boolean;
};

type PlayerVitality = {
	health: number;
	hunger: number;
	thirst: number;
	stamina: number;
};

type PlayerAttributes = {
	strength: number;
	agility: number;
	intelligence: number;
	charisma: number;
	endurance: number;
	luck: number;
};
