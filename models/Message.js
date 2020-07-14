const mongoose = require('mongoose')

const { Schema } = mongoose

const messageSchema = new Schema(
  {
    clientSideId: {
      type: String,
      require: true,
    },
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    authorEmail: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

const chatUpdateCallbacks = new Map()

const actionTypes = ['save', 'updateOne', 'deleteOne']

actionTypes.forEach(actionType => {
  messageSchema.post(actionType, (message, next) => {
    const chatId = message.chatId.toString()

    if (chatUpdateCallbacks.has(chatId)) {
      const callbacks = chatUpdateCallbacks.get(chatId)

      for (let callback of callbacks.values()) {
        callback(actionType, message)
      }
    }

    next()
  })
})

const Message = mongoose.model('Message', messageSchema)

Message.chatUpdateCallbacks = chatUpdateCallbacks

module.exports = Message
