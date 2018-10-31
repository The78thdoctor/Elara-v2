const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
const perms = require('../../util/perms.json');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "perms",
            memberName: "perms",
            aliases: [`permissions`,`perm`],
            examples: [`${client.commandPrefix}perms or ${client.commandPrefix}perms @user/userID`],
            description: "Gives you all of the permissions you have or another member.",
            group: "information",
            guildOnly: true,
            args: [
                {
                    key: "member",
                    prompt: "What member do you want to see their permissions?",
                    type: "member",
                    default: message => message.member
                }
            ]
        })
    }
    async run(message, {member}) {
        const allowed = Object.entries(member.permissions.serialize()).filter(([perm, allowed]) => allowed).map(([perm]) => `${perms[perm]}`);
        let embed = new Discord.RichEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL)
        .setTitle(`❯\u2000\**Permissions**`)
        .setDescription(allowed ? `${allowed.join("\n")}` : '\u2000\None')
        .setColor(`RANDOM`)
        .setFooter(`Want to see another members permissions? Do ${message.guild._commandPrefix ? message.guild._commandPrefix : this.client.commandPrefix}perms @user/userid`)
        message.say(embed)
    }
}
