import { SpotifyArtist } from '@/types/artists';
import { spotifyFetch } from '../spotifyFetch';

export const getArtist = async (artistId: string) => {
   return spotifyFetch<SpotifyArtist>(`/artists/${artistId}`);
};
