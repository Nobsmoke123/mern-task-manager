import http from "node:http";
import dotenv from "dotenv";

import app from "./app.js";
import { Logger } from "./utility/Logger.js";
import Database from "./utility/Database.js";

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await Database.connect();

    server.listen(PORT, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    Logger.error("Application Error: ", error);
    process.exit(1);
  }
}

startServer();
