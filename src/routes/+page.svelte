<script lang='ts'>
	import '../app.css';
	import {teams} from '$lib/data';
	import TeamCard from '$lib/components/TeamCard.svelte';

</script>

<main class="p-10 flex flex-col sm:flex-row sm:flex-wrap gap-10">
	{#each teams as team}
		<TeamCard team={team} showMotto/>
	{/each}
</main>
	

<style lang="postcss">
	:global(body) {
		background-color: white;
	}
</style>
