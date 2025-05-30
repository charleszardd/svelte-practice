<script lang="ts">
	// import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';

	let myName = $state("Charles");

	const greet = () => {
		alert("Hello"+ myName);
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<!-- <span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span> -->

		<strong>Hello Universe</strong>

	
	</h1>

	<h2>
		hi im <strong>{myName}</strong>
		<button class="btn" onclick={() => (myName = "David")}>
			Click me
		</button>

		<button onclick={greet}>
			Click here
		</button>
	</h2>

	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
	.btn{
		color: red;
		background-color: yellow;
		padding: 20px;
		border-radius: 15px;
		cursor: pointer;
	}

	/* .welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
