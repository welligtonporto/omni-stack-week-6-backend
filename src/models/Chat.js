const mongoose = require("mongoose");

const Chat = new mongoose.Schema(
  {
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Chat", Chat);
