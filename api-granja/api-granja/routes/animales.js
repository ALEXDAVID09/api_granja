const express = require('express');
const router = express.Router();
const db = require('../db');

// GET todos los animales
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM animales');
  res.json(rows);
});

module.exports = router;
