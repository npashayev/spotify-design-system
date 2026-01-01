'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
    children: ReactNode;
}

const ShuffleContext = createContext<{
    isShuffling: boolean;
    setIsShuffling: (shuffle: boolean) => void;
} | null>(null);

export function ShuffleProvider({ children }: Props) {
    const [isShuffling, setIsShuffling] = useLocalStorage('isShuffling', false);

    return (
        <ShuffleContext.Provider value={{ isShuffling, setIsShuffling }}>
            {children}
        </ShuffleContext.Provider>
    );
}

export const useShuffle = () => {
    const context = useContext(ShuffleContext);
    if (!context) throw new Error('useShuffle must be used within a ShuffleProvider');
    return context;
};
