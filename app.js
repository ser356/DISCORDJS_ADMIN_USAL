
const {Client,Intents} = require("discord.js");

var hora=new Date();
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 
var argumentos=process.argv[2];




client.on('ready', () => {
var canal =  client.channels.cache.get("YOURCHANELID")
if(argumentos==="start"){
canal.send("Mi dueño me ha arrancado "+hora);
}

else if(argumentos==="stop"){
canal.send("Mi dueño me requiere "+hora);
}
});




 client.login("ELVALORDETUTOKEN")
 



