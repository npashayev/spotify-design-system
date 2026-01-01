import { msToTime } from '@/lib/utils/msToTime';
import { SpotifyTrack } from '@/types/tracks';
import Link from 'next/link';
import React from 'react'
import MiniPlayButton from './MiniPlayButton';

interface Props {
    track: SpotifyTrack;
    index: number;
}

export default function Track({ track, index }: Props) {
    const { hours, minutes, seconds } = msToTime(track.duration_ms);
    return (
        <div className="group rounded-md text-theme py-2 px-6 max-sm:px-2 grid grid-cols-[max-content_1fr_max-content] gap-8 max-sm:gap-4 items-center hover:bg-[#b9b6b6] dark:hover:bg-[#312A29]">
            <MiniPlayButton index={index} track={track} />
            <div>
                <div className="font-semibold line-clamp-1">{track.name}</div>
                <div className="flex gap-1.5 items-center">
                    {
                        track.explicit &&
                        <div className="text-[12px] h-4 rounded-xs aspect-square flex items-center justify-center bg-[#B3B3B3]">
                            E
                        </div>
                    }
                    <p className='line-clamp-1'>
                        {track.artists.map((artist, i) => (
                            <React.Fragment key={artist.id}>
                                <Link href={`/artists/${artist.id}`} className="hover:underline">
                                    {artist.name}
                                </Link>
                                {i < track.artists.length - 1 && ", "}
                            </React.Fragment>
                        ))}

                    </p>
                </div>
            </div>
            <div>{`${hours > 0 ? hours + ":" : ""}${hours > 0 ? minutes.toString().padStart(2, "0") : minutes}:${seconds.toString().padStart(2, "0")}`}</div>
        </div>
    );
};
