const { Command } = require('../../util/Commando'),  
    Discord = require('discord.js'),
    hastebin = require('hastebin-gen');
module.exports = class SRCommand extends Command {
    constructor(client){
        super(client, {
            name: "serverlist",
            memberName: "serverlist",
            aliases: ["slist"],
            group: "botowner",
            ownerOnly: true,
            examples: [`${client.commandPrefix}serverlist`],
            description: "Gives all of the server names that the bot is in"
        })
    }
    async run(message) {
        let string = '';
        this.client.guilds.forEach(guild => { string += `Server Name: (${guild.name})\nServer ID: (${guild.id})\nServer Icon: [Click Here](${guild.iconURL})` + '\n\n'; })
            hastebin(string, "js").then(r => {
        var hastLink = r
        const hastEmb = new Discord.RichEmbed()
            .setColor(0xFFF000)
            .setURL(hastLink)
            .addField('Link: ', `${hastLink}`)
        message.channel.send({ embed: hastEmb })
    }).catch(console.error);
    }
}
