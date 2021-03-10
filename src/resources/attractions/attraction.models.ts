import { Schema, model, Types } from 'mongoose';

const attractionSchema = new Schema(
  {
    attractionNameEN: String,
    attractionNameRU: String,
    description: String,
    descriptionRU: String,
    photo: String,
    link: String,
    stars: [{ user: { type: Types.ObjectId, ref: 'User' }, countStar: Number }],
    country: {
      type: Types.ObjectId,
      ref: 'Country',
    },
  },
  { versionKey: false, collection: 'Attraction' },
);

export const Attraction = model('Attraction', attractionSchema);
