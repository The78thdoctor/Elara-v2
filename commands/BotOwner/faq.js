const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "faq",
            memberName: "faq",
            aliases: [],
            examples: [`${client.commandPrefix}faq`],
            description: "N/A",
            group: "botowner",
            ownerOnly: true
        })
    }
    async run(message) {
        let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor(`#02FFDD`)
        .setTimestamp()
        .setTitle(`FAQ about the Elara Bot(s)`)
        .setDescription(`Q: How do I get the bot to log stuff in my server?\nA: Add a \`modlogs\` channel make sure that Elara has [EMBED LINKS, SEND MESSAGES, READ MESSAGES, ATTACH FILES] permissions in the channel\n\nQ: Can I use another channel for the bot to log in?\nA: Currently no, The bot doesn't support per server configurations[Will maybe add it in the future]\n\nQ: What is ${this.client.users.get("491635097599082497")} for?\nA: ${this.client.users.get("491635097599082497")} is the bot the Dev(s) push updates to before adding it to the main bot.\n\nQ: How do I add the bot to my server?\nA: Elara [Click Here](https://discordapp.com/oauth2/authorize?client_id=455166272339181589&permissions=8&scope=bot)  ${this.client.users.get("491635097599082497")} [CLick Here](https://discordapp.com/oauth2/authorize?client_id=491635097599082497&permissions=8&scope=bot)`)
        message.say(embed)
    }
}
