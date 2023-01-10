const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});
 
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log(message.body)
    console.log(message.from)
    if(message.from == '34680953843-1405427733@g.us'){
        client.sendMessage(message.from, `* hello world*`);
    }

})

client.initialize();
 