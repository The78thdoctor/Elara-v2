const { Command } = require('../../util/Commando');
const Discord = require('discord.js');
const config = require('../../config.js')
const moment = require('moment')
require('moment-duration-format')
module.exports = class BotinfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: "botinfo",
            group: "information",
            memberName: "botinfo",
            aliases: [`info`, `binfo`],
            description: "Gives you the bots information",
            examples: [`${client.commandPrefix}botinfo`]
        })

    }
    async run (message){
        let botembed = new Discord.RichEmbed()
            .setDescription(`[Bot Information](${this.client.options.invite})`)
            .setColor(`RANDOM`)
            .setThumbnail(this.client.user.displayAvatarURL)
            .addField("❯ Prefixes", `${this.client.commandPrefix}, ${this.client.user}`)
            .addField("❯ Mention", this.client.user, true)
            .addField(`❯ Name`, this.client.user.username, true)
            .addBlankField(false)
            .addField(`❯ Tag`, `\`${this.client.user}\``, true)
            .addField(`❯ ID`, `**${this.client.user.id}**`, true)
            .addField(`❯ Discriminator`, `**#${this.client.user.discriminator}**`, true)
            .addField("❯ Created On", `**${moment(this.client.user.createdAt).format('MMMM Do YYYY')}**`, true)
            .addBlankField(false)
            .addField(`❯ Bot Owner(s)`, this.client.owners, true)
            .addField(`❯ Links`, `Bot Invite: [Click Here](https://discordapp.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot)\nSupport Server: [Click Here](${this.client.options.invite})\nDBL: [Click Here](https://discordbots.org/bot/455166272339181589)\nUpvote: [Vote Here!](https://discordbots.org/bot/455166272339181589/vote)`, true)
            .addField(`❯ Servers`, `Do \`${this.client.commandPrefix}servers\` to see the server list`)
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL);
        message.say(botembed)
    }
}
