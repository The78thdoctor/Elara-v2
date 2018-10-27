const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "playingstatus",
            memberName: "playingstatus",
            aliases: [`ps`],
            examples: [`${client.commandPrefix}playingstatus @user`],
            description: "Shows the playing status of you or the member id or mention you give.",
            group: "information",
            guildOnly: true,
            args: [
                {
                    key: "member",
                    prompt: "What member do you want to see their playing status?",
                    type: "member",
                    default: message => message.member
                }
            ]
        })
    }
    async run(m, { member }) {
        let e = new Discord.RichEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL)
    .setTitle(`${member.user.tag}'s Playing Status`)
    .setColor(`RANDOM`)
    .addField(`Status`, member.presence.status.toUpperCase())
    if(member.presence.game === null){ // Playing Nothing...
        e.addField(`Game`, `None`)
        m.say(e)
    }else
    if(member.presence.game.type === 0) { // Playing
        e.addField(`Playing`, member.presence.game.name)
        m.say(e)
    }else
    if (member.presence.game.type === 1) { // Streaming
        e.addField(`Streaming`, member.presence.game.name)
        e.addField(`URL`, member.presence.game.url)
        m.say(e)
    }else
    if(member.presence.game.type === 2) { // Listening
        e.addField(`Listening To`, member.presence.game.name, true)
        if(member.presence.game.assets !== null) {
            e.addField(`Artist Name`, member.presence.game.state, true)
            e.addField(`Song Name`, member.presence.game.details, true)
            e.addField(`Song URL`, `https://open.spotify.com/track/${member.presence.game.syncID}`)
        }
        m.say(e)
    }else 
    if(member.presence.game.type === 3){ // Watching
        e.addField(`Watching`, member.presence.game.name)
        m.say(e)
    }
    }
}
