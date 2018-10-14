const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "membercount",
            memberName: "membercount",
            aliases: ["mc"],
            examples: [`${client.commandPrefix}mc`, `${client.commandPrefix}membercount`],
            description: "Gives you the membercount for your server.",
            group: "information",
            guildOnly: true
        })
    }
    async run(message) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : "https://cdn.discordapp.com/emojis/483118381650804747.gif")
            .setColor(`RANDOM`)
            .setTimestamp()
            .addField(`Members`, `**${message.guild.memberCount}**`, true)
            .addField(`Humans`, `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
            .addField(`Bots`, `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
         if (message.guild.members.get('248947473161256972')){
            embed.addField(`VAL`, `1`, true)
        }
        embed.addField(`Member Statuses`, `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible`, true)
        message.channel.send(embed)
    }
}
