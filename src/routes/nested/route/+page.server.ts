export async function load({ parent }) {
	// parent `+layout.server.ts` data
	const data = await parent()
	console.log(data)
}
