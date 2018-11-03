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
        .setDescription(`Q: Does Elara have a website?\nA: Yes, Link to the website [Click Here](https://elara.netlify.com)\n\nQ: How do I get the bot to log stuff in my server?\nA: Add a \`modlogs\` channel make sure that Elara has [EMBED LINKS, SEND MESSAGES, READ MESSAGES, ATTACH FILES] permissions in the channel\n\nQ: Can I use another channel for the bot to log in?\nA: Currently no, The bot doesn't support per server configurations[Will maybe add it in the future]\n\nQ: What is ${this.client.users.get("491635097599082497")} for?\nA: ${this.client.users.get("491635097599082497")} is the bot the Dev(s) push updates to before adding it to the main bot.\n\nQ: How do I add the bot to my server?\nA: Elara [Click Here](https://discordapp.com/oauth2/authorize?client_id=455166272339181589&permissions=8&scope=bot)  ${this.client.users.get("491635097599082497")} [CLick Here](https://discordapp.com/oauth2/authorize?client_id=491635097599082497&permissions=8&scope=bot)\n\nQ: What is Elara Dev?\nA: Elara Dev is the Dev(s) Testing bot, This is a Private bot, only in a few servers, Currently you can't add the bot to any server(s)\n\nQ: What is the Invite to this server?\nA: ${this.client.options.invite}\n\nQ: How do I know what has been changed with the bot?\nA: Look in <#499410304417923074> To keep up with all of the changes :wink:`)
        message.say(embed)
    }
}
