import React from "react";
import { motion } from "framer-motion";

function AboutPadi() {
    return (
        <section>
            <div id="aboutPadi">
                <div className="bg-ppif-pink-100 relative top-0 z-0 h-[100dvh]">
                    <div className="absolute top-0 w-full">
                        <img className="w-full" src="/PPIF/images/aboutPadi/seperatorAtas.svg" alt="" />
                    </div>
                    <div className="absolute bottom-0 w-full">
                        <img className="w-full" src="/PPIF/images/aboutPadi/seperatorBawah.svg" alt="" />
                    </div>
                    <div className="hidden md:block">

                    <img
                        className="w-40 absolute left-0 top-0 z-10"
                        src="/PPIF/images/aboutPadi/P.svg"
                        alt=""
                    />
                    <img
                        className="w-40 absolute right-0 top-0 z-10"
                        src="/PPIF/images/aboutPadi/A.svg"
                        alt=""
                    />
                    <img
                        className="w-40 absolute left-0 bottom-0 z-10"
                        src="/PPIF/images/aboutPadi/D.svg"
                        alt=""
                    />
                    <img
                        className="w-40 absolute right-0 bottom-0 z-10"
                        src="/PPIF/images/aboutPadi/I.svg"
                        alt=""
                    />
                    </div>


                    {/* Content */}
                    <div className="md:flex md:justify-center absolute z-10 h-full">
                        <div className="bg-white mx-3 md:mx-28 lg:mx-24 p-5 md:p-8 lg:p-0 md:w-auto h-[90%] rounded-xl relative z-20 top-1/2 transform -translate-y-1/2">
                            <div className="absolute md:z-30 -top-3.5 right-0">
                                <img
                                    className="w-full h-full lg:right-0 hidden lg:block"
                                    src="/PPIF/images/aboutPadi/bgElementsAtas.png"
                                    alt=""
                                />
                            </div>
                            <div className="absolute md:z-30 bottom-0 right-0">
                                <img
                                    className="w-full h-full lg:right-0 hidden lg:block"
                                    src="/PPIF/images/aboutPadi/bgElementsBawah.png"
                                    alt=""
                                />
                            </div>
                            <motion.div initial={{  opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className="h-full p-4 flex flex-col lg:flex-row justify-center lg:items-center">
                                <div className="lg:ml-24 lg:w-auto text-black">
                                    <div className="text-4xl md:text-center lg:text-left lg:text-7xl">
                                        <span className="font-kanit-light">
                                            ABOUT{" "}
                                        </span>
                                        <span className="font-kanit-semibold">
                                            PADI IF
                                        </span>
                                    </div>

                                    <div>
                                        <p className="mt-3 md:mt-5 text-sm md:text-base lg:text-xl font-tomorrow font-bold tracking-widest lg:leading-10">
                                            Discovering the Gateway to Tech Exploration
                                        </p>
                                        {/* svg garis dengan kotak */}
                                        <svg
                                            height="50"
                                            className="-mt-5 w-72 lg:w-full"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <line
                                                x1="10"
                                                y1="25"
                                                x2="500"
                                                y2="25"
                                                stroke="black"
                                                strokeWidth="2"
                                            />
                                            <rect
                                                x="10"
                                                y="24"
                                                width="47"
                                                height="7"
                                                fill="black"
                                                transform="skewX(-30)"
                                            />
                                        </svg>
                                    </div>

                                    <div className="flex flex-col gap-2 lg:gap-5 lg:w-10/12 lg:mt-5 font-worksans font-medium text-xs lg:text-sm text-justify lg:text-left">
                                        <p className="lg:leading-8">
                                            PADI IF merupakan pintu awal Mahasiswa baru menjadi keluarga baru Informatika
                                            UMN dengan serangkaian acara penyambutan dan perkenalan dengan tujuan
                                            memberikan Mahasiswa baru pengetahuan mendalam dan pengalaman menarik
                                            dalam Informatika UMN.
                                        </p>
                                        <p className="lg:leading-7">
                                            Dengan mengikuti rangkaian acara PADI IF ini, mahasiswa baru akan mendapatkan
                                            berbagai informasi seputar dunia perkuliahan terutama pada Program Studi
                                            Informatika. Bergabunglah dengan kami dalam perjalanan luar biasa ini dan mari
                                            bersama-sama membentuk masa depan teknologi yang inovatif!
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full md:w-3/4 lg:w-full mx-auto z-40 mt-3 lg:mt-0 grid content-center justify-center">
                                    <img
                                        src="/PPIF/images/aboutPadi/fotoAbout.svg"
                                        alt=""
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPadi;
