<script lang="ts">
	import { onMount } from "svelte";
	import { fetchServices } from "$lib/api/fetch-service";
	import type { Service } from "$lib/types/service";
	import { writable } from "svelte/store";

	const services = writable<Service[]>([]);
	let error: string | null = null;

	onMount(async () => {
		try {
			const data = await fetchServices();
			services.set(data);
		} catch (err) {
			error = (err as Error).message;
			console.error('Error loading services:', error);
		}
	});
</script>

<main>
	{#if error}
		<p>{error}</p>
	{:else if $services.length === 0}
		<p>Loading services...</p>
	{:else}
		{#each $services as service, index}
			<div class="bg-white rounded-lg card grid grid-cols-1">
				<strong>{service.name}</strong>
				<p>{service.description}</p>
			</div>
		{/each}
	{/if}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.card {
		width: 100%;
		max-width: 500px;
		padding: .5rem;
		margin-top: 20px;
	}
</style>
