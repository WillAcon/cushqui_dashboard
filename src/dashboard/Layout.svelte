<script>
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { browser } from '$app/environment'
	import { open } from './provider/store'
	import Overlay from './provider/Overlay.svelte'
	import TopNavigation from './topnavigation/Index.svelte'
	import SideNavigation from './sidenavigation/Index.svelte'
	// import { createEventDispatcher } from 'svelte';
	// import { dispatch } from 'svelte';
	console.log('open---->', $open)
	const style = {
		container: `bg-gray-100 dark:bg-gray-900 h-screen overflow-hidden relative`,
		mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
		main: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm mt-5 h-screen overflow-auto pb-36 pt-4 ml-5 mr-5 px-2 md:pb-8 md:pt-4 lg:pt-2 lg:px-4`,
	}

	// import { createNanoEvents } from 'nanoevents'

	// const emitter = createNanoEvents()

	// const dispatch = createEventDispatcher();

	// function handleClick() {
	//   dispatch('nombre-del-evento', { datos-del-evento });
	// }

	// function handleEvento(evento) {
	//   console.log("este es el evento",evento);
	// }

	// `lg:pl-64 w-full `
	// p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800
	onMount(() => {
		document.getElementsByTagName('body').item(0).removeAttribute('tabindex')
		// dispatch('logout', true);

		document.addEventListener('deleteMe', (e) => {
			console.log('deleteMe', e.detail)
		})
		// console.log("onMount 33")

		// // Agregar un escucha de evento en el elemento body del DOM
		// document.body.addEventListener('logout', handleEvento);

		// // Al destruir el componente, eliminar el escucha de evento
		// return () => {
		// 	document.body.removeEventListener('logout', handleEvento);
		// };
	})

	if (browser) {
		page.subscribe(() => {
			// close side navigation when route changes when viewport < 1024px
			// $open = false;
			console.log('ENTRA AQUI?', $open)
		})
	}
</script>

<div class={style.container}>
	<TopNavigation />
	<div class="flex items-start">
		<Overlay />
		<SideNavigation mobilePosition="right" />
		<div class={$open ? 'lg:pl-64 w-full ' : 'lg:pl-24 w-full'}>
			<main class={style.main}>
				<slot />
			</main>
		</div>
	</div>
</div>
