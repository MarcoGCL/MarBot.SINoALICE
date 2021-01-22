module.exports = {
	name: 'guerrilla',
	aliases: ['gorilla', 'gorila', 'guerila', 'guerilla', 'guerrila'],
	description: 'Guerrilla schedule for SINoALICE.',
	guildOnly: false,
	cooldown: 3,
	path: './plugins/SINoALICE/',
	args: false,
	usage: null,
	execute(message, args) {
		var times = [11.5, 18.5, 20.5, 22.5, 0.5, 2.5];

		var timezone = (parseFloat(args[0]) || -5.0);
		var output = '**Guerrilla Weapon and Armor:** ';
		
		for (var time of times) {
			if ((time + timezone) < 0.0) {
				time = time + 24.0 + timezone;
			} else if ((time + timezone) >= 24.0) {
				time = time - 24.0 + timezone;
			} else {
				time = time + timezone;
			}
			
			output = `${output}\`${Math.floor(time)}:`;
			if (time % 1) {
				output = `${output}30 - ${Math.floor(time)}:59\`, `;
			} else {
				output = `${output}00 - ${Math.floor(time)}:29\`, `;
			}
		}
		
		output = output.slice(0, -2);
		message.channel.send(output);
	},
};