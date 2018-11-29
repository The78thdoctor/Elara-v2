const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "nick",
            memberName: "nick",
            aliases: ["nickname"],
            examples: ["e!nick @user <new nickname here>"],
            description: "Nickname the user",
            group: "moderation",
            guildOnly: true,
            userPermissions: ["MANAGE_NICKNAMES"],
            args: [
                {
                    key: "member",
                    prompt: "what member do you want me to change the nickname of?",
                    type: "member"
                },
                {
                    key: 'content',
                    prompt: 'What nickname do you want to set for that member?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, { member, content }) {
    if(member.id === message.guild.owner.id) return message.say(`I Can't change the server owner's nickname!`)
    if(message.guild.me.highestRole.position < member.highestRole.position){
        return message.channel.send(`I ain't high enough to change that members nickname`)
    }
    member.setNickname(content).catch(e =>{
        message.say(`ERROR:\n${e}`)  
    })
}
}
