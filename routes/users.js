const express = require('express')
const router = express.Router()
const passport = require('passport')
const { checkUserFieldsAndReturnWrong } = require('../helper')
const createError = require('http-errors')
const dal = require('../sequelizeDal/dal')

const authenticate = passport.authenticate('jwt')

router.post('/new', (req, res, next) => {
  if (!req.body) {
    return next(createError(400, 'Bad request. Body not found.'))
  }

  const { body } = req
  const { user } = body

  let wrongFieldNameString = checkUserFieldsAndReturnWrong(user)

  if (wrongFieldNameString) {
    return next(createError(400, wrongFieldNameString))
  }

  dal.saveNewUser(user, next)
})

router.post('/login', (req, res, next) => {
  if (!req.body) {
    return next(createError(400, 'Bad request. Body not found.'))
  }

  const {
    body: { user },
  } = req

  const emptyFieldNameString = checkUserFieldsAndReturnWrong(user)

  if (emptyFieldNameString) {
    return next(createError(400, emptyFieldNameString))
  }

  return passport.authenticate('local', (err, passportUser, info) => {
    if (err) {
      return next(createError(400, err.message))
    }

    if (passportUser) {
      return dal.findUserById(
        passportUser._id,
        (foundUser) => {
          res.json({ user: foundUser.toAuthJSON() })
        },
        next
      )
    }

    return next(createError(400, err.message))
  })(req, res, next)
})

router.get('/search', authenticate, (req, res, next) => {
  const email = req.query.user_seek_data

  if (!email) {
    return next(createError(400, 'Bad request. Email not found.'))
  }

  const json = res.json.bind(res)

  dal.findUsersByEmail(email, json, next)
})

module.exports = router
