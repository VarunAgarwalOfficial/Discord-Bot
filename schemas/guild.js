const mongoose = require("mongoose");
const GuildSchema = new mongoose.Schema({
  //guildid: String,
  _id: String,
  prefix: String,
  cmds: {
    type: [
      {
        name: String,
        gif: String,
      },
    ],

    required: false,
  },
});
module.exports = mongoose.model("Guild", GuildSchema);
