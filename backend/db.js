const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/notebook?directConnection=true&authMechanism=DEFAULT&tls=false&readPreference=primary";

const connectToMongo = async () => {
  mongoose.connect(mongoURI, () => {
    console.log("MongoDb connected to DB");
  });
};

module.exports = connectToMongo;
