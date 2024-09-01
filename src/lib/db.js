import mysql from 'mysql2';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
// const dbConfig = {
//   host: '34.121.223.81',
//   user: 'testuser',
//   password: 'test@123',
//   database: 'gujaratpost_newsgujrati',
// };

const pool = mysql.createPool(dbConfig).promise();

export default pool;