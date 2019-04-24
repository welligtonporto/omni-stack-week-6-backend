const Message = require("../models/Message");
const Chat = require("../models/Chat");

class MessageController {
  async store(req, res) {
    const chat = await Chat.findById(req.params.id);
    const message = await Message.create({
      message: req.body.message,
      userId: req.body.userId
    });

    chat.messages.push(message);

    await chat.save();

    req.io.sockets.in(chat._id).emit("message", message);

    return res.json(message);
  }
}

module.exports = new MessageController();
