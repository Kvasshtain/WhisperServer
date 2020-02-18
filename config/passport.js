const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const userModel = mongoose.model('User')

const jwtSecret = require('../appConfig').jwtSecret

passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
      session: false,
    },
    (email, password, done) => {
      userModel
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
    }
  )
)

//https://www.npmjs.com/package/passport-jwt see jsonWebTokenOptions option to set maxAge
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
}

passport.use(
  new JwtStrategy(jwtOptions, function(payload, done) {
    userModel.findById(payload.id, (err, user) => {
      if (err) {
        return done(err)
      }
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    })
  })
)

passport.serializeUser(function(user, done) {
  done(null, user.id)
})
