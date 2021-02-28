const Chat = require('../sequelizeModels/Chat')
const Message = require('../sequelizeModels/Message')
const User = require('../sequelizeModels/User')
const createError = require('http-errors')
let Sequelize = require('sequelize')

const Op = Sequelize.Op

const userNotFoundError = "User wasn't found"
const chatNotFoundError = "Chat wasn't found"
const emailOrPasswordisInvalidError = 'Email or passwordis is invalid'

let dal = {
  getUserChats: (userId, done, next) => {
    User.findByPk(userId).then((user) => {
      if (!user) {
        return next(createError(400, { message: userNotFoundError }))
      }
      user
        .getChats()
        .then((chats) => {
          let userChatsInfo = []
          let requests = []

          for (let i = 0; i < chats.length; i++) {
            const chat = chats[i]

            let userChatInfo = { _id: chat._id, name: chat.name, users: [] }

            requests.push(
              chat
                .getUsers()
                .then((users) => {
                  for (let j = 0; j < users.length; j++) {
                    let user = users[j].dataValues

                    let userPublicInfo = {
                      _id: user._id,
                      name: user.name,
                      email: user.email,
                    }

                    userChatInfo.users.push(userPublicInfo)
                  }
                })
                .then(() => {
                  userChatsInfo.push(userChatInfo)
                })
            )
          }

          Promise.all(requests).then(() => {
            done(userChatsInfo)
          })
        })
        .catch((err) => {
          next(createError(400, err.message))
        })
    })
  },

  saveChat: (chat, done, next) => {
    Chat.create({ name: chat.name })
      .then((newChat) => {
        for (let i = 0; i < chat.users.length; i++) {
          const userId = chat.users[i]

          User.findByPk(userId).then((user) => {
            newChat.addUser(user)
          })
        }

        done({ chat: newChat })
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },

  addNewUserToChat: (chatId, newUserId, done, next) => {
    Chat.findByPk(chatId)
      .then((chat) => {
        if (!chat) return next(createError(400, { message: chatNotFoundError }))

        User.findByPk(newUserId).then((user) => {
          if (!user)
            return next(createError(400, { message: userNotFoundError }))

          chat.addUser(user)
        })
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },

  findChatById: (chatId, done, next) => {
    Chat.findByPk(chatId)
      .then((chat) => {
        if (!chat) {
          next(createError(500, chatNotFoundError))
        }
        done(chat)
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },

  getMessagesInformation: (messagesList, done) => {
    let messagesInfoList = []
    let requests = []

    messagesList.forEach((message) => {
      requests.push(
        User.findByPk(message.UserId).then((user) => {
          if (!user)
            return next(createError(400, { message: userNotFoundError }))

          messagesInfoList.push({
            _id: message._id,
            clientSideId: message.clientSideId,
            text: message.text,
            time: message.time,
            authorId: user._id,
            authorEmail: user.email,
            authorName: user.name,
          })
        })
      )
    })

    Promise.all(requests).then(() => {
      done(messagesInfoList)
    })
  },

  getMessages: function (
    chatId,
    oldestMessageTime,
    fetchMessagesCount,
    done,
    next
  ) {
    Chat.findByPk(chatId)
      .then((chat) => {
        if (!chat) return next(createError(400, { message: chatNotFoundError }))

        chat
          .getMessages({
            where: { time: { [Op.lt]: oldestMessageTime } },
            limit: fetchMessagesCount,
            order: [['_id', 'DESC']],
          })
          .then((messagesList) => {
            messagesList.reverse()
            this.getMessagesInformation(messagesList, done)
          })
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },

  getLastMessages: function (chatId, newestMessageTime, done, next) {
    Chat.findOne({ where: { _id: chatId } })
      .then((chat) => {
        if (!chat) return next(createError(400, { message: chatNotFoundError }))

        chat
          .getMessages({
            where: { time: { [Op.gt]: newestMessageTime } },
          })
          .then((messagesList) => {
            messagesList.reverse()
            this.getMessagesInformation(messagesList, done)
          })
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },

  saveNewMessage: (message, done, next) => {
    Chat.findByPk(message.chatId)
      .then((chat) => {
        if (!chat) return next(createError(400, { message: chatNotFoundError }))

        User.findOne({ where: { email: message.authorEmail } }).then((user) => {
          if (!user)
            return next(createError(400, { message: userNotFoundError }))

          Message.create({
            clientSideId: message.clientSideId,
            time: message.time,
            text: message.text,
            ChatId: chat._id,
            UserId: user._id,
          }).then((newMessage) => {
            done({
              _id: newMessage._id,
              clientSideId: newMessage.clientSideId,
              chatId: chat._id,
              time: newMessage.time,
              authorEmail: user.email,
              authorName: user.name,
              text: newMessage.text,
            })
          })
        })
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },

  saveNewUser: (user, next) => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!')
    console.log(user)
    console.log('!!!!!!!!!!!!!!!!!!!!!!')

    User.findAll({ where: { email: user.email } }).then((users) => {
      if (users.length !== 0) {
        next(createError(500, 'User with same email already exists'))
      } else {
        User.create({
          name: user.name,
          email: user.email,
        })
          .then((newUser) => {
            newUser.setPassword(user.password)
            User.update(
              {
                hash: newUser.hash,
                salt: newUser.salt,
              },
              {
                where: {
                  _id: newUser._id,
                },
              }
            ).catch((err) => {
              next(createError(400, err.message))
            })
          })
          .catch((err) => {
            next(createError(400, err.message))
          })
      }
    })
  },

  findUsersByEmail: (email, done, next) => {
    User.findAll({ where: { email: email } })
      .then((users) => {
        let usersPublicInfo = users.map((user) => {
          let userPublicInfo = {
            _id: user._id,
            name: user.name,
            email: user.email,
          }
          return userPublicInfo
        })

        done(usersPublicInfo)
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },

  passportFindUserById: (id, done, next) => {
    User.findByPk(id)
      .then((user) => {
        if (!user) {
          done(null, false)
        }

        done(null, user.dataValues)
      })
      .catch((err) => {
        done(err, false)
      })
  },

  findUserById: (id, done, next) => {
    User.findByPk(id)
      .then((user) => {
        if (!user) {
          next(createError(500, userNotFoundError))
        }

        delete user.hash
        delete user.salt

        done(user)
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },

  checkUserPassword: (email, password, done) => {
    User.findOne({ where: { email: email } })
      .then((user) => {
        if (!user || !user.checkPassword(password)) {
          return done({ message: emailOrPasswordisInvalidError }, false)
        }

        let userPublicInfo = {
          _id: user._id,
          name: user.name,
          email: user.email,
        }

        done(null, userPublicInfo)
      })
      .catch((err) => {
        next(createError(400, err.message))
      })
  },
}

module.exports = dal
