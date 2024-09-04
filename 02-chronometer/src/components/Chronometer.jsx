import {useRef, useState} from "react";

export const Chronometer = () => {
    const [time, setTime] = useState(0);
    const [savedTimes, setSavedTimes] = useState([]);
    const intervalRef = useRef(null);

    const handleStart = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        }
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    const handleReset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
        setSavedTimes([]);
    }

    const handleSave = () => {
        setSavedTimes([...savedTimes, time]);
    }

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        const centiSeconds = String(Math.floor((milliseconds % 1000) / 10)).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}:${centiSeconds}`;
    }

    return (
        <div>
            <h1>Chronometer</h1>
            <p>{formatTime(time)}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSave}>Save</button>
            <ul>
                {savedTimes.map((savedTime, index) => (
                    <li key={index}>{formatTime(savedTime)}</li>
                ))}
            </ul>
        </div>
    )
}