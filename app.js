const mongoose = require('mongoose')
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const http = require('http')
const port = process.env.PORT || 4000;

const app = express()

const jsonParser = express.json()
app.use(jsonParser)

const messagesRouter = require('./routes/messages')
const usersRouter = require('./routes/users')
const chatsRouter = require('./routes/chats')

require('./config/passport')

app.use(passport.initialize())

app.use(bodyParser.json())

ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

const httpServer = http.createServer(app)

require('./webSocket/webSocketInit')(httpServer)

mongoose.connect(
  'mongodb://localhost:27017/whisperdb',
  { useNewUrlParser: true },
  function(err) {
    if (err) return console.log(err)
    httpServer.listen(port, function() {
      console.log('Сервер ожидает подключения...')
    })
  }
)

// httpServer.listen(port, function() {
//   console.log('Сервер ожидает подключения...')
// })

app.use(express.static('./static'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()

  app.options('*', (req, res) => {
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PATCH, PUT, POST, DELETE, OPTIONS'
    )
    res.send()
  })
})

app.use('/users', usersRouter)
app.use('/messages', messagesRouter)
app.use('/chats', chatsRouter)

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  })
})

process.on('SIGINT', () => {
  process.exit()
})
