const mongoose = require('mongoose')
const express = require('express')
const passport = require('passport')
const bodyParser = require("body-parser")

const app = express()

const jsonParser = express.json()
app.use(jsonParser)

const User = require('./models/User')
const userModel = mongoose.model('User')
require('./config/passport')

app.use(passport.initialize())

app.use(bodyParser.json())

const Chat = require('./models/Chat')
const Message = require('./models/Message')

ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

const authenticate = passport.authenticate('jwt')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS')
        res.send()
    })
})

mongoose.connect('mongodb://localhost:27017/whisperdb', { useNewUrlParser: true }, function (err) {
    if (err) return console.log(err)
    app.listen(4000, function () {
        console.log('Сервер ожидает подключения...')
    });
});

app.use(express.static('../client/build'))

const createEmptyFieldNameString = (user) => {

    if (!user.email) {
        return 'email'
    }

    if (!user.password) {
        return 'password'
    }
}

const errorHandlerMiddleware = (err, req, res, next) => {
    res.json({ message: err.message })
}

app.post('/newUser', (req, res, next) => {
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

app.post('/login', (req, res, next) => {
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

app.get('/messageListRequest', authenticate, function (request, response) {

    let messageList = []

    Message.find({}, function (err, obj) {

        if (err) return console.error(err)
        messageList = obj

        response.json(messageList)
    })
})

app.post('/messageReceive', authenticate, function (request, response) {

    if (!request.body) return response.sendStatus(400)

    let message = request.body;

    const newMessage = new Message({
        chatId: message.chatId,
        time: message.time,
        authorEmail: message.authorEmail,
        authorName: message.authorName,
        text: message.text,
        wasMessageReceived: message.wasMessageReceived,
    })

    newMessage.save(function (err) {
        
        if (err) {
            let err = { message: 'Message save error' }
            return next(err)
        }

        response.json(newMessage)
    })

}, errorHandlerMiddleware)

process.on('SIGINT', () => {
    process.exit()
})