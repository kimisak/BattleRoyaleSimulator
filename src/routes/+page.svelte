<script lang='ts'>
	import '../app.css';
	import PlayerCard from '$lib/components/PlayerCard.svelte';
	import {players} from '$lib/players';

</script>

<main class="p-10 flex flex-row">
	{#each players as player}
		<PlayerCard player={player}/>
	{/each}	
</main>

<style lang="postcss">
	:global(body) {
		background-color: white;
	}
</style>
