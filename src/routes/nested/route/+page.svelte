<script lang="ts">
	import { page } from '$app/stores'
	import Pre from '$lib/pre.svelte'
	import log from '$lib/utils/log'

	export let data

	log.page(`/some/nested/route/+page.svelte`)
</script>

<h1>Nested route</h1>

<h4>{data.a} + {data.b} = {data.a + data.b}</h4>

<Pre name="export let data" value={data} />
<Pre name="$page.data" value={$page.data} />
