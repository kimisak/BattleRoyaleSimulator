<script lang="ts">
	import type { Player } from '$lib/types/PlayerTypes';
	export let player: Player;
	export let showImage: boolean = false;

	const player_name = (player: Player): string => {
		if (player.nickname === '') {
			return player.givenName;
		}
		return player.nickname ?? player.givenName;
	};
	const dead_or_alive_text = player.status === 'alive' ? 'text-green-500' : 'text-red-500';
	const dead_grayscale = player.status === 'dead' ? 'grayscale' : '';
</script>

<div class="text-center w-20 flex flex-col">
	{#if showImage}
		<img
			class="mx-auto inset-0 object-contain w-full {dead_grayscale}"
			src={player.image}
			alt={`Picture of ${player_name}`}
		/>
	{/if}

	<p
		class="text-sm font-semibold overflow-wrap break-word"
		title="{player.givenName} {player.familyName}"
	>
		{player_name(player)}
	</p>
	<p class="font-semibold text-sm mt-1 {dead_or_alive_text}">{player.status}</p>
</div>

<style lang="postcss">
</style>
