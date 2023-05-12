export async function load({ parent }) {
	// parent `+layout.ts` data
	const data = await parent()
	console.log(data)
}
