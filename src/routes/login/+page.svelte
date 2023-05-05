<script>
	import { enhance } from '$app/forms';
	import ListErrors from '$lib/ListErrors.svelte';
    import { Button, Input, Label } from 'flowbite-svelte';
	import View from "carbon-icons-svelte/lib/View.svelte";
	import ViewOff from "carbon-icons-svelte/lib/ViewOff.svelte";
	import UserAvatar from "carbon-icons-svelte/lib/UserAvatar.svelte";
	import { Alert } from 'flowbite-svelte';
	/** @type {import('./$types').ActionData} */
	export let form;
	let show = false;
</script>

<svelte:head>
	<title>Iniciar sesión • Sistema de registro</title>
</svelte:head>

<div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 bg-gray-100 dark:bg-gray-900">
    <a href="" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
        <img src="/logo.svg" class="mr-4 h-11" alt="FlowBite Logo">
        <span>Flowbite</span>  
    </a>
    <!-- Card -->
    <!-- <ListErrors errors={form?.errors} /> -->
	
    <div class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow bg-gray-100 dark:bg-gray-800">
		{#if form?.error}
			<Alert color="red" dismissable>
				<span slot="icon"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
				</span>
				{form.error}
			</Alert>
		{/if}
        <h2 class="text-2xl font-bold bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
            Sign in to platform 
        </h2>
        <form class="mt-8 space-y-6" use:enhance method="POST">
            <div class="mb-4">
            <Label class="mb-2">
              <span>Usuario</span> 
            </Label>
              <Input id="username" type="email" placeholder="name@flowbite.com" size="lg" name="username">
                  <UserAvatar size="24" slot="left"/>
              </Input>
            </div>
            <div class="mb-6">
                  <Label for="show-password" class="mb-2">Contraseña</Label>
                  <Input id="show-password" type={show ? 'text' : 'password'} placeholder="Your password here" name="password" size="lg">
                    <button slot="left" type="button" on:click={() => (show = !show)} class="pointer-events-auto">
                      {#if show}
                        <View size="24" />
                      {:else}
                        <ViewOff size="24" />
                      {/if}
                    </button>
                  </Input>
            </div>
            <div class="flex items-center justify-between">
              <Button type="submit" outline class="w-full">
                  Iniciar sesión
              </Button>
            </div>
          </form>
    </div>
</div>


