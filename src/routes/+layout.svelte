<script lang="ts">
	import log from '$lib/utils/log'
	import '../app.css'

	log.layout('+layout.svelte')
</script>

<nav>
	<a href="/">Home</a>
	<a href="/nested/route">Nested route</a>
	<a href="/actions">Form actions</a>
	<a href="/error">Errors</a>
	<a href="/stores">Stores</a>
	<a href="/locals">Locals</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		gap: var(--size-7);
	}
</style>
