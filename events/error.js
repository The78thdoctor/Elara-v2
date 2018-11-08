const Discord = require('discord.js');
const config = require('../config.js');
module.exports.run = (client, Error) => {
    console.log(`ERROR\n${Error}`)
    let error2embed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setTitle(`ERROR`)
        .setDescription(Error)
    client.channels.get(client.config.logchannel).send(error2embed)
}
