//Firebase
const admin = require('firebase-admin');

const keys = require('../config/keys');

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(keys.firestoreKey)),
    databaseURL: keys.firestoreDB,
});

module.exports = admin.firestore();

//Adding a New Record to users and then add a sub collection
//
// let addDoc = db
//     .collection('users')
//     .add({
//         first: 'Ada',
//         last: 'Lovelac',
//         born: 1815,
//     })
//     .then(ref => {
//         console.log('Added document with ID: ', ref.id);
//         db.collection('users')
//             .doc(ref.id)
//             .collection('saved_jobs')
//             .add({
//                 link: 'linktothesite',
//                 status: 'new',
//             });
//     });

//Retrieve the user information by document
//
// let queryUser = db
//     .collection('users')
//     .doc('QfQrMhyxu6LIx7RLKXIw')
//     .get()
//     .then(doc => {
//         if (!doc.exists) {
//             console.log('No such document!');
//         } else {
//             console.log('Document data: ', doc.data());
//         }
//     })
//     .catch(err => {
//         console.log('Error getting docuemnt', err);
//     });

//Get all the saved jobs within this users stuff
//
// let queryDocument = db
//     .collection('users')
//     .doc('QfQrMhyxu6LIx7RLKXIw')
//     .collection('saved_jobs')
//     .get()
//     .then(querySnapshot => {
//         querySnapshot.forEach(documentSnapshot => {
//             console.log(`Found document at ${documentSnapshot.ref.path}`);
//         });
//     });

//Query the User by Google ID
//
// let queryUserStuff = db
//     .collection('users')
//     .where('googleID', '==', `106333324815518268514`)
//     .get()
//     .then(querySnapshot => {
//         let docs = querySnapshot.docs;
//         console.log('Document type is: ', typeof docs);
//         console.log('Query empty is: ', typeof querySnapshot.empty);
//         console.log('query size is: ', querySnapshot.size);
//
//         if (querySnapshot.empty) {
//             console.log('The query returned empty');
//         }
//
//         if (querySnapshot.size == 0) {
//             console.log('The query size is 0');
//         }
//
//         for (let doc of docs) {
//             console.log(`Document found at path: ${doc.ref.path}`);
//         }
//     })
//     .catch(err => {
//         console.log('Error getting documents', err);
//     });
