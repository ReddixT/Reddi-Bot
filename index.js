const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const token = require('./token.json');
var prefix = config.prefix;

const fs = require('fs');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content);
    var obj = JSON.parse(JSON.stringify(config));
    if (message.content === prefix + 'ping') {
        message.channel.send('pong');
    }
    if (message.content.startsWith(prefix + "prefix")) {
        const regex = /(?<=prefix ).*$/gm;     
        prefix = message.content.match(regex);
        obj.prefix = prefix;
        fs.writeFile('config.json', JSON.stringify(obj), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });
        message.channel.send("This is your new prefix: " + prefix);
    }
});
client.login(token.token);