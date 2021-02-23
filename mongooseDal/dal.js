const Chat = require('../mongooseModels/Chat')
const Message = require('../mongooseModels/Message')
const User = require('../mongooseModels/User')
const createError = require('http-errors')
const notUniqueErrorCode = 11000

dal = {
  getUserChats: function (userId, done, next) {
    Chat.find({ users: userId })
      .populate('users', '_id email name')
      .exec((err, chatsList) => {
        if (err) {
          next(createError(400, err.message))
        }

        done(chatsList)
      })
  },

  saveChat: function (chat, done, next) {
    const newChat = new Chat(chat)

    newChat.save(function (err) {
      if (err) {
        next(createError(400, err.message))
      }

      done({ chat: newChat })
    })
  },

  addNewUserToChat: function (chatId, newUserId, done, next) {
    Chat.update({ _id: chatId }, { $addToSet: { users: newUserId } }).exec(
      (err, updatedChat) => {
        if (err) {
          next(createError(400, err.message))
        }

        done({ chat: updatedChat })
      }
    )
  },

  getMessages: function (
    chatId,
    oldestMessageTime,
    fetchMessagesCount,
    done,
    next
  ) {
    Message.find({ chatId: chatId, time: { $lt: oldestMessageTime } })
      .limit(+fetchMessagesCount)
      .sort({ time: -1 })
      .exec((err, messagesList) => {
        messagesList.reverse()

        if (err) {
          next(createError(400, err.message))
        }

        done(messagesList)
      })
  },

  getLastMessages: function (chatId, newestMessageTime, done, next) {
    Message.find({ chatId: chatId, time: { $gt: newestMessageTime } }).exec(
      (err, messagesList) => {
        if (err) {
          next(createError(400, err.message))
        }

        done(messagesList)
      }
    )
  },

  saveNewMessage: function (message, done, next) {
    const newMessage = new Message(message)

    newMessage.save(function (err) {
      if (err) {
        next(createError(400, err.message))
      }

      done(newMessage)
    })
  },

  saveNewUser: function (user, next) {
    const newUser = new User(user)

    newUser.setPassword(user.password)

    newUser.save().catch(function (err) {
      if (err.code === notUniqueErrorCode) {
        next(createError(500, 'User with same email already exists'))
      }
    })
  },

  findUser: function (email, done, next) {
    User.find({ email: email }).exec((err, users) => {
      if (err) {
        next(createError(400, err.message))
      }

      usersPublicInfo = users.map((user) => {
        var obj = user.toObject()
        delete obj.hash
        delete obj.salt
        return obj
      })

      done(usersPublicInfo)
    })
  },

  findUserById: function (id, done) {
    User.findById(id, (err, user) => {
      if (err) {
        done(err)
      }

      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  },

  checkUserPassword: function (email, password, done) {
    User.findOne({ email })
      .then((user, err) => {
        if (err) {
          done(err)
        }

        if (!user || !user.checkPassword(password)) {
          done({ message: 'email or passwordis invalid' }, false)
        }

        done(null, user)
      })
      .catch(done)
  },
}

module.exports = dal
