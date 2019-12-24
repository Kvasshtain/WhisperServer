const express = require("express");

const fs = require("fs");
const jsonfile = require('jsonfile');

const app = express();
const jsonParser = express.json();

const messagesFile = 'message.json';

app.use(express.static("../client/whisper/build"));

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

app.listen(3000);

process.on("SIGINT", () => {
    process.exit();
});