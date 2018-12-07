const { CommandoClient } = require('./util/Commando');
const config = require('./config.js');
const path = require('path');
const fs = require('fs');
const Discord = require('discord.js');
const util = require("./util/util.js");
const DBL = require("dblapi.js");
const bot = new CommandoClient({
    commandPrefix: "e!",
    unknownCommandResponse: false,
    owner: ['288450828837322764', "391529339214364674", "440810964061913119"],
    invite: "https://discord.gg/qafHJ63",
    autoReconnect: true,
    commandEditableDuration: 1000000,
     fetchAllMembers: true
});
const dbl = new DBL(config.discordbots, bot);
    dbl.on('posted', () => {
    console.log('Server count posted!');
    });
    dbl.on('error', e => {
    console.log(`Oops! ${e}`);
    })
    setInterval(() => {
        dbl.postStats(bot.guilds.size, bot.shards.id, bot.shards.total);
    }, 3600000);
bot.config = config;
bot.util = util;
fs.readdir("./events/", (err, files) => {
    if (err) {
        let embed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setDescription(`${err}`)
        bot.channels.get(config.errorchannel).send(embed)
    }
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
});
process.on('unhandledRejection', error => {
    console.error(`ERROR: \n${error}`);
    let errorembed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setTitle(`ERROR`)
        .setDescription(error.stack)
    bot.channels.get(config.errorchannel).send(errorembed)
});
bot.registry
    .registerDefaultTypes()
    .registerGroups([
        ['information', 'Information Commands'],
        ["fun", "Fun Commands"],
        ["botowner", "Bot Owner Commands"],
        ["moderation", "Moderation Commands"],
        ["botowner/myservercrap", "Bot Owner/MyServerStuff"],
        ["imagecommands", "Image Commands"],
        ["special", "Special Commands"]
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false,
        prefix: false,
        ping: false,
        eval_: false,
        commandState: true
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));
bot.login(config.token);
