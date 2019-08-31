const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

//Firebase
const admin = require('firebase-admin');

let serviceAccount = require('./config/firestoreKeys.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://all-the-job-sites-dev.firebaseio.com',
});

let db = admin.firestore();

let docRef = db.collection('users').doc('alovelace');

let setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelac',
    born: 1815,
});

console.log(docRef);
console.log(setAda);

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log('what the hell is going on!?');
        }
    )
);

app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/surveys');
    }
);

const PORT = process.env.NODE_ENV === 'production' || 5000;
app.listen(PORT);
