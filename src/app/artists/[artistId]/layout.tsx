import Loading from "@/components/shared/Loading";
import { ReactNode, Suspense } from "react";

interface Props {
    children: ReactNode;
    artistalbums: ReactNode;
}

export default function ArtistLayout({ children, artistalbums }: Props) {
    return (
        <main className="pb-8">
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
