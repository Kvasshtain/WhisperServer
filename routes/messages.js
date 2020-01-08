const express = require('express');
const router = express.Router();
const passport = require('passport')
const { errorHandlerMiddleware } = require('../helper')
const Message = require('../models/Message')

const authenticate = passport.authenticate('jwt')

router.get('/listRequest', authenticate, (req, res, next) => {

    let chatId = req.query.chat_id

    Message.find({'chatId': chatId}, (err, messagesList) => {

        if (err) {
            return next(err)
        }

        res.json(messagesList)
    })
}, errorHandlerMiddleware)

router.post('/new', authenticate, (req, res, next) => {

    if (!req.body) {
        return res.sendStatus(400)
    }

    let message = req.body;

    const newMessage = new Message(message)

    newMessage.save(function (err) {
        
        if (err) {
            return next(err)
        }

        res.json(newMessage)
    })

}, errorHandlerMiddleware)

module.exports = router