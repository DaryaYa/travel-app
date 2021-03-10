import { Schema, model, Types } from 'mongoose';

const countrySchema = new Schema(
  {
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
    // attractions: [{ type: Types.ObjectId, ref: 'Attraction' }],
  },
  { versionKey: false, collection: 'Country' },
);

export const Country = model('Country', countrySchema);
