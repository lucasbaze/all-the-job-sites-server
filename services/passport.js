const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const db = require('./firestore');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true,
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);

            // //Find the exisiting User
            // let existingUser = await db
            //     .collection('users')
            //     .where('googleID', '==', `${profile.id}`)
            //     .limit(1)
            //     .get()
            //     .then(querySnapshot => {
            //         let docs = querySnapshot.docs;
            //         console.log('Document type is: ', typeof docs);
            //
            //         if (querySnapshot.empty && querySnapshot.size == 0) {
            //             console.log('The query returned empty');
            //             return false;
            //         }
            //
            //         for (let doc of docs) {
            //             console.log(`Document found at path: ${doc.ref.path}`);
            //             return doc.data();
            //         }
            //     })
            //     .catch(err => {
            //         console.log('Error getting documents', err);
            //     });
            //
            // //Return the existing user
            // if (existingUser) {
            //     console.log('I found the user');
            //     console.log(existingUser);
            //     return done(null, existingUser);
            // }
            //
            // //If existing User is false create a new one
            // console.log("I'm creating a new user");
            //
            // let displayName =
            //     profile.displayName !== null ? profile.displayName : '';
            // let email =
            //     profile.emails[0] !== null ? profile.emails[0].value : '';
            // let photo =
            //     profile.photos[0] !== null ? profile.photos[0].value : '';
            //
            // const newUser = await db.collection('users').add({
            //     googleID: `${profile.id}`,
            //     displayName: `${displayName}`,
            //     email: `${email}`,
            //     photo: `${photo}`,
            // });
            //
            // done(null, newUser);
        }
    )
);
//
// passport.serializeUser((user, done) => {
//     console.log("I'm serializing the User");
//     done(null, user.googleID);
// });
//
// passport.deserializeUser((id, done) => {
//     console.log("I'm deserializing the User");
//     console.log('Here is the user: ', id);
//     db.collection('users')
//         .where('googleID', '==', `${id}`)
//         .limit(1)
//         .get()
//         .then(querySnapshot => {
//             let docs = querySnapshot.docs;
//             for (let doc of docs) {
//                 console.log(
//                     `Document in deserializing found at path: ${doc.ref.path}`
//                 );
//                 done(null, doc.data());
//             }
//         });
// });
