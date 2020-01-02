const mongoose = require('mongoose')
const express = require('express')
const passport = require('passport')
const bodyParser = require("body-parser")

const app = express()

const jsonParser = express.json()
app.use(jsonParser)

//const Chat = require('./models/Chat')

const messagesRouter = require('./routes/messages')
const usersRouter = require('./routes/users')

require('./config/passport')

app.use(passport.initialize())

app.use(bodyParser.json())

ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

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

app.use('/messages', messagesRouter)
app.use('/users', usersRouter)

process.on('SIGINT', () => {
    process.exit()
})