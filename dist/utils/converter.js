// Converts ms to seconds and minutes
// 1 millisecond = 0.001 seconds
export const convertToSecondsAndMinutes = (duration) => {
    const minutes = Math.floor(duration / 1000 / 60);
    const seconds = (duration / 1000) % 60;
    return `${minutes}:${String(Math.floor(seconds)).padStart(2, '0')}`;
};
