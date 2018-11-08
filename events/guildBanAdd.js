const Discord = require('discord.js');
module.exports.run = async (bot, guild, user) => {
    let modlogs = guild.channels.find(c => c.name === bot.util.modlogs);
    if (!modlogs) return;
    let e = new Discord.RichEmbed()
        .setAuthor(`Member Banned`, guild.iconURL)
        .setColor(`#FF0000`)
        .setTitle(`Info`)
        .setFooter(bot.user.tag, bot.user.displayAvatarURL)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL)
    if (guild.members.get(bot.user.id).permissions.has("VIEW_AUDIT_LOG")) {
        let who = await guild.fetchAuditLogs().then(audit => audit.entries.first().executor)
        let reason = await guild.fetchAuditLogs().then(audit => audit.entries.first().reason)
        e.setDescription(`**Mention: **${user}\n**Tag: **${user.tag}\n**ID: ** ${user.id}\n**Banned By: **${who}\n**Reason: **${reason ? reason : "No Reason Provided"}`)
    } else {
        e.setDescription(`**Mention: **${user}\n**Tag: **${user.tag}\n**ID: ** ${user.id}`)
    }
    modlogs.send(e)
}
