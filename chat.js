
function sendMessage() {
  const input = document.getElementById('message-input');
  const box = document.getElementById('chat-box');
  const msg = document.createElement('div');
  msg.textContent = input.value;
  box.appendChild(msg);
  input.value = '';
}
