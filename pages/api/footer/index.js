import { getSomething } from '@/lib/api';

export default async function handler(req, res) {
  const footer = await getSomething('footer-nav');

  res.status(200).json({ footer });
}
