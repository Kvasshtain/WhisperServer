const express = require('express')
const router = express.Router()
const passport = require('passport')
const { checkChatFieldsAndReturnWrong } = require('../helper')
const Chat = require('../models/Chat')
const createError = require('http-errors')

const authenticate = passport.authenticate('jwt')

router.get('/listRequest', authenticate, (req, res, next) => {
  const userId = req.query.user_id

  if (!userId) {
    return next(createError(400, 'userId not found'))
  }

  Chat.find({ users: userId })
    .populate('users')
    .exec((err, chatsList) => {
      if (err) {
        return next(createError(400, err.message))
      }

      res.json(chatsList)
    })
})

router.post('/new', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, 'Bad request. Body not found.'))
  }

  const {
    body: { chat },
  } = req

  const wrongFieldNameString = checkChatFieldsAndReturnWrong(chat)

  if (wrongFieldNameString) {
    return next(createError(400, wrongFieldNameString))
  }

  const newChat = new Chat(chat)

  newChat.save(function(err) {
    if (err) {
      return next(createError(400, err.message))
    }

    res.json({ chat: newChat })
  })
})

router.post('/addNewUser', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, 'Bad request. Body not found.'))
  }

  const {
    body: { chatId, newUserId },
  } = req

  Chat.update({ _id: chatId }, { $addToSet: { users: newUserId } }).exec(
    (err, updatedChat) => {
      if (err) {
        return next(createError(400, err.message))
      }

      res.json({ chat: updatedChat })
    }
  )
})

module.exports = router
