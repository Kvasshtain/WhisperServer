const checkUserFieldsAndReturnWrong = (user) => {

    if (!user.email) {
        return 'email'
    }

    if (!user.password) {
        return 'password'
    }
}

const checkChatFieldsAndReturnWrong = (chat) => {

    if (!chat.name) {
        return 'name'
    }

    if (chat.users.length <= 0) {
        return 'usersIds <= 0'
    }
}

const errorHandlerMiddleware = (err, req, res) => {
    if (err) {
        res.status(500).send({ message: err })
    }
}

module.exports = {
    checkUserFieldsAndReturnWrong,
    checkChatFieldsAndReturnWrong,
    errorHandlerMiddleware,
}