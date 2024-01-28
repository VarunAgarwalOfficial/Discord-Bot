const mongo = require("./../mongo")
const guild = require("../schemas/guild")
module.exports = {
    aliases: ['prefix'],
    expectedArgs: '<char>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: async (message, arguments, text , cache) => {
      await mongo().then(async mongoose =>{
        try{
          mongoose.set('useFindAndModify', false);
          Guild = {
              _id: message.guild.id,
              prefix: arguments[0]
          }
          let doc = await guild.findOneAndUpdate({_id :message.guild.id }, Guild , {upsert: true});

          console.log(doc)
          cache[message.guild.id] = arguments[0]
        }
        finally{
          mongoose.connection.close()
        }
        
      })
      message.reply(`done`)
      return cache
    },
    permissions: 'ADMINISTRATOR',
  }
  