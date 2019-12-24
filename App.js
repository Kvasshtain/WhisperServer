const express = require("express");

const fs = require("fs");
const jsonfile = require('jsonfile');

const app = express();
const jsonParser = express.json();

const messagesFile = 'message.json';

//app.use(express.static("../client/whisper/build"));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.get("/messageListRequest", jsonParser, function (request, response) {

    console.log("Messages list is requested");

    let messageList = [];
    
    jsonfile.readFile(messagesFile, function (err, obj) {
        if (err) console.error(err)
        messageList = obj;
    
        response.json(messageList);
    })
})

app.post("/messageReceive", jsonParser, function (request, response) {

    jsonfile.readFile(messagesFile)
        .then(
            obj => {
    
                let messageList = obj;
                messageList.push(request.body);
                jsonfile.writeFile(messagesFile, messageList, function (err) {
                    if (err) console.error(err)
                });
                response.json(messageList);
            }
        )
});

app.listen(5000);

process.on("SIGINT", () => {
    process.exit();
});