import mysql from 'mysql2';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const pool = mysql.createPool(dbConfig).promise();
pool.getConnection()
  .then(connection => {
    console.log('Connected to the database');
    connection.release();  // Release the connection back to the pool
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });
export default pool;