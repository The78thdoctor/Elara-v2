const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "attack",
            memberName: "attack",
            aliases: [],
            examples: [`${client.commandPrefix}attack`],
            description: "Sends the Attack Blob Cheer army! [SUPERCHIEFYT's Discord Command only.]",
            group: "fun",
            hidden: true
        })
    }
    async run(message) {
        if(message.guild.id !== "371105897570631691" && message.guild.id !== "424200844666208265") return;
        let emoji = this.client.emojis.get("504665622672834560")
        let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(`ATTACK OF THE CHEER BLOBS! `, emoji.url)
            .setDescription(`${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji}\n${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji}\n${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji}\n${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji}\n${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji}\n${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji} ${emoji}`)
        message.channel.send(embed)
    }
}
