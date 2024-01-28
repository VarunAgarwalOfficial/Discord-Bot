const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = async (message , CMD_NAME , emojis)=>{
    if(CMD_NAME === "help"){
        pages = []
        for (let i = 0; i < emojis.length; i = i+40) {
            const embed = new MessageEmbed().setTitle("HELP").setDescription(emojis.slice(i, i+40).map(emoji => `!${emoji.name} : ${emoji} \n`).join(""));
            pages.push(embed)
        }
        emojilist = ['⏪', '⏩']
        paginationEmbed(message, pages , emojilist, 60000);
    }
    else{
        for (let i = 0; i < emojis.length; i++) { 
            const emoji = emojis[i];
            if(CMD_NAME.toLowerCase() === emoji.name.toLowerCase()){
                message.channel.send(`\`${message.author.username} says : \``)
                message.channel.send(`${emoji}`)
                message.delete()
            }      
        }
    }
}