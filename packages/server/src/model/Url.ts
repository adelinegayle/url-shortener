import mongoose from "mongoose";

const schema = new mongoose.Schema({
  shortURL: {
    required: true,
    type: String,
  },
  longURL: {
    required: true,
    type: String,
  },
  userID: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("url", schema);
