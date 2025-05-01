

export function convertFirebaseTimestampToDateString(timestamp: { seconds: number, nanoseconds: number }): string {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
}