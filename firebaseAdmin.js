const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccountKey.json'); 
// Your Firebase Admin SDK JSON
require('dotenv').config();

admin.initializeApp({
  // credential: admin.credential.cert(serviceAccount)
  credential: admin.credential.cert({

    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // convert \n to actual newlines
  })
});

module.exports = admin;
