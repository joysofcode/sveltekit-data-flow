import log from '$lib/utils/log'

export async function load() {
	log.page('+page.server.ts (load)')

	return {
		c: 3,
	}
}
