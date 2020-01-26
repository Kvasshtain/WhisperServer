const express = require('express');
const router = express.Router();
const passport = require('passport')
const { checkUserFieldsAndReturnWrong, errorHandlerMiddleware } = require('../helper')
const User = require('../models/User')

const authenticate = passport.authenticate('jwt')

router.post('/new', (req, res, next) => {

    if (!req.body) {
        return res.sendStatus(400)
    }
    
    const { body } = req
    const { user } = body

    let wrongFieldNameString = checkUserFieldsAndReturnWrong(user)

    if (wrongFieldNameString) {
        let err = { message: wrongFieldNameString }
        return next(err)
    }

    User.findOne({ email: user.email })
        .then((user) => {
            if (user) {
                return err = { message: 'User with the same email already exists' }
            }
        })
        .then((err) => {
            
            if(err) return next(err)

            const newUser = new User(user)

            newUser.setPassword(user.password)

            return newUser.save()
                .then(() => res.json({ user: newUser.toAuthJSON() }))
        })
}, errorHandlerMiddleware)

router.post('/login', (req, res, next) => {
    
    if (!req.body) {
        return res.sendStatus(400)
    }

    const { body: { user } } = req

    let emptyFieldNameString = checkUserFieldsAndReturnWrong(user)

    if (emptyFieldNameString) {
        let err = { message: emptyFieldNameString }
        return next(err)
    }

    return passport.authenticate('local', (err, passportUser, info) => {
        
        if (err) {
            return next(err)
        }

        if (passportUser) {
            const user = passportUser
            user.token = passportUser.generateJWT()

            return res.json({ user: user.toAuthJSON() })
        }

        return res.status(400).info
    })(req, res, next)
}, errorHandlerMiddleware)

router.get('/search', authenticate, (req, res, next) => {

    let email = req.query.user_seek_data

    User
      .find({'email': email})
      .exec((err, users) => {

        if (err) {
            return next(err)
        }

        res.json(users)
    })
}, errorHandlerMiddleware)

module.exports = router