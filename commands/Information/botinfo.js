const { Command } = require('../../util/Commando');
const Discord = require('discord.js');
const config = require('../../config.js')
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
            .addField(`❯ Tag`, `\`${this.client.user}\``, true)
            .addField(`❯ ID`, this.client.user.id, true)
            .addField(`❯ Discriminator`, `#${this.client.user.discriminator}`, true)
            .addField(`❯ Bot Owner(s)`, this.client.owners, true)
            .addField("❯ Created On", "**June 9th 2018**", true)
            .addField("❯ Invite Link", `[Click Here](https://discordapp.com/oauth2/authorize?client_id=${this.client.user.id}&permissions=8&scope=bot)`, true)
            .addField(`❯ My Support Server`, `[Click Here](${this.client.options.invite})`, true)
            .addField(`❯ Discord Bots.org Link`, `[Click Here](https://discordbots.org/bot/455166272339181589)`, true)
            .addField(`❯ Upvote the bot`, `[Vote Here!](https://discordbots.org/bot/455166272339181589/vote)`, true)
            .addField(`❯ Support The Bot Here!`, `[Patreon](https://www.patreon.com/Elara)`, true)
            .addField(`❯ Servers`, `Do \`${this.client.commandPrefix}servers\` to see the full list.`, true)
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL);
        message.say(botembed)
    }
}
