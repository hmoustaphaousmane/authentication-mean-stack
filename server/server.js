require("dotenv").config();

require("./utils/db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = require("http").createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
