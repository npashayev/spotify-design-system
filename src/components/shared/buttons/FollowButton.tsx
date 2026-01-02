'use client';
import { useFollowedArtists } from "@/lib/contexts/FollowedArtistsContext";

interface Props {
    artistId: string;
}

export default function FollowButton({ artistId }: Props) {
    const { isFollowed, follow, unfollow } = useFollowedArtists();
    const followed = isFollowed(artistId);

    const handleClick = () => {
        if (followed) {
            unfollow(artistId);
        } else {
            follow(artistId);
        }
    };

    return (
        <button onClick={handleClick} className="control-btn rounded-3xl border-2 border:#171717 dark:border-white px-4 py-1">
            {followed ? "Following" : "Follow"}
        </button>
    );
};
