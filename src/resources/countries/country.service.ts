import { Types } from 'mongoose';
import countryRepo from './country.DB.repository';

const get = async () => countryRepo.get();

const getShort = async () => countryRepo.getShortData();

const getById = async (countryId: Types.ObjectId) =>
  countryRepo.getById(countryId);

export default { get, getShort, getById };
