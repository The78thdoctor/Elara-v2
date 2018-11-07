const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class RUSERCommand extends Command {
    constructor(client) {
        super(client, {
            name: "randomuser",
            aliases: ["ruser"],
            group: "information",
            examples: [`${client.commandPrefix}ruser\n${client.commandPrefix}ruser <role name here>`],
            description: "Gets a random user from everyone in the server or from a certain role",
            memberName: "randomuser",
            guildOnly: true,
            ownerOnly: true,
            args: [
                {
                    key: "role",
                    prompt: "What role do you want me to pick a winner from?",
                    type: "role",
                    default: ""
                }
            ]
        })
    }
    async run (message, {role}) {
        if(role.length !== 0){
        let randomuser = role.members.map(c => c.user);
        let r = Math.floor(Math.random() * randomuser.length);
        let e = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(`Winner: ${randomuser[r]}`)
        message.say(e)    
        }else
        if(role.length === 0){
        let randomuser = message.guild.members.map(c => c.user);
        let r = Math.floor(Math.random() * randomuser.length);
        let e = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(`Winner: ${randomuser[r]}`)
        message.say(e)
        }
    }
}
