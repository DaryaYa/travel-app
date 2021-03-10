import { Types } from 'mongoose';

export interface CountryInterface {
  _id?: Types.ObjectId;
  nameEN: string;
  nameRU: string;
  capitalEN: string;
  capitalRU: string;
  regionEN: string;
  regionRU: string;
  population: number;
  latlng: number[];
  area: number;
  capitalTimezone: string;
  bordersEN: string[];
  bordersRU: string[];
  currencies: {
    code: string;
    nameEN: string;
    nameRU: string;
    symbol: string;
  }[];

  language: { nameEN: string; nameRU: string; nativeName: string }[];
  flag: string;
  photo: string;
  video: string;
  attractions: { type: Types.ObjectId }[];
}
