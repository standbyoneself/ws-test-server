import { CookieOptions } from 'express';

const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production' ? true : false,
};

export default cookieOptions;
