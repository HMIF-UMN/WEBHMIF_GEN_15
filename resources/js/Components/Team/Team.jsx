import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Team({ divisi, linkAsset, linkImage }) {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {divisi.map((anggota, i) => {
                    return (
                        <div key={i} className="block">
                            <LazyLoadImage
                                placeholderSrc={linkImage+"/gray.webp"}
                                effect="blur"
                                src={linkAsset + "/" + anggota.image}
                                className="w-full rounded-xl mb-3"
                                alt=""
                            ></LazyLoadImage>
                            <h6 className="font-kanit text-base md:text-3xl text-[#FFFFFF]">
                                {anggota.nama}
                            </h6>
                            <h6 className="font-work-sans text-xs md:text-base text-neutral-300">
                                {anggota.jabatan}
                            </h6>
                        </div>
                    );
                })}
            </div>
        </>
        /*
        <>
            <h6 className="lg:text-left text-center font-kanit text-[#FAFAFF] lg:text-4xl text-xl">{divisi}</h6>

            <img className="rounded-3xl mt-3 w-full h-auto" src={foto} alt="" />

            <div className="flex text-neutral-400 mt-2">
                <p className="lg:text-left text-center lg:text-sm sm:text-xs text-[9px] font-work-sans"> {anggota.map((a, i) => {
                    if (i == 0) {
                        return (<span className="font-bold">{a} </span>)
                    } else {
                        return (<span>&#8226; {a} </span>)
                    }
                }
                )}</p>
            </div>
        </>*/
    );
}

export default Team;
