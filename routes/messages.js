const express = require('express');
const router = express.Router();
const passport = require('passport')
const { errorHandlerMiddleware } = require('../helper')
const Message = require('../models/Message')
const createError = require('http-errors')

const authenticate = passport.authenticate('jwt')

router.get('/listRequest', authenticate, (req, res, next) => {

    const chatId = req.query.chat_id
    const oldestMessageTime = req.query.oldest_message_time
    const fetchMessagesCount = req.query.fetch_messages_count

    if (!chatId) {
        return next(createError(400, 'Bad request. ChatId not found.'))
    }

    if (!oldestMessageTime) {
        return next(createError(400, 'Bad request. OldestMessageTime not found.'))
    }

    if (!fetchMessagesCount) {
        return next(createError(400, 'Bad request. FetchMessagesCount not found.'))
    }

    Message
        .find({ 'chatId': chatId, 'time': { '$lt': oldestMessageTime } })
        .limit(+fetchMessagesCount)
        .sort({ 'time': -1 })
        .exec((err, messagesList) => {

            messagesList.reverse()

            if (err) {
                return next(createError(400, err.message))
            }

            res.json(messagesList)
        })
})

router.get('/lastMessages', authenticate, (req, res, next) => {

    const chatId = req.query.chat_id
    const newestMessageTime = req.query.newest_message_time

    if (!chatId) {
        return next(createError(400, 'Bad request. ChatId not found.'))
    }

    if (!newestMessageTime) {
        return next(createError(400, 'Bad request. NewestMessageTime not found.'))
    }
    
    Message
        .find({ 'chatId': chatId, 'time': { '$gt': newestMessageTime } })
        .exec((err, messagesList) => {

            if (err) {
                return next(createError(400, err.message))
            }

            res.json(messagesList)
        })
})

router.post('/new', authenticate, (req, res, next) => {

    if (!req.body) {
        return next(createError(400, 'Bad request. Body not found.'))
    }

    const message = req.body;

    const newMessage = new Message(message)

    newMessage.save(function (err) {

        if (err) {
            return next(createError(400, err.message))
        }

        res.json(newMessage)
    })

})

module.exports = router