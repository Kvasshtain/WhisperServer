const express = require('express')
const router = express.Router()
const passport = require('passport')
const { checkChatFieldsAndReturnWrong } = require('../helper')
const createError = require('http-errors')
const dal = require('../sequelizeDal/dal')

const authenticate = passport.authenticate('jwt')

const bodyNotFoundMessage = 'Bad request. Body not found.'
const userIdNotFoundMessage = 'userId not found'

router.get('/listRequest', authenticate, (req, res, next) => {
  const userId = req.query.user_id

  if (!userId) {
    return next(createError(400, userIdNotFoundMessage))
  }

  const json = res.json.bind(res)

  dal.getUserChats(userId, json, next)
})

router.post('/new', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, bodyNotFoundMessage))
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
    return next(createError(400, bodyNotFoundMessage))
  }

  const {
    body: { chatId, newUserId },
  } = req

  const json = res.json.bind(res)

  dal.addNewUserToChat(chatId, newUserId, json, next)
})

router.delete('/delete', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, bodyNotFoundMessage))
  }

  const chatId = req.body
  const json = res.json.bind(res)

  dal.deletChat(chatId, json, next)
})

router.put('/update', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, bodyNotFoundMessage))
  }

  const chat = req.body
  const json = res.json.bind(res)

  dal.updateChat(chat, json, next)
})

module.exports = router
