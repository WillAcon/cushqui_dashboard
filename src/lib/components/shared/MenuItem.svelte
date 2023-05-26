<script lang="ts">
    export let item :any;
    export let open :any;
    export let page :any;
	import Icon from "$lib/icons/Icon.svelte";


    const style = {
		title: `mx-4`,
		default: 'hover:bg-gray-700 hover:dark:bg-gray-200 hover:dark:text-black rounded-full hover:text-white',
		active: `bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded-full`,
		link: `flex items-center p-1 text-base text-gray-900 rounded-lg  group dark:text-gray-200 pb-1 mb-2`,
		linkOpen: `flex items-center p-1 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 mb-2`,
		activeOpen: `bg-gray-200 dark:bg-gray-700`,
		close: `lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all`,
		open: `lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto`,
    };
  </script>
        <a class={`${open ? style.linkOpen : style.link} ${open && (item.link === page.url.pathname || (item.subitems && page.url.pathname.startsWith(item.link)))? style.activeOpen : ''}`} href={item.link}>
					<div class={`p-2 ${item.link === page.url.pathname || (item.subitems && page.url.pathname.startsWith(item.link))? style.active : style.default}`}>
						<span><svelte:component this={item.icon} size="24"/></span>
					</div>
					<span class={`${style.title} ${open ? style.open : style.close}`}>
						{item.title}
					</span>
		</a>