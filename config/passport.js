var LocalStrategy = require("passport-local").Strategy
// var FacebookStrategy = require('passport-facebook').Strategy
var db = require("../models/index")

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
module.exports = function (passport) {

  passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          // ES6 shorthand for when an object has the same name for the key and
          // the property assigned to it
          email
          // ES5 equivalent would be:
          // email: email
        }
      })
      .then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect email."
          })
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          })
        }
        // If none of the above, return the user
        return done(null, dbUser)
      })
    }
  ))


  // passport.use(new FacebookStrategy({
  //     clientID: process.env.FB_APP_ID, // You'll need to set this to be your FB app ID
  //     clientSecret: process.env.FB_APP_SECRET, // You'll need to set this to be your FB app secret
  //     callbackURL: "http://localhost:8080/auth/facebook/callback",
  //     profileFields   : ['id', 'name', 'email']
  //   },
  //   function(accessToken, refreshToken, profile, cb) {

  //     db.User.findOne({
  //         where: {
  //           facebook_id: profile.id
  //         }
  //       })
  //       .then(function(user) {

  //         // ES6 destructuring syntax
  //         var { email, first_name, last_name } = profile._json
  //         // The equivalent ES5 would look like:
  //         // var email = profile._json.email
  //         // var first_name = profile._json.first_name
  //         // var last_name = profile._json.last_name

  //         if (user) {
  //           user.facebook_id = profile.id
  //           user.facebook_email = email
  //           user.facebook_name = (`${ first_name } ${ last_name }`).trim()
  //           user.facebook_token = accessToken

  //           return user.save()
  //         }

  //         return db.User.create({
  //           facebook_id: profile.id,
  //           facebook_email: email,
  //           facebook_name: (`${ first_name } ${ last_name }`).trim(),
  //           facebook_token: accessToken,
  //         })
  //       })
  //       .then(function(user) {
  //         cb(null, user)
  //       })
  //       .catch(function(err) {
  //         cb(err)
  //       })
  //   }
  // ))

  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser(function(user, cb) {

    cb(null, user)
  })

  passport.deserializeUser(function(obj, cb) {
    delete obj.password

    cb(null, obj)
  })
  
}
