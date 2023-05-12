import log from '$lib/utils/log'

export async function load({ data }) {
	log.layout('+layout.ts (load)')

	return {
		...data,
		b: 2,
	}
}
