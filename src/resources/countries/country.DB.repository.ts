import { User } from './../users/user.models';
import { Types } from 'mongoose';
import { assert } from 'node:console';
import { Country } from './country.models';

const get = async () => {
  const allCountries = await Country.find({});
  return allCountries;
};

const getShortData = async () => {
  const countiesAndCapitals = await Country.find(
    {},
    'nameEN nameRU capitalEN capitalRU photo',
  );
  return countiesAndCapitals;
};

const getById = async (countryId: Types.ObjectId) => {
  const country = await Country.findById(countryId).populate({
    path: 'attractions',
    populate: { path: 'stars.user' },
  });

  return country;
};

export default { get, getShortData, getById };
