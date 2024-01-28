const fs = require('fs')
const path = require('path')
const commands = []
const validatePermissions = (permissions) => {
  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ];

  for (const permission of permissions) {
    if (!validPermissions.includes(permission)) {
      throw new Error(`Unknown permission node "${permission}"`);
    }
  }
};


var checkcommand = option =>{
    let {
        aliases,
        expectedArgs = '',
        permissionError = 'You do not have permission to run this command.',
        minArgs = 0,
        maxArgs = null,
        permissions = [],
        requiredRoles = [],
        callback,
    } = option;

    if (typeof aliases === 'string') {
        aliases = [aliases]
    }
    if (permissions.length) {
        if (typeof permissions === 'string') {
          permissions = [permissions]
        }
        validatePermissions(permissions)
    }
    option = {aliases,
      expectedArgs,
      permissionError,
      minArgs ,
      maxArgs ,
      permissions ,
      requiredRoles,
      callback,}
    console.log( `adding ${aliases[0]}`)
    return option
}



module.exports = ()=>{
    const files = fs.readdirSync(path.join(__dirname, "commands"))
    for (const file of files) {
        const option = require(path.join(__dirname,"commands", file))
        commands.push(checkcommand(option))
    }
    return commands;
}
