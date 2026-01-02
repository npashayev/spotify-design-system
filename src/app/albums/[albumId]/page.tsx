import { getAlbum } from "@/lib/api/albums/getAlbum";
import { notFound } from "next/navigation";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getImageColor } from '@/lib/utils/getImageColor';
import Track from '@/components/shared/Track';
import AlbumPageHeader from "./components/AlbumPageHeader";
import MainPlayButton from "@/components/shared/buttons/MainPlayButton";
import ShuffleButton from "@/components/shared/buttons/ShuffleButton";
import SaveButton from "@/components/shared/buttons/SaveButton";
import DownloadButton from "@/components/shared/buttons/DownloadButton";
import ThemeGradientContainer from "@/components/shared/ThemeGradientContainer";

interface Props {
    params: Promise<{
        albumId: string;
    }>;
};

export default async function AlbumPage({ params }: Props) {
    const { albumId } = await params;

    let album;
    try {
        album = await getAlbum(albumId);
    } catch (err: unknown) {
        if (err instanceof Error) {
            if (err.message.includes("400") || err.message.includes("404")) {
                notFound();
            }
            throw err;
        }
        throw new Error("Unknown error occurred while fetching album");
    }

    const image = album.images[0];

    const vibrant = await getImageColor(image.url);

    return (
        <main className="min-h-page">
            <AlbumPageHeader
                album={album}
                vibrant={vibrant}
                image={image}
            />
            <ThemeGradientContainer vibrant={vibrant}>
                <div>
                    <div className="flex items-center gap-6 max-sm:gap-4">
                        <MainPlayButton songs={album.tracks.items} />
                        <ShuffleButton />
                        <SaveButton albumId={album.id} />
                        <DownloadButton albumId={album.id} />
                    </div>
                </div>
                <div className="px-6 py-6 max-sm:px-0">
                    <div className="dark:text-gray-300 text-(--foreground) mb-3 py-2 px-6 max-sm:px-2 grid grid-cols-[max-content_1fr_max-content] gap-8 max-sm:gap-4 border-b border-(--foreground) dark:border-gray-400/50">
                        <div className="h-5 aspect-square flex items-center justify-center font-bold">#</div>
                        <div className="font-bold">Title</div>
                        <div className="font-bold w-full">
                            <FontAwesomeIcon icon={faClockFour} className="h-4" />
                        </div>
                    </div>

                    {album.tracks.items.map((track, index) =>
                        <Track
                            key={track.id}
                            track={track}
                            index={index}
                        />
                    )}
                </div>
            </ThemeGradientContainer>
        </main >
    );
}
