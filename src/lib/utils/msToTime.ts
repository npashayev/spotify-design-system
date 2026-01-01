export function msToTime(ms: number) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    ms -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(ms / (1000 * 60));
    ms -= minutes * 1000 * 60;

    const seconds = Math.floor(ms / 1000);

    return { hours, minutes, seconds };
}
