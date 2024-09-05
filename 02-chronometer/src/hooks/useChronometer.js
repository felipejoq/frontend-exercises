import {useEffect, useRef, useState} from "react";

export const useChronometer = () => {
    const [time, setTime] = useState(0);
    const [savedTimes, setSavedTimes] = useState([]);
    const intervalRef = useRef(null);

    useEffect(() => {
        const savedTimes = JSON.parse(localStorage.getItem('savedTimes'));
        if (savedTimes) {
            setSavedTimes(savedTimes);
        }
    }, []);

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
        localStorage.removeItem('savedTimes');
    }

    const handleSave = () => {
        if(time > 0) {
            setSavedTimes(prevSavedTimes => [...prevSavedTimes, time]);
            localStorage.setItem('savedTimes', JSON.stringify([...savedTimes, time]));
        }
    }

    return {
        time,
        savedTimes,
        handleStart,
        handleStop,
        handleReset,
        handleSave,
    };
}