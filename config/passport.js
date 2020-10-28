const passport = require('passport')
const LocalStrategy = require('passport-local')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const dal = require('../mongo/dal')

const jwtSecret = require('../appConfig').jwtSecret

passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
      session: false,
    },
    (email, password, done) => {
      dal.checkUserPassword(email, password, done)
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
    dal.findUserById(payload.id, done)
  })
)

passport.serializeUser(function(user, done) {
  done(null, user.id)
})
