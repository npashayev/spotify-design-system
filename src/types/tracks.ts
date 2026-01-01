import { SpotifyArtistSimplified } from './artists';

export interface SpotifyTrack {
   id: string;
   name: string;
   artists: SpotifyArtistSimplified[];
   duration_ms: number;
   explicit: boolean;
}
