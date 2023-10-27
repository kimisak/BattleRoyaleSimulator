<script lang="ts">
	import { TEAM_SIZE } from '$lib/constants';
	import type { Team } from '$lib/types/team.types';
	import PlayerCard from './player/PlayerCard.svelte';

	export let team: Team;
	export let showMotto = false;
</script>

<div class="flex flex-col items-center">
	<div class="text-center mb-1 w-full">
		<h1 class="text-sm font-sans font-semibold border-b-2">
			{1 < TEAM_SIZE ? team.name : `#${team.id}`}
		</h1>
		{#if showMotto}
			<p class="text-xs font-serif font-light w-48 flex flex-column justify-center">
				“<span class="block truncate">{team.motto}</span>”
			</p>
		{/if}
	</div>
	<div class="flex flex-row flex-wrap justify-center">
		{#each team.players as player}
			<PlayerCard {player} />
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
