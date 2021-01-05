/*module.exports = {
	name: 'prefix',
	description: 'Change Prefix',
	execute(message, args) {
        var obj = JSON.parse(JSON.stringify(config));
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
	},
};*/