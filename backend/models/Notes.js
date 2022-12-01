const mongoose = require("mongoose");
const Schema = require("mongoose");

const NotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  time: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
