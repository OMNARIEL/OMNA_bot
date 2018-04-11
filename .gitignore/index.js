const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("A CHEAT, !help");
    console.log("Le bot OMNARIEL est connecter");
});

bot.login("NDMxNTE2MDUxMzg2MjY5NzA0.Da_30w._CO9agexhsTmHxYPwt6tap9EPXo");
