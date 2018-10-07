const { Command } = require('../../util/Commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "dice",
            memberName: "dice",
            aliases: ["diceroll", "roll", "rolldice"],
            examples: [`${client.commandPrefix}dice`],
            description: "Rolls dice",
            group: "fun"
        })
    }
    async run(message) {
        message.say(`:game_die: **${message.author.username}**, you rolled a **${Math.floor(Math.random() * 10) + 1}**!`);
    }
}