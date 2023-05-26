<script>
  import "../app.css";
  // import 'tailwindcss/tailwind.css';
	import LayoutAdmin from '../dashboard/Layout.svelte';
  import LayoutPublic from  '../public/Layout.svelte'
  // let layout = true;
  import { page } from '$app/stores';
  console.log($page.route.id);
</script>



<slot />
