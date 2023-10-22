import type { Gender } from './gender_and_pronouns.types';
import type { Team } from './team.types';

type PlayerStatus = 'alive' | 'dead';

export type Player = {
	givenName: string;
	familyName?: string;
	nickname?: string;
	gender: Gender;
	teamName?: Team['name'];
	image: string;
	status: PlayerStatus;
};
