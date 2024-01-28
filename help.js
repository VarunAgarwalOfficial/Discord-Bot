module.exports = (message , commands,prefix)=>{
  message.channel.send(commands.map(cmd => `${prefix}${cmd.aliases[0]} ${cmd.expectedArgs} : No description provided`).join("\n"))
}