import { SpotifyArtistSimplified } from './artists';
import { SpotifyImage } from './images';
import { SpotifyTrack } from './tracks';

type AlbumType = 'album' | 'single' | 'compilation';

export interface SpotifyAlbumSimplified {
   album_type: AlbumType;
   total_tracks: number;
   id: string;
   images: SpotifyImage[];
   name: string;
   release_date: string;
   type: 'album';
   artists: SpotifyArtistSimplified[];
}

export interface SpotifyAlbum extends SpotifyAlbumSimplified {
   tracks: {
      items: SpotifyTrack[];
   };
}
