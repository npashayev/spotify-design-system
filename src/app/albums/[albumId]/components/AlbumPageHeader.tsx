import { msToTime } from '@/lib/utils/msToTime';
import { SpotifyAlbum } from '@/types/albums';
import { SpotifyImage } from '@/types/images';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    album: SpotifyAlbum;
    vibrant: string;
    image: SpotifyImage;
}

export default function AlbumPageHeader({ album, vibrant, image }: Props) {
    // total album length calculation
    const albumLengthInMs = album.tracks.items.reduce((acc, track) => acc + track.duration_ms, 0);

    const { hours, minutes, seconds } = msToTime(albumLengthInMs)

    // capitalize the first letter of album type
    const type = album.type.charAt(0).toUpperCase() + album.type.slice(1);

    return (
        <div
            className="px-4 pb-8 max-md:pt-10 max-md:pb-5 pt-16 flex gap-4 items-end max-[480px]:flex-col max-[480px]:items-center"
            style={{
                background: `linear-gradient(to bottom, ${vibrant}, color-mix(in srgb, ${vibrant} 35%, black))`
            }}
        >
            <div className="h-50 max-md:h-40 aspect-square shrink-0 rounded-md overflow-hidden bg-black">
                <Image
                    src={image.url}
                    width={image.width ?? 200}
                    height={image.height ?? 200}
                    alt="album"
                    className="object-cover"
                />
            </div>
            <div className="text-white flex flex-col gap-1">
                <p>{type}</p>
                <h1 className="text-[clamp(18px,5vw,60px)] leading-[1.2] font-bold">{album.name}</h1>
                <p className='leading-[1.2] mt-1'>
                    {
                        album.artists.map(a =>
                            <React.Fragment key={a.id}>
                                <Link href={`/artists/${a.id}`} className='hover:underline font-bold'>
                                    {a.name}
                                </Link>{" · "}
                            </React.Fragment>)
                    }
                    {`${album.release_date.split("-")[0]} · ${album.total_tracks} songs, ${hours > 0 ? `${hours} hr ` : ""}${minutes} min ${seconds} sec`}
                </p>
            </div>
        </div>
    )
}
