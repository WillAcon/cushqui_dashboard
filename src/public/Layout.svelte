<script>
	import { DarkMode } from 'flowbite-svelte';

	// import { onMount } from 'svelte';
	const style = {
		container: `bg-gray-100 dark:bg-gray-900 h-screen overflow-hidden relative`,
		main: `lg:p-10 `
	};

</script>

<div class={style.container}>
	<DarkMode size="26"/>
	<div>
		<main class={style.main}>
			<slot />
		</main>
	</div>
</div>