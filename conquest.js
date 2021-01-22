module.exports = {
	name: 'conquest',
	aliases: ['raid'],
	description: 'Conquest schedule for SINoALICE.',
	guildOnly: false,
	cooldown: 3,
	path: './plugins/SINoALICE/',
	args: false,
	usage: null,
	execute(message, args) {
		var available = true;
		var times = [12.0, 19.5, 21.5, 23.5, 1.5, 3.5];
		var timezone = -5.0;
		var output = '**Conquest** is not currently available.';	
		
		if (available) {
			if (args[0]) {
				timezone = parseFloat(args[0]) % 24;
			}
			
			if(timezone < 0) {
				output = '**Conquest (GMT' + timezone + '):** ';
			} else {
				output = '**Conquest (GMT+' + timezone + '):** ';
			}
			
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
		}
		
		message.channel.send(output);
	},
};