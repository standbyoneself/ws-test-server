import { Request, Response, NextFunction } from 'express';

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.cookies.ws_token) {
    res.sendStatus(401);
    return;
  }

  next();
}
