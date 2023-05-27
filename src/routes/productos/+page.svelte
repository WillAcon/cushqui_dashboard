<script>
	import Productos from './../../lib/components/productos/Productos.svelte'
	import { dataset_dev } from 'svelte/internal'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<div class="bg-bg_body m-auto pt-16 pb-16 h-full">
	<Productos productos={data.productos} />
</div>

<div class="m-auto pl-16 pt-16">
	<a href="/login" class="bg-green-four p-4">Login</a>
	<a href="/" class="bg-green-four p-4">Home</a>
</div>
