const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527183170433449991")
setInterval(function() {
channel.send(`hiiiiii spam room is gooddd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
