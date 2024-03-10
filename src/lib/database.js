import { createPool } from 'mysql2/promise';

// Create a MySQL connection pool
const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'Harshad@5545',
  database: 'modern-mannerism',
  connectionLimit: 10, 
});

export default pool;
