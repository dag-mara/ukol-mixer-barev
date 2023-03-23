import React from "react";
import './style.css';

const ColorSlider = (props) => {

    const { baseColor, colorName, onValueChange, value } = props

    return (
        <>
            <label htmlFor={baseColor}>{colorName}</label>
            <input
                type="range"
                className={`slider slider--${baseColor}`}
                id="redSlider"
                min="0"
                max="255"
                value={value}
                onChange={(e) => { onValueChange(e.target.value) }}
            />
        </>
    )
}

export default ColorSlider;