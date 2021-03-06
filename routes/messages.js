const express = require('express')
const router = express.Router()
const passport = require('passport')
const createError = require('http-errors')
const dal = require('../sequelizeDal/dal')

const authenticate = passport.authenticate('jwt')

const chatIdNotFoundMessage = 'Bad request. ChatId not found.'
const oldestMessageTimeNotFoundMessage = 'Bad request. OldestMessageTime not found.'
const fetchMessagesCountNotFoundMessage = 'Bad request. FetchMessagesCount not found.'
const  newestMessageTimeNotFoundMessage = 'Bad request. NewestMessageTime not found.'
const bodyNotFoundMessage = 'Bad request. Body not found.'

router.get('/listRequest', authenticate, (req, res, next) => {
  const chatId = req.query.chat_id
  const oldestMessageTime = req.query.oldest_message_time
  const fetchMessagesCount = req.query.fetch_messages_count

  if (!chatId) {
    return next(createError(400, chatIdNotFoundMessage))
  }

  if (!oldestMessageTime) {
    return next(createError(400, oldestMessageTimeNotFoundMessage))
  }

  if (!fetchMessagesCount) {
    return next(createError(400, fetchMessagesCountNotFoundMessage))
  }

  const json = res.json.bind(res)

  dal.getMessages(chatId, oldestMessageTime, fetchMessagesCount, json, next)
})

router.get('/lastMessages', authenticate, (req, res, next) => {
  const chatId = req.query.chat_id
  const newestMessageTime = req.query.newest_message_time

  if (!chatId) {
    return next(createError(400, chatIdNotFoundMessage))
  }

  if (!newestMessageTime) {
    return next(createError(400, newestMessageTimeNotFoundMessage))
  }

  const json = res.json.bind(res)

  dal.getLastMessages(chatId, newestMessageTime, json, next)
})

router.post('/new', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, bodyNotFoundMessage))
  }

  const message = req.body

  const json = res.json.bind(res)

  dal.saveNewMessage(message, json, next)
})

router.delete('/delete', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, bodyNotFoundMessage))
  }

  const messageId = req.body
  const json = res.json.bind(res)

  dal.deletMessage(messageId, json, next)
})

router.put('/update', authenticate, (req, res, next) => {
  if (!req.body) {
    return next(createError(400, bodyNotFoundMessage))
  }

  const message = req.body
  const json = res.json.bind(res)

  dal.updateMessage(message, json, next)
})

module.exports = router
