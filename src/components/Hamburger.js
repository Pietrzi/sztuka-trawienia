import React from 'react'

const Hamburger = props => {
    return (
        <button className="toggle__button" onClick={props.click}>
            <div className="toggle__button__line" />
            <div className="toggle__button__line" />
            <div className="toggle__button__line" />
        </button>
    )
}

export default Hamburger;