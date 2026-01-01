import loading from '@/assets/spotify-loading.gif';
import Image from 'next/image';

interface Props {
    children?: React.ReactNode;
}

export default function Loading({ children }: Props) {
    return (
        <div className="text-center my-8 flex flex-col items-center w-full h-full">
            <Image src={loading} alt="Loading" width={100} height={100} />
            {
                children
                    ? children
                    : (
                        <div>
                            <h1 className="text-center text-4xl max-sm:text-xl font-bold text-theme mb-4 animate-pulse">
                                Loading...
                            </h1>

                            <p className="text-center text-base text-gray-400 mb-8 animate-pulse">
                                Please wait while we load the content.
                            </p>
                        </div>
                    )
            }
        </div>
    )
}
