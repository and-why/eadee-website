export default async function handler(req, res) {
  const result = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/top-nav-menu`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('nav result', result);
  const nav = await result.json();
  res.status(200).json({ nav });
}
