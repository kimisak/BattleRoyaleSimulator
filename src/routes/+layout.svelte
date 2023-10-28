<div class="grid grid-cols-8 grid-rows-6 h-screen w-screen">
	<aside class="col-span-1 row-span-full bg-black text-white text-center">
		<img src="../../images/goatgames_3.png" alt="logo" />
		<h1>Battle Royale Simulator</h1>
		<h2>Timeline</h2>
	</aside>
	<header
		class="col-start-2 col-span-full bg-black text-white items-end flex justify-between gap-x-20"
	>
		<div class="flex gap-x-20">
			<nav class="flex gap-x-5 ml-5">
				<a href="/">Home</a>
				<a href="/tutorial">How to Play</a>
				<a href="/settings">Settings</a>
			</nav>
			<nav class="flex gap-x-5">
				<a href="/characters">Characters</a>
				<a href="/leaderboard">Leaderboard</a>
				<a href="statistics">Statistics</a>
			</nav>
		</div>
		<nav class="mr-5">
			<a href="https://github.com/kimisak/battleroyalesimulator">GitHub</a>
		</nav>
	</header>
	<main class="col-start-2 row-start-2 col-span-full row-span-full bg-gray-400">
		<slot />
	</main>
</div>

<style lang="postcss">
	a:hover {
		color: #de231c;
	}
</style>
