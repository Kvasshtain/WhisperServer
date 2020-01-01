const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const User = mongoose.model('User')

const jwtSecret = require('../appConfig').jwtSecret

passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]',
    session: false
}, (email, password, done) => {
    
    User.findOne({ email })
        .then((user) => {
            if (!user || !user.checkPassword(password)) {
                return done(null, false, { errors: { 'email or password': 'is invalid' } })
            }

            return done(null, user)
        }).catch(done)
}))

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
};

passport.use(new JwtStrategy(jwtOptions, function (payload, done) {

    User.findById(payload.id, (err, user) => {
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

passport.serializeUser(function (user, done) {
    done(null, user.id);
});