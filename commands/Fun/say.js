const { Command } = require('../../util/Commando');
const Discord = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'moderation',
            memberName: 'say',
            description: 'Sends a message to the channel',
            aliases: ['speak', 'talk'],
            examples: [`${client.commandPrefix}say #channel Hi there!`],
            guildOnly: true,
            userPermissions: ["MANAGE_MESSAGES"],
            args: [
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string'
                }
            ]
        });
    }

    async run(msg, { content }) {
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(content)
        msg.channel.send(embed)
        msg.delete().catch()
    }
};
