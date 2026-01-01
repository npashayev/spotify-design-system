import { SpotifyArtist } from '@/types/artists';

interface Props {
    artist: SpotifyArtist;
}

export default function ArtistHeader({ artist }: Props) {
    const image = artist.images[0];

    return (
        <div
            className="relative bg-center bg-cover px-4 pb-8 max-sm:pb-4 pt-64 max-lg:pt-36 max-sm:pt-24 flex gap-4 items-end"
            style={{ backgroundImage: `url(${image.url})` }}
        >
            <div className="absolute inset-0 bg-black/50 z-1"></div>
            <div className='relative z-2 text-white'>
                <h1 className='leading-[1.2] text-[clamp(18px,8vw,96px)] font-bold mb-2'>
                    {artist.name}
                </h1>
                <p className='text-2xl max-sm:text-xl leading-[1.2]'>{artist.followers.total.toLocaleString()} followers</p>
            </div>
        </div>
    )
}
