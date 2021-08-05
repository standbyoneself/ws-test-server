import { Request, Response } from 'express';

export default function checkAuth(req: Request, res: Response) {
  const isAuthenticated = 'ws_token' in req.cookies;

  res.json({ isAuthenticated });
}
