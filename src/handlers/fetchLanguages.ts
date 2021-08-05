import { Request, Response } from 'express';
import createAPI from '../api';

export default async function fetchLanguages(req: Request, res: Response) {
  const { ws_token } = req.cookies;
  const { username, repo } = req.params;

  const api = createAPI(ws_token);

  const response = await api.request('GET /repos/{owner}/{repo}/languages', {
    owner: username,
    repo,
  });

  const { data: languages } = response;

  res.json(languages);
}
