import { UpdateStarsInterface } from './attraction.types';
import { StatusCodes } from 'http-status-codes';
import { Router, Response, Request } from 'express';

import attractionService from './attraction.service';
import { Types } from 'mongoose';

export const router = Router();

router.get('/country/:id', async (req: Request, res: Response) => {
  try {
    const countryId = Types.ObjectId(req.params.id);
    const attractions = await attractionService.getByCountry(countryId);
    if (!attractions) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'attractions not found' });
    }

    res.status(StatusCodes.OK).json(attractions);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'uuuups' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const attractionId = Types.ObjectId(req.params.id);
    const dataUpdate: UpdateStarsInterface = req.body;
    const updatedAttraction = await attractionService.addStars(
      attractionId,
      dataUpdate,
    );
    if (!updatedAttraction) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'attraction not found' });
    }

    res.status(StatusCodes.OK).json(updatedAttraction);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'uuuups' });
  }
});
