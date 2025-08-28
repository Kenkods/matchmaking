import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config();

const config = {
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
      directory: resolve('migrations'), // resolves to backend/migrations
    },
    seeds: {
      directory: resolve('seeds'), // resolves to backend/seeds
    },
  },
};

export default config;
