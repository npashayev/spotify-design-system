'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface PlayingSong {
    playingSongId: string | null;
    artistIds: string[] | null;
}

const PlayingSongContext = createContext<{
    playingSong: PlayingSong | null;
    setPlayingSong: (song: PlayingSong | null) => void;
} | null>(null);

export function PlayingSongProvider({ children }: Props) {
    const [playingSong, setPlayingSong] = useState<PlayingSong | null>(null);

    return (
        <PlayingSongContext.Provider value={{ playingSong, setPlayingSong }}>
            {children}
        </PlayingSongContext.Provider>
    );
}

export const usePlayingSong = () => {
    const context = useContext(PlayingSongContext);
    if (!context) throw new Error('usePlayingSong must be used within a PlayingSongProvider');
    return context;
};
