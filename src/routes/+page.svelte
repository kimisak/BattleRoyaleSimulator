<script lang='ts'>
	import '../app.css';
	import type { Player } from '$lib/types/PlayerTypes';
	import PlayerCard from '$lib/components/PlayerCard.svelte';

	const player1: Player = {
		givenName: 'Kim Isak Olsen',
		familyName: 'Olsen',
		nickname: '',
		image: 'https://i.pravatar.cc/75',
		gender: {
			name: "male",
			pronouns: {
				subject: "he",
				object: "him",
				possessive: "his",
				reflexive: "himself",
			}
		},
		status: "alive",
	}

	const player2: Player = {
		givenName: 'Kim Isak',
		familyName: 'Olsen',
		nickname: '',
		image: 'https://i.pravatar.cc/75',
		gender: {
			name: "male",
			pronouns: {
				subject: "he",
				object: "him",
				possessive: "his",
				reflexive: "himself",
			}
		},
		status: "dead",
	}
</script>

<main class="p-10 flex flex-row">
	<PlayerCard player={player1} />
	<PlayerCard player={player2} />
</main>

<style lang="postcss">
	:global(body) {
		background-color: gray;
	}
</style>
