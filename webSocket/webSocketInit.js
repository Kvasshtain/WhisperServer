const ws = new require('ws')
const chatUpdateCallbacks = require('../models/Message').chatUpdateCallbacks
const Chat = require('../models/Chat')

module.exports = function(httpServer) {
  const wsServer = new ws.Server({
    server: httpServer,
  })

  wsServer.on('connection', function connection(ws, req) {
    const chatId = req.url.slice(1)

    Chat.findById(chatId).exec((err, chat) => {
      if (err) {
        return next(createError(400, err.message))
      }

      if (!chat) return

      if (!chatUpdateCallbacks.has(chatId)) {
        chatUpdateCallbacks.set(chatId, new Map())
      }

      chatUpdateCallbacks.get(chatId).set(ws, (actionType, message) => {
        ws.send(
          JSON.stringify({
            actionType,
            message,
          })
        )
      })
    })

    ws.on('close', () => {
      chatUpdateCallbacks.get(chatId).delete(ws)
    })
  })

  return wsServer
}
