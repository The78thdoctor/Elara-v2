const Discord = require('discord.js');
module.exports.run = async (bot, message) => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    let modlogs = message.guild.channels.find(c => c.name === bot.util.modlogs);
    if (!modlogs) return;
    let image = message.attachments.map(g => g.proxyURL)
    let embed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setTitle(`Content`)
    .setAuthor(`Message Deleted`,message.author.displayAvatarURL)
    .addField(`Info`, `**User:** ${message.author.tag}\n**User ID:** ${message.author.id}\n**Channel:** ${message.channel}`)
    if(image) { 
    embed.setImage(image.join(' '))
    embed.setDescription(`${message.cleanContent ? message.cleanContent : image}`)
    }
    modlogs.send(embed)
}
