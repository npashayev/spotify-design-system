import FollowButton from "@/components/shared/buttons/FollowButton";
import MainPlayButton from "@/components/shared/buttons/MainPlayButton";
import ShuffleButton from "@/components/shared/buttons/ShuffleButton";
import Track from "@/components/shared/Track";
import { getArtistTopTracks } from "@/lib/api/artists/getArtistTopTracks";
import { use } from "react";

interface Props {
    artistId: string;
}

export default function ArtistTopTracks({ artistId }: Props) {
    const { tracks } = use(getArtistTopTracks(artistId));

    return (
        <div>
            <div>
                <div className="flex items-center gap-6 max-sm:gap-4">
                    <MainPlayButton songs={tracks} />
                    <ShuffleButton />
                    <FollowButton artistId={artistId} />
                </div>
            </div>
            <h2 className="text-4xl max-sm:text-3xl mt-6 mb-4 pl-2 font-bold">Top tracks</h2>
            {
                tracks.map((track, index) => (
                    <Track
                        key={track.id}
                        track={track}
                        index={index}
                    />
                ))
            }
        </div >
    );
}
