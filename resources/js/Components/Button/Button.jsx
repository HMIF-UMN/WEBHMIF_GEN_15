import React from "react";

function Button({ label, theme = "dark" }) {
    const color =
        theme === "dark"
            ? "mt-3 md:mt-6 bg-if-black text-white w-36 md:w-48 h-7 md:h-11 rounded-lg text-xs md:text-xl font-medium text-center leading-3 md:leading-6 font-work-sans"
            : // "mt-3 md:mt-6 bg-if-black text-white w-24 md:w-48 h-7 md:h-11 rounded-lg text-xs md:text-xl font-medium text-center leading-3 md:leading-6 font-work-sans"
              "mt-3 md:mt-6 bg-if-white text-umn-blue-600 text-24 w-36 md:w-48 h-7 md:h-11 rounded-lg text-xs md:text-xl font-medium text-center leading-3 md:leading-6 font-work-sans hover:bg-slate-300";
    // "mt-3 md:mt-6 bg-if-white text-umn-blue-600 text-24 md:w-48 h-7 md:h-11 rounded-lg text-xs md:text-xl font-medium text-center leading-3 md:leading-6 font-work-sans"

    return (
        <div>
            <button className={color}>{label}</button>
        </div>
    );
}

export default Button;
