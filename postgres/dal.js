const Chat = require('../models/Chat')
const Message = require('../models/Message')
const User = require('../models/User')

const { pool } = require('pg')

dal = {
    getUserChats: function (userId, done, next) {
        // Chat.find({ users: userId })
        //     .populate('users')
        //     .exec((err, chatsList) => {
        //         if (err) {
        //             return next(createError(400, err.message))
        //         }

        //         done(chatsList)
        //     })

        pool.query('SELECT NOW()', (err, chatsList) => {
            if (err) {
                return next(createError(400, err.message))
            }

            done(chatsList)
            pool.end()
        })
    },

    saveChat: function (chat, done, next) {
        const newChat = new Chat(chat)

        newChat
            .save(function (err) {
                if (err) {
                    return next(createError(400, err.message))
                }

                done({ chat: newChat })
            })
    },

    addNewUserToChat: function (chatId, newUserId, done, next) {
        Chat
            .update({ _id: chatId }, { $addToSet: { users: newUserId } })
            .exec(
                (err, updatedChat) => {
                    if (err) {
                        return next(createError(400, err.message))
                    }

                    done({ chat: updatedChat })
                }
            )
    },

    getMessages: function (chatId, oldestMessageTime, fetchMessagesCount, done, next) {
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

    getLastMessages: function (chatId, newestMessageTime, done, next) {
        Message
            .find({ chatId: chatId, time: { $gt: newestMessageTime } })
            .exec(
                (err, messagesList) => {
                    if (err) {
                        return next(createError(400, err.message))
                    }

                    done(messagesList)
                }
            )
    },

    saveNewMessage: function (message, done, next) {
        const newMessage = new Message(message)

        newMessage
            .save(function (err) {
                if (err) {
                    return next(createError(400, err.message))
                }

                done(newMessage)
            })
    },

    saveNewUser: function (user, done, next) {
        const newUser = new User(user)

        newUser.setPassword(user.password)

        return newUser
            .save()
            .then(() => email({ user: newUser.toAuthJSON() }))
            .catch(function (err) {
                if (err.code === 11000) {
                    return next(createError(500, 'User with same email already exists'))
                }
            })
    },

    findUser: function (email, done, next) {
        User
            .find({ email: email })
            .exec((err, users) => {
                if (err) {
                    return next(createError(400, err.message))
                }

                done(users)
            })
    },

    findUserById: function (id, done) {
        User
            .findById(id, (err, user) => {
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

    checkUserPassword: function (email, password, done) {
        User
            .findOne({ email })
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