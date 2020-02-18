const checkUserFieldsAndReturnWrong = user => {
  if (!user.email) {
    return 'email'
  }

  if (!user.password) {
    return 'password'
  }
}

const checkChatFieldsAndReturnWrong = chat => {
  if (!chat.name) {
    return 'name'
  }

  if (chat.users.length <= 0) {
    return 'usersIds <= 0'
  }
}

module.exports = {
  checkUserFieldsAndReturnWrong,
  checkChatFieldsAndReturnWrong,
}
