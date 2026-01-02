import { use } from 'react';
import Grid from '@/components/shared/wrappers/Grid';
import { getNewReleases } from '@/lib/api/albums/getNewReleases';
import AlbumCard from '@/components/shared/cards/AlbumCard';

export default function NewReleasesPage() {
   const { albums: { items } } = use(getNewReleases());

   return (
      <div>
         <h1 className="text-3xl mb-6 mt-12 font-bold max-md:text-2xl max-sm:text-[16px]">New Releases</h1>
         <Grid>
            {items.map((album) => {
               const artists = album.artists.map((artist) => artist.name);
               return (
                  <AlbumCard key={album.id} album={album}>
                     <p className="text-gray-500 line-clamp-1 text-sm mt-0.5">{artists.join(', ')}</p>
                  </AlbumCard>
               );
            })}
         </Grid>
      </div>
   );
}
