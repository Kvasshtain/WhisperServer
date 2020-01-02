const express = require('express');
const router = express.Router();
const passport = require('passport')
const { createEmptyFieldNameString, errorHandlerMiddleware } = require('../helper')
const User = require('../models/User')

router.post('/new', (req, res, next) => {
    const { body: { user } } = req

    let emptyFieldNameString = createEmptyFieldNameString(user)

    if (emptyFieldNameString) {
        let err = { message: emptyFieldNameString }
        return next(err)
    }

    userModel.findOne({ email: user.email })
        .then((user) => {
            if (user) {
                return err = { message: 'User with the same email already exists' }
            }
        })
        .then((err) => {
            
            if(err) {
                console.log(err.message)
                return next(err)
            }

            const finalUser = new User(user)

            finalUser.setPassword(user.password)

            return finalUser.save()
                .then(() => res.json({ user: finalUser.toAuthJSON() }))
        })
}, errorHandlerMiddleware)

router.post('/login', (req, res, next) => {
    const { body: { user } } = req

    let emptyFieldNameString = createEmptyFieldNameString(user)

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

module.exports = router