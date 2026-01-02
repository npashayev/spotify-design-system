import { getArtistAlbums } from "@/lib/api/artists/getArtistAlbums";
import { use } from "react";
import AlbumCard from "@/components/shared/cards/AlbumCard";
import MainPlayButton from "@/components/shared/buttons/MainPlayButton";
import Grid from "@/components/shared/wrappers/Grid";

interface Props {
    params: Promise<{
        artistId: string;
    }>;
}

export default function ArtistAlbums({ params }: Props) {
    const { artistId } = use(params);

    const { items } = use(getArtistAlbums(artistId));

    return (
        <div className="p-4">
            <h2 className="text-4xl max-sm:text-3xl mt-12 max-sm:mt-6 mb-4 pl-2 font-bold">Albums</h2>
            <Grid>
                {
                    items.map(album => {
                        const type = album.type.charAt(0).toUpperCase() + album.type.slice(1);
                        return (
                            <AlbumCard
                                key={album.id}
                                album={album}
                                className="hover:bg-[#b9b6b6] dark:hover:bg-[#1F1F1F]"
                            >
                                <p className="mt-0.5 line-clamp-1 text-sm text-gray-500">
                                    {album.release_date.split("-")[0]} · {type}
                                </p>

                                <MainPlayButton className="h-12 absolute bottom-18 right-5 opacity-0 translate-y-3 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0" />
                            </AlbumCard>
                        );
                    })
                }
            </Grid>
        </div>
    );
}
