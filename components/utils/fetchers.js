const fetcher = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  } else {
  }
  return res.json();
};

export default fetcher;

export async function fetchGetJSON(url) {
  try {
    const data = await fetch(url).then((res) => res.json());
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
