const mongo = require("./../mongo")
const guild = require("../schemas/guild")
module.exports = {
    aliases: ['addcommand', 'addcommand'],
    expectedArgs: '<command> <gif_link>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: async (message, arguments, text , cache) => {
      const cmd = arguments[0]
      const gif = arguments[1]
      await mongo().then(async mongoose =>{
        try{
          mongoose.set('useFindAndModify', false);
          let doc = await guild.find({_id :message.guild.id });
          doc[0].cmds.push({
              name : cmd,
              gif :  gif
          })
          let doc2 = await guild.findOneAndUpdate({_id :message.guild.id }, doc[0]);
          message.reply(`Added Command ${cache[message.guild.id]}${cmd} for the gif :`)
          message.channel.send(gif)
        }
        finally{
          mongoose.connection.close()
        }
        
      })

    },
    permissions: 'ADMINISTRATOR',
    // requiredRoles: ["math"],
  }
  