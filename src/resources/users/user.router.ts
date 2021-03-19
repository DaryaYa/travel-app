import { StatusCodes } from 'http-status-codes';
import { UploadedFile, FileArray } from 'express-fileupload';
import { Router, Response, Request } from 'express';
import moment from 'moment';
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
    let userData: CreateUserRequestInterface = req.body;
    userData = {
      ...userData,
      email: userData.email.toLowerCase(),
    };

    if (req.files) {
      const file = req.files.imagine as UploadedFile;

      const date = moment().format('DDMMYYYY-HHmmss_SSS');
      const fileFormat = file.name.split('.').pop();
      file.name = `${date}.${fileFormat}`;
      const pathImg = `./uploads/${file.name}`;
      file.mv(pathImg, err => {
        if (err) {
          return res
            .status(StatusCodes.BAD_GATEWAY)
            .json({ message: 'photo not load' });
        }
      });

      userData = {
        ...userData,
        email: userData.email.toLowerCase(),
        imgSrc: pathImg.slice(1),
      };
    }
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

router.post('/login', async (req: Request, res: Response) => {
  try {
    let userData: LogInUserRequestInterface = req.body;
    userData = { ...userData, email: userData.email.toLowerCase() };

    const user = await userService.login(userData);
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
