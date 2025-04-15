import http from "node:http";
import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
