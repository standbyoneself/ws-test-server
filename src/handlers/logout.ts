import { Request, Response } from 'express';
import cookieOptions from '../cookieOptions';

export default function logout(req: Request, res: Response) {
  res.clearCookie('ws_token', cookieOptions).sendStatus(200);
}
