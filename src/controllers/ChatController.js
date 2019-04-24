const Chat = require("../models/Chat");

class ChatController {
  async store(req, res) {
    const chat = await Chat.create(req.body);

    return res.json(chat);
  }

  async show(req, res) {
    const chat = await Chat.findById(req.params.id).populate({
      path: "messages"
    });

    return res.json(chat);
  }
}

module.exports = new ChatController();
