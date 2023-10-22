<script lang="ts">
	import type { Player } from '$lib/types/player.types';
	import type { GameEvent } from '$lib/types/game.types';
	import { replaceEventTextPlaceholders } from '$lib/helper';

	export let players: Player[];
	const eventText1 =
		"(Player1) and (Player2) sit in the darkness, their whispers barely audible. (Player1) pleads, 'Please, spare me.' (Player2) replies, 'Survival comes at a price,' before eliminating (Player1).";
	const eventText2 =
		'A mysterious and deadly plant with venomous thorns ensnares (Player1) as (he/she/they1) ventures too close. Despite (his/her/their1) struggles, the thorns inject a lethal poison, and (Player1) falls lifeless.';

	const event1: GameEvent = { text: eventText1 };
	const event2: GameEvent = { text: eventText2 };

	const replaced1 = replaceEventTextPlaceholders(event1, players);
	const replaced2 = replaceEventTextPlaceholders(event2, players);
</script>

<div>
	<p>{replaced1}</p>
	<br />
	<p>{replaced2}</p>
</div>

<style lang="postcss">
</style>
