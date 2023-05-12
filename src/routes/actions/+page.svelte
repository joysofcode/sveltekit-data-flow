<script lang="ts">
	import { page } from '$app/stores'
	import { enhance } from '$app/forms'
	import Pre from '$lib/pre.svelte'
	import log from '$lib/utils/log'

	export let data

	log.page(`/forms/+page.svelte`)
</script>

<h1>Form Actions</h1>

<form method="POST" action="?/login" use:enhance>
	<label for="username">
		<p>Username</p>
		<input type="text" name="username" id="username" />
	</label>

	<label for="password">
		<p>Password</p>
		<input type="password" name="password" id="password" />
	</label>

	<div class="actions">
		<button type="submit">Log In</button>
		<button type="submit" formaction="?/register">Register</button>
	</div>
</form>

<Pre name="export let data" value={data} />
<Pre name="$page.data" value={$page.data} />

<style>
	.actions {
		display: flex;
		gap: var(--size-2);
		margin-top: var(--size-3);
	}
</style>
