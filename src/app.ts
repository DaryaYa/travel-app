import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import fileUpload from 'express-fileupload';

import { router as userRouter } from './resources/users/user.router';
import { router as counryRouter } from './resources/countries/country.router';
import { router as attractionRouter } from './resources/attractions/attraction.routers';

import fillDataBase from './util/fillDataBase';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload({}));
app.use('/uploads', express.static('uploads'));

app.use('/api/user', userRouter);
app.use('/api/country', counryRouter);
app.use('/api/attractions', attractionRouter);

async function start() {
  try {
    await mongoose.connect(process.env.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('connect to db');
    app.listen(port, async () => {
      console.log(`App has been started on port ${port}`);
      // await fillDataBase();
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

start();
