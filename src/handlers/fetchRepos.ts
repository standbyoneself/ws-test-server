import { Request, Response } from 'express';
import createAPI from '../api';

export default async function fetchRepos(req: Request, res: Response) {
  const { ws_token } = req.cookies;

  const api = createAPI(ws_token);

  const response = await api.request('GET /user/repos');

  const { data: repos } = response;

  res.json(repos);
}
