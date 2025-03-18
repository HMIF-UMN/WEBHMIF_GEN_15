import React from "react";
import Button from "../Button/Button";
import { Link } from "@inertiajs/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Card({ judul, tanggal, description, link, logo }) {
    return (
        <div className="bg-if-white w-72 h-96 md:w-96 md:h-[687px] rounded-lg">
            <div className="bg-umn-blue-500 w-72 h-36 md:w-96 md:h-48 rounded-t-lg">
                <LazyLoadImage
                    src={logo}
                    className="object-contain h-full w-full"
                ></LazyLoadImage>
            </div>
            <div className="mx-4 md:mx-8">
                <div className="text-black mt-3 text-center md:text-left md:mt-7">
                    <span className="w-40 md:w-80 h-10 md:h-20 text-xl md:text-5xl font-kanit font-semibold tracking-tighter md:mt-7">
                        {judul}
                    </span>
                </div>
                <p className="mt-2 text-center md:mt-4 md:text-left text-umn-blue-600 text-xs md:text-2xl font-work-sans">
                    {tanggal}
                </p>
                <p className="text-black mt-3 text-center md:mt-7 md:text-left text-xs md:text-base leading-3 md:leading-6 font-work-sans">
                    {description}
                </p>
                <Link
                    href={link != null ? link : "/proker"}
                    className="flex justify-center md:justify-start"
                >
                    <Button
                        className="md:block"
                        label="Selengkapnya"
                        theme="dark"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Card;
