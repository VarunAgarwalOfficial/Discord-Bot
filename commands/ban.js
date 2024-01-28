module.exports = {
    aliases: ['ban'],
    expectedArgs: '<player id or player tag> <(optional) Reason>',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    maxArgs: 2,
    callback: (message, arguments, text) => {
      var member = arguments[0];
      member = member.match(/[0-9]+/)[0];
      message.guild.members.fetch(member)
        .then(ele =>{
          message.channel.send(`banned ${ele.user.username} from the server`)
          message.delete()
          ele.send(`you are banned from ${message.guild.name} for ${arguments[1]}`).then(a =>{
            message.guild.members.ban(member).then()
          })

        })  
        

    },
    permissions: 'BAN_MEMBERS',
    // requiredRoles: ["math"],
  }
  