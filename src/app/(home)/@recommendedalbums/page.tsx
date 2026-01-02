import AlbumCard from '@/components/shared/cards/AlbumCard';
import Grid from '@/components/shared/wrappers/Grid';
import { getSeveralAlbums } from '@/lib/api/albums/getSeveralAlbums';
import { use } from 'react';

export default function RecommendedAlbumsPage() {
   const { albums } = use(getSeveralAlbums());

   return (
      <div>
         <h2 className="text-3xl mb-6 mt-12 font-bold max-md:text-2xl max-sm:text-[16px]">Popular albums recommended</h2>
         <Grid>
            {albums.map((album) => {
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
