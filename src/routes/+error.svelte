<script>
	import { page } from '$app/stores';
	import  NotFound from '$lib/components/shared/404.svelte';

	console.log("algo salio",$page);
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div>
	{#if $page.status === 404}
		<NotFound/>
	{:else}
		<h1>Algo salió mal</h1>
	{/if}
</div>

<style>
	h1 {
		margin: 4em 0;
		text-align: center;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
