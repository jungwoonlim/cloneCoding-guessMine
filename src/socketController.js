import events from "./events";

const socketContoller = socket => {
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
  });
};
export default socketContoller;
