const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Database connection and global data setup
global.foodData = require('./db')(function call(err, data, CatData) {
  if (err) console.error(err);
  else {
    global.foodData = data;
    global.foodCategory = CatData;
  }
});

// Middlewares
app.use(cors({
  origin: ["http://localhost:3000", "https://your-frontend.onrender.com"],
}));
app.use(express.json());

// Routes
app.use('/api/auth', require('./Routes/Auth'));

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
