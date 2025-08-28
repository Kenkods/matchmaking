import express from 'express';

import dotenv from 'dotenv';

import db from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


