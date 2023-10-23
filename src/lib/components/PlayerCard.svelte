<script lang="ts">
	import type { Player } from '$lib/types/player.types';
	import { getPlayerName } from '$lib/helper';
	import { ALIVE, DEAD } from '$lib/constants';
	export let player: Player;
	// Settings
	export let showImage: boolean = false;
	export let showKillCount: boolean = true;

	const dead_or_alive_text = player.status === ALIVE ? 'text-green-500' : 'text-red-500';
	const dead_grayscale = player.status === DEAD ? 'grayscale' : '';
</script>

<div class="text-center w-20 flex flex-col">
	{#if showImage}
		<img
			class="mx-auto inset-0 object-contain w-full {dead_grayscale}"
			src={player.image + '?u=' + String(Math.random() * 100)}
			alt={`Picture of ${getPlayerName(player)}`}
		/>
	{/if}
	<div>
		<p
			class="text-sm font-semibold overflow-wrap break-word"
			title="{player.givenName} {player.familyName}"
		>
			{getPlayerName(player)}
		</p>
	</div>
	<div class="font-semibold text-sm mt-1 flex flex-column gap-3 justify-center items-center">
		{#if 0 < player.kills && showKillCount}
			<div class="flex flex-column gap-1 items-center">
				<i class="gg-track scale-75"></i>
				<p>
					{player.kills}
				</p>
			</div>
		{/if}
		<div class="flex flex-column items-center gap-0.5">
			<p class="font-semibold text-sm {dead_or_alive_text}">{player.status}</p>
			{#if player.status === DEAD}
				<i class="gg-ghost-character scale-75"></i>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
</style>