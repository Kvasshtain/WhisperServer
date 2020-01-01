const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const { Schema } = mongoose

const decimalBase = 10
const expiration = require('../appConfig').expiration
const iterations = require('../appConfig').iterations
const keylen = require('../appConfig').keylen
const digest = require('../appConfig').digest
const stringType = require('../appConfig').stringType
const millisecondsToSeconds = require('../appConfig').millisecondsToSeconds
const jwtSecret = require('../appConfig').jwtSecret

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: String,
    hash: {
        type: String,
        required: true,
    },
    salt: String,
});

const createHashFromPassword = function (password, salt) {
    return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString(stringType)
}

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString(stringType);
    this.hash = createHashFromPassword(password, this.salt)
};

UserSchema.methods.checkPassword = function (password) {
    const hash = createHashFromPassword(password, this.salt)
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today)
    expirationDate.setDate(today.getDate() + expiration)

    return jwt.sign({
        email: this.email,
        name: this.name,
        id: this._id,
        exp: parseInt(expirationDate.getTime() * millisecondsToSeconds, decimalBase),
    }, jwtSecret);
}

UserSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.email,
        name: this.name,
        token: this.generateJWT(),
    };
};

const User = mongoose.model('User', UserSchema)

module.exports = User