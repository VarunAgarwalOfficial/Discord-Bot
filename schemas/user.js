const mongoose = require("mongoose");
var UserSchema = mongoose.Schema({
  fullname: String,
  username: String,
  guild: String,
  email: String,
  password: String,
  img: { data: Buffer, contentType: String },
});
module.exports = mongoose.model("User", UserSchema);
