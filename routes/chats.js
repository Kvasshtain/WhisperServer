const express = require('express');
const router = express.Router();
const passport = require('passport')
const { checkChatFieldsAndReturnWrong, errorHandlerMiddleware } = require('../helper')
const Chat = require('../models/Chat')

const authenticate = passport.authenticate('jwt')

router.get('/listRequest', authenticate, (req, res, next) => {

    const userId = req.query.user_id

    if (!userId) {
        return res.sendStatus(400)
    }

    Chat.find({'users': userId})
    .populate('users')
    .exec((err, chatsList) => {

        if (err) {
            return next(err)
        }

        res.json(chatsList)
    })
}, errorHandlerMiddleware)

router.post('/new', authenticate, (req, res, next) => {
    
    if (!req.body) {
        return res.sendStatus(400)
    }
    
    const { body: { chat } } = req

    const wrongFieldNameString = checkChatFieldsAndReturnWrong(chat)
    
    if (wrongFieldNameString) {

        const err = { message: wrongFieldNameString }

        return next(err)
    }

    const newChat = new Chat(chat)

    newChat.save(function (err) {

        if (err) {
            return next(err)
        }

        res.json({ chat: newChat })
    })

}, errorHandlerMiddleware)

router.post('/addNewUser', authenticate, (req, res, next) => {
    
    if (!req.body) {
        return res.sendStatus(400)
    }

    const { body: { chatId, newUserId } } = req

    Chat.update({ _id: chatId }, { $push: { users: newUserId } })
    .exec((err, updatedChat) => {

        if (err) {
            return next(err)
        }

        res.json({ chat: updatedChat })
    })
}, errorHandlerMiddleware)

module.exports = router