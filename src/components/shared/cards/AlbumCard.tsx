import { SpotifyAlbum, SpotifyAlbumSimplified } from '@/types/albums';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
   album: SpotifyAlbum | SpotifyAlbumSimplified;
   children?: ReactNode;
   className?: string;
}

export default function AlbumCard({ album, children, className }: Props) {
   const image = album.images[0];

   return (
      <Link
         href={`/albums/${album.id}`}
         key={album.id}
         className={clsx(
            'group relative w-54 hover:scale-102 transition:scale p-2 rounded-md duration-100',
            className
         )}
      >
         <div className="aspect-square overflow-hidden rounded-md bg-black">
            <Image
               src={image.url}
               height={image.height ?? 200}
               width={image.width ?? 200}
               alt="album"
               className="object-cover"
            />
         </div>
         <span className="mt-2 line-clamp-2 leading-5 text-theme hover:underline w-max max-w-full">
            {album.name}
         </span>
         {children}
      </Link>
   );
}
