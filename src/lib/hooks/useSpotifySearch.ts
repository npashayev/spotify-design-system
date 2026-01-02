'use client';

import { useState, useEffect } from 'react';
import { SpotifyAlbum } from '@/types/albums';
import { SpotifyArtist } from '@/types/artists';
import { SpotifyTrack } from '@/types/tracks';

interface SpotifySearchResponse {
   albums?: { items: SpotifyAlbum[] };
   artists?: { items: SpotifyArtist[] };
   tracks?: { items: SpotifyTrack[] };
   error?: string;
}

export function useSpotifySearch(query: string) {
   const [data, setData] = useState<SpotifySearchResponse | null>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const errorMessage = 'An unexpected error happened while searching for items. Please try again later';

   useEffect(() => {
      if (!query) {
         // eslint-disable-next-line react-hooks/set-state-in-effect
         setData(null);
         return;
      }

      setLoading(true);
      setError(null);

      fetch(`/api/spotify/search?query=${encodeURIComponent(query)}`)
         .then(async (res) => {
            const json: SpotifySearchResponse = await res.json();
            if ('error' in json) {
               setError(errorMessage);
               setData(null);
            } else {
               setData(json);
            }
         })
         .catch(() => setError(errorMessage))
         .finally(() => setLoading(false));
   }, [query]);

   return { data, loading, error };
}
