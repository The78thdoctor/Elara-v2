const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
const fetch = require('node-fetch');
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
           let p = member.presence.game;
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
        const query = new URLSearchParams([['client_id', this.client.config.twitch]]);
        const url = new URL(`https://api.twitch.tv/kraken/channels/${encodeURIComponent(p.url.slice(22))}`);
        url.search = query;

        const body = await fetch(url)
            .then(response => response.json())
            .catch(() => {console.log(`ERROR... Streaming..`) });
        let mature = body.mature ? "Yes": "No",
            partner = body.partner ? "Yes" :"No",
            game = body.game ? body.game : "None",
            status = body.status ? body.status : "None",
            name = body.display_name ? body.display_name : "None",
            errors = "ERROR Fetching the\nData for this channel";
        e.addField(`Streaming`, member.presence.game.name)
        if(body.status === 400){e.addField(`Info`, `I couldn't fetch any data on this streamer`)}
        if(body.display_name !== null&& body.status !== 400) {e.addField(`Display Name`, name, true)}
        e.addField(`URL`, `[Click Here](${member.presence.game.url})`, true)
        if(body.status !== null && body.status !== 400) {e.addField(`Status`, status, true)}
        if(body.game !== null && body.status !== 400) {e.addField(`Game`, game, true)}
        if(body.partner !== null && body.status !== 400) {e.addField(`Partnered`, partner, true)}
        if(body.mature !== null && body.status !== 400){e.addField(`Mature`, mature, true) }
        if (body.followers !== null && body.status !== 400){e.addField(`Follower Count`, body.followers, true) }
        if(body.views!== null && body.status !== 400){e.addField(`View Count`, body.views, true) }
        if(body.logo !== null) {e.setThumbnail(body.logo)}
        if(body.video_banner !== null) {e.setImage(body.video_banner)}
        m.say(e)
    }else
    if(member.presence.game.type === 2) { // Listening
        e.addField(`Listening To`, member.presence.game.name, true)
        if(member.presence.game.assets !== null) {
            e.addField(`Album`, p.assets.largeText, true)
            e.addField(`Artist Name`, member.presence.game.state, true)
            e.addField(`Song Name`, member.presence.game.details, true)
            e.setThumbnail(`https://i.scdn.co/image/${p.assets.largeImage.slice(8)}`)
            e.addField(`Song URL`, `[Click Here](https://open.spotify.com/track/${member.presence.game.syncID})`, true)
        }
        m.say(e)
    }else 
    if(member.presence.game.type === 3){ // Watching
        e.addField(`Watching`, member.presence.game.name)
        m.say(e)
    }
    }
}
