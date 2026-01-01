import React, { ReactNode } from 'react'
import { PlayingSongProvider } from './PlayingSongContext';
import { DownloadedAlbumsProvider } from './DownloadedAlbumsContext';
import { ShuffleProvider } from './ShuffleContext';
import { FollowedArtistsProvider } from './FollowedArtistsContext';
import { SavedAlbumsProvider } from './SavedAlbumsContext';

interface Props {
    children: ReactNode;
}

export function Providers({ children }: Props) {
    return (
        <SavedAlbumsProvider>
            <DownloadedAlbumsProvider>
                <FollowedArtistsProvider>
                    <ShuffleProvider>
                        <PlayingSongProvider>
                            {children}
                        </PlayingSongProvider>
                    </ShuffleProvider>
                </FollowedArtistsProvider>
            </DownloadedAlbumsProvider>
        </SavedAlbumsProvider>
    )
}
