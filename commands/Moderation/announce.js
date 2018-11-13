const { Command } = require('../../util/Commando');
const Discord = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'announce',
            group: 'moderation',
            memberName: 'announce',
            description: 'Sends a message to the channel',
            aliases: ["embed"],
            examples: [`${client.commandPrefix}announce #channel Hi there!`],
            guildOnly: true,
            userPermissions: ["MANAGE_MESSAGES"],
            args: [
                {
                    key: "channel",
                    prompt: "What channel do you want me to post the announcement to?",
                    type: "channel"
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string'
                }
            ]
        });
    }

    async  run(msg, {channel, content }) {
        let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(content)
        channel.send(embed)
        msg.delete().catch()
    }
};
