const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "nitroservers",
            memberName: "nitroservers",
            aliases: [`nitro`],
            examples: [`${client.commandPrefix}nitroservers`],
            description: "Gives you a list of Nitro emoji servers",
            group: "information"
        })
    }
    async run(message) {
        let list1 = [
            "SUPERCHIEFYT's Discord [Click Here](https://discord.gg/hgsM86w)", 
            "Lackacord: [Click Here](https://discord.gg/lackadaisy)", 
            "Kappa [Click Here](https://discord.gg/6bhZqZx)",
            "AdmiralBahroo (Nitro) [Click Here](https://discord.gg/cBnqxyG)",
            "LoL Animated Emotes [Click Here](https://discord.gg/ZK8wxQG)",
            "Word Art Animated Emotes [Click Here](https://discord.gg/sAMRy5R)",
            "Skype Emoticons [Click Here](https://discord.gg/CRjxaGN)",
            "Parrot [Click Here](https://discord.gg/qTfQP6Y)",
            "Link Emojis 1 & 2 [Click Here](https://discord.gg/SUXymVk) [Click Here](https://discord.gg/ubCMzeh)",
            "Yahoo! Messenger Emoticons [Click Here](https://discord.gg/7hfQhZD)",
            "iOS Emojis [Click Here](https://discord.me/ios)",
            "Nitro Dragon 1-3 [Click Here](https://discord.gg/h2ySHh6) [Click Here](https://discord.gg/A36HAJk) [Click Here](https://discord.gg/W2kn7Gg)",
            "Nitro Turtle Emotes [Click Here](https://discord.gg/KPAbMYR)",
            "Feenix Gun Warehouse [Click Here](https://discord.gg/r9RWNfg)",
            "Bears Of The Polar Variety [Nitro] [Click Here](https://discord.gg/QS8CGp5)",
        ]
        let list2 = [
            "OWL Emote Server [Click Here](https://discord.gg/JA2UfZz)",
            "Shinobu's Fanclub [Click Here](https://discord.gg/UdntTu)",
            "Kakegurui Emotes [Click Here](https://discord.gg/Ttk7ryS)",
            "The Super Mario Bros. Super Discord! [Click Here](https://discord.gg/nKn4bht)",
            "Kanna Land [Click Here](https://discord.gg/UksqYSJ)",
            "Nitro Marvel Emotes 1-3 [Click Here](https://discord.gg/wpFbuE9) [Click Here](https://discord.gg/cBbyQRs) [Click Here](https://discord.gg/qg3JxhR)",
            "Om Nom Emojis [Click Here](https://discord.gg/czkntHn)",
            "Kanna City [Click Here](https://discord.gg/SgtXteM)",
            "The Brass Knights [Click Here](https://discord.gg/P3PdnyP)",
            "Gilby's Orange Emoji Server [Click Here](https://discord.gg/uzzfURr)",
            "Club Penguin Emotes (Nitro) [Click Here](https://discord.gg/b3yXvTn)",
            "Spongemoji [Click Here](https://discord.gg/wTpEZSW)",
            "Pepo Emoji Server [Click Here](https://discord.gg/zSvH8MJ)",
            "NITRO [Click Here](https://discord.gg/wjfGmG3)",
            "Squid Girl Emotes [Click Here](https://discord.gg/aAJ7bRn)",
        ]
        let list3 = [
            "Nitro Reach Blobs [Click Here](https://discord.gg/hhwZWNw)",
            "Nitro Pusheen Blobs [Click Here](https://discord.gg/ys8FKMj)",
            "Nitro Roo Blobs [Click Here](https://discord.gg/nBXNqzZ)",
            "Nitro Monkey Blobs [Click Here](https://discord.gg/pR2fUTs)",
            "Nitro Blob Bears [Click Here](https://discord.gg/4USaSzA)",
            "Nitro Blob Hub [Click Here](https://discord.gg/yATKMY8)",
            "Pig Blobs [Click Here](https://discord.gg/KaqCjhq)",
            "Tiger Blobs [Click Here](https://discord.gg/p7cybSH)",
            "Blobsciles 1-2 [Click Here](https://discord.gg/EtDfXgR) [Click Here](https://discord.gg/HPvRrue)",
            "Peanuts Blobs [Click Here](https://discord.gg/uGhYzGe)",
            "Badtz-Maru Blobs [Click Here](https://discord.gg/bPmpk3u)",
            "Pekkle Blobs [Click Here](https://discord.gg/YtKKyhz)",
            "Hello Kitty Blobs [Click Here](https://discord.gg/PNXMpj3)",
            "Dom's Mono Blobs [Click Here](https://discord.gg/RjcJhkT)",
            "Satania Emotes [Nitro] [Click Here](https://discord.gg/dJP2a6B)",
        ]
        let list4 = [
            "Mafu & Sora Dungeon [Click Here](https://discord.gg/DcPqhVe)",
            "Block Emotes (NITRO) [Click Here](https://discord.gg/MupeCRX)",
            "menhera-chan emotes [Click Here](https://discord.gg/2JpaKFQ)",
            "Koroji [Click Here](https://discord.gg/KnXbnh7)",
            "Kingdom of derpy cats [Click Here](https://discord.gg/4katZY4)",
            "OK_HAND [Click Here](https://discord.gg/MAxArQe)",
            "Lost In Potato [Click Here](https://discord.gg/mpBT24E)",
            "Hamtaro & Bijou [Click Here](https://discord.gg/BxEcTQg)",
            "Google Hearts 🧡 [Click Here](https://discord.gg/fES8MnV)",
            "Futurama Emotes [Click Here](https://discord.gg/7uJHEcJ)",
            "Splatoon Blobs Collection [Click Here](https://discord.gg/KwekejQ)",
            "Pokemon Emotes [Click Here](https://discord.gg/G7zkRAv)",
            "SnooEmotes [Click Here](https://discord.gg/4nVjmxW)",
            "Pepo Nitro Only [Click Here](https://discord.gg/NEVk3gF)",
            "Neon Blob Collection [Click Here](https://discord.gg/syVKsvj)",
        ]
        let list5 = [
            "birb [Click Here](https://discord.gg/gZqg8rW)",
            "Winnie The Pooh's Empire [Click Here](https://discord.gg/3eVzRMp)",
            "Ariana’s Nitro Lounge [Click Here](https://discord.gg/uCrq56T)",
            "Timo's aniblobs [Click Here](https://discord.gg/EumAgH9)",
            "Meowmoji [Click Here](https://discord.gg/jvzRCSD)",
            "Peepo-Nitro Only [Click Here](https://discord.gg/vDXnrc3)",
            "Anime 1 (Nitro) [Click Here](https://discord.gg/ru94Zf9)",
            "Hands [Click Here](https://discord.gg/tanuvWj)",
            "Nitro: Discord UI [Click Here](https://discord.gg/EK3nZhC)",
            "Cat emote server [Click Here](https://discord.gg/pdkaJaH)",
            "TurtleLuv-Emotes [Click Here](https://discord.gg/GxSKUXU)",
            "Gilby's Blue Emoji Server [Click Here](https://discord.gg/GmwG3Vz)",
            "Elias Emojis Squad [Click Here](https://discord.gg/mD5nwAc)",
            "Eyes [Click Here](https://discord.gg/VxmuJAH)",
        ]
        let list6 = [
            "Party Parrot [Click Here](https://discord.gg/j2uKrjk)",
            "Pusheen [Click Here](https://discord.gg/JQXFYmv)",
            "Picard [Click Here](https://discord.gg/8arB6Av)",
            "Intense Cat Gif [Click Here](https://discord.gg/Jwcwzq6)",
            "Messenger Emoji [Click Here](https://discord.gg/rS8jkRY)",
            "Dancing Letters - Red [Click Here](https://discord.gg/tcCQpwU)",
            "Pepsimon [Click Here](https://discord.gg/fgCexSU)",
            "Test Emoji Server [Click Here](https://discord.gg/aphe2JS)",
            "Party Emotes [Click Here](https://discord.gg/y2aupZD)",
            "Blobs [Click Here](https://discord.gg/2aRyMR6)",
            "padoru [Click Here](https://discord.gg/BUVYhP3)",
            "Discord ASDAS [Click Here](http://discord.gg/nFYuBSG)",
            "B l u e 💙 [Click Here](https://discord.gg/ymXB3CW)",
            "emptixo's server (nitro emojis) [Click Here](https://discord.gg/JUcqmfP)",
            "Franxx Emote Server [Click Here](https://discord.gg/YUcJ6sy)",
        ]
        let list7 = [
            "Dancing Letters - Rainbow [Click Here](https://discord.gg/eCmuz4Z)",
            "yookneecorn emotes [Click Here](https://discord.gg/kdDYVvG)",
            "Better Blob Cat 1 [Click Here](https://discord.gg/Ak36gX4)",
            "Better Blob Cat 2 [Click Here](https://discord.gg/9GVHcaV)",
            "Blob Emoji [Click Here](https://discord.gg/2GMVNzQ)",
            "Melancholy [Click Here](https://discord.gg/EXV2SKC)",
            "Blobs With Googly Eyes [Click Here](https://discord.gg/qfQr2Aj)",
            "Nitro Keycap Blobs [Click Here](https://discord.gg/EVafubh)",
        ]
        let list8 = [
            "Discord Staff Blobs [Click Here](https://discord.gg/PQW85fX)",
            "Twitch Emotes 1-4 [Click Here](https://discord.gg/KNMMS2p) [Click Here](https://discord.gg/PDwFP4V) [Click Here](https://discord.gg/8745TRg) [Click Here](https://discord.gg/pf8wmvw)",
            "Twitch Turbo Emotes 1-2  [Click Here](https://discord.gg/4GGWawS) [Click Here](https://discord.gg/pK5Ta6v)",
            "Twitch Robot Emotes [Click Here](https://discord.gg/DA46d2j)",
            "Discord Emoji & Servers [Click Here](https://discord.gg/2qyyFZM)",
            "Neon Nitro Blobs 1-3 [Click Here](https://discord.gg/syVKsvj) [Click Here](https://discord.gg/mqeXUAX) [Click Here](https://discord.gg/z696gQN)",
            "Global Emoji Hunters [Click Here](https://discord.gg/GYBtYeg)",
        ]
        let list9 = [
            "Slippy's Dream World 1 [Click Here](https://discord.gg/sa5kSUy)",
            "Slippy's Dream World 2 [Click Here](https://discord.gg/mKTjYw2)",
            "Slippy's Dream World 3 [Click Here](https://discord.gg/5CgvPWa)",
            "Slippy's Dream World 4 [Click Here](https://discord.gg/DGQw8RR)",
            "Slippy's Dream World 5 [Click Here](https://discord.gg/cC5VD6d)",
            "Slippy's Dream World 6 [Click Here](https://discord.gg/M9KXWQs)",
            "Slippy's Dream World 7 [Click Here](https://discord.gg/5r23Ke9)",
        ]
        let list10 = [
            "Slippy's Dream World 8 [Click Here](https://discord.gg/XDuqcJd)",
            "Slippy's Dream World 9 [Click Here](https://discord.gg/Z2wzxUk)",
            "Slippy's Dream World 10 [Click Here](https://discord.gg/TbhqAxv)",
            "Slippy's Dream World 11 [Click Here](https://discord.gg/Da8vPVX)",
            "Slippy's Dream World 12 [Click Here](https://discord.gg/SdmBPNB)",
            "Slippy's Dream World 13 [Click Here](https://discord.gg/H5JXgSS)",
            "Slippy's Dream World 14 [Click Here](https://discord.gg/KwgX2QG)",
            "Slippy's Dream World 15 [Click Here](https://discord.gg/NKexPRD)",
        ]
        let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setAuthor(`132 Total Servers Listed.`, this.client.user.displayAvatarURL)
        .setTitle(`Nitro Servers [1]`)
        .setDescription(`**__DISCLAIMER: IF YOU DO NOT HAVE DISCORD NITRO YOU WILL NOT BE ABLE TO USE THESE EMOJIS!__**\n**If the links are expired join the support server and tell ${this.client.owners[0].tag} to update that invite**`)
        .addField(`Emoji List [1]`, list1)
        .addField(`Emoji List [2]`, list2)
        .addField(`Emoji List [3]`, list3)
        .addField(`Emoji List [4]`, list4)
        .addField(`Emoji List [5]`, list5)
        .addField(`Emoji List [6]`, list6)
        message.say(embed).then(m => {
        let embed2 = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Nitro Servers [2]`)
            .addField(`Emoji List [7]`, list7)
            .addField(`Emoji List [8]`, list8)
            .addField(`Emoji List [9]`, list9)
            .addField(`Emoji List [10]`, list10)
        message.say(embed2)
        });
    }
}
