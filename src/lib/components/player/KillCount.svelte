<script lang="ts">
	import type { Player } from '$lib/types/player.types';

	export let player: Player;
	export let showKillCount: boolean = true;
</script>

<div class="flex flex-column gap-0.5 items-center">
	{#if 0 < player.kills && showKillCount}
		<i class="gg-track scale-50" />
		<p class="text-xs">{player.kills}</p>
	{/if}
</div>

<style lang="postcss">
</style>
