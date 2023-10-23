<script lang="ts">
	import type { Team } from '$lib/types/team.types';
	import PlayerCard from './player/PlayerCard.svelte';
	export let team: Team;
	export let showMotto = true;
</script>

<div class="flex flex-col items-center">
	<div class="text-center mb-1">
		<h1 class="text-sm font-sans font-semibold">{team.name}</h1>
		{#if showMotto}
			<p class="text-xs font-serif font-light w-48 flex flex-column justify-center">
				“<span class="block truncate">{team.motto}</span>”
			</p>
		{/if}
	</div>
	<div class="flex flex-row flex-wrap justify-between">
		{#each team.players as player}
			<PlayerCard {player} />
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
