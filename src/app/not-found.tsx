import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="text-center max-w-md">
                <h1 className="text-4xl font-bold text-white mb-4">
                    Page Not Found
                </h1>

                <p className="text-base text-gray-400 mb-8">
                    The page you are looking for does not exist.
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
