const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const cors = require('cors'); // Add CORS for local development
const app = express();

// Load environment variables (useful for local development with .env file)
require('dotenv').config();

const port = process.env.PORT || 3000; // Use environment variable for port

// PostgreSQL connection using DATABASE_URL from environment variable
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // Enable SSL in production only
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS in development mode only
if (process.env.NODE_ENV === 'development') {
  app.use(cors());
}

// Sign up route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
    res.json({ success: true });
  } catch (err) {
    console.error('Error during sign-up:', err);
    if (err.code === '23505') { // Unique constraint violation (username already exists)
      res.status(400).json({ success: false, message: 'Username already exists' });
    } else {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        res.json({ success: true, points: user.points });
      } else {
        res.status(401).json({ success: false, message: 'Incorrect password' });
      }
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update points route
app.post('/updatePoints', async (req, res) => {
  const { username, points } = req.body;
  try {
    await pool.query('UPDATE users SET points = points + $1 WHERE username = $2', [points, username]);
    res.json({ success: true });
  } catch (err) {
    console.error('Error updating points:', err);
    res.status(500).json({ success: false, message: 'Could not update points' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
