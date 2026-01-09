import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Grid({ children }: Props) {
    return (
        <div
            className={`
        grid gap-4 justify-items-center
        grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
        max-[480px]:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]
      `}
        >
            {children}
        </div>
    );
}
