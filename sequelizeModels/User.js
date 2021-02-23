const Sequelize = require('sequelize')
const Message = require('./Message')
const sequelize = require('../sequelizeConnection/connection')

const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const decimalBase = 10
const sizeRandomBytes = 16
const expiration = require('../appConfig').expiration
const iterations = require('../appConfig').iterations
const keylen = require('../appConfig').keylen
const digest = require('../appConfig').digest
const stringType = require('../appConfig').stringType
const millisecondsToSeconds = require('../appConfig').millisecondsToSeconds
const jwtSecret = require('../appConfig').jwtSecret

class User extends Sequelize.Model {}

User.init(
  {
    _id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    hash: {
      type: Sequelize.STRING(1024),
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: 'User' }
)

User.hasMany(Message)

const createHashFromPassword = function (password, salt) {
  return crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    .toString(stringType)
}

User.prototype.setPassword = function (password) {
  this.salt = crypto.randomBytes(sizeRandomBytes).toString(stringType)
  this.hash = createHashFromPassword(password, this.salt)
}

User.prototype.checkPassword = function (password) {
  const hash = createHashFromPassword(password, this.salt)
  return this.hash === hash
}

User.prototype.generateJWT = function () {
  const today = new Date()
  const expirationDate = new Date(today)
  expirationDate.setDate(today.getDate() + expiration)

  var jwtSign = jwt.sign(
    {
      email: this.email,
      name: this.name,
      id: this._id,
      exp: parseInt(
        expirationDate.getTime() * millisecondsToSeconds,
        decimalBase
      ),
    },
    jwtSecret
  )

  return jwtSign
}

User.prototype.toAuthJSON = function () {
  return {
    _id: this._id,
    email: this.email,
    name: this.name,
    token: this.generateJWT(),
  }
}

User.prototype.toJSON = function () {
  var obj = this.toObject()
  delete obj.hash
  delete obj.salt
  return obj
}

module.exports = User
