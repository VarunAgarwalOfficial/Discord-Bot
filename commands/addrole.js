module.exports = {
    aliases: ['addRole'],
    expectedArgs: '<role_name> <user_tag or user_id>',
    permissionError: 'You need role management to run this command',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        try{        
            var member = arguments[1];
            member = member.match(/[0-9]+/)[0];
            message.guild.members.fetch(member)
            .then(ele =>{
                let role = message.guild.roles.cache.find(r => r.name == arguments[0]);
                ele.roles.add(role).catch(console.error);
            }) 
        }catch(err){
            console.log(err)
        }
    },
    permissions: 'MANAGE_ROLES',
    // requiredRoles: ["role_management"],
  }
  