export const rgbStringToRgba = (rgb: string, alpha: number) => {
    // Match decimal numbers too: \d+\.?\d*
    const match = rgb.match(/[\d.]+/g);
    if (!match || match.length < 3) return `rgba(30,30,30,${alpha})`;

    // Parse, round, and clamp each value between 0-255
    const r = Math.min(255, Math.max(0, Math.round(parseFloat(match[0]))));
    const g = Math.min(255, Math.max(0, Math.round(parseFloat(match[1]))));
    const b = Math.min(255, Math.max(0, Math.round(parseFloat(match[2]))));

    return `rgba(${r},${g},${b},${alpha})`;
};