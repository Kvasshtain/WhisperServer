const express = require('express');
const router = express.Router();
const passport = require('passport')
const { checkUserFieldsAndReturnWrong, errorHandlerMiddleware } = require('../helper')
const User = require('../models/User')
const createError = require('http-errors')


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

    const newUser = new User(user)

    newUser.setPassword(user.password)

    return newUser.save()
        .then(() => res.json({ user: newUser.toAuthJSON() }))
        .catch(function (err) {
            if (err.code === 11000) {
                return next(createError(500, 'User with same email already exists'))
            }
        })

})

router.post('/login', (req, res, next) => {
    
    if (!req.body) {
        return next(createError(400, 'Bad request. Body not found.'))
    }

    const { body: { user } } = req

    const emptyFieldNameString = checkUserFieldsAndReturnWrong(user)

    if (emptyFieldNameString) {
        return next(createError(400, emptyFieldNameString))
    }

    return passport.authenticate('local', (err, passportUser, info) => {
        
        if (err) {
            return next(createError(400, err.message))
        }

        if (passportUser) {
            const user = passportUser
            user.token = passportUser.generateJWT()

            return res.json({ user: user.toAuthJSON() })
        }

        return next(createError(400, err.message))
    })(req, res, next)
})

router.get('/search', authenticate, (req, res, next) => {

    const email = req.query.user_seek_data

    if (!email) {
        return next(createError(400, 'Bad request. Email not found.'))
    }

    User
      .find({'email': email})
      .exec((err, users) => {

        if (err) {
            return next(createError(400, err.message))
        }

        res.json(users)
    })
})

module.exports = router