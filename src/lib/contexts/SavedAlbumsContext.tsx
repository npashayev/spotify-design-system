'use client';

import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props {
    children: ReactNode;
}

interface SavedAlbumsContextType {
    isSaved: (id: string) => boolean;
    saveAlbum: (id: string) => void;
    removeAlbum: (id: string) => void;
}

const SavedAlbumsContext = createContext<SavedAlbumsContextType | null>(null);

export function SavedAlbumsProvider({ children }: Props) {
    const [savedAlbumIds, setSavedAlbumIds] = useLocalStorage<string[]>('savedAlbumIds', []);

    const saveAlbum = (id: string) => {
        setSavedAlbumIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    };

    const removeAlbum = (id: string) => {
        setSavedAlbumIds(prev => prev.filter(albumId => albumId !== id));
    };

    const isSaved = (id: string) => {
        return savedAlbumIds.includes(id);
    }

    return (
        <SavedAlbumsContext.Provider value={{ isSaved, saveAlbum, removeAlbum }}>
            {children}
        </SavedAlbumsContext.Provider>
    );
}

export const useSavedAlbums = () => {
    const context = useContext(SavedAlbumsContext);
    if (!context) throw new Error('useSavedAlbums must be used within a SavedAlbumsProvider');
    return context;
};
