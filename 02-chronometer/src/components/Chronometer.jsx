import {useChronometer} from "../hooks/useChronometer.js";
import {formatTime} from "../utils/formatters.js";
import PropTypes from "prop-types";
import {ButtonAction} from "./ButtonAction.jsx";

export const Chronometer = ({title = "Chronometer"}) => {

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
            <h1 className="title">{title}</h1>
            <p className="format-time">{formatTime(time)}</p>
            <div className="controls-container">
                <ButtonAction actionClick={handleStart}>
                    Start
                </ButtonAction>
                <ButtonAction actionClick={handleStop}>
                    Stop
                </ButtonAction>
                <ButtonAction actionClick={handleReset}>
                    Reset
                </ButtonAction>
                <ButtonAction disableCondition={time <= 0} actionClick={handleSave}>
                    Save
                </ButtonAction>
            </div>
            <ul className="saved-times">
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

Chronometer.propTypes = {
    title: PropTypes.string,
}