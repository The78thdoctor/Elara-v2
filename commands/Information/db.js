const {Command} = require('../../util/Commando');
const {RichEmbed} = require('discord.js');
const superagent = require('superagent');
module.exports = class DBLCommand extends Command{
    constructor(client){
        super(client,{
            name: "dbl",
            memberName: "dbl",
            aliases: ["dbots", "db"],
            group: "information",
            examples: [`${client.commandPrefix}dbl @bot`, `${client.commandPrefix}dbl @user user`, `${client.commandPrefix}dbl <Mention/ID/Name> <Bot/User>`],
            description: "Gets the information on the bot or user.",
            ownerOnly: false,
            guarded: false,
            guildOnly: false,
            args: [
                {
                    key: 'bot',
                    prompt: 'What bot do you want the info on?',
                    type: 'user'
                },
                {
                    key: "type",
                    prompt: "What type do you want to search, `bot` or `user`",
                    type: "string",
                    default: "bot"
                }
            ]
        })
    }
    async run(msg, {bot, type}) {
          if (type.toLowerCase() === "bot") {
            if (bot.bot === false) return message.channel.send(`That isn't a bot!`)
            let { body } = await superagent.get(`https://www.discordbots.org/api/bots/${bot.id}`)
            let owners = body.owners.map(owner => `<@${owner}>`).join('\n');
            let embed = new RichEmbed()
                .setTitle(`Short Description`)
                .setDescription(body.shortdesc)
                .addField(`Bot Info`, `
                **User: **${bot}\n**Tag: **${bot.tag}\n**ID: **${bot.id}`)
                .addField(`Site Info`, `
                **Prefix: **${body.prefix ? body.prefix : "N/A"}
                **Server Count: **${body.server_count ? body.server_count : "N/A"}
                **Shard Count: **${body.shards.length ? body.shards.length : "N/A"}
                **Monthly Upvotes: **${body.monthlyPoints ? body.monthlyPoints : "N/A"}
                **Total Upvotes: **${body.points ? body.points : "N/A"}
                **Library: **${body.lib ? body.lib : "N/A"}
                **Certified Bot: **${body.certifiedBot ? "Yes": "No"}
                **Tags: **${body.tags.length !== 0 ? body.tags.join(', ') : "N/A"}
                **Owners: **${owners ? owners : "None"}
                `, true)
                .addField(`Links`, `
                **Discord Bots List: **[Click Here](https://discordbots.org/bot/${body.id})
                **Invite: **[Click Here](${body.invite})
                **Support Server: ** ${body.support ? `[Click Here](https://discord.gg/${body.support})` : 'None'}
                **Github: **${body.github ? `[Click Here](${body.github})` : 'None'}
                **Website: **${body.website ? `[Click Here](${body.website})` : 'None'}
                `, true)
                .setColor(`RANDOM`)
                .setThumbnail(bot.displayAvatarURL)
                .setAuthor(bot.tag, bot.displayAvatarURL)
            msg.say(embed)
        } else
            if (type.toLowerCase() === "user") {
                if (bot.bot === true) return msg.channel.send(`That is a bot! Not a user!`)
                try {
                    let { body } = await superagent.get(`https://www.discordbots.org/api/users/${bot.id}`)
                    if (!body) return msg.say(`${bot.tag} isn't on <https://www.discordbots.org>`)
                    let e = new RichEmbed()
                        .setColor(`RANDOM`)
                        .setAuthor(bot.tag, bot.displayAvatarURL)
                        .setThumbnail(bot.displayAvatarURL)
                        .setTimestamp()
                        .setTitle(`Information on ${bot.tag}`)
                        .addField(`User Info`, `Name: ${body.username}\nID: ${body.id}\nDiscriminator: #${body.discriminator}\nAvatar: [Click Here](${bot.displayAvatarURL})`)
                        .addField(`Website Info`, `Website Admin: ${body.admin ? "Yes" : "No"}\n Website Moderator: ${body.webMod ? "Yes" : "No"}\nDiscord Moderator: ${body.mod ? "Yes" : "No"}\nCertified Developer: ${body.certifiedDev ? "Yes" : "No"}\nSupporter: ${body.supporter ? "Yes" : "No"}`)
                    if (body.banner !== undefined) { e.setImage(body.banner) }
                    msg.say(e)
                } catch (e) {
                    msg.say(`${bot.tag} isn't on \`discordbots.org\``)
                }
            }
    }
}
