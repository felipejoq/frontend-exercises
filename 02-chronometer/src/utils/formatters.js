export const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const centiSeconds = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}:${centiSeconds}`;
}