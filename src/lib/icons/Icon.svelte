<script lang="ts">
	export let icon :any;
	export let size :string = "24";
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
	<circle cx="12" cy="12" r="3"></circle>

	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		d={icon}
	/>

</svg>

