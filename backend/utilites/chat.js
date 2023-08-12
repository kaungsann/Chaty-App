const helper = require("../utilites/helper");
const messageDb = require("../model/message");

const unreadDb = require("../model/unread");

const loadUnreadMsg = async (socket) => {
  let unreads = await unreadDb.find({ to: socket.userId }); //call socket id from intilized function
  if (unreads.length > 0) {
    unreads.forEach(async (unread) => {
      await unreadDb.findByIdAndDelete(unread._id);
    });
  }
  socket.emit("unreads", { msg: unreads.length });
};

const loadMore = async (socket, data) => {
  let limit = Number(process.env.MSG_LIMIT);
  let skip = Number(data.page) == 1 ? 0 : Number(obj.page) - 1;
  let skipCount = limit * skip;
  let messages = await messageDb
    .find({
      $or: [{ from: socket.userId }, { to: socket.userId }],
    })
    .sort({ create: -1 })
    .skip(skipCount)
    .limit(limit);

  socket.emit("messages", messages);
};

//is there in redis login active and noactive
let liveUser = async (socketId, currentUser) => {
  currentUser["socketId"] = socketId;
  helper.setData(socketId, currentUser._id);
  helper.setData(currentUser._id, currentUser);
};

//user send data and socketid add in user
let initilized = async (io, socket) => {
  socket["userId"] = socket.userData._id;
  await liveUser(socket.id, socket.userData);

  //tom listen mg mg of event message
  socket.on("message", (data) => incomingMessage(io, socket, data));
  socket.on("unreads", (data) => loadUnreadMsg(socket));
  socket.on("load-more", (data) => loadMore(socket, data));
};

//user send data save to message databse
let incomingMessage = async (io, socket, data) => {
  let results = await new messageDb(data).save();
  let msgResults = await messageDb
    .findById(results._id)
    .populate("from to", "_id name");

  // check to user active and no active
  const toUser = await helper.getData(msgResults.to._id);

  if (toUser) {
    let toUserSocket = io.of("/chat").to(toUser.socketId);

    if (toUserSocket) {
      toUserSocket.emit("message", msgResults);
    } else {
      next(new Error("to user socket id require"));
    }
  } else {
    await new unreadDb({
      from: msgResults.from._id,
      to: msgResults.to._id,
    }).save();
  }
  socket.emit("message", msgResults);
};

module.exports = {
  initilized,
};
