import { SpotifyAlbum } from "@/types/albums";
import { spotifyFetch } from "../spotifyFetch";

export const getAlbum = async (albumId: string) => {
  return spotifyFetch<SpotifyAlbum>(`/albums/${albumId}`);
};
