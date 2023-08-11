const helper = require("../utilites/helper");

let liveUser = async (socketId, currentUser) => {
  currentUser["socketId"] = socketId;
  helper.getData(socketId, currentUser._id);
  helper.getData(currentUser._id, currentUser);
};

let initilized = async (io, socket) => {
  socket["userId"] = socket.userData._id;
  await liveUser(socket.id, socket.userData);
  socket.on("send", (data) => incomingMessage(io, socket, data));
};

module.exports = {
  initilized,
};
