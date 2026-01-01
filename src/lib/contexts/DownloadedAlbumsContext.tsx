'use client';

import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props {
    children: ReactNode;
}

interface DownloadedAlbumsContextType {
    isDownloaded: (id: string) => boolean;
    downloadAlbum: (id: string) => void;
    removeDownloadedAlbum: (id: string) => void;
}

const DownloadedAlbumsContext = createContext<DownloadedAlbumsContextType | null>(null);
export function DownloadedAlbumsProvider({ children }: Props) {
    const [downloadedAlbumIds, setDownloadedAlbumIds] = useLocalStorage<string[]>('downloadedAlbumIds', []);

    const downloadAlbum = (id: string) => {
        setDownloadedAlbumIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    };

    const removeDownloadedAlbum = (id: string) => {
        setDownloadedAlbumIds(prev => prev.filter(albumId => albumId !== id));
    };

    const isDownloaded = (id: string) => {
        return downloadedAlbumIds.includes(id);
    };

    return (
        <DownloadedAlbumsContext.Provider value={{ isDownloaded, downloadAlbum, removeDownloadedAlbum }}>
            {children}
        </DownloadedAlbumsContext.Provider>
    );
}

export const useDownloadedAlbums = () => {
    const context = useContext(DownloadedAlbumsContext);
    if (!context) throw new Error('useDownloadedAlbums must be used within a DownloadedAlbumsProvider');
    return context;
};
