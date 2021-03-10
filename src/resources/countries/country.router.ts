import { StatusCodes } from 'http-status-codes';
import { Router, Response, Request } from 'express';

import countryService from './country.service';
import { Types } from 'mongoose';

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

router.get('/shortdata', async (req: Request, res: Response) => {
  try {
    const shortData = await countryService.getShort();
    if (!shortData) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'counties not found' });
    }
    res.status(StatusCodes.OK).json(shortData);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'uuuups' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const countryId = Types.ObjectId(req.params.id);
    const country = await countryService.getById(countryId);
    if (!country)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'country not found' });

    res.status(StatusCodes.OK).json(country);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'uuuups' });
  }
});
