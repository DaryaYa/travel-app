import countryRepo from './country.DB.repository';

const get = async () => countryRepo.get();

export default { get };
