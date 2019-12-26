const mongoose = require("mongoose")
const express = require("express")

const Schema = mongoose.Schema
const app = express()
const jsonParser = express.json()



// const fs = require("fs")
// const jsonfile = require('jsonfile')

const chatSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }, 
})

const Chat = mongoose.model("Chat", chatSchema);

const messageSchema = new Schema({
    chatId: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    wasMessageReceived: {
        type: Boolean,
        required: true,
    },
},{
    versionKey: false,
})

const Message = mongoose.model("Message", messageSchema);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS')
        res.send()
    })
})

mongoose.connect("mongodb://localhost:27017/whisperdb", { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(5000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.use(express.static("../client/whisper/build"));

app.get("/messageListRequest", jsonParser, function (request, response) {

    console.log("Messages list is requested")

    let messageList = []

    Message.find({}, function (err, obj) {

        if (err) return console.error(err)
        messageList = obj

        response.json(messageList)
    })
})

app.post("/messageReceive", jsonParser, function (request, response) {

    

    if (!request.body) return response.sendStatus(400);

    console.log(request.body)

    console.log(request.body.chatId)

    let message = request.body;

    const user = new Message({
        chatId: message.chatId,
        time: message.time,
        author: message.author,
        text: message.text,
        wasMessageReceived: message.wasMessageReceived,
    })

    console.log("Post new message")
    
    user.save(function (err) {
        if (err) return console.log(err);
        response.json(user);
    })
})

// const messagesFile = 'message.json'

//app.use(express.static("../client/whisper/build"));


// app.get("/messageListRequest", jsonParser, function (request, response) {

//     console.log("Messages list is requested")

//     let messageList = []
    
//     jsonfile.readFile(messagesFile, function (err, obj) {
//         if (err) console.error(err)
//         messageList = obj
    
//         response.json(messageList)
//     })
// })

// app.post("/messageReceive", jsonParser, function (request, response) {

//     jsonfile.readFile(messagesFile)
//         .then(
//             obj => {
    
//                 let messageList = obj
//                 messageList.push(request.body)
//                 jsonfile.writeFile(messagesFile, messageList, function (err) {
//                     if (err) console.error(err)
//                 })
//                 response.json(messageList)
//             }
//         )
// })

// app.listen(5000)

process.on("SIGINT", () => {
    process.exit()
})