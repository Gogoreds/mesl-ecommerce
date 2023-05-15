const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Replace this with your user model or database
const users =
  /* your user model or database */

  (module.exports = (passport) => {
    passport.use(
      new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
        // Find the user by email
        const user = users.find((user) => user.email === email);

        if (!user) {
          return done(null, false, { message: "Email not registered" });
        }

        // Check if the password is correct
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;

          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Incorrect password" });
          }
        });
      })
    );

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      const user = users.find((user) => user.id === id);
      done(null, user);
    });
  });
