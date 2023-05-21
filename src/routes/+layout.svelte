<script>
  import "../app.css";
  // import 'tailwindcss/tailwind.css';
	import LayoutAdmin from '../dashboard/Layout.svelte';
  import LayoutPublic from  '../public/Layout.svelte'
  // let layout = true;
  export let data;
  import { page } from '$app/stores';
  console.log($page.route.id);
</script>



<slot />
