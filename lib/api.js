async function fetchAPI(query, id = '') {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${query}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  console.log('json', json);
  return json;
}

export async function getAllPages() {
  const data = fetchAPI('pages');
  return data;
}

export async function getPageById(id) {
  const data = fetchAPI('pages', id);
  return data;
}
