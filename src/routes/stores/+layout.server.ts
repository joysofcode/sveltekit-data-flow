const users = ['Jet', 'Spike', 'Faye', 'Ed', 'Ein']

export async function load() {
	return {
		user: {
			name: users[Math.floor(Math.random() * users.length)],
		},
	}
}
