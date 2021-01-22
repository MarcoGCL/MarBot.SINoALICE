module.exports = {
	name: 'events',
	aliases: null,
	description: 'Event schedule for SINoALICE.',
	guildOnly: false,
	cooldown: 3,
	path: './plugins/SINoALICE/',
	args: false,
	usage: null,
	execute(message, args) {
		const guerrilla = require('./guerrilla.js');
		const conquest = require('./conquest.js');
		guerrilla.execute(message, args);
		conquest.execute(message, args);
	},
};