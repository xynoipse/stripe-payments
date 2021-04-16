const API = process.env.REACT_APP_API_URL;

/**
 * A helper function to fetch data from your API.
 */
export async function fetchFromAPI(endpointURL, options) {
  const { method, body } = { method: 'GET', body: null, ...options };

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}