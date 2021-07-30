
const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config');


const server = restify.createServer();

// Middleware
server.use(restify.plugins.bodyParser());

// Protect Routes
//
server.listen(config.PORT, () => {
  mongoose.set("useFindAndModify", false);
  mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => {
  console.log("connected to db");
  require("./routes/beneficiaries")(server);
  console.log("routes loaded");
  console.log("server is up and running");
});
