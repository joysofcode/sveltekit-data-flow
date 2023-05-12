import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
	if (locals.secret !== '🍌') {
		throw redirect(307, '/')
	}

	return {
		secret: locals.secret,
	}
}
