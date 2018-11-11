const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "throw",
            memberName: "throw",
            aliases: [],
            examples: [`${client.commandPrefix}throw @user/userid`],
            description: "Throw something at the user",
            group: "fun",
            args: [
                {
                    key: "user",
                    prompt: "What user do you want to throw something at?",
                    type: "user"
                }
            ]
        })
    }
    async run(message, {user}) {
        const throwuser = user
        let replies = [`Banana`,`Bananas`, `Car`, `Truck`, `A Building`,
            `SpongeBob`, 'Patrick', 'Nothing', 'Admins', 'Moderators', 'Staff Members',
            'Black Hole', 'Scams', `Love`, `Hate`, `iPhone`, `Brick`, `Bad Bots`, `Chair`,
            `Lemons`, `Cake`, `Pringles`, `Gummy Bears`, `Bus`, `Train`, `Yourself`,
            `SUPERCHIEFYT`, `VAL`, `SobSyphix`, `Cats`, `Dogs`, `Poop`, `Memes`, `Youtube Streamer`, `Twitch Streamer`,
            `CaittlinandPJ`, `PJ`, `Sirred90`, `Nev`
        ]
        let result = Math.floor((Math.random() * replies.length));
        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Threw **${replies[result]}** at **${throwuser}**`)
        message.channel.send(embed);
    }
}
