import { UserResponseInterface } from './user.interface';

export interface AttractionResponseInterface {
  _id?: string;
  attractionNameEN: string;
  attractionNameRU: string;
  descriptionEN: string;
  descriptionRU: string;
  photo: string;
  link: string;
  stars?: [{ user: UserResponseInterface; countStar: number }];
}
