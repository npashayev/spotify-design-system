'use client';

import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface Props {
    children: ReactNode;
}

interface FollowedArtistsContextType {
    isFollowed: (id: string) => boolean;
    follow: (id: string) => void;
    unfollow: (id: string) => void;
}

const FollowedArtistsContext = createContext<FollowedArtistsContextType | null>(null);

export function FollowedArtistsProvider({ children }: Props) {
    const [followedArtistIds, setFollowedArtistIds] = useLocalStorage<string[]>('followedArtistIds', []);

    const follow = (id: string) => {
        setFollowedArtistIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    };

    const unfollow = (id: string) => {
        setFollowedArtistIds(prev => prev.filter(artistId => artistId !== id));
    };

    const isFollowed = (id: string) => {
        return followedArtistIds.includes(id);
    }

    return (
        <FollowedArtistsContext.Provider value={{ isFollowed, follow, unfollow }}>
            {children}
        </FollowedArtistsContext.Provider>
    );
}

export const useFollowedArtists = () => {
    const context = useContext(FollowedArtistsContext);
    if (!context) throw new Error('useFollowedArtists must be used within a FollowedArtistsProvider');
    return context;
};
