module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    cookieKey: process.env.COOKIE_KEY,
    firestoreProjectID: process.env.FIRESTORE_PROJECT_ID,
    firestoreClientEmail: process.env.FIRESTORE_CLIENT_EMAIL,
    firestorePrivateKey: process.env.FIRESTORE_PRIVATE_KEY.replace(
        /\\n/g,
        '\n'
    ),
    firestoreDB: process.env.FIRESTORE_DB,
};
