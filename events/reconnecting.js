const Discord = require('discord.js');
module.exports.run = (bot) => {
    let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTimestamp()
        .setFooter(`Reconnected At`)
        .setDescription(`${bot.user} Has Successfully Reconnected!`)
    console.log(`${bot.user.username} Is Trying To Reconnect! At: ${new Date()}`);
    bot.channels.get('468372950266150916').send(embed);
    bot.owners[0].send(embed)
    require('../util/playing.js')(bot)
        let embed1 = new Discord.RichEmbed()
        .setColor(`YELLOW`)
        .setTimestamp()
        .setDescription(`${bot.user} Reconnecting`)
    bot.channels.get("499410386492063764").send(embed1)
}
