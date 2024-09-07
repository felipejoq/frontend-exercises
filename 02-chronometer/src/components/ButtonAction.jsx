import PropTypes from "prop-types";

export const ButtonAction = ({children, actionClick, disableCondition = false}) => {

    return (
        <button
            disabled={disableCondition}
            onClick={actionClick}
        >
            {children}
        </button>
    )

}

ButtonAction.propTypes = {
    children: PropTypes.node,
    actionClick: PropTypes.func,
    disableCondition: PropTypes.bool,
}