const Discord = require('discord.js');
module.exports.run = (bot) => {
    console.log(`${bot.user.username} Has Been Disconnected/Restarted. At: ${new Date()}`);
    bot.owners[0].send(`${bot.user} Has Been Restarted.`)
    bot.owners[1].send(`${bot.user} Has Been Restarted.`)
    let embed1 = new Discord.RichEmbed()
        .setColor(`#FF0000`)
        .setTimestamp()
        .setDescription(`${bot.user} Disconnected`)
    bot.channels.get("499410386492063764").send(embed1)
}
