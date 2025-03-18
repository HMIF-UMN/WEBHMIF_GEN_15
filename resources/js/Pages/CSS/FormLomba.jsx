import React from "react";
import ComponentFormLomba from "@/Components/CSS-HMIF/FormCSS/ComponentFormLomba";
import "@/Components/CSS-HMIF/FormCSS/FormColors.css";
import NavBar from "@/Components/Navbar/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function FormLomba(props) {
    return (
        <>
            <div className="w-screen h-fit overflow-hidden lg:h-screen bg-gradient-to-br from-purple-400 to-slate-200 px-12 py-10">
                {/* <div className="fixed top-0 right-0 text-4xl rounded-full py-2 px-4 m-10 bg-white">
                    Back
                </div> */}
                <div className="-z-0 hidden lg:block absolute bottom-0 left-0 w-full h-full">
                    <LazyLoadImage
                        className="absolute right-0 -bottom-0  bg-purple-700 lg:h-full w-full lg:w-5/12 object-cover lg:rounded-tl-[300px]"
                        src="/CSS-HMIF/images/formCSS/batikPink.svg"
                    />
                    <LazyLoadImage
                        className="absolute right-0 bottom-0 h-full w-5/12 object-cover"
                        src="/CSS-HMIF/images/formCSS/pialaKartun.svg"
                    />
                </div>
                <div className="z-50 flex flex-col gap-10 h-full w-full">
                    <div className="flex gap-5">
                        <LazyLoadImage
                            className="z-50"
                            src="/CSS-HMIF/images/formCSS/Group.svg"
                        />
                        <LazyLoadImage
                            className="z-50"
                            src="/CSS-HMIF/images/formCSS/Computer Science Shelter.svg"
                        />
                    </div>
                    <div className="overflow-scroll h-full w-full lg:w-1/3 bg-white/20 py-12 px-8 rounded-3xl  backdrop-blur-md">
                        <ComponentFormLomba
                            user={props.user}
                            rj={props.rj}
                            category={props.category}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
