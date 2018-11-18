const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "get",
            memberName: "get",
            aliases: [`getuser`],
            examples: [`${client.commandPrefix}get @user/userid/username`],
            description: "Bot Owner Command.",
            group: "botowner",
            ownerOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'What user do you want me to check out?',
                    type: 'user'
                }
            ]
        })
    }
    async run(msg, { user }) {
        let server = this.client.guilds.filter(c => c.members.get(user.id));
        let e = new Discord.RichEmbed()
            .setAuthor(`Information on ${user.tag}`, user.displayAvatarURL)
            .setColor(`RANDOM`)
            .setThumbnail(user.displayAvatarURL)
            .setTimestamp()
            .addField(`Username`, user.username, true)
            .addField(`User ID`, user.id, true)
        if(this.client.owners.map(c => c.id).includes(user.id)){
            e.addField(`Bot Owner`, `Hi Boss <:SmileyHearts:485361754633797654>`, true)
        }
        if(server.size > 1) {
            e.addField(`Mutual Servers Count`, server.size, true)
            e.setTitle(`Mutual Serevers`)
            e.setDescription(server.map(c => `**Guild: **[${c.name}]\n**ID: **(${c.id})`), false)
        }else{
            e.addField(`Mutual Server Count`, `0`, true)
            e.addField(`Mutual Servers`, `None`, true)
        }
        msg.say(e)
    }
}
