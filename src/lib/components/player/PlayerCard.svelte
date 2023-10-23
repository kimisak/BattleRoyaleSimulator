<script lang="ts">
	import type { Player } from '$lib/types/player.types';
	import { getPlayerName } from '$lib/helper';
	import { DEAD } from '$lib/constants';
	import KillCount from './KillCount.svelte';
	import PlayerStatus from './PlayerStatus.svelte';
	export let player: Player;
	// Settings
	export let showImage: boolean = true;
	export let showKillCount: boolean = true;

	const dead_grayscale = player.status === DEAD ? 'grayscale' : '';
</script>

<div class="text-center w-20 flex flex-col">
	{#if showImage}
		<img
			class="mx-auto inset-0 object-contain w-10/12 {dead_grayscale}"
			src={player.image + '?u=' + String(Math.random() * 100)}
			alt={`Picture of ${getPlayerName(player)}`}
		/>
	{/if}
	<p class="text-xs font-bold overflow-wrap break-word" title={player.nickname ?? player.givenName}>
		{getPlayerName(player)}
	</p>
	<div class="font-semibold text-xs flex flex-row gap-1.5 justify-center items-center">
		{#if 0 < player.kills && showKillCount}
			<KillCount {player} />
		{/if}
		<PlayerStatus {player} />
	</div>
</div>

<style lang="postcss">
</style>
