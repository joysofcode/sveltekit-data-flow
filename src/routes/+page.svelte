<script lang="ts">
	import { page } from '$app/stores'
	import Pre from '$lib/pre.svelte'
	import log from '$lib/utils/log'

	export let data

	log.page('+page.svelte')
</script>

<h1>Home</h1>

<Pre name="export let data" value={data} />
<Pre name="$page.data" value={$page.data} />
