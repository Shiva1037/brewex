const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// SQLite DB setup
const db = new sqlite3.Database('./headings.db', (err) => {
  if (err) console.error('DB Error:', err.message);
  console.log('Connected to SQLite DB.');
});

db.run(`
  CREATE TABLE IF NOT EXISTS heading (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL
  )
`);

// GET API - retrieve heading
app.get('/api/heading', (req, res) => {
  db.get('SELECT text FROM heading ORDER BY id DESC LIMIT 1', (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ heading: row ? row.text : '' });
  });
});

// POST API - update heading
app.post('/api/heading', (req, res) => {
  const { heading } = req.body;
  if (!heading) return res.status(400).json({ error: 'Heading is required' });

  db.run('INSERT INTO heading (text) VALUES (?)', [heading], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Heading updated successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
