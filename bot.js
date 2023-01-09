const { channel } = require("diagnostics_channel");
const { Client, Events , GatewayIntentBits, Collection, createChannel, EmbedAssertions, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle  } = require("discord.js");

let temp;
var c = 0;
var zahl = 0;
var asse = 0;
var credit = 500;
var countScatter = 0;
var freiSpiele = 0;
var slotbet = 100;
var bjbet = 200;
let dmsgChach;
let dmsgChachSlot1;
let dmsgChachbj;
let dmsgChachbj2;
let reelsMsg;
var creditAtBeginnFG;
let iVar;
let iVar2;
let dieseNeueMsg;
let noFreegamesReels;
let chse;
var arraymsg = [];
var triggeredBj = false;
let wonsMsg;
var obschongespinnt= false;
let scatterMsg ;
var finbool = false;
let newM;
var spinnbutFix = false;
let iArray = 0;


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.Guilds
  ],
});




const token = 'MTA0OTQ2OTI3MDY3NDkxMTI5NA.GfPReG.jq401v0wyWfyMTBMGZIIPU4wk_sN41o5-h-Tro';
const prefix = '-';
const fs = require('fs');
const { measureMemory } = require("vm");


client.commands = new Collection();

const functionFolders = fs.readdirSync(`./functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
  .readdirSync(`./functions/${folder}`)
  .filter(file => file.endsWith('.js'));
 

  }


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}


client.once("ready", async () => {
  console.log(`lac bot is on ${client.user.tag}!`)

  const guild = await client.guilds.fetch('1044558924289937418');
  const channel = guild.channels.cache.get('1050835243361386557');
  const message = await channel.messages.fetch('1057457553849716756');


 

  

  message.react( '💜');
  message.react( '💙');
  message.react( '💛');
  message.react( '💚');
  message.react( '🦧');
  message.react( '❤️');
  message.react( '🐷');
  message.react( '🖤');
  message.react( '🤍');
  message.react( '💄');

  
    var consol = '';
    const mojoRay = [];
    mojoRay.push('purple', 'blue', 'yellow','lightgreen','orange','red','pink','black','white','pinkish');
    var i = 0;
    




     while (true){
     

      i = i > 9 ? i=0 : i;
    
      var lol = mojoRay[i++];
      let myRole1 = guild.roles.cache.find(role => role.name === lol);
      
     
      await   guild.members.cache.get('1049469270674911294').roles.add(myRole1);     
 
      
      await    guild.members.cache.get('1049469270674911294').roles.remove(myRole1);

      rndInt2 = Math.floor(Math.random() * 9);
      i = i > 9 ? i=0 : rndInt2;
      lol = mojoRay[i++];
      myRole1 = guild.roles.cache.find(role => role.name === lol);
      
   
      await   guild.members.cache.get('1049621385229652038').roles.add(myRole1);

      await   guild.members.cache.get('1049621385229652038').roles.remove(myRole1);
   
      rndInt2 = Math.floor(Math.random() * 9);
      i = i > 9 ? i=0 : rndInt2;
      lol = mojoRay[i++];
      myRole1 = guild.roles.cache.find(role => role.name === lol);
      
      await   guild.members.cache.get('784152374494363649').roles.add(myRole1);

      await   guild.members.cache.get('784152374494363649').roles.remove(myRole1);
    
      rndInt2 = Math.floor(Math.random() * 9);
      i = i > 9 ? i=0 : rndInt2;
      lol = mojoRay[i++];
      myRole1 = guild.roles.cache.find(role => role.name === lol);
      
      784152374494363649

      await   guild.members.cache.get('1061327368725205022').roles.add(myRole1);

      await   guild.members.cache.get('1061327368725205022').roles.remove(myRole1);
      rndInt2 = Math.floor(Math.random() * 9);
      i = i > 9 ? i=0 : rndInt2;
      lol = mojoRay[i++];
      myRole1 = guild.roles.cache.find(role => role.name === lol);
      
      await   guild.members.cache.get('897932702953652264').roles.add(myRole1);

   
      await  guild.members.cache.get('897932702953652264').roles.remove(myRole1);
   
      //console.log(consol += 'z');
      rndInt2 = Math.floor(Math.random() * 9);
      i = i > 9 ? i=0 : rndInt2;
      lol = mojoRay[i++];

      


    }

   

});








client.on('messageReactionRemove', async (reaction,user) => {

  var roleTemp = '';
  var roleMsgId =  '1057457553849716756';

 
  if(reaction.message.id === '1057457553849716756'){
   
    switch(reaction.emoji.name){
      case '💜': roleTemp = 'purple';break;
      case '💙': roleTemp = 'blue';break;
      case '💛': roleTemp = 'yellow';break;
      case '💚': roleTemp = 'lightgreen';break;
      case '🦧': roleTemp = 'orange';break;
      case '❤️': roleTemp = 'red';break;
      case '🐷': roleTemp = 'pink';break;
      case '🖤': roleTemp = 'black';break;
      case '🤍': roleTemp = 'white';break;
      case '💄': roleTemp = 'pinkish';break;
    }


  let myRole1 = reaction.message.guild.roles.cache.find(role => role.name === roleTemp);

  await reaction.message.guild.members.cache.get(user.id).roles.remove(myRole1);
}

});



client.on('messageReactionAdd', async (rct,user) => {

  
  //if (rct) await rct.fetch();

  console.log(rct.emoji.name + " " + user.username);

  var roleTemp = '';
  var roleMsgId =  '1057457553849716756';

  if(rct.message.id === roleMsgId){
  try {
    

    switch(rct.emoji.name){
      case '💜': roleTemp = 'purple';break;
      case '💙': roleTemp = 'blue';break;
      case '💛': roleTemp = 'yellow';break;
      case '💚': roleTemp = 'lightgreen';break;
      case '🦧': roleTemp = 'orange';break;
      case '❤️': roleTemp = 'red';break;
      case '🐷': roleTemp = 'pink';break;
      case '🖤': roleTemp = 'black';break;
      case '🤍': roleTemp = 'white';break;
      case '💄': roleTemp = 'pinkish';break;


    }

    let myRole = rct.message.guild.roles.cache.find(role => role.name === roleTemp);
    await rct.message.guild.members.cache.get(user.id).roles.add(myRole);
    
  }catch(error) {}

}

});





client.on('presenceUpdate', (oldPresence, newPresence) => {

  var date = new Date()

  console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + newPresence.user.username + " " + newPresence.status);


});



client.on('messageCreate', (msg) => {


  
  if (msg.author.id === "1049469270674911294") return;


  if (msg.author.id === "784152374494363649" || msg.author.id === "897932702953652264" || msg.author.id === "746539590436913299") {

    var rndInt2 = Math.floor(Math.random() * 28) + 1

    switch (rndInt2) {
      case 1: msg.react('😍'); break;
      case 2: msg.react('😻'); break;
      case 3: msg.react('💖'); break;
      case 4: msg.react('🫶'); break;
      case 5: msg.react('🥰'); break;
    }
  }
});





client.on("messageCreate", async (msg) => {

  

  arraymsg[iArray++] =  await msg.id;

 
 


    if (msg.author.id === '1049469270674911294') return;

  var date = new Date()
  var min = date.getMinutes().toString().length == 1 ? "0" + date.getMinutes() : date.getMinutes();
  var hour = date.getHours().toString().length == 1 ? ("0" + date.getHours()) : date.getHours();
  var sec = date.getSeconds().toString().length == 1 ? ("0" + date.getSeconds()) : date.getSeconds();

  console.log(hour + ":" + min + ":" + sec + "(" + msg.channel.name + ")" + msg.author.username + ": " + msg.content)



  if (msg.toString().toLowerCase() == ("ssup") || msg.toString().toLowerCase() == ("hi") || msg.toString().toLowerCase() == ("hey") || msg.toString() == ("hello") || msg.toString().toLowerCase() == ("lac")
    || msg.toString().toLowerCase() == ("oi") || msg.toString().toLowerCase() == ("hey!!")) {
    const rndInt2 = Math.floor(Math.random() * 5) + 1

    switch (rndInt2) {
      case 1: msg.reply("heyyy"); return;
      case 2: msg.reply("yooo"); return;
      case 3: msg.reply("hiii"); return;
      case 4: msg.reply("ssup"); return;
      case 5: msg.reply("hiii"); return;
    }
    return;
  }


  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if(command === 'delMess' ){

    const channel = client.channels.cache.find(ch => ch.name === '𝓬ａรꭵℕ𝕠');

    msg.channel.lastMessage.delete();
  }
  
  if (command === 'saylacc') {        
    try{            
        
        const chan = args[0].toString();   
        const channel = client.channels.cache.find(ch => ch.name === chan);                                
        channel.send(args.slice(1).join(' '));                
        
    }catch(error){console.error('error ne');}            
}	
 

  if (command === "slots") { //slots trigger


    const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");


    const button = new ActionRowBuilder() 
    .addComponents(
     new ButtonBuilder()  
    .setCustomId('spin')
    .setLabel(`spin`)
    .setStyle(ButtonStyle.Primary),
    );
  
    const embed = new EmbedBuilder() 
    .setColor('Blue')
    .setDescription(`hii ${msg.author.username}!`)

    
  
    const embed2 = new EmbedBuilder() 
    .setColor('Red')
    .setDescription(`"have fun ${msg.author.username}!  ᑕᒪᗩᑕ♛"`)
  
    iVar = await msg.channel.send({ embeds: [embed], components:[button] });
  
    const collector = msg.channel.createMessageComponentCollector();
  
  
    collector.on('collect', async i => {

      await i.deferUpdate();
    

     if(i.component.customId === 'quit' ){

      const channel = client.channels.cache.find(ch => ch.name === 'slots');

      
       i.message.delete();
       
       console.log('quat')

       if(wonsMsg != null) {
        wonsMsg.delete();
        wonsMsg = null;
    }

       if(reelsMsg != null) {
        reelsMsg.delete();
        reelsMsg = null;
    }

       if(noFreegamesReels != null) {
    

        noFreegamesReels.delete(); 
        noFreegamesReels = null;
      }
          
      if(chse != null) 
      chse.delete();

     
      
      return;


     }

     if(i.component.customId === 'spin' ){


      if(!spinnbutFix) {

        spinnbutFix = true;
    
  
        
  
  
        dmsgChachSlot1 = null;
    

        if(noFreegamesReels != null) {
    

          noFreegamesReels.delete(); 
          noFreegamesReels = null;
        }
       
        reelsMsg = null;

        if(!obschongespinnt){
          newM = await msg.channel.send("ᑕᒪᗩᑕ♛  🆂🅻🅾🆃🆂░☯");      
          obschongespinnt = true;             
        }

    
        let content = newM.content;
        try{
         
    
        c = 0;
        const channel = client.channels.cache.find(ch => ch.name === '𝓬ａรꭵℕ𝕠');
        let reels = Array(3).fill().map(entry => Array(5))
    
        
    
    
        for (let i = 0; freiSpiele == 0 ? i < 2 : i < 11; i++) {
    
          
    
          
          if(chse != null) 
            chse.delete();
    
          var creditText = '';
          c = 0;
    
    
          
    
    
          
          if (freiSpiele > 0) {    //free games spins
            
       
           
          if(freiSpiele === 1)
            finbool = true;
    
            
          if(reelsMsg != null) {
            reelsMsg.delete();
            reelsMsg = null;
        }
         
    
        
           
            
            await new Promise(r => setTimeout(r, 1200));
    
    
           
        
          await scatterMsg.edit("```json\n⋆⋆★ " + --freiSpiele + "x  F͓̽ R͓̽ E͓̽ E͓̽ ͓̽  G͓̽ A͓̽ M͓̽ E͓̽ S͓̽ ★★⋆⋆\n```");
          
           
    
            var pic2 = await function rolleTiere() {
    
              zahl = Math.floor(Math.random() * 11);
              switch (zahl) {
                case 0: return ":palm_tree:";
                case 1: return ":palm_tree:";
                case 2: return ":sloth:";
                case 3: return ":palm_tree:";
                case 4: return ":mushroom:"
                case 5: return ":sloth:";
                case 6: return ":sloth:";
                case 7: return ":mushroom:";
                case 8: return ":palm_tree:";
                case 9: return ":mushroom:";
                case 10: return ":rabbit2:";
                case 11: return ":rabbit2:";
                  ;
              }
            }
            for (i = 0; i < reels.length; i++) {
    
              for (j = 0; j < reels[i].length; j++) {
                reels[i][j] =  pic2();
    
              }
            }
          
            if(freiSpiele === 0) {
    
              if(chse != null) {
                chse.delete(); 
                chse = null;
            
              
              }
    
              creditText += ("☯ᑕᒪᗩᑕ  ♛  🆂🅻🅾🆃🆂░");
              
             
            }
                 
            await wonsMsg.edit("``` wins: " + (credit - creditAtBeginnFG).toString() + "   ᑕᒪᗩᑕ♛  🆂🅻🅾🆃🆂░  ```")
            
            noFreegamesReels.edit(reels[0].join('') + "\n" + reels[1].join('') + "\n" + reels[2].join(''));
    
           await new Promise(r => setTimeout(r, 1200));
           
           
          
        
    
          } else if (freiSpiele == 0) { //regular spins
    
    
             if(dieseNeueMsg != null) {
              dieseNeueMsg.delete(); 
              dieseNeueMsg = null;
          }
    
            
          if(chse != null) {
            chse.delete(); 
            chse = null;
          }
           
            credit -= slotbet;
    
            if(noFreegamesReels != null) 
            noFreegamesReels.delete();
    
         
            
         /*    if(msg != null)
            msg.delete(); */
    
    
            var pic = function rolleTiere() {
              zahl = Math.floor(Math.random() * 43);
              switch (zahl) {
                case 0: return ":hedgehog:";
                case 1: return ":octopus:";
                case 2: return ":fox:";
                case 3: return ":hedgehog:";
                case 4: return ":camping:";
                case 5: return ":camping:";
                case 6: return ":octopus:";
                case 7: return ":fox:";
                case 8: return ":hedgehog:";
                case 9: return ":fox:";
                case 10: return ":octopus:";
                case 11: return ":hedgehog:";
                case 12: return ":octopus:";
                case 13: return ":fox:";
                case 14: return ":camping:";
                case 15: return ":fox:"
                case 16: return ":camping:";
                case 17: return ":octopus:";
                case 18: return ":fox:";
                case 19: return ":hedgehog:";
                case 20: return ":fox:";
                case 21: return ":camping:";
                case 22: return ":hedgehog:";
                case 23: return ":octopus:";
                case 24: return ":fox:";
                case 25: return ":hedgehog:";
                case 26: return ":fox:"
                case 27: return ":hedgehog:";
                case 28: return ":camping:";
                case 29: return ":fox:";
                case 30: return ":hedgehog:";
                case 31: return ":fox:";
                case 32: return ":octopus:";
                case 33: return ":hedgehog:";
                case 34: return ":octopus:";
                case 35: return ":fox:";
                case 36: return ":hedgehog:";
                case 37: return ":fox:"
                case 38: return ":octopus:";
                case 39: return ":camping:";
                case 40: return ":fox:";
                case 41: return ":hedgehog:";
                case 42: return ":camping:";
                case 43: return "':octopus:'";
              }
            }
            for (i = 0; i < reels.length; i++) {
              temp = '';
              for (j = 0; j < reels[i].length; j++) {
                reels[i][j] = pic();
    
              }
            }
            
            noFreegamesReels = await msg.channel.send(reels[0].join('') +"\n" + reels[1].join('')+ "\n" + reels[2].join(''));
          }
    
    
    { //reelsCountWins
    
          if (reels[0][0] == reels[0][1] && reels[0][1] == reels[0][2] && reels[0][2] == reels[0][3] && reels[0][3] == reels[0][4]) {
            creditText += ("won: " + (slotbet * 10) + " ");
            credit += (slotbet * 10)
    
          }
    
          else if (reels[0][0] == reels[0][1] && reels[0][1] == reels[0][2]) {
    
            creditText += ("won: " + (slotbet - (slotbet / 10)) + " ");
            credit += (slotbet - (slotbet / 10));
    
    
          }
          else if (reels[0][0] == reels[0][1] && reels[0][1] == reels[0][2] && reels[0][2] == reels[0][3]) {
    
            creditText += ("won: " + (slotbet * 2) + " ");
            credit += (slotbet * 2)
    
          }
    
    
    
    
          if (reels[1][0] == reels[1][1] && reels[1][1] == reels[1][2] && reels[1][2] == reels[1][3] && reels[1][3] == reels[1][4]) {
            creditText += ("won: " + (slotbet * 10) + " ");
            credit += (slotbet * 10);
          }
          else if (reels[1][0] == reels[1][1] && reels[1][1] == reels[1][2] && reels[1][2] == reels[1][3]) {
    
            creditText += ("won: " + (slotbet * 2) + " ");
            credit += (slotbet * 2);
          }
    
          else if (reels[1][0] == reels[1][1] && reels[1][1] == reels[1][2]) {
            creditText += ("won: " + (slotbet - (slotbet / 10)) + " ");
            credit += (slotbet - (slotbet / 10));
    
    
          }
    
          if (reels[2][0] == reels[2][1] && reels[2][1] == reels[2][2] && reels[2][2] == reels[2][3] && reels[2][3] == reels[2][4]) {
            creditText += ("won: " + (slotbet * 10) + " ");
            credit += (slotbet * 10);
    
          }
    
          else if (reels[2][0] == reels[2][1] && reels[2][1] == reels[2][2] && reels[2][2] == reels[2][3]) {
            creditText += ("won: " + (slotbet * 2) + " ");
            credit += (slotbet * 2);
    
          }
    
          else if (reels[2][0] == reels[2][1] && reels[2][1] == reels[2][2]) {
            creditText += ("won: " + (slotbet - (slotbet / 10)) + " ");
            credit += (slotbet - (slotbet / 10));
    
          }
    
    
    
    
    
    
          if (reels[2][0] == reels[1][1] && reels[1][1] == reels[0][2] && reels[0][2] == reels[1][3] && reels[1][3] == reels[2][4]) {
    
            creditText += ("won: " + (slotbet * 10) + " ");
            credit += slotbet * 10;
    
          }
    
          if (reels[2][0] == reels[1][1] && reels[1][1] == reels[0][2] && reels[0][2] == reels[1][3]) {
            creditText += ("won: " + (slotbet * 2) + " ");
            credit += (slotbet * 2);
          }
    
    
          if (reels[2][0] == reels[1][1] && reels[1][1] == reels[0][2]) {
    
            creditText += ("won: " + (slotbet - (slotbet / 10)) + " ");
            credit += (slotbet - (slotbet / 10));
    
    
          }
    
          if (reels[0][0] == reels[1][1] && reels[1][1] == reels[2][2] && reels[2][2] == reels[1][3] && reels[1][3] == reels[0][4]) {
    
            creditText += ("won: " + (slotbet * 10) + " ");
            credit += (slotbet * 10);
    
          }
    
          if (reels[0][0] == reels[1][1] && reels[1][1] == reels[2][2] && reels[2][2] == reels[1][3]) {
            creditText += ("won: " + (slotbet * 2) + " ");
            credit += (slotbet * 2);
    
          }
    
    
          if (reels[0][0] == reels[1][1] && reels[0][0] == reels[2][2]) {
            creditText += ("won: " + (slotbet - (slotbet / 10)) + " ");
            credit += (slotbet - (slotbet / 10));
    
         
          }
        }
    
    
    
          for (i = 0; i < reels.length; i++)
            for (j = 0; j < reels[i].length; j++) {
              if (reels[i][j] === ":camping:")
                countScatter++;
            }
          if (countScatter >= 3) {

            
            iVar.delete();
            creditAtBeginnFG = credit;
            credit += (countScatter * (slotbet * 2));
            creditText += ("won: " + countScatter * (slotbet * 2) + " ");
             scatterMsg  = await msg.channel.send("```"+ countScatter + "🏕️ scatters! Won 4x Free Games```");
              wonsMsg = await msg.channel.send(" :");
            
            freiSpiele = 4;
           
            countScatter = 0;
          }
    
          countScatter = 0;
    
          if(dmsgChachSlot1 != null) {
            await dmsgChachSlot1.delete();
          }
         
          
          if(newM !== null )
           await newM.edit(content + "```json\n' credit: " + (Math.round(credit * 100) / 100).toFixed(2)+"'\n```");

          else
           newM = await msg.channel.send("ᑕᒪᗩᑕ♛  🆂🅻🅾🆃🆂░☯");   
            
           spinnbutFix = true;
           
    
          if(creditText !== '' && freiSpiele > 0){

            var tempReelContent = wonsMsg.content;
    
           await wonsMsg.edit("```->" + " " + creditText + "```" );
            wonsMsg.content = await tempReelContent;
         }


         spinnbutFix = await false;
     
         if(finbool){

            await wonsMsg.edit("```diff\n'freegames wins: " + (credit - creditAtBeginnFG).toString() + "   ☯ᑕᒪᗩᑕ  ♛  🆂🅻🅾🆃🆂░ '```")
            scatterMsg.delete();
            newM.delete();
            newM = null
            obschongespinnt = await false;
           
           
            const embed3 = new EmbedBuilder() 
           .setColor('Blue')
           .setDescription(`continue? credit: ${credit} `)
        

           
           const button2 = new ActionRowBuilder() 
           .addComponents(
            new ButtonBuilder()  
           .setCustomId('spin')
           .setLabel(`spin`)
           .setStyle(ButtonStyle.Primary),
           new ButtonBuilder()
           .setCustomId('quit')
           .setLabel('quit')
           .setStyle(ButtonStyle.Danger),
           );
         

            iVar = await msg.channel.send({ embeds: [embed3], components:[button2] });

                       
         
            finbool = false;
         }
        }
          
      
      }catch(error){console.log(error)
  
    
        }
    
        
      }
    }
    });
  
    }





  if (command === 'play'){
    client.commands.get('play').execute(msg, args);
  }

  if (command === 'saylac') {
    try {
      const chan = args[0].toString();
      const channel = client.channels.cache.find(ch => ch.name === chan);
      client.commands.get('say').execute(msg, chan, args);
      channel.send(args.slice(1).join(' '));

    } catch (error) { console.error('error ne'); }
  }

  if (msg.toString().toLowerCase().includes("merry christmas")) {


    arraymsg[iArray++] =  msg;

    msg.reply('merry christmas to you aswell!! <3 :christmas_tree:');


  }

/////////////////////////////////////// ROULETTE//////////////////////

  if (command === "r") {
    // msg.reply("choose numbers 0-36");         		

    const channel = client.channels.cache.find(ch => ch.name === '𝓬ａรꭵℕ𝕠');

   
    if (args[0] === "r") {

      

      var bet = parseInt(args[1]) * (args.length - 2);
      var lol = false;      
      const spielerZahlen = args.splice(2);
      var zahlenCheck = false;



      for (let i = 0; i < spielerZahlen.length; i++) {
            if(parseInt(spielerZahlen[i]) <= 36 && parseInt(spielerZahlen[i]) >= 0) {
              zahlenCheck = true;
            }          
      }
      if(!zahlenCheck) {
        channel.send("it needs to be numbers in range 0-36") 
        return;
      }

   

      console.log("totalbet: " + bet.toString() + " on # " + spielerZahlen.join(' '));
      // await channel.send(":person_gesturing_ok: - won - " +zahl + " :clap: :woman_in_tuxedo: ");
           dmsgChach = await channel.send("    ᑕᒪᗩᑕ░🆁🅾🆄🅻🅴🆃🆃🅴░ᵗᵒᵗᵃˡᵇᵉᵗ•    \n\n" + bet.toString() + " 𝘰𝘯 # " + spielerZahlen.join(' • ')+"\n\n\n");

     

      do {

      

        credit -= bet;
      
        zahl = Math.floor(Math.random() * 36);

        console.log(zahl);


        for (i = 0; i < spielerZahlen.length; i++) {
          if (spielerZahlen[i] === zahl.toString()) {
            lol = true;
            credit += (36 * parseInt(args[1]));
            break;
          }
        }

        if (lol == true) {
          dmsgChach.edit('```' + dmsgChach.content + '\n```');

          channel.send("\n🙆    -"+zahl.toString()+ "-   WON    (+" + (36 * parseInt(args[1])).toString() + ")  👏 🤵‍♀️ " + 
          "```json\n" + '"  🅲🆁🅴🅳🅸🆃:  ' + credit +'  "\n```');

          console.log(" - won " + (36 * parseInt(args[1])).toString() + " - " + zahl + "   credit: " + credit)
        } else {
          dmsgChach = await dmsgChach.edit(dmsgChach.content + "\n 🤦‍♀️ -"+zahl.toString()+ "- lost     -   credit: " + credit);

        }

      } while (!lol);

    } else if (args[0] === "credit") {
      credit = parseInt(args[1]);
      msg.reply("\ncredit: " + credit);
      return;
    } else if (args[0] === "blackjack") {
      dmsgChachbj = await msg.channel.send("🅱🅻🅰🅲🅺🅹🅰🅲🅺");
      bjbet = parseInt(args[1]);
      dmsgChachbj.edit(dmsgChachbj.content + "\ncredit: " + credit + "\nbet: " + bjbet);
      return;
    }/*  else {
      //console.log(args.join(" "));                       
      zahl = Math.floor(Math.random() * 36);
      const channel = client.channels.cache.find(ch => ch.name === '𝓬ａรꭵℕ𝕠');
      console.log(zahl);
      var lol = false;

      for (i = 0; i < args.length; i++) {
        if (args[i] === zahl.toString()) {
          lol = true;
          break;
        }
      }
      if (lol == true) {
        dmsgChach.edit(dmsgChach.content + "\nwon " + zahl);
        console.log("won: " + zahl)
        lol = false;
      } else { 
        dmsgChach.edit(dmsgChach.content + "\n-lost- " + zahl.toString());
      } */


      return;
    }
    
  


  

  
  if(command === "slotbet") {

    slotbet = parseInt(args[0]);
    msg.reply(slotbet + " per spin");


  }

  if (command === "credit") {



    msg.reply("```credit: " + credit+ "```");


  }
  
 ////////////////////////////////// SL O TS ///////////////////////////

  



  if (msg.toString().toLowerCase().includes("happy new year")) {

    msg.reply("HAAPPY NEW YEAR " + msg.author.username.toString() + " !! ")

  }






 
    
  


/*   if (msg.toString().toLowerCase() === "check") {


    msg.delete();

    var rndInt2 = Math.floor(Math.random() * ((11 - 2) + 1) + 2);
    if (rndInt2 == 11) asse++;
    console.log(rndInt2);
    if (zahl + rndInt2 > 21 && asse > 0) {
       zahl -= 10; asse--; 
      }
    zahl += rndInt2;

    dmsgChachbj.edit(dmsgChachbj.content + "\ncard " + rndInt2.toString() + "  :: total: " + zahl.toString());
    

    if (zahl > 21) { 
      dmsgChachbj.edit('```json\n "' + dmsgChachbj.content + "\n- - - "+ zahl.toString() + ' sry you lost "```' ); return; 
    }
    
  }
 */



 /*  if (msg.toString().toLowerCase() === "pass") {

    dmsgChachbj.edit('```json\n "' + dmsgChachbj.content + '"```');

    dmsgChachbj = await msg.channel.send("-  -  - my turn now:");

    msg.delete();

    asse = 0;
    var zahl1 = 0;

    while ((zahl1 < zahl && zahl1 != zahl)) {

      var rndInt2 = Math.floor(Math.random() * ((11 - 2) + 1) + 2);
      console.log(rndInt2);
      if (rndInt2 == 11) asse++;
      if (zahl1 + rndInt2 > 21 && asse > 0) {
         zahl1 -= 10; asse--; 
      }
      zahl1 += rndInt2;

      
      dmsgChachbj = await dmsgChachbj.edit(dmsgChachbj.content + "\nDealac: card " + rndInt2.toString() + "  :: total: " + zahl1.toString());

      if (zahl1 > 21) { 
        
        credit += (2*bjbet);
        dmsgChachbj.edit("```diff\n-" + dmsgChachbj.content + "\n- - - - xa You Win!    credit: " + credit + "```"); return; }

    }

    dmsgChachbj.edit("```diff\n-" + dmsgChachbj.content + "\n-  -  - Sry, I win     credit: " + credit + "```"); return;
  } */



if (msg.toString().toLowerCase() === "blackjack") {
/////////////////////////////B L A C K J A C K '//////////////////////////////////////////BJ///////////////////

  
  
  const channel = client.channels.cache.find(ch => ch.name === '𝓬ａรꭵℕ𝕠');

  asse = 0;

 
  const buttonZ = new ActionRowBuilder() 
  .addComponents(
    new ButtonBuilder()  
    .setCustomId('start')
    .setLabel(`start`)
    .setStyle(ButtonStyle.Secondary),
   new ButtonBuilder()  
  .setCustomId('check')
  .setLabel(`check`)
  .setStyle(ButtonStyle.Success),
  new ButtonBuilder()  
  .setCustomId('stand')
  .setLabel(`stand`)
  .setStyle(ButtonStyle.Danger),

  );

  const buttonr = new ActionRowBuilder() 
  .addComponents(
   new ButtonBuilder()  
  .setCustomId('check')
  .setLabel(`check`)
  .setStyle(ButtonStyle.Success),
  new ButtonBuilder()  
  .setCustomId('stand')
  .setLabel(`stand`)
  .setStyle(ButtonStyle.Danger),

  );

  const embedZ = new EmbedBuilder() 
  .setColor('Blue')
  .setDescription(`🅱🅻🅰🅲🅺🅹🅰🅲🅺 ᑕᒪᗩᑕ♛ \n\nssup ${msg.author.username}!`)



  const embedZZ = new EmbedBuilder() 
  .setColor('Red')
  .setDescription(`"have fun ${msg.author.username}!  ᑕᒪᗩᑕ♛"`)

  iVar2 = await channel.send({ embeds: [embedZ], components:[buttonZ] });

  
  const collector = channel.createMessageComponentCollector();

  collector.on('collect', async i2 => {   

    try{

    if(i2.component.customId === 'start' ){


      if(!triggeredBj)  {

        triggeredBj = await true;

        if(dmsgChachbj != null) {
          await dmsgChachbj.delete();
          dmsgChachbj = null;
        }
    
        if(dmsgChachbj2 != null) {
          await dmsgChachbj2.delete();
          dmsgChachbj2 =null;
    
        }
    
      
    
 

  await  i2.update({embeds : [embedZZ], components: [buttonZ] });

  
  

    
      zahl = Math.floor(Math.random() * ((11 - 2) + 1) + 2);
      if (zahl == 1 || zahl == 11) { zahl = 11; asse++; };

  
        dmsgChachbj = await msg.channel.send("\nᑕᒪᗩᑕ♛ ᗷᒪᗩᑕKᒍᗩᑕK  \n\ncredit: " + 
                          credit + "  - bet: "+bjbet+ "\n\ncard " + zahl.toString() + "    - - - -");

     credit -= bjbet;

     return;

    }
  }     
  

    if(i2.component.customId === 'check' ){

      if(triggeredBj) {
        var rndInt2 = Math.floor(Math.random() * ((11 - 2) + 1) + 2);
      if (rndInt2 == 11) asse++;
        console.log(rndInt2);
      if (zahl + rndInt2 > 21 && asse > 0) {
         zahl -= 10; asse--; 
        }
      zahl += rndInt2;
  
      await dmsgChachbj.edit(dmsgChachbj.content + "\ncard " + rndInt2.toString() + "  :: total: " + zahl.toString());
      
  
      if (zahl > 21) { 
       await  dmsgChachbj.edit('```json\n "' + dmsgChachbj.content + "\n- - - "+ zahl.toString() + ' sry you lost "```' );
        triggeredBj = false;
        await  i2.update({embeds : [embedZ], components: [buttonZ] });
         return; 
      }

      return;

   
    }

  }


   if(i2.component.customId === 'stand' ){

  
    try{

   if(!triggeredBj)  {

    
    if(dmsgChachbj != null) {
      await dmsgChachbj.delete();
      dmsgChachbj = null;
    }

    if(dmsgChachbj2 != null) {
      await dmsgChachbj2.delete();
      dmsgChachbj2 =null;

    }

    iVar2.delete();

    
   
    
    //await  i2.update({embeds : [embedZ], components: [buttonZ] });
      

   }else{


  await dmsgChachbj.edit('```json\n "' + dmsgChachbj.content + '"```');

   dmsgChachbj2 = await msg.channel.send("-  -  - my turn now:");

  

 
   asse = 0;
   var zahl1 = 0;

   while ((zahl1 < zahl && zahl1 != zahl)) {

     var rndInt2 = Math.floor(Math.random() * ((11 - 2) + 1) + 2);
     console.log(rndInt2);
     if (rndInt2 == 11) asse++;
     if (zahl1 + rndInt2 > 21 && asse > 0) {
        zahl1 -= 10; asse--; 
     }
     zahl1 += rndInt2;

     
     dmsgChachbj2 = await dmsgChachbj2.edit(dmsgChachbj2.content + "\nDealac: card " + rndInt2.toString() + "  :: total: " + zahl1.toString());

     if (zahl1 > 21) { 
       
       credit += (2*bjbet);
       dmsgChachbj2.edit("```diff\n-" + dmsgChachbj2.content + "\n- - - - xa You Win!    credit: " + credit + "```"); 
       triggeredBj = false;
       await  i2.update({embeds : [embedZ], components: [buttonZ] });
       return; }

   }

   
   triggeredBj = false;
    return;

  }

}catch(error) {console.log(error)}


  triggeredBj = false;
  await  i2.update({embeds : [embedZ], components: [buttonZ] });
  return;

  }

}catch(error){console.log(error)}

 });

}

});

client.login(token);




