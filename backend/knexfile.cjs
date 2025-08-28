// backend/knexfile.cjs
require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 5432,
    },
    pool: { min: 2, max: 10 },
    migrations: {
      directory: path.resolve(__dirname, 'migrations'), // backend/migrations
    },
    seeds: {
      directory: path.resolve(__dirname, 'seeds'),
    },
  },
};
