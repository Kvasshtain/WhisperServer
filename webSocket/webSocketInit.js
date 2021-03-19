const ws = new require('ws')
const dal = require('../sequelizeDal/dal')

const chatUpdateCallbacks = require('../sequelizeModels/Message')
  .chatUpdateCallbacks

module.exports = function (httpServer) {
  function noop() {}

  function heartbeat() {
    this.isAlive = true
  }

  const wsServer = new ws.Server({
    server: httpServer,
  })

  wsServer.on('connection', function connection(ws, req) {
    ws.isAlive = true
    ws.on('pong', heartbeat)
    const chatId = req.url.slice(1)

    dal.findChatById(chatId, (chat) => {
      if (!chat) return

      if (!chatUpdateCallbacks.has(chatId)) {
        chatUpdateCallbacks.set(chatId, new Map())
      }

      chatUpdateCallbacks.get(chatId).set(ws, (actionType, message) => {
        dal.findUserById(message.UserId, (user) => {
          messageInfo = {
            _id: message._id,
            clientSideId: message.clientSideId,
            text: message.text,
            time: message.time,
            authorId: user._id,
            authorEmail: user.email,
            authorName: user.name,
          }

          ws.send(
            JSON.stringify({
              actionType,
              message: messageInfo,
            })
          )
        })
      })
    })

    ws.on('close', () => {
      const chat = chatUpdateCallbacks.get(chatId)
      if (chat){
        chat.delete(ws)
      }
    })
  })

  const interval = setInterval(function ping() {
    wsServer.clients.forEach(function each(ws) {
      if (ws.isAlive === false) return ws.terminate()

      ws.isAlive = false
      ws.ping(noop)
    })
  }, 10000)

  wsServer.on('close', function close() {
    clearInterval(interval)
  })

  return wsServer
}
