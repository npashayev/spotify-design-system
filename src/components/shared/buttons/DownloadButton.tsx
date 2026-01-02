'use client';

import { useDownloadedAlbums } from '@/lib/contexts/DownloadedAlbumsContext';
import { faArrowDown, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

interface Props {
    albumId: string;
}

export default function DownloadButton({ albumId }: Props) {
    const { isDownloaded, downloadAlbum, removeDownloadedAlbum } = useDownloadedAlbums();
    const downloaded = isDownloaded(albumId);

    const handleClick = () => {
        if (downloaded) {
            removeDownloadedAlbum(albumId);
        } else {
            downloadAlbum(albumId);
        }
    };
    return (
        <button
            onClick={handleClick}
            className={clsx(
                'control-btn flex items-center justify-center rounded-full w-8 aspect-square',
                downloaded
                    ? 'text-[#1FD760] text-3xl border-transparent'
                    : 'text-theme border-3 border-(--foreground) text-sm'
            )}
        >
            <FontAwesomeIcon icon={downloaded ? faCircleArrowDown : faArrowDown} />
        </button>
    );
};
