const {Command} = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class BotCommand extends Command {
    constructor(client) {
        super(client, {
            name: "bots",
            memberName: "bots",
            aliases: [],
            group: "botowner/myservercrap",
            guildOnly: true,
            ownerOnly: true,
            examples: [`${client.commandPrefix}bots`],
            description: "Sends How to get the bots."
        })
    }
    async run(message) {
        let bicon = ("https://cdn.discordapp.com/emojis/405944757869871105.gif?v=1");
        let botembed = new Discord.RichEmbed()
            .setColor("#00ffee")
            .setDescription("!! IMPORTANT !!")
            .addField("Info", "Just a warning what happen's in the Support Bot's Discord Server's this staff and myself have no control over their rule's apply not our's")
            .setThumbnail(bicon)
        let bicon1 = ("https://cdn.discordapp.com/attachments/444028025932349441/444418519287857153/logo_color_light.png");
        let botembed1 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get Auttaja.", "[Click Here](https://bit.ly/2vnU2lH)", true)
            .addField("How To Get To Auttaja's Website", "[Click Here](https://auttaja.io/)", true)
            .addField("Auttaja's Support Discord.", "[Click Here](https://discord.gg/Wb52DJe)", true)
            .setThumbnail(bicon1)
        let bicon2 = ("https://cdn.discordapp.com/avatars/289989751950409728/0f8d5ce21ca10de524f6c33c280f7756.png?size=2048");
        let botembed2 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .setDescription("Just some info this bot only Moderatates Photos and you can't control it besides with the channel permissions in the server.")
            .addField("How To Get Content Moderator.", "[Click Here](https://bit.ly/2HFY3HC)", true)
            .addField("How To Get To Bot's site", "[Click Here](https://bit.ly/2vZCjRE)", true)
            .setThumbnail(bicon2)
        let bicon3 = ("https://cdn.discordapp.com/avatars/418438671486681098/c09c727ded2fa1933ea85c81c128c17d.png?size=2048");
        let botembed3 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("Couchbot's Bot Link", "[Click Here](https://bit.ly/2qHLssi)", true)
            .addField("Couchbot's Bot Commands", "[Click Here](https://bit.ly/2HHkUPQ)", true)
            .addField("Couchbot's Support Discord.", "[Click Here](https://discord.gg/ADRpuJu)", true)
            .addField("How To Get Couchbot", "[Click Here](https://bit.ly/2HyGrfY)", true)
            .setThumbnail(bicon3)
        let bicon4 = ("https://cdn.discordapp.com/avatars/347378090399236096/cdacb7ecadba5177f2fda86128c5175e.png?size=2048");
        let botembed4 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get Dyno.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=161660517914509312&scope=bot%20identify%20guilds&response_type=code&redirect_uri=https://www.dynobot.net/return&permissions=2134207671)", true)
            .addField("How To Get To Dyno's Admin Panel", "[Click Here](https://www.dynobot.net/)", true)
            .addField("Dyno's Support Discord.", "[Click Here](https://discord.gg/Dyno)", true)
            .addField("How To Get Dyno Premium", "[Click Here](https://www.patreon.com/dyno)", true)
            .setThumbnail(bicon4)
        let bicon5 = ("https://cdn.discordapp.com/avatars/298822483060981760/c5f04275e99defe458fc7ebbef0d5e72.png?size=2048");
        let botembed5 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get Logger bot's.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=298822483060981760&scope=bot&permissions=380065)", true)
            .addField("How To Get To Logger bot's Website", "[Click Here](https://whatezlife.com/)", true)
            .addField("Logger bot's Support Discord.", "[Click Here](https://discord.gg/dYmudv3)", true)
            .setThumbnail(bicon5)
        let bicon6 = ("https://cdn.discordapp.com/avatars/159985870458322944/8c7187aa71f15ba271c85bfece9b067e.png?size=2048");
        let botembed6 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get MEE6.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=159985415099514880&scope=bot&permissions=66321471&response_type=code&redirect_uri=https://mee6.xyz/guild-oauth&guild_id=253559266659532801)", true)
            .addField("How To Get To MEE6's Website", "[Click Here](https://mee6.xyz/servers)", true)
            .addField("MEE6's Support Discord.", "[Click Here](https://discord.gg/MEE6)", true)
            .setThumbnail(bicon6)
        let bicon7 = ("https://cdn.discordapp.com/avatars/293587362569519104/1ee1174ab578c31dc4c90dea8350ed3d.png?size=2048");
        let botembed7 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get Novabot.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=293587362569519104&scope=bot&permissions=2146954367)", true)
            .addField("How To Get To Novabot's Admin Panel", "[Click Here](https://discordapp.com/oauth2/authorize?response_type=code&redirect_uri=https%3A%2F%2Fnovabot-gab.herokuapp.com%2Flogin%2Fcallback&scope=identify%20guilds&client_id=293587362569519104)", true)
            .addField("Novabot's Support Discord.", "[Click Here](https://discord.gg/xDcqjCs)", true)
            .setThumbnail(bicon7)
        let bicon8 = ("https://cdn.discordapp.com/attachments/444028025932349441/444418982716506112/2501400.gif");
        let botembed8 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get Rythm.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=235088799074484224&permissions=8&scope=bot&response_type=code&redirect_uri=https://rythmbot.co/thanks)", true)
            .addField("How To Get Rythm 2.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=252128902418268161&permissions=8&scope=bot&response_type=code&redirect_uri=https://rythmbot.co/thanks)", true)
            .addField("How To Get Rythm Canary.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=415062217596076033&permissions=0&scope=bot&response_type=code&redirect_uri=https://rythmbot.co/thanks)", true)
            .addField("How To Get To Rythm's Website", "[Click Here](https://rythmbot.co/)", true)
            .addField("Rythm's Support Discord.", "[Click Here](https://discord.gg/cf3tNMW)", true)
            .setThumbnail(bicon8)
        let bicon9 = ("https://cdn.discordapp.com/avatars/172002275412279296/f5f65755f67ae1dc88d9bb271d0f5bef.png?size=2048");
        let botembed9 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get Tatsumaki.", "[Click Here](https://discordapp.com/oauth2/authorize?&client_id=172002255350792192&scope=bot&permissions=12659727)", true)
            .addField("How To Get To Tatsumaki's Website", "[Click Here](https://tatsumaki.xyz/dashboard)", true)
            .addField("Tatsumaki's Support Discord.", "[Click Here](https://discord.gg/Tatsumaki)", true)
            .setThumbnail(bicon9)
        let bicon10 = ("https://cdn.discordapp.com/avatars/204255221017214977/a1f1318a1127b054bfffdeecaece5f15.png?size=2048");
        let botembed10 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get the bot.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=204255083083333633&scope=bot&permissions=535948311&response_type=code&redirect_uri=https://yagpdb.xyz/manage)", true)
            .addField("How To Get To the Website", "[Click Here](https://yagpdb.xyz/manage)", true)
            .addField("The Bot Support Discord.", "[Click Here](https://discord.gg/GcpyYh3)", true)
            .setThumbnail(bicon10)
             let bicon11 = ("https://cdn.discordapp.com/avatars/455166272339181589/cb04f4cdb9ec2f7c9e92036c0194d000.png?size=2048");
        let botembed11 = new Discord.RichEmbed()
            .setColor("#00ffee")
            .addField("How To Get Elara.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=455166272339181589&permissions=8&scope=bot)", true)
            .addField("How To Get Elara 2.", "[Click Here](https://discordapp.com/oauth2/authorize?client_id=491635097599082497&permissions=8&scope=bot)", true)
            .addField("Elara's Support Discord.", "[Click Here](https://discord.gg/ExpAf64)", true)
            .setThumbnail(bicon11)
        message.channel.send(botembed)
        message.channel.send(botembed1)
        message.channel.send(botembed2)
        message.channel.send(botembed3)
        message.channel.send(botembed4)
        message.channel.send(botembed5)
        message.channel.send(botembed6)
        message.channel.send(botembed7)
        message.channel.send(botembed8)
        message.channel.send(botembed9)
        message.channel.send(botembed10)
        message.channel.send(botembed11)
        message.channel.send(botembed)
        message.delete().catch();
    }
}
