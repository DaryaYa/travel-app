import { Types } from 'mongoose';

export interface AttractionInterface {
  _id?: Types.ObjectId;
  attractionNameEN: string;
  attractionNameRU: string;
  descriptionEN: string;
  descriptionRU: string;
  photo: string;
  link: string;
  stars?: [{ user: { type: Types.ObjectId; ref: 'User' }; countStar: number }];
  country: {
    type: Types.ObjectId;
    ref: 'Country';
  };
}

export interface UpdateStarsInterface {
  user: Types.ObjectId;
  countStar: number;
}
