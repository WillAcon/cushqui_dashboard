<script>
	import '../app.css'
	import { navigating } from '$app/stores';
	// import 'tailwindcss/tailwind.css';
	import LayoutAdmin from '../dashboard/Layout.svelte'
	import LayoutPublic from '../public/Layout.svelte'
	// let layout = true;
	import { page } from '$app/stores'
	import PreloadingIndicator from '$lib/components/shared/PreloadingIndicator.svelte';
	console.log('page strore', $page)
</script>
{#if $navigating}
	<PreloadingIndicator />
{/if}
<slot />


