<script lang="ts">
	export let message: string
	export let direction = 'right'
</script>

<p style="text-align: {direction}">
	{message}
</p>
