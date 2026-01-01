import Loading from "@/components/Loading";
import { ReactNode, Suspense } from "react";

interface Props {
    children: ReactNode;
    artistalbums: ReactNode;
}

export default function ArtistLayout({ children, artistalbums }: Props) {
    return (
        <main>
            {children}
            <Suspense fallback={
                <Loading>
                    <h2>
                        Artist albums are loading...
                    </h2>
                </Loading>
            }>
                {artistalbums}
            </Suspense>
        </main>
    );
}
