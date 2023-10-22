
<script lang="ts">
import type {Team} from "$lib/types/TeamTypes";
	import PlayerCard from "./PlayerCard.svelte";
    export let team: Team;
    export let showMotto = false;
</script>

<div class="flex flex-col items-center">
    <div class="text-center mb-1">
        <h1 class="font-sans font-semibold">{team.name}</h1>
        {#if showMotto}
            <p class="text-sm font-serif font-light">“{team.motto}”</p> 
        {/if}
    </div>
    <div class="flex flex-row gap-5">
        {#each team.players as player}
            <PlayerCard {player}/>
        {/each}
    </div>
</div>

<style lang="postcss">

</style>