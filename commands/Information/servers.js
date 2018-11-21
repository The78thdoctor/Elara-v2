const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
const request = require('superagent');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "servers",
            memberName: "servers",
            aliases: [],
            examples: [`${client.commandPrefix}servers`],
            description: "Gives you the list of servers the bot is in.",
            group: "information"
        })
    }
    async run(message) {
        let string = '';
        this.client.guilds.forEach(guild => { string += `Name: ${guild.name}\nMemberCount: ${guild.memberCount}\nHumans: ${guild.members.filter(m => !m.user.bot).size}\nBots: ${guild.members.filter(m => m.user.bot).size}` + '\n\n'; })
        let {body} = await request
            .post(`https://paste.lemonmc.com/api/json/create`)
            .send({
                data: `List of servers for ${this.client.user.tag}\n\n${string}`,
                language: 'text',
                private: true,
                title: `Server List [${this.client.guilds.size}]`,
                expire: '2592000'
            }).catch(err => {
                message.channel.send(`ERROR:\n${err}`)
            })
        let link = `https://paste.lemonmc.com/${body.result.id}/${body.result.hash}`
        let e = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL)
        .setDescription(`List of Servers: [Click Here](${link})`)
        .setTimestamp()
        message.channel.send(e)
    }
}
