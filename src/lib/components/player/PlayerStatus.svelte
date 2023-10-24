<script lang="ts">
	import { ALIVE } from '$lib/constants';
	import type { PlayerStatus } from '$lib/types/player.types';

	export let status: PlayerStatus;
	const dead_or_alive_text = status === ALIVE ? 'text-green-500' : 'text-red-500';
	const dead_or_alive_icon = status === ALIVE ? 'user' : 'ghost-character';
</script>

<div class="flex flex-column items-center">
	<p class="font-semibold text-xs {dead_or_alive_text}">{status}</p>
	<i class="gg-{dead_or_alive_icon} scale-50" />
</div>

<style lang="postcss">
</style>
