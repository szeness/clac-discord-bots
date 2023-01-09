


const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

const {
    getVoiceConnection,
    AudioPlayerStatus,
    createAudioPlayer,
    createAudioResource,
    joinVoiceChannel,
    AudioPlayer,
  } = require('@discordjs/voice');

module.exports = {

    name: 'play',
    description : 'Joins and plays a video from youtube',
    async execute(msg, args) {
        const voiceChannel = msg.member.voice.channel;

        if(!voiceChannel) return msg.channel.send('need to be in channel to use this');
        const permissions = voiceChannel.permissionsFor(msg.client.user);

        if(!permissions.has('CONNECT')) return msg.channel.send('You dont have the correct permissions');
        if(!permissions.has('SPEAK')) return msg.channel.send('You dont have the correct permissions');
        //if(!args.length) return msg.channel.send('You need a secont argument');

      
         const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);

                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        } 
        const video = await videoFinder(args.join(' '));

     
        const player = createAudioPlayer();
        
        player.on(AudioPlayerStatus.Playing, () => { console.log('playz')});
        player.on("error", error => {console.error(`Error: ${error.message} with resource`)});
        //let resource = createAudioResource('C:\\Users\\LAc\\Desktop\\bot Dc\\$syamebro.wav');

        const stream = await ytdl(video.url,  {filter: 'audioonly', quality: 'highestaudio'});
        const resource = createAudioResource(stream, { inlineVolume: true });
        resource.volume.setVolume(0.2);
    
        player.play(resource);

        const connection = await joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        });



        const subscription = connection.subscribe(player);
        await msg.reply(`:thumbsup:Playing ***${video.title}**`)


        }
    }
