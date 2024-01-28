module.exports = {
    aliases: ['unban'],
    expectedArgs: '<player id or player tag>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => {
      var member = arguments[0];
      member = member.match(/[0-9]+/)[0];
      message.guild.members.unban(member).then(user => {
        message.channel.send(`unbanned ${user.username} from ${message.guild.name}`)
    })
    },
    permissions: 'BAN_MEMBERS',
    // requiredRoles: ["math"],
  }
  