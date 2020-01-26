const express = require('express');
const router = express.Router();
const passport = require('passport')
const { errorHandlerMiddleware } = require('../helper')
const Message = require('../models/Message')

const authenticate = passport.authenticate('jwt')

router.get('/listRequest', authenticate, (req, res, next) => {

    const chatId = req.query.chat_id
    const oldestMessageTime = req.query.oldest_message_time
    const fetchMessagesCount = req.query.fetch_messages_count

    Message
        .find({ 'chatId': chatId, 'time': { '$lt': oldestMessageTime } })
        .limit(+fetchMessagesCount)
        .sort({ 'time': -1 })
        .exec((err, messagesList) => {

            messagesList.reverse()

            if (err) {
                return next(err)
            }

            res.json(messagesList)
        })
}, errorHandlerMiddleware)

router.get('/lastMessages', authenticate, (req, res, next) => {

    const chatId = req.query.chat_id
    const newestMessageTime = req.query.newest_message_time

    console.log(newestMessageTime)

    Message
        .find({ 'chatId': chatId, 'time': { '$gt': newestMessageTime } })
        .exec((err, messagesList) => {

            console.log(messagesList)

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

    const message = req.body;

    const newMessage = new Message(message)

    newMessage.save(function (err) {

        if (err) {
            return next(err)
        }

        res.json(newMessage)
    })

}, errorHandlerMiddleware)

module.exports = router