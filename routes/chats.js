const express = require('express')
const router = express.Router()
const passport = require('passport')
const { checkChatFieldsAndReturnWrong } = require('../helper')
const createError = require('http-errors')
const dal = require('../sequelizeDal/dal')

const authenticate = passport.authenticate('jwt')

router.get('/listRequest', authenticate, (req, res, next) => {
  const userId = req.query.user_id

  if (!userId) {
    return next(createError(400, 'userId not found'))
  }

  const json = res.json.bind(res)

  dal.getUserChats(userId, json, next)
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

  const json = res.json.bind(res)

  dal.saveChat(chat, json, next)
})

router.post('/addNewUser', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, 'Bad request. Body not found.'))
  }

  const {
    body: { chatId, newUserId },
  } = req

  const json = res.json.bind(res)

  dal.addNewUserToChat(chatId, newUserId, json, next)
})

module.exports = router
