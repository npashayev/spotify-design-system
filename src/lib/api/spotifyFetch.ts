import { getSpotifyToken } from "./spotifyClient";

export async function spotifyFetch<T, B extends Record<string, unknown> = Record<string, never>>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: B
): Promise<T> {
  const token = await getSpotifyToken();
  const res = await fetch(`${process.env.SPOTIFY_BASE_URL}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: body && method !== "GET" ? JSON.stringify(body) : undefined,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(
      `Spotify fetch failed: ${res.status} ${res.statusText} - ${errorBody}`
    );
  }

  return res.json() as Promise<T>;
}
