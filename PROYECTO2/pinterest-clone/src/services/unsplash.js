const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

async function request(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Unsplash error ${res.status}: ${text}`);
  }

  return res.json();
}

// Fotos de inicio (feed general)
export function listPhotos({ page = 1, perPage = 30 } = {}) {
  return request(`/photos?page=${page}&per_page=${perPage}`);
}

// Búsqueda (devuelve { results: [...] })
export function searchPhotos({ query, page = 1, perPage = 30 } = {}) {
  const q = encodeURIComponent(query);
  return request(`/search/photos?query=${q}&page=${page}&per_page=${perPage}`);
}
