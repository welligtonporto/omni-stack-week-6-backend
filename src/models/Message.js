const mongoose = require("mongoose");

const Message = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Message", Message);
