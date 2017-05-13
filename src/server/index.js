import express from "express";
import io from 'socket.io';
import {index} from "./templates/panel/panel";

let app = express();
let socket = io();

socket.on('connection', function(socket) {
    socket.on('test', function() {
        socket.emit('require', { type: "aaa", link: "bbb" });
    });
});

app.get('/', function (req, res) {
    res.send(index);
});

app.get('/require/{module}', function (req, res) {
    console.log(123);
    switch (req.param('module')) {
        case 'socket':
            res.sendFile(io);
            break;
        default:
            console.log("Trying to require unsupported module.");
    }
});

app.listen(4242, function () {
    console.log("Listening on port :4242");
});
