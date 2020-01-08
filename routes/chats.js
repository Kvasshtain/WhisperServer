const express = require('express');
const router = express.Router();
const passport = require('passport')
const { checkChatFieldsAndReturnWrong, errorHandlerMiddleware } = require('../helper')
const Chat = require('../models/Chat')

const authenticate = passport.authenticate('jwt')

router.get('/listRequest', authenticate, (req, res, next) => {

    let userId = req.query.user_id

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
    const { body: { chat } } = req

    let wrongFieldNameString = checkChatFieldsAndReturnWrong(chat)
    
    if (wrongFieldNameString) {

        let err = { message: wrongFieldNameString }

        return next(err)
    }


    Chat.findOne({ name: chat.name })
        .then((oldChat) => {

            if (oldChat) {
                Chat.updateOne({ name: chat.name }, { users: chat.users }, function (err, result) {

                    if (err) {
                        return next(err)
                    }
                })
            }

            const newChat = new Chat(chat)

            newChat.save(function (err) {

                if (err) {
                    return next(err)
                }
        
                res.json({chat: newChat})
            })
        })
}, errorHandlerMiddleware)

module.exports = router