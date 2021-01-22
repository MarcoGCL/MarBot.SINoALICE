module.exports = {
	name: 'evolve',
	aliases: null,
	description: 'Requirements for evolution.',
	guildOnly: false,
	cooldown: 3,
	path: './plugins/SINoALICE/',
	args: true,
	usage: '<type>, <rank>',
	execute(message, args) {
		output = `${args[0]} ${args[1]} is not a proper request.`;
		type = ['weapon', 'armor', 'armour', 'nightmare'];
		rank = ['b', 'a', 's', 'sr', 'l', 'conquest'];
		
		weaponA = 'Lv.1 x15, Lv.2 x5, Lv.3 x1';
		weaponS = 'Lv.1 x45, Lv.2 x20, Lv.3 x5';
		weaponSR = 'Lv.2 x40, Lv.3 x15, Lv.4 x5';
		
		armorB = 'Lv.1 x15, Lv.2 x5';
		armorA = 'Lv.1 x30, Lv.2 x20, Lv.3 x5';
		armorS = 'Lv.1 x45, Lv.2 x30, Lv.3 x15, Lv.4 x1';
		armorSR = null;
		
		nightmareA = 'Lv.1 x30, Lv.2 x10, Lv.3 x1';
		nightmareS = 'Lv.1 x45, Lv.2 x20, Lv.3 x5';
		nightmareSR = 'Lv.2 x40, Lv.3 x15, Lv.4 x5';
		conquestSR = 'Core x1, Lv.3 x15, Lv.4 x5';
		
		if (args.length > 0) {
			args[0] = args[0].toLowerCase();
		}
		if (args.length > 1) {
			args[1] = args[1].toLowerCase();
		}
		
		if (args[0] === type[0]) {
			if (args[1] === rank[0]) {
				output = `There are no B rank weapons.`;
			} else if (args[1] === rank[1]) {
				output = `A rank weapons require ${weaponA} to evolve.`;
			} else if (args[1] === rank[2]) {
				output = `S rank weapons require ${weaponS} to evolve.`;
			} else if (args[1] === rank[3]) {
				output = `SR rank weapons require ${weaponSR} to evolve.`;
			} else if (args[1] === rank[4]) {
				output = `L rank weapons can not be evolved any further.`;
			}
		} else if (args[0] === type[1] || args[0] === type[2]) {
			if (args[1] === rank[0]) {
				output = `B rank armor require ${armorB} to evolve.`;
			} else if (args[1] === rank[1]) {
				output = `A rank armor require ${armorA} to evolve.`;
			} else if (args[1] === rank[2]) {
				output = `S rank armor require ${armorS} to evolve`;
			} else if (args[1] === rank[3]) {
				output = `There is currently no evolvable SR armor.`;
			} else if (args[1] === rank[4]) {
				output = `There is currently no L rank armor.`;
			}
		} else if (args[0] === type[3]) {
			if (args[1] === rank[0]) {
				output = `There are no B rank nightmares.`;
			} else if (args[1] === rank[1]) {
				output = `A rank nightmares require ${nightmareA} to evolve.`;
			} else if (args[1] === rank[2]) {
				output = `S rank nightmares require ${nightmareS} to evolve.`;
			} else if (args[1] === rank[3]) {
				output = `SR rank nightmares require ${nightmareSR} to evolve`;
			} else if (args[1] === rank[4]) {
				output = `L rank nightmares can not be evolved any further.`;
			} else if (args[1] === rank[5]) {
				output = `SR rank conquest nightmares require ${conquestSR} to evolve.`;
			}
		}
		
		message.channel.send(output);
	},
};