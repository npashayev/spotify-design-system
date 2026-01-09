import Loading from '@/components/shared/Loading';
import { ReactNode, Suspense } from 'react';

interface Props {
   newreleases: ReactNode;
   recommendedalbums: ReactNode;
}

export default function HomePageLayout({ newreleases, recommendedalbums }: Props) {
   return (
      <main className="p-8 min-h-page max-sm:p-5 max-[480px]:p-4">
         <h1 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-bold max-2xl:text-3xl max-md:text-2xl max-sm:text-xl">
            Welcome to Spotify, find and listen to your favorite songs here
         </h1>

         <Suspense fallback={
            <Loading>
               <h2>Recommended albums are loading...</h2>
            </Loading>
         }
         >
            {recommendedalbums}
         </Suspense>

         <Suspense fallback={
            <Loading>
               <h2>New releases are loading...</h2>
            </Loading>
         }
         >
            {newreleases}
         </Suspense>
      </main>
   );
}
