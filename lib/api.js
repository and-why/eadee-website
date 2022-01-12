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
  return json;
}

export async function getAllPages() {
  const data = fetchAPI('pages');
  return data;
}

export async function getHomepage() {
  const data = fetchAPI('homepage');
  return data;
}

export async function getSomething(something) {
  const data = fetchAPI(something);
  return data;
}

export async function getPageById(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/pages/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  if (data.errors) {
    console.error(data.errors);
    throw new Error('Failed to fetch API');
  }
  return data;
}
