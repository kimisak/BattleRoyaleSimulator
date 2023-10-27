import { character_data } from '$lib/data';
import { createMultiplePlayers, createMultipleTeams, playersNameCount } from '$lib/helper';

import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const players = createMultiplePlayers(character_data);
	return {
		players,
		playerNameCount: playersNameCount(players),
		teams: createMultipleTeams(players)
	};
};
