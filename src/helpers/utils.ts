export function convertTimestampToTime(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:${date.getMinutes()}`
}