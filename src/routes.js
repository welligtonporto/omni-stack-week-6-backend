const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");
const ChatController = require("./controllers/ChatController");
const MessageController = require("./controllers/MessageController");

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);
routes.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);
routes.post("/chat", ChatController.store); // Create a chat
routes.get("/chat/:id", ChatController.show); // Get all messages
routes.post("/chat/:id/message", MessageController.store); // Send a message

module.exports = routes;
