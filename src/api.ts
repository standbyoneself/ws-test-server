import { Octokit } from '@octokit/core';

export default function createAPI(token: string): Octokit {
  return new Octokit({ auth: token });
}
