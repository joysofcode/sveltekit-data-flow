<script lang="ts">
	export let name: string
	export let value: any
</script>

<section>
	<h4>{name}</h4>

	<pre>
{JSON.stringify(value, null, 2)}
  </pre>
</section>

<style>
	section {
		margin-block: var(--size-7);
		padding: var(--size-7);
		color: var(--gray-0);
		background-color: var(--gray-10);
		border-radius: var(--radius-2);
		box-shadow: var(--shadow-1);
	}

	pre {
		font-size: var(--font-size-3);
		margin-top: var(--size-3);
	}
</style>
