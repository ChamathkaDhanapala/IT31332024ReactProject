import React from "react";

const FontSizeSelector = ({ fontSize, setFontSize }) => {
    return (
        <div className="fontsize">
            <p>FontSize 
            <button onClick={() => setFontSize("16px")}>S</button>
            <button onClick={() => setFontSize("20px")}>M</button>
                <button onClick={() => setFontSize("24px")}>L</button>
            </p>
        </div>
    )
}

export default FontSizeSelector;