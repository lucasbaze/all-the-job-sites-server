var fs = require('fs');
fs.writeFile('./gcpconfig.json', process.env.FIREBASE_KEYS, err => {});
