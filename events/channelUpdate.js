const Discord = require('discord.js');
module.exports.run = (bot, oldChannel, newChannel) => {
    let modlogs = oldChannel.guild.channels.find(c => c.name === bot.util.modlogs);
    if (!modlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`#FF000`)
    if (oldChannel.name !== newChannel.name) {
        embed.setAuthor(newChannel.guild.name, newChannel.guild.iconURL)
        embed.setTimestamp()
        embed.setFooter(bot.user.tag, bot.user.displayAvatarURL)
        embed.setTitle(`Channel Name Changed`)
        embed.addField(`Old Channel Name`, oldChannel.name, true)
        embed.addField(`New Channel Name`, newChannel.name, true)
        modlogs.send(embed)
    }else {
        return;
    }
}
