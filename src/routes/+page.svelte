<script lang="ts">
	import TeamCard from '$lib/components/TeamCard.svelte';
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="p-10 flex flex-col sm:flex-row sm:flex-wrap gap-10 w-full justify-center">
	{#each data.teams as team}
		<TeamCard {team} />
	{/each}
</main>

<style lang="postcss">
	:global(body) {
		background-color: white;
	}
</style>
