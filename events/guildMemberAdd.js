const Discord = require('discord.js');
module.exports.run = (client, member) => {
    let modlogs = member.guild.channels.find(c => c.name === client.util.modlogs);
    if (!modlogs) return;
    let botembed = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setTitle(`Member Joined`)
    .setAuthor(member.user.tag, member.user.displayAvatarURL)
    .setDescription(`**Mention: **${member.user}\n**Tag: **${member.user.tag}\n**ID: **${member.id}\n**MemberCount: **${member.guild.memberCount}`)
    .setThumbnail(member.user.displayAvatarURL)
    modlogs.send(botembed);
}
