'use client';
import { useShuffle } from '@/lib/contexts/ShuffleContext';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';

export default function ShuffleButton() {
    const { isShuffling, setIsShuffling } = useShuffle();
    return (
        <button
            className={clsx(
                'control-btn text-3xl',
                isShuffling ? 'text-[#1FD760]' : 'text-theme'
            )}
            onClick={() => setIsShuffling(!isShuffling)}
        >
            <FontAwesomeIcon icon={faShuffle} />
        </button>
    );
}
