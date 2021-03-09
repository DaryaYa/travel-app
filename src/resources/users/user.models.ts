import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String },
    username: { type: String },
    password: String,
    imgSrc: String,
  },
  {
    versionKey: false,
    collection: 'Users',
  },
);

export const User = model('User', userSchema);
