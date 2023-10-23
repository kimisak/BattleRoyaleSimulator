<script lang="ts">
	import '../app.css';
	import { teams } from '$lib/data';
	import TeamCard from '$lib/components/TeamCard.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import type { Team } from '$lib/types/team.types';
	import type { Player } from '$lib/types/player.types';

	const all_players: Player[] = teams.reduce((acc: Player[], team: Team) => {
		return acc.concat(team.players);
	}, []);
</script>

<main class="p-10 flex flex-col sm:flex-row sm:flex-wrap gap-10 w-full justify-evenly">
	{#each teams as team}
		<TeamCard {team} />
	{/each}
</main>

<style lang="postcss">
	:global(body) {
		background-color: white;
	}
</style>
