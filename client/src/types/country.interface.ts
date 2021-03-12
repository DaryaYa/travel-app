import { AttractionResponseInterface } from './atraction.interface';
export interface CountryResponseInterface {
  _id?: string;
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
  attractions: AttractionResponseInterface[];
}
