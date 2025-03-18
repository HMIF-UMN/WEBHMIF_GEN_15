import React from "react";
import ProgramMenuDropdown from "../ProgramMenuDropdown/ProgramMenuDropdown";
import ProgramMenuTitle from "../ProgramMenuTitle/ProgramMenuTitle";
import { useState } from "react";

function ProgramMenuWraper({ logo, label, date, desc, color, url }) {
    const [dropdownClass, setDropdownClass] = useState("max-h-0");

    const toggleDropdown = () => {
        dropdownClass === "max-h-0"
            ? setDropdownClass("max-h-[1000px]")
            : setDropdownClass("max-h-0");
    };

    return (
        <div>
            <div className="cursor-pointer" onClick={() => toggleDropdown()}>
                <ProgramMenuTitle label={label} color={color} />
            </div>
            <div
                className={`overflow-hidden transition-all ease-in-out duration-500 ${dropdownClass}`}
            >
                <ProgramMenuDropdown
                    logo={logo}
                    date={date}
                    desc={desc}
                    url={url}
                />
            </div>
        </div>
    );
}

export default ProgramMenuWraper;
