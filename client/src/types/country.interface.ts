import { AttractionResponseInterface } from './atraction.interface';
export interface CountryResponseInterface {
  _id?: string;
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
  geoData: number[][][];
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

  languages: { nameEN: string; nameRU: string; nativeName: string }[];
  flag: string;
  photo: string;
  videoID: string;
  attractions: AttractionResponseInterface[];
}

export interface CountryShortResponseInterface {
  _id?: string;
  nameEN: string;
  nameRU: string;
  nameAM: string;
  capitalEN: string;
  capitalRU: string;
  capitalAM: string;
  photo: string;
}
