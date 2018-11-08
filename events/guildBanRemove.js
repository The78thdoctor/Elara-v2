const Discord = require('discord.js');
module.exports.run = async (bot, guild, user) => {
    let modlogs = guild.channels.find(c => c.name === bot.util.modlogs);
    if (!modlogs) return;
    let e = new Discord.RichEmbed()
    .setAuthor(`Member Unbanned`, guild.iconURL)
    .setColor(`#FF000`)
    .setTitle(`Info`)
    .setFooter(bot.user.tag, bot.user.displayAvatarURL)
    .setTimestamp()
    .setThumbnail(user.displayAvatarURL)
    if (guild.members.get(bot.user.id).permissions.has("VIEW_AUDIT_LOG")) {
        let who = await guild.fetchAuditLogs().then(audit => audit.entries.first().executor)
        e.setDescription(`**Mention: **${user}\n**Tag: **${user.tag}\n**ID: ** ${user.id}\n**Unbanned By: **${who}`)
    } else {
        e.setDescription(`**Mention: **${user}\n**Tag: **${user.tag}\n**ID: ** ${user.id}`)
    }
    modlogs.send(e)
}
