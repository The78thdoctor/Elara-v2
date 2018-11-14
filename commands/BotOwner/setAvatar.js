const { Command } = require('../../util/Commando'),
Discord = require('discord.js'),
config = require('../../config.js')
module.exports = class SACommand extends Command {
    constructor(client) {
        super(client, {
            name: "setavatar",
            memberName: "setavatar",
            group: "botowner",
            description: "Sets the avatar of the Bots Account",
            aliases: ["sa", "setav"],
            ownerOnly: true,
            args: [
                {
                    key: "url",
                    prompt: "What do you want to be the new avatar profile photo?",
                    type: "string",
                    default: message => message.attachments.first().url
                }
            ]
        })
    }
    async run (message, {url}) {
        let image = url
        this.client.user.setAvatar(image);
        message.react(`476629550797684736`)
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Profile Photo Changed!\n\n **Old Profile Photo --->**\n\n**New Profile Photo**`)
            .setImage(image)
            .setThumbnail(this.client.user.avatarURL)
        logchannel.send(embed)
    }
}
