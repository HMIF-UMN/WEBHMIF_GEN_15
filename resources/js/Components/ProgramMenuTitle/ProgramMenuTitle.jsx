import React from "react";
import { useState } from "react";

function ProgramMenuTitle({ label, color }) {
    const [textColor, setTextColor] = useState(
        color === "blue"
            ? "text-if-blue-500"
            : color === "orange"
            ? "text-orange-500"
            : "text-white"
    );

    const toggleTextColor = () => {
        if (color === "blue") {
            textColor === "text-if-blue-500"
                ? setTextColor("text-white")
                : setTextColor("text-if-blue-500");
        } else {
            textColor === "text-orange-500"
                ? setTextColor("text-white")
                : setTextColor("text-orange-500");
        }
    };

    return (
        <div className="w-100 bg-black py-6" onClick={toggleTextColor}>
            <div className="mx-auto max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
                <div
                    className={`transition-all ease-in-out duration-500 font-bold text-3xl text-center md:text-left ${textColor}`}
                >
                    {label}
                </div>
            </div>
        </div>
    );
}

export default ProgramMenuTitle;
