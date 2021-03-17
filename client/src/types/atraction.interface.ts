import { UserResponseInterface } from './user.interface';

export interface AttractionResponseInterface {
  _id?: string;
  attractionNameEN: string;
  attractionNameRU: string;
  attractionNameAM: string;
  descriptionEN: string;
  descriptionRU: string;
  descriptionAM: string;
  photo: string;
  link: string;
  stars: { user: UserResponseInterface; countStar: number }[];
}
