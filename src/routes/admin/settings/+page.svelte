<script lang="ts">
	import { enhance } from '$app/forms'
	import ListErrors from '$lib/ListErrors.svelte'
	import { Badge, Button } from 'flowbite-svelte'

	/** @type {import('./$types').PageData} */
	export let data: any
	/** @type {import('./$types').ActionData} */
	export let form: any

	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	function handleClick() {
		console.log('handleClick')
		dispatch('deleteMe', { mensaje: 'Hola desde el componente hijo' })
	}
</script>

<svelte:head>
	<title>Settings • Conduit</title>
</svelte:head>
<h1>{data.post.title}</h1>
<div class="settings-page">
	<div class="container mx-auto w-1/2">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center text-center">Your Settings</h1>

				<ListErrors errors={form?.errors} />
				<Button on:click={handleClick}>Activar evento foo</Button>

				<form
					use:enhance={() => {
						return ({ update }) => {
							// don't clear the form when we update the profile
							update({ reset: false })
						}
					}}
					method="POST"
					action="?/save"
				>
					<div class="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label
								for="first_name"
								class="block mb-2 text-sm font-medium text-gray-900"
								>Nombre</label
							>
							<input
								type="text"
								value={data.user.first_name}
								name="first_name"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Nombre"
								required
							/>
						</div>
					</div>
					<div class="grid gap-6 mb-6 md:grid-cols-2">
						<div>
							<label
								for="first_name"
								class="block mb-2 text-sm font-medium text-gray-900"
								>Apellidos</label
							>
							<input
								type="text"
								value={data.user.last_name}
								name="last_name"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Nombre"
								required
							/>
						</div>
					</div>
					<fieldset>
						<fieldset class="form-group">
							<div>{data?.user?.username}</div>
						</fieldset>
						<div class="pt-5">
							<Button class="bg-green-500" type="submit">Update Settings</Button
							>
						</div>
					</fieldset>
				</form>

				<div class="h-10" />

				<form use:enhance method="POST" action="?/logout">
					<Button class="bg-orange-500" type="submit"
						>Or click here to logout.</Button
					>
				</form>
			</div>
		</div>
	</div>
</div>
