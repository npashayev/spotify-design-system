'use client';

import AlbumCard from "@/components/shared/cards/AlbumCard";
import ArtistCard from "@/components/shared/cards/ArtistCard";
import Grid from "@/components/shared/wrappers/Grid";
import MainPlayButton from "@/components/shared/buttons/MainPlayButton";
import Track from "@/components/shared/Track";
import { useSpotifySearch } from "@/lib/hooks/useSpotifySearch";

interface Props {
    query: string;
}

export default function SearchResultsClient({ query }: Props) {
    const { data, error, loading } = useSpotifySearch(query);
    const tracks = data?.tracks?.items;
    const artists = data?.artists?.items;
    const albums = data?.albums?.items;

    return (
        <main className="min-h-screen p-4 bg-theme">
            {loading && <p className="text-gray-400 text-center">Searching for items...</p>}

            {error &&
                <p className="text-gray-400 text-center">
                    {error}
                </p>
            }

            {data && (
                <div>
                    {
                        tracks && tracks.length > 0
                            ? <div>
                                <h2 className="text-3xl max-sm:text-2xl font-bold mb-3 pl-6 text-theme">Songs</h2>
                                <div>
                                    {
                                        tracks.map((track, index) => (
                                            <Track
                                                key={track.id}
                                                track={track}
                                                index={index} />
                                        ))
                                    }
                                </div>
                            </div>
                            : <p className="text-gray-400 text-center">Could not find any tracks</p>
                    }
                    {
                        artists && artists.length > 0
                            ? <div className="mt-12">
                                <h2 className="text-3xl max-sm:text-2xl font-bold my-3 pl-6">Artists</h2>
                                <Grid>
                                    {
                                        artists.map(artist => <ArtistCard key={artist.id} artist={artist} />)
                                    }
                                </Grid>
                            </div>
                            : <p className="text-gray-400 text-center">Could not find any artist</p>
                    }
                    {
                        albums && albums.length > 0
                            ? <div className="my-12">
                                <h2 className="text-3xl max-sm:text-2xl font-bold my-3 pl-6">Albums</h2>
                                <Grid>
                                    {
                                        albums.map(album => {
                                            const type = album.type.charAt(0).toUpperCase() + album.type.slice(1);
                                            const artists = album.artists.map(artist => artist.name);
                                            return (
                                                <AlbumCard
                                                    key={album.id}
                                                    album={album}
                                                    className="hover:bg-[#b9b6b6] dark:hover:bg-[#1F1F1F]"
                                                >
                                                    <p className="text-gray-500 line-clamp-1 text-sm mt-0.5">
                                                        {artists.join(", ")}
                                                    </p>

                                                    <p className="mt-0.5 line-clamp-1 text-sm text-gray-500">
                                                        {album.release_date.split("-")[0]} · {type}
                                                    </p>

                                                    <MainPlayButton className="h-12 absolute bottom-28 right-5 opacity-0 translate-y-3 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0" />
                                                </AlbumCard>
                                            )
                                        })
                                    }
                                </Grid>
                            </div>
                            : <p className="text-gray-400 text-center">Could not find any albums</p>
                    }
                </div>
            )}
        </main>
    );
}
