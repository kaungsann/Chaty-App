const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
server = require("http").createServer(app);
io = require("socket.io")(server);
const jwt = require("jsonwebtoken");
const { getData } = require("./utilites/helper");
const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

app.use(express.json());
app.use(cors());

const userRouter = require("./router/user");

app.use("/user", userRouter);

// io.on("connection", (socket) => {
//   socket.on("send", (data) => {
//     console.log(data);
//   });
// });

io.of("/chat")
  .use(async (socket, next) => {
    const token = socket.handshake.query.token;

    if (token) {
      const decodeUser = jwt.decode(token, process.env.SECRET_KEY);
      const user = await getData(decodeUser._id);
      socket.userData = user;
      next();
    } else {
      next(new Error("Tokenization Error"));
    }
  })
  .on("connection", (socket) => {
    require("./utilites/chat").initilized(io, socket);
  });

app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status).json({
    con: true,
    error: error.message,
  });
});

server.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
