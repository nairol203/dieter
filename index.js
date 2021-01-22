require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity(`dir`, { type : 'LISTENING' });
})

client.login(process.env.TOKEN)