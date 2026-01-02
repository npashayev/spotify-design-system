'use client';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import playing from '@/assets/playing-music.gif';
import Image from 'next/image';
import { SpotifyTrack } from '@/types/tracks';
import { usePlayingSong } from '@/lib/contexts/PlayingSongContext';

interface Props {
    index: number;
    track: SpotifyTrack;
}

export default function MiniPlayButton({ index, track }: Props) {
    const { playingSong, setPlayingSong } = usePlayingSong();

    const handlePlaySong = () => {
        setPlayingSong({
            playingSongId: track.id,
            artistIds: track.artists.map(artist => artist.id),
        });
    };

    const isPlaying = playingSong?.playingSongId === track.id;

    return (
        <div className='h-5 aspect-square flex items-center justify-center'>
            {isPlaying
                ? (
                    <div className='h-full aspect-square scale-150'>
                        <Image src={playing} width={150} height={150} alt="playing" className='object-cover object-center' />
                    </div>
                )
                : (
                    <>
                        <span className="group-hover:hidden">{index + 1}</span>
                        <button onClick={handlePlaySong} className="cursor-default h-4 hidden group-hover:flex">
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                    </>
                )}
        </div>
    );
}