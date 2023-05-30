const qrcode = require("qrcode-terminal");
const contacts = require("./contacts.json");
const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  console.log({ [message.from]: message.body });
  if (message.from == contacts.sujeto) {
    client.sendMessage(message.from, `* hello world *`);
  }
});

client.initialize();
