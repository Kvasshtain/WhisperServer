const Chat = require('../models/Chat')
const Message = require('../models/Message')
const User = require('../models/User')

const { Pool } = require('pg')

// TABLES
// Chats, Users, UserChatRelations

const pool = new Pool({
  connectionString: connectionString,
})

dal = {
  getUserChats: function(userId, done, next) {
    pool
      .query('SELECT * FROM UserChatRelations WHERE UserId = $1', [userId])
      .then(done(chatsList))
      .catch(next(createError(400, err.message)))
  },

  saveChat: function(chat, done, next) {
    const client = await pool.connect()

    try {
      await client.query('BEGIN')
      
      const insertChatQueryText = 'INSERT INTO Chats (Name) VALUES ($1) RETURNING id'
      const res = await client.query(insertChatQueryText, [chat.name])
      let chatId = res.rows[0].id;

      const isUserExistQueryText = 'EXISTS(SELECT 1 FROM Users WHERE UserId = $1'
      actualUsers = chat.users.filter(userId => client.query(isUserExistQueryText, [userId]))

      const insertUserChatQueryText = 'INSERT INTO UserChatRelations (UserId, ChatId) VALUES ($1, $2)'
      actualUsers.forEach(userId => {
        await client.query(insertUserChatQueryText, [userId, chatId])
      });

      await client.query('COMMIT')
      done({
        id: chatId,
        name: chat.name,
      })
    } catch (err) {
      await client.query('ROLLBACK')
      next(createError(400, err.message))
    } finally {
      client.release()
    }
  },

  addNewUserToChat: function(chatId, newUserId, done, next) {
    Chat.update({ _id: chatId }, { $addToSet: { users: newUserId } }).exec(
      (err, updatedChat) => {
        if (err) {
          return next(createError(400, err.message))
        }

        done({ chat: updatedChat })
      }
    )
  },

  getMessages: function(
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
          return next(createError(400, err.message))
        }

        done(messagesList)
      })
  },

  getLastMessages: function(chatId, newestMessageTime, done, next) {
    Message.find({ chatId: chatId, time: { $gt: newestMessageTime } }).exec(
      (err, messagesList) => {
        if (err) {
          return next(createError(400, err.message))
        }

        done(messagesList)
      }
    )
  },

  saveNewMessage: function(message, done, next) {
    const newMessage = new Message(message)

    newMessage.save(function(err) {
      if (err) {
        return next(createError(400, err.message))
      }

      done(newMessage)
    })
  },

  saveNewUser: function(user, done, next) {
    const newUser = new User(user)

    newUser.setPassword(user.password)

    return newUser
      .save()
      .then(() => email({ user: newUser.toAuthJSON() }))
      .catch(function(err) {
        if (err.code === 11000) {
          return next(createError(500, 'User with same email already exists'))
        }
      })
  },

  findUser: function(email, done, next) {
    User.find({ email: email }).exec((err, users) => {
      if (err) {
        return next(createError(400, err.message))
      }

      done(users)
    })
  },

  findUserById: function(id, done) {
    User.findById(id, (err, user) => {
      if (err) {
        return done(err)
      }
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  },

  checkUserPassword: function(email, password, done) {
    User.findOne({ email })
      .then((user, err) => {
        if (err) {
          return done(err)
        }

        if (!user || !user.checkPassword(password)) {
          return done({ message: 'email or passwordis invalid' }, false)
        }

        return done(null, user)
      })
      .catch(done)
  },
}

module.exports = dal
