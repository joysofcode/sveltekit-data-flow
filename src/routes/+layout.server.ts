import log from '$lib/utils/log'

export async function load() {
	log.layout('+layout.server.ts (load)')

	return {
		a: 1,
	}
}
