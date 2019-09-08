const requireLogin = require('../middleware/requireLogin');
const db = require('../services/firestore');

module.exports = app => {
    app.post('/api/jobs', requireLogin, (req, res) => {
        const { jobLink } = req.body;

        db.collection('users')
            .where('googleID', '==', `${req.user.googleID}`)
            .limit(1)
            .get()
            .then(querySnapshot => {
                let docs = querySnapshot.docs;
                if (querySnapshot.empty && querySnapshot.size == 0) {
                    console.log('The query returned empty');
                    return false;
                }

                for (let doc of docs) {
                    console.log(`Document found at path: ${doc.ref.path}`);
                    let strippedPath = doc.ref.path.replace('users/', '');
                    return strippedPath;
                }
            })
            .then(userPath => {
                db.collection('users')
                    .doc(userPath)
                    .collection('saved_jobs')
                    .add({
                        link: jobLink,
                        status: 'new',
                        created: new Date(),
                    });
            });
    });

    app.get('/api/jobs', requireLogin, (req, res) => {
        db.collection('users')
            .where('googleID', '==', `${req.user.googleID}`)
            .limit(1)
            .get()
            .then(querySnapshot => {
                let docs = querySnapshot.docs;
                if (querySnapshot.empty && querySnapshot.size == 0) {
                    console.log('The query returned empty');
                    return false;
                }

                for (let doc of docs) {
                    console.log(
                        `Document in saved-job found at path: ${doc.ref.path}`
                    );
                    let strippedPath = doc.ref.path.replace('users/', '');
                    return strippedPath;
                }
            })
            .then(userPath => {
                db.collection('users')
                    .doc(userPath)
                    .collection('saved_jobs')
                    .get()
                    .then(querySnapshot => {
                        let savedJobs = [];
                        querySnapshot.forEach(documentSnapshot => {
                            savedJobs.push({
                                ...documentSnapshot.data(),
                                key: documentSnapshot.ref.path,
                            });
                        });
                        res.send(savedJobs);
                    });
            });
    });
};
