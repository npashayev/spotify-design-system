'use client';
import Link from "next/link";

interface Props {
    message?: string;
}

export default function ErrorPage({ message = "Something went wrong." }: Props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="text-center max-w-md">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Error
                </h1>

                <p className="text-base text-gray-400 mb-8">
                    {message}
                </p>

                <Link
                    href="/"
                    className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-400 hover:text-white"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
