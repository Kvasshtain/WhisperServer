const Sequelize = require('sequelize')
const Message = require('./Message')
const User = require('./User')
const Enrolment = require('./Enrolment')
const sequelize = require('../sequelizeConnection/connection')

class Chat extends Sequelize.Model {}

Chat.init(
  {
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Chat',
  }
)

Chat.hasMany(Message, { onDelete: "cascade"})
Chat.belongsToMany(User, { through: Enrolment })
User.belongsToMany(Chat, { through: Enrolment })

module.exports = Chat
