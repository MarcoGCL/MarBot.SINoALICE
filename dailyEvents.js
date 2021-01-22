module.exports = {
	name: 'dailyevents',
	aliases: ['evolution', 'evo', 'riches'],
	description: 'Guerrilla schedule for SINoALICE.',
	guildOnly: false,
	cooldown: 3,
	path: './plugins/SINoALICE/',
	args: false,
	usage: null,
	execute(message, args) {
		var daily = 15; // Reset time in GMT
		var windEvo = [0, 2, 5];
		var fireEvo = [1, 3, 6];
		var waterEvo = [2, 4, 6];
		var armorEvo = [1, 3, 5];
		var riches = [0, 4, 5];
	},
};