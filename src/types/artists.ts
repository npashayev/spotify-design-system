import { SpotifyImage } from './images';

export interface SpotifyArtistSimplified {
   id: string;
   name: string;
   type: 'artist';
}

export interface SpotifyArtist extends SpotifyArtistSimplified {
   followers: {
      total: number;
   };
   images: SpotifyImage[];
}
