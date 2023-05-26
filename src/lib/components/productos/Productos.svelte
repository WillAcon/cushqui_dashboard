<script lang="ts">
	import ItemProducto from './ItemProducto.svelte';
  export let productos : any;
</script>

<div class="container px-4 mx-auto">
    <div class="flex flex-wrap -m-4">
        {#if productos === undefined}
          Loading Character Name...
        {:else}
           {#each productos as producto (producto.id)}
             <ItemProducto {producto} />
           {/each}
        {/if}
    </div>
</div>


