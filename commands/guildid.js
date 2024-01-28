module.exports = {
    aliases: ['guildid'],
    expectedArgs: '',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
  
      message.reply(`The Guild ID is ${message.guild.id}`)
    },
    // permissions: 'ADMINISTRATOR',
    // requiredRoles: ["math"],
  }
  