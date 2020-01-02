const express = require('express');
const router = express.Router();
const passport = require('passport')
const { errorHandlerMiddleware } = require('../helper')
const Message = require('../models/Message')

const authenticate = passport.authenticate('jwt')

router.get('/listRequest', authenticate, function (request, response) {

    let messageList = []

    Message.find({}, function (err, obj) {

        if (err) return console.error(err)
        messageList = obj

        response.json(messageList)
    })
})

router.post('/new', authenticate, function (request, response) {

    if (!request.body) return response.sendStatus(400)

    let message = request.body;

    const newMessage = new Message({
        chatId: message.chatId,
        time: message.time,
        authorEmail: message.authorEmail,
        authorName: message.authorName,
        text: message.text,
        wasMessageReceived: message.wasMessageReceived,
    })

    newMessage.save(function (err) {
        
        if (err) {
            let err = { message: 'Message save error' }
            return next(err)
        }

        response.json(newMessage)
    })

}, errorHandlerMiddleware)

module.exports = router