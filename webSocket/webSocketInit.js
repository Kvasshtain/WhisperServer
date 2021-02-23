const ws = new require('ws')
const dal = require('../sequelizeDal/dal')

const chatUpdateCallbacks = require('../sequelizeModels/Message')
  .chatUpdateCallbacks

module.exports = function (httpServer) {
  const wsServer = new ws.Server({
    server: httpServer,
  })

  wsServer.on('connection', function connection(ws, req) {
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
      chatUpdateCallbacks.get(chatId).delete(ws)
    })
  })

  return wsServer
}
