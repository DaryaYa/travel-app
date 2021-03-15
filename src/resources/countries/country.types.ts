import { Types } from 'mongoose';

export interface CountryInterface {
  _id?: Types.ObjectId;
  nameEN: string;
  nameRU: string;
  nameAM: string;
  capitalEN: string;
  capitalRU: string;
  capitalAM: string;
  regionEN: string;
  regionRU: string;
  regionAM: string;
  population: string;
  latlng: string[];
  area: string;
  geoData: Number[][][];
  capitalTimezone: string;
  bordersEN: string[];
  bordersRU: string[];
  bordersAM: string[];
  currencies: {
    code: string;
    nameEN: string;
    nameRU: string;
    nameAM: string;
    symbol: string;
  }[];

  languages: {
    nameEN: string;
    nameRU: string;
    nameAM: string;
    nativeName: string;
  }[];
  flag: string;
  photo: string;
  videoId: string;
  attractions: { type: Types.ObjectId }[];
}
