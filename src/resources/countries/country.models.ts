import { Schema, model, Types } from 'mongoose';

const countrySchema = new Schema({
  nameEN: String,
  nameRU: String,
  capitalEN: String,
  capitalRU: String,
  regionEN: String,
  regionRU: String,
  population: Number,
  latlng: [Number],
  area: Number,
  capitalTimezone: String,
  bordersEN: [String],
  bordersRU: [String],
  currencies: [
    {
      code: String,
      nameEN: String,
      nameRU: String,
      symbol: String,
    },
  ],
  language: [{ nameEN: String, nameRU: String, nativeName: String }],
  flag: String,
  photo: String,
  video: String,
  attractions: [
    {
      attractionNameEN: String,
      attractionNameRU: String,
      description: String,
      descriptionRU: String,
      photo: String,
      link: String,
    },
  ],
  stars: [{ user: { type: Types.ObjectId, ref: 'User' }, countStar: Number }],
});

export const Country = model('Country', countrySchema);
