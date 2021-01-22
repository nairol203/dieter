require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const chatting = require('./chatting');

client.on('ready', () => {
	client.user.setActivity(`dir`, { type : 'LISTENING' });
	chatting(client)
});

client.login(process.env.TOKEN);