const Discord = require('discord.js');
const DBL = require("dblapi.js");
module.exports.run = (client) => {
    const dbl = new DBL(client.config.discordbots, client);
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
        let embed2 = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setAuthor(client.user.tag, client.user.displayAvatarURL)
    .setTimestamp()
    .setTitle(`Bot Successfully Connected!`)
    .addField(`Information`,`\`\`\`ASCIIDOC\n= Bot Account: =\n[${client.user.tag}]\n= Bot ID: =\n[${client.user.id}]\n= Bot Prefix: =\n[${client.commandPrefix}]\n= Server Count: =\n[${client.guilds.size}]\n= Emoji Count: =\n[${client.emojis.size}]\n= Channel Count: =\n[${client.channels.size}]\n= User Count: =\n[${client.users.size}]\`\`\``)
    .setFooter(`Connected to Discord Websocket At`)
    client.channels.get(client.config.logchannel).send(embed2)
}
