import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    minWidth?: string;
}

export default function Grid({ children, minWidth = "200px" }: Props) {
    return (
        <div
            className="grid gap-4 justify-items-center"
            style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))` }}
        >
            {children}
        </div>
    );
}
