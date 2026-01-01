import { SpotifyTrack } from "@/types/tracks";
import { spotifyFetch } from "../spotifyFetch";

interface ResponseShape {
    tracks: SpotifyTrack[];
}

export const getArtistTopTracks = async (artistId: string) => {
    return spotifyFetch<ResponseShape>(`/artists/${artistId}/top-tracks`);
};