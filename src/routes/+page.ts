import log from '$lib/utils/log'

export async function load({ data }) {
	log.page('+page.ts (load)')

	return {
		...data,
		d: 4,
	}
}
