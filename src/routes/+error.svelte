<script lang="ts">
	import { page } from '$app/stores'
	import Pre from '$lib/pre.svelte'
	import log from '$lib/utils/log'

	log.page(`/error/+page.svelte`)
</script>

<h1>Error</h1>

<p>
	Even though you're on the <b>{$page.url.pathname}</b> route this is not the
	<code>+page.svelte</code> component but the <code>+error.svelte</code> component.
</p>

<Pre name="$page" value={$page} />
