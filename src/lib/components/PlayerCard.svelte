<script lang="ts">
	import type { Player } from '$lib/types/player.types';
	import { getPlayerName } from '$lib/helper';
	export let player: Player;
	export let showImage: boolean = false;

	const dead_or_alive_text = player.status === 'alive' ? 'text-green-500' : 'text-red-500';
	const dead_grayscale = player.status === 'dead' ? 'grayscale' : '';
</script>

<div class="text-center w-20 flex flex-col">
	{#if showImage}
		<img
			class="mx-auto inset-0 object-contain w-full {dead_grayscale}"
			src={player.image + '?u=' + String(Math.random() * 100)}
			alt={`Picture of ${getPlayerName(player)}`}
		/>
	{/if}
	<p
		class="text-sm font-semibold overflow-wrap break-word"
		title="{player.givenName} {player.familyName}"
	>
		{getPlayerName(player)}
	</p>
	<p class="font-semibold text-sm mt-1 {dead_or_alive_text}">{player.status}</p>
</div>

<style lang="postcss">
</style>
