<script>
	// import data from './data';
	import data from '$lib/store/Routerdata'
	import { page } from '$app/stores'
	import { open } from '../provider/store'
	import BottomMenu from './BottomMenu.svelte'
	import MenuItem from '$lib/components/shared/MenuItem.svelte'
	const style = {
		default:
			'flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11',
		active: `bg-gray-200 dark:bg-gray-700`,
	}
</script>

<ul class="md:pl-3 md:pr-3">
	{#each data as item, i (item.title)}
		<li>
			{#if item.subitems && $open}
				<MenuItem {item} open={$open} page={$page} />
				<ul id={`${item.id}`} class=" py-2 space-y-2">
					{#each item.subitems as subitem}
						<li>
							<a
								href={subitem.link}
								class={`${style.default} ${
									$open && subitem.link === $page.url.pathname
										? style.active
										: ''
								}`}>{subitem.title}</a
							>
						</li>
					{/each}
				</ul>
			{:else}
				<MenuItem {item} open={$open} page={$page} />
			{/if}
		</li>
	{/each}
</ul>

<BottomMenu />
