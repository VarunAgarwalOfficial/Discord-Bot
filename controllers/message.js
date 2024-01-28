const customcommands = require("./customcommands")
const emoji = require("./emoji")
module.exports = (message , commands , cache , emojis)=>{
  if(message.guild)
    prefix = cache[message.guild.id] || "!"
    if (message.author.bot) return;
    for(command of commands){
        let { member, content, guild } = message;
        const {aliases, permissions , requiredRoles ,minArgs,maxArgs ,callback ,expectedArgs, permissionError} = command
        for(alias of aliases){
            const name = `${prefix}${alias.toLowerCase()}`
            if ( content.toLowerCase().startsWith(`${name} `) || content.toLowerCase() === name ) {
                // A command has been ran
                // Ensure the user has the required permissionss
                for (const permission of permissions) {
                  if (!member.hasPermission(permission)) {
                    message.reply(permissionError)
                    return
                  }
                }

        
                // Ensure the user has the required roles 
                for (const requiredRole of requiredRoles) {
                  const role = guild.roles.cache.find(
                    (role) => role.name === requiredRole
                  )
        
                  if (!role || !member.roles.cache.has(role.id)) {
                    message.reply(
                      `You must have the "${requiredRole}" role to use this command.`
                    )
                    return
                  }
                }
        
                // Split on any number of spaces
                const arguments = content.split(/[ ]+/)
        
                // Remove the command which is the first index
                arguments.shift()
        
                // Ensure we have the correct number of arguments
                if (
                  arguments.length < minArgs ||
                  (maxArgs !== null && arguments.length > maxArgs)
                ) {
                  message.reply(
                    `Incorrect syntax! Use ${prefix}${alias} ${expectedArgs}`
                  )
                  return
                }
        
                // Handle the custom command code
                try{
                  cache = callback(message, arguments, arguments.join(' '), cache)
                }
                catch(err){
                  console.log(err)
                }
                
        
                return
              }


        } 
    }
    if(message.content.startsWith(prefix)){
      customcommands(message , message.content.split(prefix)[1]);
      emoji(message , message.content.split(prefix)[1] , emojis);
    }

}