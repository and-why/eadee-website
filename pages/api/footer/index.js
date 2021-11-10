import { server } from '../../../config';

export default async function handler(req, res) {
  const result = await fetch(`${server}/footer-nav`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('footer result', result);
  const footer = await result.json();
  res.status(200).json({ footer });
}
