const {  Client, Events , GatewayIntentBits, Collection,  EmbedAssertions, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle  } = require("discord.js");
const {tknCheet} = require('./tkn.js')
let temp;
var rndit = 0;
var zahl = 0;
var zahlD = 0;
var credit = 2000;
var asse = 0;
var bjbet = 200;
var cheaChat = "";

let plyrname = "ᑭᒪᗩYEᖇ"
 var embedZ = new EmbedBuilder() 
 var buttonZ;
 var zahlens = "";
 var zahlensD = "";
var lolna= false;

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
  
  
  
  
  const token = tknCheet;
  const prefix = '-';
  const fs = require('fs');
  client.commands = new Collection();

 

  {
  
  client.once("ready", async () => {

     console.log(`cheetah bot is on ${client.user.tag}!`)

     const guild = await client.guilds.fetch('1044558924289937418');
     const channel = guild.channels.cache.get('1061329103103475772');

     messageEnysS2 = await channel.messages.fetch('1061336342082113678');  
     

/*  
     channelBj = guild.channels.cache.get('1060181551318568980');
     messageBj = await channelBj.messages.fetch('1060542834115100712');
     messagePlyCards = await channelBj.messages.fetch('1060552917049950228');
     messageEnyCards = await channelBj.messages.fetch('1060553362950594691'); 
   */
  
     buttonZ  = new ActionRowBuilder() 
     .addComponents(
       new ButtonBuilder()  
       .setCustomId('start1')
       .setLabel(`reset`)
       .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()  
     .setCustomId('check1')
     .setLabel(`check`)
     .setStyle(ButtonStyle.Success),
     new ButtonBuilder()  
     .setCustomId('stand1')
     .setLabel(`stand`)
     .setStyle(ButtonStyle.Primary),
     );
    
     cheaChat = "```welcomez```";
    
     await mainScreen('Red');
     
  
  await messageEnysS2.edit({embeds: [embedZ] , components: [buttonZ]});

   messageEnysS2.edit(" \t\t\t\t\t\t\t\t\t\t\t\t\t\t 彡");
 
 
  

      
  const collector = channel.createMessageComponentCollector();


      collector.on('collect', async i2 => {   
        plyrname = (i2.user.tag).toUpperCase().slice(0,-5)


        await i2.deferUpdate();
    
        ///////////////////start//////////start///////////start///////////start//////////start/////////////start////////
        if(i2.component.customId === 'start1' ){

         

          console.log(i2.user.tag + " chees casi")
          
          zahlens = "";
          zahlensD = "";
          zahl= 0;
          zahlD = 0;
          asse = 0;          
          cheaChat = "";
          cheaChat += ("```json\n" +plyrname + "🥰\n```");
                    
         /*  
          rndit =  Math.floor(Math.random() * ((11 - 2) + 1) + 2);
          console.log(rndit)
          if (rndit == 11) {
               asse++; 
            };

          zahl += rndit;

          zahlens += ("\xa0\xa0\xa0" + rndit.toString());
                             
          credit -= bjbet; */

         mainScreen('Black'); 

          return;

        }
        

        ///////////////////check1//////////check1///////////check1///////////check1//////////check1/////////////check1////////
        if(i2.component.customId === 'check1' ){
         
          cheaChat = "";
          cheaChat += ("```json\n" +plyrname + "🥰\n```");

          lolna = true;
          

          if(zahl <= 21) {


          rndit =  Math.floor(Math.random() * ((11 - 2) + 1) + 2);
          if (rndit === 11) { asse++; };
          if ((zahl + rndit) > 21 && asse > 0) {
            zahl -= 10; 
            asse--; 
          }
          console.log(rndit)
          zahl += rndit;
       
          zahlens += ("\xa0\xa0\xa0\xa0\xa0" +  rndit.toString());
         

          

          if(zahl > 21) {
            cheaChat = "";
            cheaChat += ("```diff\n-- sryy lost :(  \n```")
            
          }

           mainScreen('Red'); 

          return;
          
        }else {
          cheaChat = "";
          
          creditscreen("ᑕᒪᗩᑕ♛ ᗷᒪᗩᑕKᒍᗩᑕK  \n\ncredit: " + 
          credit + "  - bet: "+bjbet);
           mainScreen('Brown'); 
          return;
        }

    
       


      }

 ///////////////////stand//////////stand///////////stand///////////stand//////////stand/////////////stand////////
        if(i2.component.customId === 'stand1' ){

          if(zahl<=21 && zahl>0){

            asse=0;

            while ((zahlD < zahl && zahlD != zahl))  {
              
            
            
              var rndInt2 = Math.floor(Math.random() * ((11 - 2) + 1) + 2);
              console.log(rndInt2)
              if (rndInt2 == 11) asse++;
              if (zahlD + rndInt2 > 21 && asse > 0) {
                zahlD -= 10; asse--; 
              }
              zahlD += rndInt2;

              zahlensD += ("\xa0\xa0\xa0\xa0\xa0" +  rndInt2.toString());

              
        
          
              if (zahlD > 21) { 

                credit += (2*bjbet);
                cheaChat += ("```diff\n--⋆⋆★ Aaahhh YOU WIN! ⋆⋆★⋆⋆★⋆⋆★⋆⋆★   \n```")
              
                await mainScreen('Green'); 

                return; 
              }

              await mainScreen('Orange'); 

              
            }
          
          }

          cheaChat += ("```diff\n--  -  - Sry, I win - -- -\n```")
          cheaChat ="";
          cheaChat += ("```json\nᑕᒪᗩᑕasino ♛  \n\ncredit: " + 
          credit + "  - bet: "+bjbet+ "\n```");
          cheaChat += ("```diff\n-- - Sry, I win - -- -\n```")
          mainScreen('Yellow'); 
          
          return;
      
          
       



        }


    });
  })



  

  client.on('messageCreate' , async (msg) => {
 
    
    const args = msg.content.slice(prefix.length).split(' ');    
    const command = args.shift().toLowerCase();



    if (command === 'saycheat') {        
      try{            
          
          const chan = args[0].toString();   
          const channel = client.channels.cache.find(ch => ch.name === chan);                                
          channel.send(args.slice(1).join(' '));                
          
      }catch(error){console.error('error ne');}            
    }	


    if (command === 'reset') {        
       
      zahlens = "";
      zahlensD = "";
      zahl= 0;
      zahlD = 0;
      asse = 0;
      credit = 2000;
      plyrname = "ᑭᒪᗩYEᖇ"
      cheaChat = "";
      cheaChat += ("```welcomez```");


       mainScreen('Purple');

    

       await  msg.delete();
    

    }	

 
      if(msg.author.id === "1049621385229652038" || msg.author.id === "1049469270674911294" || msg.channel.id === '1049442753664254055') 
          return;
    
        const rndInt2 = Math.floor(Math.random() * 25) + 1
    
        switch(rndInt2){ 
          case 1:  msg.react('🐬'); return;
          case 2:  msg.react('😻'); return;
          case 3:  msg.react('💖'); msg.react('🗡️');return;
          case 4:  msg.react('🐇');   return;
          case 5:  msg.react('🕵️‍♀️'); return;       
        }
        return;

   
  
  }
  );  



  client.login(token);
  
 
}


  
async function mainScreen(farbe) {    

    embedZ = new EmbedBuilder() 
    .setColor(farbe)
    .setDescription(`${cheaChat}
    
    🅱🅻🅰🅲🅺🅹🅰🅲🅺 ᑕᒪᗩᑕ♛ 

    ᑕᕼEETᗩᕼ   total   \xa0\xa0\xa0\xa0 ${ zahlD === 0 ? '-' :  zahlD}\n
    ${zahlensD}
    
    ${plyrname}  total   \xa0\xa0\xa0\xa0 ${zahl === 0 ? '-' : zahl}

             ${zahlens}  

    
             `)
    await messageEnysS2.edit({ embeds: [embedZ] , components: [buttonZ]});
  
   }

   async function creditscreen(str) {    
    cheaChat = "";
      cheaChat += ("```" + str + "```");


   }


