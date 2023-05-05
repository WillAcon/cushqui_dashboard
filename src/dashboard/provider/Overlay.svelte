<script>
	import { open } from './store.js';

	const closeSidenav = () => {
		open.update(value => false);
	};
</script>


<!-- The overlay will only be visible on small screens to emphasize the focus on the side navigation when it is open.-->
<div on:click={closeSidenav} class={ $open ? 'bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:bg-transparent overlay-div lg:hidden': 'overlay-div'} />
