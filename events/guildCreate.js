const Discord = require('discord.js');
const {servers} = require('../util/serverbl.js');
module.exports.run = (bot, guild) => {
     function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
    let embed = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setDescription(`${guild.name}**[\`[${guild.id}]\`](${guild.iconURL ? guild.iconURL : "http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png"})**\nServer Created: **${guild.createdAt.toString().substr(0, 15)},\n${checkDays(guild.createdAt)}**\nWe now have **${bot.guilds.size}** Servers`)
    .setAuthor(`Server Joined`, guild.iconURL ? guild.iconURL : "http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
    .setTimestamp()
    bot.channels.get("499410445082427412").send(embed)
    require('../util/playing')(bot)
    let serverSize = guild.memberCount;
    let botCount = guild.members.filter(m => m.user.bot).size;
    let humanCount = serverSize - botCount;
    let verifLevels = ["None", "Low\nmust have verified\nemail on account", "Medium - must be registered on Discord for longer than 5 minutes", "High -  (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes", "Very High - ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"];
    let region = {
        "brazil": "Brazil",
        "eu-central": "Central Europe",
        "singapore": "Singapore",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. East",
        "us-south": "U.S. South",
        "us-west": "U.S. West",
        "eu-west": "Western Europe",
        "vip-us-east": "VIP U.S. East",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };
    const newserverembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(`Owner: ${guild.owner.user.tag}`, guild.owner.user.displayAvatarURL)
        .setFooter(`Guild Name: ${guild.name} ID: ${guild.id}`, guild.iconURL)
        .setThumbnail(guild.iconURL ? guild.iconURL : guild.owner.user.displayAvatarURL)
        .setTimestamp()
        .setTitle(`Server Joined`)
        .addField(`Server Name`, guild.name, true)
        .addField(`Server ID`, guild.id, true)
        .addField(`Server Owner`, guild.owner.user.tag, true)
        .addField(`Server Owner ID`, guild.ownerID, true)
        .addField(`Server Region`, region[guild.region], true)
        .addField(`Verification Level`, verifLevels[guild.verificationLevel], true)
        .addField(`Total Members`, serverSize, true)
        .addField(`Total Bots`, botCount, true)
        .addField(`Total Humans`, humanCount, true)
        .addField(`Emoji Count`, guild.emojis.size, true)
        .addField(`Role Count`, guild.roles.size, true)
        .addField(`Channel Count`, guild.channels.size, true)
        .addField(`Large?`, guild.large ? "Yes" : "No", true)
        .addField(`Server Created At`, guild.createdAt)
    bot.channels.get('468372950266150916').send(newserverembed);
    bot.users.get('288450828837322764').send(newserverembed)
    setTimeout(async () => {
    if (servers.includes(guild.id)) return await guild.leave();
    }, 9000)
}
