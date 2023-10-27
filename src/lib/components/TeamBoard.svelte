<script lang="ts">
	import type { Team } from '$lib/types/team.types';
	import TeamCard from './TeamCard.svelte';

	export let teams: Team[];
</script>

<div class="p-10 flex flex-col sm:flex-row sm:flex-wrap gap-10 w-full justify-center">
	{#each teams as team}
		<TeamCard {team} />
	{/each}
</div>

<style lang="postcss">
</style>
