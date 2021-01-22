require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const chatting = require('./chatting');

client.on('ready', () => {
	client.user.setActivity(`abwesend`, { type : 'LISTENING' });
	console.log(`${client.user.username} is ready!`);
	chatting(client);
});

client.login(process.env.TOKEN);