const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);

require('./services/passport.js');

// app.use(passport.initialize());
// app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello :) ');
    console.log('Home');
});

require('./routes/auth.js')(app);

const PORT = process.env.NODE_ENV === 'production' || 5000;
app.listen(PORT);
