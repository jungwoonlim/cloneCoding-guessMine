const messages = document.getElementById("jsMessages");
const sendMsg = document.getElementById("jsSendMsg");

const appendMsg = (text, nickname) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="author ${nickname ? "out" : "self"}">${
    nickname ? nickname : "you"
  }: </span> ${text}
  `;
  messages.appendChild(li);
};

const handleSendMsg = e => {
  e.preventDefault();
  const input = sendMsg.querySelector("input");
  const { value } = input;
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}