import pg from 'pg';
import knex from 'knex';
import dotenv from 'dotenv';
import config from './knex.js';
dotenv.config();
const db=knex(config.development);

db.raw('SELECT 1')
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((err) => {
    console.error('❌ Database connection failed:', err);
  });



export default db;

