const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.CONNECTION_CLUSTER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection to database was started with success...");
  })
  .catch((error) => {
    console.log("Connectio to database was fail: " + error);
  });

module.exports = mongoose;
