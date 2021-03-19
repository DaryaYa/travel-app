import { Schema, model, Types } from 'mongoose';

const countrySchema = new Schema(
  {
    nameEN: String,
    nameRU: String,
    nameAM: String,
    capitalEN: String,
    capitalRU: String,
    capitalAM: String,
    regionEN: String,
    regionRU: String,
    regionAM: String,
    population: String,
    latlng: [String],
    area: String,
    geoData: [[[Number]]],
    capitalTimezone: String,
    bordersEN: [String],
    bordersRU: [String],
    bordersAM: [String],
    currencies: [
      {
        code: String,
        nameEN: String,
        nameRU: String,
        nameAM: String,
        symbol: String,
      },
    ],
    languages: [
      { nameEN: String, nameRU: String, nameAM: String, nativeName: String },
    ],
    flag: String,
    photo: String,
    videoId: String,
    attractions: [{ type: Types.ObjectId, ref: 'Attraction' }],
  },
  { versionKey: false, collection: 'Country' },
);

export const Country = model('Country', countrySchema);
