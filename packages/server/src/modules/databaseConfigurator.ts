require("dotenv").config();

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

module.exports.connect = () => {
  mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on("error", (error: any) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
};
