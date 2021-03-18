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
  const attraction = await Attraction.findById(attractionId);
  const user = await attraction.stars.find(
    el => el.user == updateStarData.user,
  );
  if (user) {
    user.countStar = updateStarData.countStar;
  } else {
    await attraction.stars.push(updateStarData);
  }

  console.log(attraction);

  await attraction.save();
  return attraction;
};

export default { getByCountry, addStars };
