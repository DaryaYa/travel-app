import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'good' });
});

const db = mongoose.connection;

db.on('error', () => console.error('db connection error'));
db.once('open', () => {
  console.info('Successfully connect to DB');
  app.listen(port, () => console.info(`App is runnitn on ${port}`));
});
