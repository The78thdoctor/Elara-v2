const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
const DBL = require("dblapi.js");
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "dblupdate",
            memberName: "dblupdate",
            aliases: [],
            examples: [`${client.commandPrefix}dblupdate`],
            description: "Updates the server count on DiscordBots.org",
            group: "botowner",
	    ownerOnly: true,
        })
    }
    async run(message) {
	const dbl = new DBL(process.env.DBL, this.client);
	dbl.on('posted', () => {
	let e = new Discord.RichEmbed()
	.setColor(`GREEN`)
	.setAuthor(this.client.user.tag, this.client.user.displayAvatarURL)
	.setDescription(`Server Count Posted ${require("../../util/util.js").semoji}`)
	.setTimestamp()
	message.channel.send(e)
	})

	dbl.on('error', e => {
 	let embed = new Discord.RichEmbed()
	.setColor(`RED`)
	.setAuthor(this.client.user.tag, this.client.user.displayAvatarURL)
	.setDescription(`${require("../../util/util.js").nemoji} ERROR\n${e}`)
	.setTimestamp()
	message.channel.send(embed)
	})
    }
}
