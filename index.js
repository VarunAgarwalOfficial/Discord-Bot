require("dotenv").config();
const mongo = require("./mongo");
const { Client } = require("discord.js");
const client = new Client();
const messagecont = require("./controllers/message");
const guild = require("./schemas/guild");
const cmdhandler = require("./commandhandler")();
const helpcmd = require("./help");
var prefixCache = {};
var servers = [842423319847632906, 842462871702601749];
var emojis = [];

client.on("ready", async () => {
  console.log(`${client.user.tag} has logged in.`);
  await mongo().then(async (mongoose) => {
    try {
      let cache = await guild.find({});
      //console.log(cache)
      for (gld of cache) {
        prefixCache[gld._id] = gld.prefix;
      }
    } finally {
      mongoose.connection.close();
    }
  });

  client.emojis.cache.forEach((emoji) => {
    for (let i = 0; i < servers.length; i++) {
      const server = servers[i];
      if (emoji.guild.id == server) {
        emojis.push(emoji);
      }
    }
  });
  ///console.log(prefixCache)
});

client.on("message", (message) => {
  if (message.content == `${prefixCache[message.guild.id]}help`) {
    helpcmd(message, cmdhandler, prefixCache[message.guild.id]);
  }
  prefixcache = messagecont(message, cmdhandler, prefixCache, emojis);
});

client.login(process.env.TOKEN);

const user = require("./schemas/user");
const express = require("express");
const app = express();

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const morgan = require("morgan");
app.use(express.static("public"));
const upload = multer({ storage: storage });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/commands", async (req, res) => {
  // await mongo().then(async (mongoose) => {
  //   var docs = await guild.find({});
  //   res.json(docs);
  //   mongoose.connection.close();
  // });
  res.json(cmdhandler);
});

app.post("/sign_up", upload.single("profile-image"), async (req, res) => {
  await mongo().then(async (mongoose) => {
    if (!req.file) {
      console.log("No file received");
      res.send({
        success: false,
      });
    } else {
      console.log("file received");
      const filePath = req.file.path;
      var fullname = req.body.fullname;
      var username = req.body.username;
      var email = req.body.email;
      var password = req.body.password;
      var guild = req.body.guild;

      var data = new user();

      data.fullname = fullname;
      data.username = username;
      data.guild = guild;
      data.email = email;
      data.password = password;
      data.img.data = filePath;
      data.img.contentType = "image/png";
      data
        .save()
        .then((item) => {
          console.log("saved user");
        })
        .catch(console.log("error!"));

      res.sendFile(__dirname + "/public/login.html");
      mongoose.connection.close();
    }
  });
});

app.get("/login", async ({ query }, res) => {
  await mongo().then(async (mongoose) => {
    users = await user.find({}, "username password guild");
    gotuser = users.find((user) => user.username == query.username);
    console.log(query);

    if (gotuser && gotuser.password == query.password) {
      senddata = {
        status: "success",
        guild: gotuser.guild,
      };
      res.json(senddata);
    } else {
      res.json({
        status: "failed",
      });
    }
  });
});

app.listen(3000, () => {
  console.log("listening at 3k");
});
