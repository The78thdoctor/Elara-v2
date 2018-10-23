const Discord = require('discord.js');
module.exports.run = async (bot) => {
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setFooter(`Reconnected At`)
        .setDescription(`${bot.user} Has Successfully Reconnected!`)
    console.log(`${bot.user.username} Is Trying To Reconnect! At: ${new Date()}`);
    bot.channels.get(bot.config.logchannel).send(embed);
    bot.owners[0].send(embed)
    require('../util/playing.js')(bot)
        let embed1 = new Discord.RichEmbed()
        .setColor(`#F2FF02`)
        .setTimestamp()
        .setDescription(`${bot.user} Reconnecting`)
    bot.channels.get("499410386492063764").send(embed1).then(msg => {
    let embed2 = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setTimestamp()
    .setDescription(`${bot.user} Connected`)
   msg.channel.send(embed2)
    })
    
}
