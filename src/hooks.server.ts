import log from '$lib/utils/log'

export async function handle({ event, resolve }) {
	log.bold(`📣 NEW REQUEST IS BEING MADE FROM ${event.url.pathname}`)
	log.hooks('hooks.server.ts')

	event.locals.secret = '🍌'

	const response = await resolve(event)
	log.bold(`🔥 THE PAGE IS READY, I'M SENDING THE RESPONSE`)
	return response
}
