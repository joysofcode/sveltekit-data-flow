<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	export let data

	const user = writable()
	$: user.set(data.user)

	setContext('user', user)
</script>

<slot />
