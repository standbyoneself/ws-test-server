import { Request, Response } from 'express';
import { createOAuthAppAuth } from '@octokit/auth-oauth-app';
import cookieOptions from '../cookieOptions';

export default async function login(req: Request, res: Response) {
  const code = req.query.code as string;

  const appAuth = createOAuthAppAuth({
    clientType: 'oauth-app',
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  });

  try {
    const userAuth = await appAuth({
      type: 'oauth-user',
      code,
    });

    const { token } = userAuth;

    res.cookie('ws_token', token, cookieOptions);

    res.json({ isAuthenticated: true });
  } catch (err) {
    if (err.response?.data) {
      const { error, error_description } = err.response?.data;

      if (error === 'bad_verification_code') {
        res.status(406).json({ error, error_description });
      }
    } else {
      res.sendStatus(500);
    }
  }
}
