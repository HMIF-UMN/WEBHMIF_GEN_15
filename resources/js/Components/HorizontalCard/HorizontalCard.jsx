import React from "react";
import Button from "../Button/Button";

function HorizontalCard({ date, desc }) {
    return (
        <div className="bg-[#F0F2F5] flex justify-start">
            <div className="w-1/3">
                <img
                    src="https://picsum.photos/350/300"
                    className="object-cover h-full"
                />
            </div>
            <div className="p-10 w-2/3">
                <div className="font-semibold text-3xl mb-5">{date}</div>
                <div className="text-slate-700 text-sm mb-5">{desc}</div>
                <Button label="View Page" theme="dark" />
            </div>
        </div>
        
    );
}

export default HorizontalCard;
