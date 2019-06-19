const socketContoller = socket => {
  socket.on("setNickname", ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
  });
};
export default socketContoller;
