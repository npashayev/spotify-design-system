import { spotifyFetch } from "../spotifyFetch";
import { SpotifyAlbum } from "@/types/albums";

interface ResponseShape {
    albums: {
        items: SpotifyAlbum[];
    };
}

export const getNewReleases = async () => {
    return spotifyFetch<ResponseShape>("/browse/new-releases");
};