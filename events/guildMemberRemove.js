const Discord = require('discord.js');
const {arrayClean} = require('../util/util.js');
module.exports.run = (bot, member) => {
    let modlogs = member.guild.channels.find(c => c.name === bot.util.modlogs);
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Left', member.user.displayAvatarURL)
        .setTimestamp()
        .addField(`UserInfo`, `**Mention: **${member.user}\n**Tag: **${member.user.tag}\n**ID: **${member.id}`)
        .addField(`Had Role(s)`, member.roles.size > 1 ? arrayClean(null, member.roles.map((r) => {
            if (r.name !== '@everyone') {
                return r;
            }

            return null;
        })).join(' | ') : '**None**', false)
        .setFooter(`Member Left At`)
        .setThumbnail(member.user.displayAvatarURL)
    modlogs.send(botembed);
}
