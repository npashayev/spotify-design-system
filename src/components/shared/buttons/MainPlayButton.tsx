'use client';

import { usePlayingSong } from '@/lib/contexts/PlayingSongContext';
import { useShuffle } from '@/lib/contexts/ShuffleContext';
import { SpotifyTrack } from '@/types/tracks';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

interface Props {
    songs?: SpotifyTrack[];
    className?: string;
}

export default function MainPlayButton({ songs, className = "h-14" }: Props) {
    const { playingSong, setPlayingSong } = usePlayingSong();
    const { isShuffling } = useShuffle();
    const isPlaying = songs?.some(song => song.id === playingSong?.playingSongId);

    const handleClick = () => {
        if (!songs) return;

        if (isPlaying) {
            setPlayingSong(null);
            return;
        }

        if (isShuffling) {
            const randomSong = songs[Math.floor(Math.random() * songs.length)];
            setPlayingSong({
                playingSongId: randomSong.id,
                artistIds: randomSong.artists.map(artist => artist.id),
            });
        } else {
            const firstSong = songs[0];
            setPlayingSong({
                playingSongId: firstSong.id,
                artistIds: firstSong.artists.map(artist => artist.id),
            });
        }

    };

    return (
        <button onClick={handleClick} className={clsx("control-btn rounded-full aspect-square flex items-center justify-center bg-[#1FD760]", className)}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="text-black h-5" />
        </button>
    );
}
