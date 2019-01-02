const {Command} = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "ban",
            memberName: "ban",
            aliases: [],
            examples: [`${client.commandPrefix}ban @user <reason here>`],
            description: "Bans the user.",
            group: "moderation",
            guildOnly: true,
            userPermissions: ["BAN_MEMBERS"],
            args: [
                {
                    key: "user", 
                    prompt: "what user do you want me to ban?",
                    type: "user"
                },
                {
                    key: 'reason',
                    prompt: 'What is the reason for this ban?',
                    type: 'string'
                }
            ]
        })
    }
    async run(message, {user, reason }) {
          try{
    if(message.guild.members.get(user.id)) {
    if(user.id === this.client.user.id) return message.say(`I can't ban myself.`);
    if(message.guild.members.get(user.id).hasPermission("MANAGE_MESSAGES")) return message.say(`I can't ban a Mod/Admin.`);
    if(user.id === message.guild.ownerID) return message.say(`I can't ban the server owner.`);
    let mod = message.author;

message.guild.ban(user.id, { reason: `${reason} | Banned By: ${mod.tag}` }).then(async () => {
    await message.say(`**${user.tag}** has been banned.`)
})
}else {
if (user.id === this.client.user.id) return message.say(`I can't ban myself.`);
if (user.id === message.guild.ownerID) return message.say(`I can't ban the server owner.`);
let mod = message.author;
message.guild.ban(user.id, { reason: `${reason} | Banned By: ${mod.tag}` }).then(async () => {
    await message.say(`**${user.tag}** has been banned.`)
})
}
} catch (e) {
    message.channel.send(`ERROR:\n${e}`)
}
    }
}
