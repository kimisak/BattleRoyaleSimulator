<script lang="ts">
	import { ALIVE, DEAD } from '$lib/constants';
	import type { Player } from '$lib/types/player.types';

	export let player: Player;
	const dead_or_alive_text = player.status === ALIVE ? 'text-green-500' : 'text-red-500';
	const dead_or_alive_icon = player.status === ALIVE ? 'user' : 'ghost-character';
</script>

<div class="flex flex-column items-center">
	<p class="font-semibold text-xs {dead_or_alive_text}">{player.status}</p>
	<i class="gg-{dead_or_alive_icon} scale-50" />
</div>

<style lang="postcss">
</style>
