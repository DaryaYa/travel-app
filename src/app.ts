import { CountryInterface } from './resources/countries/country.types';
import { Country } from './resources/countries/country.models';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';

import { router as userRouter } from './resources/users/user.router';
import { router as counryRouter } from './resources/countries/country.router';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', userRouter);
app.use('/api/country', counryRouter);

async function start() {
  try {
    await mongoose.connect(process.env.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('connect to db');
    app.listen(port, () => {
      console.log(`App has been started on port ${port}`);

      Country.create({ area: 4343 } as CountryInterface);
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

start();
