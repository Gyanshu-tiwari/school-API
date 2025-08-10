import pool from '../db.js';
import haversine from '../utils/haversine.js';

export const getSchools = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM schools');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
