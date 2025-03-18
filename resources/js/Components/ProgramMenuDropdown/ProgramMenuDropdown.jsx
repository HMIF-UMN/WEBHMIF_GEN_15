import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../Button/Button";

function ProgramMenuDropdown({ logo, date, desc, url }) {
    return (
        <div className="bg-white md:flex justify-start h-full md:h-72">
            <div className="w-full h-64 md:h-full md:w-1/3">
                <LazyLoadImage
                    src={logo}
                    className="object-contain h-full w-full"
                ></LazyLoadImage>
            </div>
            <div className="p-7 md:p-10 w-full md:w-2/3">
                <div className="text-black font-semibold text-xl md:text-3xl mb-5 text-center md:text-start">
                    {date == "05 - 07 August 2023" ? "Coming Soon!!" : date}
                </div>
                <div className="text-black text-[0.6rem] md:text-sm mb-5 text-center md:text-start">
                    {desc}
                </div>
                <div className="flex justify-center md:justify-start">
                    {url && <Button label="View Page" theme="dark" url={url} />}
                </div>
            </div>
        </div>
    );
}

export default ProgramMenuDropdown;
