import log from '$lib/utils/log'

export async function GET({ locals }) {
	log.endpoint('+server.ts (GET)')
	return new Response(locals.secret)
}
