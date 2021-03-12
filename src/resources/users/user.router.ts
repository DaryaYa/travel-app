import { StatusCodes } from 'http-status-codes';
import { Router, Response, Request } from 'express';
import { Document } from 'mongoose';

import {
  CreateUserRequestInterface,
  UserInterface,
  LogInUserRequestInterface,
} from './user.types';
import userService from './user.service';

export const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const userData: CreateUserRequestInterface = req.body;

    const user = await userService.getByEmail(userData.email);
    if (user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'такой пользовтаель уже есть' });
    }

    const newUser = await userService.create(userData);
    if (!newUser) {
      return res
        .status(StatusCodes.BAD_GATEWAY)
        .json({ message: 'user not create' });
    }

    const { email, imgSrc, username, _id } = newUser.toJSON() as UserInterface;

    res.status(StatusCodes.OK).json({ _id, email, imgSrc, username });
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'uuuups' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const userData: LogInUserRequestInterface = req.body;

    const user = await userService.login(userData);
    console.log(userData);
    if (!user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'user is not register' });
    }

    res.status(StatusCodes.OK).json(user);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'uuuups' });
  }
});
