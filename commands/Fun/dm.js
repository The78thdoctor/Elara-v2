const { Command } = require('../../util/Commando');
const {sreact, semoji, nemoji, nreact, startTyping, stopTyping} = require('../../util/util.js');
module.exports = class DmCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'fun',
            memberName: 'dm',
            description: 'Sends a message to the user you mention.',
            aliases: ["pm"],
            examples: [`${client.commandPrefix}dm @User/userid/username Hi there!`],
            guildOnly: true,
            userPermissions: ["MANAGE_MESSAGES"],
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to send the DM to?',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string'
                }
            ]
        });
    }

  async  run(msg, { user, content }) {
      if(user !== user.bot) return msg.say(`${nemoji} I can't dm other bots ${nemoji}`)
      let embed = new Discord.RichEmbed()
          .setColor(`RANDOM`)
          .setDescription(content)
          .setFooter(`Message from ${msg.author.tag}`, msg.author.displayAvatarURL)
          .setTimestamp()
          
      user.send(embed).then(m => {
           msg.react(sreact)
           msg.say(`${semoji} ${msg.author} Sent the message to ${user.tag}`).then(m => {m.delete(10000).catch()})
      }).catch(error => {
          msg.react(nreact)
        msg.say(`${nemoji} I can't send ${user.tag} a dm, The person has blocked me or doesn't allow dms from others.`)
  })
    }
};
