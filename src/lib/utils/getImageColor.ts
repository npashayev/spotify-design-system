import { Vibrant } from "node-vibrant/node";

export async function getImageColor(imageUrl: string) {
    let vibrant = [25, 20, 20];

    try {
        const palette = await Vibrant.from(imageUrl).getPalette();
        vibrant = palette.Vibrant?.rgb ?? vibrant;
    } catch {
    }

    return `rgb(${vibrant.join(",")})`;
}
