import { Types } from 'mongoose';

export interface CountryInterface {
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
  attractions: {
    attractionNameEN: string;
    attractionNameRU: string;
    description: string;
    descriptionRU: string;
    photo: string;
    link: string;
    stars: [{ user: { type: Types.ObjectId; ref: 'User' }; countStar: number }];
  }[];
}
