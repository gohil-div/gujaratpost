import mysql from 'mysql2';

const dbConfig = {
  host: 'mysql.us.cloudlogin.co',
  user: 'gujaratpost_newsgujrati',
  password: 'Gujarat_Gane^sh@8813#',
  database: 'gujaratpost_newsgujrati',
};
// const dbConfig = {
//   host: '34.121.223.81',
//   user: 'testuser',
//   password: 'test@123',
//   database: 'gujaratpost_newsgujrati',
// };

const pool = mysql.createPool(dbConfig).promise();

export default pool;