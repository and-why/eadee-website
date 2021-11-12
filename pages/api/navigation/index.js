import { getSomething } from '@/lib/api';

export default async function handler(req, res) {
  const nav = await getSomething('top-nav-menu');
  res.status(200).json({ nav });
}
