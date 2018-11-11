const Discord = require('discord.js');
module.exports.run = async (bot, message) => {
   if(message.guild.id === "273525914187333637"){
   if(message.channel.name.startsWith("youtuber-")){
    if(message.author.bot) return;
    if(message.author.id === bot.user.id) return;
    message.delete().catch()
    if(message.embeds.map(c =>c).length === 0) return;
    let embed = new Discord.RichEmbed()
    .setColor(`#FF0000`)
    .setTitle(message.embeds.map(c => c.title))
    .setAuthor(`Youtube`)
    .setURL(message.embeds.map(c => c.url).join(' '))
    .setDescription(`${message.embeds.map(c => c.description)}`)
    .setThumbnail(message.embeds.map(c => c.thumbnail.url).join(' '))

    message.channel.send(`${message.embeds.map(c => c.title)} - <${message.embeds.map(c => c.url).join(' ')}>`, {embed}).then(async () => {
        await message.channel.send(`-----------------------------------------------------------------------------------------------------------------------------------------------------------------`)
    })
}else{
    return;
}
}
   
   
    if (message.channel.name === "server-suggestions" || message.channel.name === "📝server-suggestions📝" || message.channel.name === "suggestions" || message.channel.name === "suggestion" || message.channel.name === "server-suggestion" || message.channel.name === "📝suggestions" || message.channel.name === "📝suggestions📝" || message.channel.name === "suggestions📝") {
        if (message.author.id === "288450828837322764" || message.author.id === "248947473161256972") return;
            message.react("✅")
            message.react("❌")
    }
    if (message.channel.id === "473574603374067732") {
        message.member.addRole(`474016263883194373`)
        message.delete().catch()
        let riddleanswers = message.guild.channels.find(c => c.name === "elara-log") || message.guild.channels.find(c => c.name === "🤖elara-log")
        let riddleembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setAuthor(`${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
            .setFooter(`Riddle submitted at`)
            .setTitle(`Riddle submitted`)
            .setDescription(`${message.content}`)
        riddleanswers.send(riddleembed)
        let dmembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Your riddle answer has been submitted\nand Have been given the **Riddle Submitted** Role,\nWhich means you can't post another answer until next week`)
            .setTimestamp()
            .setFooter(`Answer Submitted At`)
            .setAuthor(message.author.tag, message.author.avatarURL)
        message.author.send(dmembed);
    
        }
    }
