const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./services/users');


// app.use(cors({
//   origin: 'http://localhost:5173', // frontend URL
//    "https://appointment-reservation-app.web.app",
//   credentials: true
// }));


// Allowed origins
const allowedOrigins = [
  "http://localhost:5173",                 // local dev
  "https://appointment-reservation-app.web.app" // deployed frontend
];

// CORS middleware
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error("Not allowed by CORS"), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
