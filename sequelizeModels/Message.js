const Sequelize = require('sequelize')
const sequelize = require('../sequelizeConnection/connection')

class Message extends Sequelize.Model {}

Message.init(
  {
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    clientSideId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    time: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Message',
  }
)

const chatUpdateCallbacks = new Map()

const actionTypes = {
  save: 'afterCreate',
  updateOne: 'afterUpdate',
  deleteOne: 'afterDestroy',
}

for (key in actionTypes) {
  let actionType = actionTypes[key]
  let actionDescription = key

  Message.addHook(actionType, (message, options) => {
    const chatId = message.ChatId.toString()

    if (chatUpdateCallbacks.has(chatId)) {
      const callbacks = chatUpdateCallbacks.get(chatId)

      for (let callback of callbacks.values()) {
        callback(actionDescription, message)
      }
    }
  })
}

Message.chatUpdateCallbacks = chatUpdateCallbacks

module.exports = Message
