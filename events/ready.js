const Discord = require('discord.js');
module.exports.run = (client) => {
    console.log(`
    Bot Account: ${client.user.tag}
    Bot ID: ${client.user.id}
    Server Count: ${client.guilds.size}
    Emoji Count: ${client.emojis.size}
    Channel Count: ${client.channels.size}
    User Count: ${client.users.size}
    `);
    require('../util/playing.js')(client)
    let embed = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setTimestamp()
    .setDescription(`${client.user} Connected`)
    client.channels.get("499410386492063764").send(embed)
}
