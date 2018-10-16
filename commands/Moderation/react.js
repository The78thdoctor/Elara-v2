const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "react",
            memberName: "react",
            aliases: [`reactlast`],
            examples: [`${client.commandPrefix}react <emoji ID/Name Here>`],
            description: "Reacts to the last message you have sent.\n[**If the bot isn't in the server that emoji comes from then it will give you the `I can't use this emoji!` error.**]",
            clientPermissions: [`MANAGE_MESSAGES`, `ADD_REACTIONS`, `USE_EXTERNAL_EMOJIS`],
            userPermissions: ["MANAGE_MESSAGES"],
            group: "moderation",
            args: [
                {
                    key: 'EmojiID',
                    prompt: `What emoji do you want me to react with? [\`${client.commandPrefix}react <emoji ID/Name here>\`]`,
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { EmojiID }) {

      try{ 
          let r = this.client.emojis.get(EmojiID) || this.client.emojis.find(c => c.name === EmojiID)
          if(!r) return message.say(`I can't use that emoji! \`${this.client.commandPrefix}react <emoji ID/Name>\``)
         message.channel.fetchMessages({ limit: 2 })
            .then(messages => {
                let msg = messages.filter(c => c.author.id === message.author.id)
                msg.map(c => c.react(r))
                message.delete().catch()
            })
        } catch(e) {
            message.say(`I can't use that emoji! \`${this.client.commandPrefix}react <emoji ID/Name>\``)
        }
    }
}
