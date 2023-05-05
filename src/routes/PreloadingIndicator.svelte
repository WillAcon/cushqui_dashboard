<script>
	import { onMount } from 'svelte';
	let p = 0;
	let visible = false;
	onMount(() => {
		visible = true;
		function next() {
			p += 0.1;
			const remaining = 1 - p;
			if (remaining > 0.15) setTimeout(next, 500 / remaining);
		}
		setTimeout(next, 250);
	});
</script>

{#if visible}
	<div class="absolute top-0 left-0 w-full h-1 z-999">
		<div class="progress absolute left-0 top-0 h-full bg-green-500" style="width: {p * 100}%" />
	</div>
{/if}

{#if p >= 0.4}
	<div class="fade fix w-full h-full pointer-events-none z-998 animate-pulse" />
{/if}

<style>
	.progress {
		transition: width 0.4s;
	}
</style>