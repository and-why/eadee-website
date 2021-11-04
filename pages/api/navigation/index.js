// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { server } from 'config';

export default async function handler(req, res) {
  const result = await fetch(`${server}/top-nav-menu`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const nav = await result.json();
  res.status(200).json({ nav });
}
