const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
let {semoji, nemoji} = require('../../util/util.js');
let request = require('request');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "check",
            memberName: "check",
            aliases: ["linkcheck", "s.l", "spoopylink", "checklink", "checkwebsite"],
            examples: [`${client.commandPrefix}check <Link here>`],
            description: "Checks if the site is safe or not.",
            group: "information",
            args: [{
                key: "content",
                prompt: "What link do you want me to check out?",
                type: "string"
            }]
        })
    }
    async run(message, {content}) {
        const embed = new Discord.RichEmbed()
        .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL)
        .setFooter(`Provided By: Spoopy.link`, "https://boop.page.link/kU6b", `https://spoopy.link`)
        .setTimestamp()

        request("https://spoopy.link/api/" + content, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var srThing = JSON.parse(body);
                if (srThing.chain[0].reasons[0] == "INVALID") {
                    embed.setColor(`#FF0000`)
                    embed.setDescription("That isn't a valid website.");
                    message.channel.send(embed);
                    return;
                }
                var sites = []

                srThing.chain.forEach(link => {
                    if (link.safe == false && link.reasons[0] == "INVALID") {
                        sites = sites += `${link.url.toString() + "\nReasons: " + link.reasons.join(` │ `)}\n`
                    } else if (link.safe == false && link.reasons[0] !== "INVALID") {
                        sites = sites += `${link.url.toString() + "\nReasons: " + link.reasons.join(` │ `)}\n`
                    } else {
                        sites = sites += `${"[" + link.url + "](" + link.url + ") "}\n`
                    }
                });
                embed.addField(`Safe?`, `${srThing.safe ? `${semoji} Safe` : `${nemoji} Unsafe`}`)
                embed.setDescription(sites)
                embed.setColor(`RANDOM`)
            } else {
                console.log(error);
                embed.setDescription("Spoopy.link is currently down right now, Try again later.");
                embed.setColor(`#FF0000`)
            }
            message.channel.send(embed)
        });
            

    }
}
