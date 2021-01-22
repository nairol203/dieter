require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity(`dir zu`, { type : 'LISTENING' });
})

client.login(process.env.TOKEN)