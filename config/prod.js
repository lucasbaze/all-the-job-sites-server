module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    cookieKey: process.env.COOKIE_KEY,
    firestoreProjectID: process.env.FIRESTORE_PROJECT_ID,
    firestoreKeys: process.env.FIREBASE_KEYS,
    firestoreClientEmail: process.env.FIRESTORE_CLIENT_EMAIL,
    firestorePrivateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    firestoreDB: process.env.FIRESTORE_DB,
};
