import { StatusCodes } from 'http-status-codes';

import { Router, Response, Request } from 'express';
import countryService from './country.service';

export const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const allCountries = await countryService.get();
    if (!allCountries) {
      return res
        .status(StatusCodes.BAD_GATEWAY)
        .json({ message: 'countries not found' });
    }
    res.status(StatusCodes.OK).json(allCountries);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'uuuups' });
  }
});
