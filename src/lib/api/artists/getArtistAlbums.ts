import { spotifyFetch } from '../spotifyFetch';
import { SpotifyAlbumSimplified } from '@/types/albums';

interface ResponseShape {
   items: SpotifyAlbumSimplified[];
}

export const getArtistAlbums = async (artistId: string) => {
   return spotifyFetch<ResponseShape>(`/artists/${artistId}/albums`);
};
