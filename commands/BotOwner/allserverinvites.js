const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class BotEmojisCommand extends Command {
    constructor(client) {
        super(client, {
            name: "allinvites",
            group: 'botowner',
            ownerOnly: true,
            aliases: [],
            description: "Lists all of the invites from all of the servers the bot is in.",
            examples: [`${client.commandPrefix}allinvites`],
            memberName: "allinvites"
        })
    }
    async run(message) {

         const invites = {};
        this.client.guilds.forEach(g => {
            g.fetchInvites().then(guildInvites => {
                invites[g.id] = guildInvites;
                let hastLink = (`${invites[g.id].map(g => `\n ${g.code ? `https://discord.gg/${g.code}` : ""}`).join('\n')}`)
                if(hastLink.length === 0) return;
                const hastEmb = new Discord.RichEmbed()
                    .setTitle(`Server ${g.name}`)
                    .setThumbnail(g.iconURL ? g.iconURL : g.owner.user.displayAvatarURL)
                    .setDescription(hastLink ? hastLink : "None")
                    .setAuthor(`Owner ${g.owner.user.tag ? g.owner.user.tag : "None"}`, g.owner.user.displayAvatarURL)
                    .setColor(`RANDOM`)
                message.channel.send(hastEmb)
            });
        });
    }
}
