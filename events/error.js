const Discord = require('discord.js');
const config = require('../config.js');
module.exports.run = (client, error) => {
    console.log(`ERROR\n${error}`)
    let error2embed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setTitle(`ERROR`)
        .setDescription(error.stack)
    client.channels.get(client.config.logchannel).send(error2embed)
    client.channels.get("499421956584767503").send(error2embed)
}
