import ArtistHeader from "./components/ArtistHeader";
import ArtistTopTracks from "./components/ArtistTopTracks";
import { getArtist } from '@/lib/api/artists/getArtist';
import { notFound } from 'next/navigation';
import { getImageColor } from "@/lib/utils/getImageColor";
import ThemeGradientContainer from "@/components/shared/ThemeGradientContainer";

interface Props {
    params: Promise<{
        artistId: string;
    }>;
};

export default async function ArtistPage({ params }: Props) {
    const { artistId } = await params;

    let artist;

    try {
        artist = await getArtist(artistId);
    } catch (err: unknown) {
        if (err instanceof Error) {
            if (err.message.includes("400") || err.message.includes("404")) {
                notFound();
            }
            throw err;
        }
        throw new Error("Unknown error occurred while fetching album");
    }
    const vibrant = await getImageColor(artist.images[0].url);

    return (
        <>
            <ArtistHeader artist={artist} />
            <ThemeGradientContainer vibrant={vibrant}>
                <ArtistTopTracks artistId={artistId} />
            </ThemeGradientContainer>
        </>
    );
}