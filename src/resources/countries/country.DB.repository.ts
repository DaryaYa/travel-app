import { Country } from './country.models';

const get = async () => {
  const allCountries = await Country.find({});
  return allCountries;
};

export default { get };
