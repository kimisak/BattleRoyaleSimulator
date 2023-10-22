<script lang="ts">
	import type { Player } from '$lib/types/player.types';
	import type { GameEvent } from '$lib/types/game.types';
	import { replaceTextPlaceholders } from '$lib/helper';

	export let players: Player[];
	const eventText1 =
		"(Player1) and (Player2) sit in the darkness, their whispers barely audible. (Player1) pleads, 'Please, spare me.' (Player2) replies, 'Survival comes at a price,' before eliminating (Player1).";
	const eventText2 =
		'A mysterious and deadly plant with venomous thorns ensnares (Player1) as (he/she/they1) ventures too close. Despite (his/her/their1) struggles, the thorns inject a lethal poison, and (Player1) falls lifeless.';
	
	const eventText3 = "(Player1) ventured into the wilderness and unknowingly triggered a deadly trap, which also took the lives of (Player2), (Player3), and (Player4).";
	const eventText4 = "(Player1) and (Player2) decided to explore the dense forest together. As they journeyed deeper, (Player1) spotted a wild animal and tried to approach it, but (Player2) cautioned (him/her/them1) to stay back. Unbeknownst to them, (Player3) and (Player4) were also nearby, searching for resources. Suddenly, (Player3) noticed movement in the bushes and mistakenly thought it was an attacker. (He/She/They3) swiftly drew (his/her/their3) weapon and lunged at the figure, only to realize too late that it was (Player1). The tragic mistake resulted in (Player1)'s death, leaving (Player2) and (Player4) in shock and grief.";
	
	const event1: GameEvent = { text: eventText1 };
	const event2: GameEvent = { text: eventText2 };
	const event3: GameEvent = { text: eventText3 };
	const event4: GameEvent = { text: eventText4 };


	const replaced1 = replaceTextPlaceholders(event1.text, players);
	const replaced2 = replaceTextPlaceholders(event2.text, players);
	const replaced3 = replaceTextPlaceholders(event3.text, players);
	const replaced4 = replaceTextPlaceholders(event4.text, players);
</script>

<div>
	<strong>Raw data</strong>
	<p>{event1.text}</p>
	<strong>Mutated data</strong>
	<p>{replaced1}</p>
	<strong>Raw data</strong>
	<p>{event2.text}</p>
	<strong>Mutated data</strong>
	<p>{replaced2}</p>
</div>

<style lang="postcss">
</style>
