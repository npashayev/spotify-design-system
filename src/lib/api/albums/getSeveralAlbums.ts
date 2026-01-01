import { SpotifyAlbum } from "@/types/albums";
import { spotifyFetch } from "../spotifyFetch";
import { albumIds } from "@/lib/constants/albumIds";

interface ResponseShape {
    albums: SpotifyAlbum[];
}

export const getSeveralAlbums = async () => {
    return spotifyFetch<ResponseShape>(`/albums?ids=${albumIds.join(",")}`);
};