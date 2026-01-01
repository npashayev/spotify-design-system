/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useEffect, useState } from 'react';
import { rgbStringToRgba } from '@/lib/utils/rgbStringToRgba';

export default function ThemeGradientContainer({
    vibrant,
    children
}: {
    vibrant: string;
    children: React.ReactNode;
}) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.body.classList.contains('dark'));

        // observe changes to the body's class list to detect theme changes
        const observer = new MutationObserver(() => {
            setIsDark(document.body.classList.contains('dark'));
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const backgroundStyle = isDark
        ? {
            background: `linear-gradient(to bottom, ${rgbStringToRgba(vibrant, 0.25)} 0%, rgba(22,22,24,1) 25%, #0a0a0a 100%)`,
        }
        : {};

    return (
        <div className="p-4 h-full bg-theme" style={backgroundStyle}>
            {children}
        </div>
    );
}