const express = require('express');
const router = express.Router();
const admin = require('../firebaseAdmin');

// Endpoint to assign default role
router.post('/setRole', async (req, res) => {
  try {
    const { uid, userType = 'User' } = req.body;

    // Set custom claim
    await admin.auth().setCustomUserClaims(uid, { userType });

    res.status(200).json({ message: `Role ${userType} set for user ${uid}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
