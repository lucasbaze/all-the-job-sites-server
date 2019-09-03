module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    cookieKey: process.env.COOKIE_KEY,
    firestoreProjectID: process.env.FIRESTORE_PROJECT_ID,
    firestoreKeys: process.env.FIREBASE_KEYS.replace(/\\n/g, '\n'),
    firestoreClientEmail: process.env.FIRESTORE_CLIENT_EMAIL,
    firestorePrivateKey: process.env.FIRESTORE_PRIVATE_KEY,
    firestoreDB: process.env.FIRESTORE_DB,
};
