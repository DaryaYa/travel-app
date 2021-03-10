import { UpdateStarsInterface } from './attraction.types';
import { Types } from 'mongoose';
import attractionRepo from './attraction.DB.repository';

const getByCountry = async (countryId: Types.ObjectId) =>
  attractionRepo.getByCountry(countryId);

const addStars = async (
  attractionId: Types.ObjectId,
  updateStarData: UpdateStarsInterface,
) => attractionRepo.addStars(attractionId, updateStarData);

export default { getByCountry, addStars };
