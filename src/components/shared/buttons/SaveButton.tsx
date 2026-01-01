'use client';

import { useSavedAlbums } from '@/lib/contexts/SavedAlbumsContext';
import { faCircleCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

interface Props {
    albumId: string;
}

export default function SaveButton({ albumId }: Props) {
    const { isSaved, saveAlbum, removeAlbum } = useSavedAlbums();
    const saved = isSaved(albumId);

    const handleClick = () => {
        if (saved) {
            removeAlbum(albumId);
        } else {
            saveAlbum(albumId);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={clsx(
                'control-btn flex items-center justify-center rounded-full w-8 aspect-square',
                saved
                    ? 'text-[#1FD760] text-3xl'
                    : 'text-theme border-3 border-(--foreground) text-sm'
            )}
        >
            <FontAwesomeIcon icon={saved ? faCircleCheck : faPlus} />
        </button>
    );
}
