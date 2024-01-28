module.exports = {
    aliases: ['purge', 'massdelete'],
    expectedArgs: '<num1>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text,cache) => {
        message.channel.bulkDelete(parseInt(arguments[0]) + 1).then(messages =>{
            sent = message.channel.send(`Deleted ${messages.size} messages`).then(mes =>{
                setTimeout(function(){mes.delete(); }, 3000);
            })
        })
    },
    permissions: 'ADMINISTRATOR',
    // requiredRoles: ["math"],
  }
  