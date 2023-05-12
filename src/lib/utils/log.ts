import chalk from 'chalk'

const styles = {
	tomato: chalk.hex('#000000').bgHex('#ff6347'),
	aqua: chalk.hex('#000000').bgHex('#7ffd4'),
	white: chalk.hex('#000000').bgHex('#ffffff'),
	black: chalk.hex('#ffffff').bgHex('#000000'),
}

export default {
	hooks(text: string) {
		console.log(styles.tomato(text))
	},
	layout(text: string) {
		console.log(styles.aqua(text))
	},
	page(text: string) {
		console.log(styles.white(text))
	},
	endpoint(text: string) {
		console.log(styles.black(text))
	},
	bold(text: string) {
		console.log(chalk.bold(text))
	},
}
