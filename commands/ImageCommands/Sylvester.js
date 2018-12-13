const { Command } = require('../../util/Commando'),
    Discord = require('discord.js'),
    {Sylvester} = require('../../util/photos.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "sylvester",
            memberName: "sylvester",
            aliases: ["sly"],
            examples: [`${client.commandPrefix}Sylvester`],
            description: "Posts a Sylvester Cat Photo",
            group: "imagecommands",
            hidden: true
        })
    }
    async run(message) {
        let replies = Sylvester;
        let result = Math.floor((Math.random() * replies.length));
        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription("<a:Dots:426956230582599690> Loading, Please wait..")

        message.channel.send(embed).then(message => {
            embed.setColor("RANDOM")
            embed.setDescription("Here's a Photo of Sylvester :heart:")
            embed.setImage(replies[result])
            embed.setFooter(`Sylvester Photo ${result}/${replies.length}`)
            message.edit(embed)
        })
    }
}
