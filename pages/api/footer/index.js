export default async function handler(req, res) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/footer-nav`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('footer result', result);
  const footer = await result.json();
  res.status(200).json({ footer });
}
