<script>
	import { open, open_ew } from '../provider/store';

	import IconSlider from "$lib/icons/IconSlider.svelte";
	import IconNotification from "$lib/icons/IconNotification.svelte";

	import AvatarUser from '../../lib/components/header/AvatarUser.svelte';
	import { DarkMode } from 'flowbite-svelte';
	// import { page } from '$app/stores';

	const toggle = (value) => {
		console.log("Toggle sidebar",$open)
		open.update(value => !value);
		console.log("Toggle sidebar update",$open)
	};
	console.log("OPEN_EW", $open_ew)
	let user = "Williams";
</script>

<header class="h-20 items-center relative lg:z-111">
	<div class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex flex-center shadow-sm flex-col h-full justify-center mx-auto relative px-3 text-black dark:text-white z-10">
		<div class="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
			<div class="flex group h-full items-center relative w-12">
				<button
					type="button"
					aria-expanded="false"
					aria-label="Toggle sidenav"
					on:click={toggle}
					class="text-4xl text-black dark:text-white focus:outline-none pr-9 pl-3"
				>
				{#if $open }
					<div class="p-2 bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded-full">
						<IconSlider size="36" />
					</div>
				{:else}
					<div class="p-2">
						<IconSlider size="36" />
					</div>
				{/if}
				</button>

				<span class=" ml-2 md:mr-24 hidden lg:flex">
					<img src="/logo.svg" class="h-8 mr-3" alt="FlowBite Logo">
					<span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Administrador {$open_ew}</span>
				

					
				</span>
			</div>
			<div class="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
				<span class="block pr-5 hidden lg:block">
					<button on:click={() => open_ew.update(value => !value)}>Evento cookie</button>
				</span>
				<span class="block pr-5">
					<DarkMode size="26"/>
				</span>
				<span class="block pr-5">
					<IconNotification size="26" />
				</span>
				<span class="block pr-5 relative">
					<IconNotification size="26" />
				</span>
				<span class="block relative">
					<AvatarUser user={user}/>
				</span>
			</div>
		</div>
	</div>
</header>