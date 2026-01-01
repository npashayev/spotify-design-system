import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function ErrorBox({ children }: Props) {
    return (
        <div className="p-6 bg-red-50 border m-6 border-red-200 rounded-lg">
            <div className="flex items-center gap-3">
                <svg
                    className="w-5 h-5 text-red-600 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" />
                    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" />
                </svg>
                <div>
                    <h3 className="font-semibold text-red-900">Error Loading New Releases</h3>
                    <p className="text-sm text-red-700 mt-1">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
}