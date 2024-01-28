const mongo = require("./../mongo");
const guild = require("../schemas/guild");
module.exports = async (message, command) => {
  await mongo().then(async (mongoose) => {
    try {
      let doc = await guild.find({ _id: message.guild.id });
      for (i of doc[0].cmds) {
        if (i.name == command) message.channel.send(i["gif"]);
      }
    } finally {
      mongoose.connection.close();
    }
  });
};
