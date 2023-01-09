const { Client, GatewayIntentBits } = require("discord.js");
const {tknFufu} = require('./tkn.js')
const {
  getVoiceConnection,
  AudioPlayerStatus,
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
  AudioPlayer,
} = require('@discordjs/voice');


var zahl = 0; 



const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates

  ],
});

const token = tknFufu;

client.once("ready", () => {
    console.log(`fufu bot is on ${client.user.tag}!`)
});


client.on('messageCreate', (msg) => {

 
  if(msg.author.id === "1049621385229652038" || msg.author.id === "1049469270674911294" || msg.channel.id === '1049442753664254055') 
      return;

    const rndInt2 = Math.floor(Math.random() * 25) + 1

    switch(rndInt2){ 
      case 1:  msg.react('😍'); return;
      case 2:  msg.react('😻'); return;
      case 3:  msg.react('💖'); msg.react('🗡️');return;
      case 4:  msg.react('🐇');   return;
      case 5:  msg.react('🥰'); return;       
    }
    return;
  }
 );




client.on("messageCreate", async (msg) => {

  if(msg.author.id === "1049621385229652038"|| msg.author.id === "1049469270674911294") return;
    if (msg.toString().toLowerCase() == ("ssup") || msg.toString().toLowerCase()== ("hi") || msg.toString().toLowerCase()== ("hey") || msg.toString()== ("hello") || msg.toString().toLowerCase()== ("lac")  || msg.toString().toLowerCase()==("oi") || msg.toString().toLowerCase()==("hey!!")) {
      const rndInt2 = Math.floor(Math.random() * 5) + 1

      switch(rndInt2){ 
        case 1:  msg.reply("heyyy");return;
        case 2:  msg.reply("yooo"); return;
        case 3:  msg.reply("hiii"); return;
        case 4:  msg.reply("ssup"); return;
        case 5:  msg.reply("hiii"); return;
      }
      return;
    }
    
    const prefix = '-';
    const args = msg.content.slice(prefix.length).split(' ');    
    const command = args.shift().toLowerCase();
    
    if (command === 'sayfufu') {        
        try{            
            
            const chan = args[0].toString();   
            const channel = client.channels.cache.find(ch => ch.name === chan);                                
            channel.send(args.slice(1).join(' '));                
            
        }catch(error){console.error('error ne');}            
	}	



    if (msg.toString().toLowerCase().includes("merry christmas")) {

         msg.reply('merry christmas to you aswell!! <3 :christmas_tree:');                    
    }
	
	
  if (msg.toString().toLowerCase().includes("happy new year")) {

    msg.reply("HAPPY NEW YEAR SWEETIE !! ")

  }



    if(msg.content === "fufu come channel"){
    
      const voiceChannel = msg.member.voice.channel;

      if(!voiceChannel) return msg.channel.send('need to be in channel to use this');
      const permissions = voiceChannel.permissionsFor(msg.client.user);

      if(!permissions.has('CONNECT')) return msg.channel.send('You dont have the correct permissions');
      if(!permissions.has('SPEAK')) return msg.channel.send('You dont have the correct permissions');

          const connection = await joinVoiceChannel({
          channelId: voiceChannel.id,
          guildId: voiceChannel.guild.id,
          adapterCreator: voiceChannel.guild.voiceAdapterCreator,
          });
    }
  }  
);

client.login(token);


