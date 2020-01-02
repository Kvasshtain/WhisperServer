const createEmptyFieldNameString = (user) => {

    if (!user.email) {
        return 'email'
    }

    if (!user.password) {
        return 'password'
    }
}

const errorHandlerMiddleware = (err, req, res, next) => {
    res.json({ message: err.message })
}

module.exports = {
    createEmptyFieldNameString,
    errorHandlerMiddleware,
}