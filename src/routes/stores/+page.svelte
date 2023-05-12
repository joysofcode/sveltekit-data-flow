<script>
	import { getContext } from 'svelte'

	const user = getContext('user')
</script>

<h1>Stores with context</h1>
<p>Welcome {$user.name}!</p>
