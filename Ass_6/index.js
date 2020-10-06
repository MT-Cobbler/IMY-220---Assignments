//create a file using node
const fs = require('fs');
const filename = "messageLog.txt";
fs.writeFile(filename, 'Messages' + '\r\n', (err) => {
    if (err) throw err;

})

const express = require('express');
const app = express();
const server = app.listen(3000, () => {
    console.log('Listening at localhost:3000');
});
const io = require('socket.io').listen(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/');
});

io.on('connection', (socket) => {
    socket.on('message', (msg, name) => {
        console.log('Name: ' + name + ', Message: ' + msg);
        let line = 'Name: ' + name + ', Message: ' + msg + '\r\n';
        fs.appendFile(filename, line, (err) => {
            if (err) throw err;

        })
    })
});