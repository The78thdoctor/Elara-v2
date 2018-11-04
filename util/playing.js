module.exports = (bot) => {
    bot.user.setActivity(`@${bot.user.username} help`, { type: "STREAMING", url: "https://www.twitch.tv/elarabots_discord" });
    let userssize = bot.users.size;
    let channelsize = bot.channels.size;
    let guildsize = bot.guilds.size;
    var status = [
        `@${bot.user.username} help | Serving: ${guildsize} Servers, ${channelsize} Channels, ${userssize} Users`,
        `@${bot.user.username} help | More Updates Coming Soon!`,
        `@${bot.user.username} help | My Support Server: ${bot.options.invite}`,
        `@${bot.user.username} help | My Website: https://elara.netlify.com/`
    ];
    setInterval(() => {
        let gameval = Math.floor((Math.random() * status.length));
        bot.user.setActivity(`${status[gameval]}`, { type: "STREAMING", url: "https://www.twitch.tv/elarabots_discord" });
    }, 10 * 1000);
};
