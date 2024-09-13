const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// PostgreSQL connection
const pool = new Pool({
  user: 'default',
  host: 'ep-cold-dew-a4gruvqr-pooler.us-east-1.aws.neon.tech',
  database: 'govmesh',
  password: 's1OWnHAqL5Zj',
  port: 5432,
});


// Test route to check database connection
app.get('/test-db', async (req, res) => {
  try {
    // Query the current time from the database
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error('Error connecting to the database:', err);
    res.status(500).json({ success: false, message: 'Database connection failed', error: err });
  }
});




// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Sign up route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hashedPassword]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Username already exists' });
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
    console.error(err);
    res.status(500).json({ success: false, message: 'Login error' });
  }
});

// Update points route
app.post('/updatePoints', async (req, res) => {
  const { username, points } = req.body;
  try {
    await pool.query('UPDATE users SET points = points + $1 WHERE username = $2', [points, username]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Could not update points' });
  }
});

// Start server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// Start server on a specific port
const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});