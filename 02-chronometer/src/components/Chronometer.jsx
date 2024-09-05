import {useChronometer} from "../hooks/useChronometer.js";
import {formatTime} from "../utils/formatters.js";

export const Chronometer = () => {

    const {
        time,
        savedTimes,
        handleStart,
        handleStop,
        handleReset,
        handleSave,
    } = useChronometer();

    return (
        <>
            <h1>Chronometer</h1>
            <p>{formatTime(time)}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
            <button disabled={time <= 0} onClick={handleSave}>Save</button>
            <ul>
                {
                    savedTimes.map((savedTime, index) => {
                        const timeDifference = savedTime - (savedTimes[index - 1] || 0);
                        return (
                            <li key={index}>
                                {formatTime(savedTime)} <span className='diff'>(+{formatTime(timeDifference)})</span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}