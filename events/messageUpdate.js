const Discord = require('discord.js');
module.exports.run = (bot, oldMessage, newMessage) => {
    if (oldMessage.channel.type === "dm") return;
    if (newMessage.author.bot) return;
    let modlogs = oldMessage.guild.channels.find(c => c.name === bot.util.modlogs);
    if (!modlogs) return;
    let content = oldMessage.content;
    if (content.length === 0) return;
    let content2 = newMessage.content;
    if (content.length === 0) return;
    if (content === content2) return;
    let length = content.length + content2.length;
  if(length > 2048){
      let embed = new Discord.RichEmbed()
          .setColor(`#FF0000`)
          .setTitle(`Old Message`)
          .setDescription(`${content}`)
          .setAuthor(`Message Updated`, oldMessage.author.displayAvatarURL)
          .addField(`Info`, `**User:** ${oldMessage.author.tag}\n**User ID:** ${oldMessage.author.id}\n**Channel:** ${oldMessage.channel}\n**Channel ID:** ${oldMessage.channel.id}\nNew Message will be down below below :arrow_double_down:`)
      modlogs.send(embed)
      let embed2 = new Discord.RichEmbed()
      .setColor(`#FF0000`)
      .setTitle(`New Message`)
      .setDescription(content2)
      modlogs.send(embed2)
  }else 
  if(length < 2040){
      let embed = new Discord.RichEmbed()
          .setColor(`#FF0000`)
          .setTitle(`Content`)
          .setDescription(`**Old Message: **\n${content}\n\n**New Message: **\n${content2}`)
          .setAuthor(`Message Updated`, oldMessage.author.displayAvatarURL)
          .addField(`Info`, `**User:** ${oldMessage.author.tag}\n**User ID:** ${oldMessage.author.id}\n**Channel:** ${oldMessage.channel}\n**Channel ID:** ${oldMessage.channel.id}`)
      modlogs.send(embed)
  }
}
