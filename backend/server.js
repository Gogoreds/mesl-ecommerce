// Required modules
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const routes = require("./routes");

// Passport configuration
require("./config/passport")(passport);

// Express app
const app = express();

// View engine to EJS
app.set("view engine", "ejs");

// Express session middleware
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Defined routes
app.use("/", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
