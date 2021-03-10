import { UpdateStarsInterface } from './attraction.types';
import { Types } from 'mongoose';
import { Attraction } from './attraction.models';

const getByCountry = async (countryId: Types.ObjectId) => {
  const attractions = await Attraction.find({ country: countryId });
  return attractions;
};

const addStars = async (
  attractionId: Types.ObjectId,
  updateStarData: UpdateStarsInterface,
) => {
  const attraction = await Attraction.updateOne(
    { _id: attractionId },
    { $push: { stars: updateStarData } },
  ).populate('stars');
};

export default { getByCountry, addStars };
