const { Command } = require('../../util/Commando');
const Discord = require('discord.js');
const moment = require('moment-timezone')
const { arrayClean } = require('../../util/util.js');
module.exports = class WhoisCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'whois',
            memberName: 'whoais',
            group: 'information',
            aliases: [],
            description: 'Gets information about someone',
            examples: [`${client.commandPrefix}whois @user`],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 3
            },
            args: [ 
                {
                    key: "member",
                    prompt: "What member do you want the info on?",
                    type: "member",
                    default: msg => msg.member
                }
            ]
        })
    }

    async run(msg, {member}) {
        let types = [
            "Playing",
            "Streaming",
            "Listening",
            "Watching"
        ]
        let prefix = msg.guild._commandPrefix ? msg.guild._commandPrefix : this.client.commandPrefix;
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp()
            .addField(`❯\u2000\Mention`, member.user, true)
            .addField(`❯\u2000\Tag`, member.user.tag, true)
            .addField(`❯\u2000\Name`, member.user.username, true)
            .addField(`❯\u2000\Nickname`, member.nickname ? member.nickname : 'No Nickname', true)
            .addField(`❯\u2000\User ID`, member.id, true)
            .addField(`❯\u2000\Discriminator`, `#${member.user.discriminator}`, true)
            .addField(`❯\u2000\Bot`, member.user.bot ? 'Yes' : 'No', true)
            .addField(`❯\u2000\Bot Owner`, `${member.user.id !== "288450828837322764" && member.user.id !== "391529339214364674" && member.user.id !== "440810964061913119" ? "No" : "Yes, Hi Boss <:SmileyHearts:485361754633797654>"}`, true)
            .addField(`❯\u2000\Avatar URL`, `[Click Here](${member.user.displayAvatarURL})`)
            .addBlankField()
            .addField(`❯\u2000\Account Created At`, `${moment(member.user.createdAt).format('dddd, MMMM Do YYYY')}\n${moment(member.user.createdAt).format('h:mm:ss a zz')}`, true)
            .addField(`❯\u2000\Joined Server At`, `${moment(member.joinedAt).format('dddd, MMMM Do YYYY')}\n${moment(member.joinedAt).format('h:mm:ss a zz')}`, true)
            if (member.presence.game !== null) { embed.addField(`❯\u2000\Playing Status`, `**Status:** ${member.presence.status.toUpperCase()}\n**Game:** ${member.presence.game ? member.presence.game.name : 'N/A'}\n**Type:** ${types[member.presence.game.type]}`, true) }
            embed.addBlankField()
            embed.addField('❯\u2000\Highest Role', member.roles.size > 1 ? member.highestRole : 'N/A', true)
            embed.addField('❯\u2000\Highest Role Hoisted', member.highestRole.hoist ? "Yes" : "No", true)
            embed.addField(`❯\u2000\Permissions`, `Do \`${prefix}myperms\``)
            embed.addField(`❯\u2000\Role(s)`, member.roles.size > 1 ? arrayClean(null, member.roles.map((r) => {if (r.name !== '@everyone') {return r;}return null;})).join(' | ') : 'None', false)
            embed.setFooter(`Want to see another members info? Do ${msg.guild._commandPrefix ? msg.guild._commandPrefix : this.client.commandPrefix}whois @user/userid`)
            msg.say(embed)
    }
}
