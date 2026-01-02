import { SpotifyArtist } from "@/types/artists";
import Image from "next/image";
import Link from "next/link";
import MainPlayButton from "../buttons/MainPlayButton";

interface Props {
    artist: SpotifyArtist;
}

export default function ArtistCard({ artist }: Props) {
    const image = artist.images[0];
    const type = artist.type.charAt(0).toUpperCase() + artist.type.slice(1);
    return (
        <Link key={artist.id} href={`/artists/${artist.id}`} className="relative group hover:bg-[#b9b6b6] dark:hover:bg-[#1F1F1F] p-2 w-54 rounded-md">
            <div className="aspect-square rounded-full overflow-hidden shadow-xl bg-black">
                {
                    image &&
                    <Image
                        src={image?.url}
                        width={image?.width ?? 200}
                        height={image?.height ?? 200}
                        alt="artist"
                        className="object-cover object-center"
                    />
                }
            </div>
            <span className="line-clamp-1 mt-4 hover:underline w-max max-w-full">{artist.name}</span>
            <p className="line-clamp-1 text-gray-500">{type}</p>
            <MainPlayButton className="absolute bottom-22 right-5 h-12 opacity-0 translate-y-3 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0" />
        </Link>
    );
}
