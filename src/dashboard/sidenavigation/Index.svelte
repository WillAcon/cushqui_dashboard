<script lang="ts">
	import { open } from '../provider/store'
	import SidenavItems from './Items.svelte'
	import SidenavHeader from './Header.svelte'
	import { clickOutside } from '../provider/click-outside'

	const style = {
		mobilePosition: {
			left: 'left-0 ',
			right: 'right-0 lg:left-0',
		},
		container: `pb-32 lg:pb-12 lg:mt-12`,
		close: `duration-700 ease-out hidden transition-all lg:w-24`,
		open: `absolute duration-700 ease-in transition-all w-8/12 z-40 sm:w-5/12 md:w-64`,
		default: `border border-gray-200 dark:border-gray-700 h-screen overflow-y-auto text-black dark:text-white top-0 lg:absolute bg-white dark:bg-gray-800 lg:block lg:z-40`,
	}

	const closeSidenav = () => {
		console.log('clickOutside')
	}
	export let mobilePosition = 'right'
</script>

<aside
	use:clickOutside
	on:click_outside={closeSidenav}
	class={`pt-16 ${style.default} ${style.mobilePosition[mobilePosition]} ${
		$open ? style.open : style.close
	} scrollbar`}
>
	<div class={style.container}>
		<SidenavHeader />
		<SidenavItems />
	</div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide sidenav scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
