import React from "react";
import { motion } from "framer-motion";

function Home(props) {
    return (
        <>
            <div id="home" className="max-w-screen-2xl min-h-full relative pt-14 mx-auto">
                <div className="max-w-full h-full min-h-full relative flex flex-col justify-center items-start text-ppif-white mx-4 z-50 p-8">
                    <div className="flex flex-col mb-8 font-tungsten-rounded text-lg">
                        <div className="flex flex-row">
                            <img src={props.images + "/home/avatar.svg"} className="h-16"/>
                            <div className="flex flex-col ml-4">
                                <h6 className="text-4xl">AGENT 23</h6>
                                <div className="flex flex-row gap-4">
                                    <p className="text-lg bg-[#ED006C] text-black px-4 my-auto font-bold">LEVEL</p>
                                    <div className="flex flex-col text-sm">
                                        <p>INFORMATICS</p>
                                        <p>DEPARTMENT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-end gap-8 text-sm">
                            <div>
                                <p>NAME: UNKNOWN</p>
                                <p>LOG ENTRY: UMN</p>
                                <p>LOCATION: GADING SERPONG</p>
                                <p>STATUS: CALON MABA</p>
                            </div>
                            <div>
                                <p>DATE:</p>
                                <p>2023/08/21</p>
                            </div>
                            <div>
                                <p>UNIT:</p>
                                <p>INFORMATIKA</p>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-[12px] md:text-[15px] font-tomorrow mb-8">\\ PINTU AWAL PROGRAM STUDI INFORMATIKA</h4>
                    <motion.h1 initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="text-[40px] md:text-[80px] font-tomorrow leading-none lg:leading-[0.5]">
                            Siapkan dirimu untuk
                    </motion.h1>
                    <motion.h1 initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="text-[40px] md:text-[80px] font-tomorrow leading-tight lg:leading-normal text-transparent bg-clip-text bg-gradient-to-r from-ppif-pink-200 to-ppif-pink-100">
                            sesuatu yang baru
                    </motion.h1>
                    <p className="font-work-sans text-base md:text-lg leading-[1.2] mt-4 lg:mt-0">Get ready for an unforgettable adventure at PADI IF!<br />Follow us for all the latest news and join the fun!</p>
                    <div className="flex flex-row gap-8 font-kanit-semibold mt-8">
                        <a href="#timeline">
                            <button className="border border-1 border-white px-4 py-2 rounded bg-gradient-to-r from-[#6A085B] to-[#ED006C]">I'm Ready!</button>
                        </a>
                        <a href="#joinKomunitas" className="flex items-center">
                            <button>
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <span>Join Komunitas</span>
                                    <img src={props.images + "/home/arrow.svg"} className="my-auto"/>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 h-full z-0">
                    <img src={props.images + "/home/CyberpunkBG.svg"} className="h-full z-0"/>
                </div>
            </div>
            <div className="flex flex-col relative font-tomorrow">
                <div className="bg-[#ed006c] w-full min-w-[1680px] flex flex-row justify-around items-center text-white whitespace-nowrap animate-marquee">
                    <img src={props.images + "/home/1.svg"} className="my-1"/>
                    <span>JANGAN LUPA MASUK KELOMPOKMU</span>
                    <img src={props.images + "/home/2.svg"} className="my-1"/>
                    <span>JANGAN LUPA MASUK KELOMPOKMU</span>
                    <img src={props.images + "/home/3.svg"} className="my-1"/>
                    <span>JANGAN LUPA MASUK KELOMPOKMU</span>
                </div>
                <div className="bg-[#ed006c] w-full min-w-[1680px] flex flex-row justify-around items-center text-white whitespace-nowrap animate-marquee2 absolute">
                    <img src={props.images + "/home/1.svg"} className="my-1"/>
                    <span>JANGAN LUPA MASUK KELOMPOKMU</span>
                    <img src={props.images + "/home/2.svg"} className="my-1"/>
                    <span>JANGAN LUPA MASUK KELOMPOKMU</span>
                    <img src={props.images + "/home/3.svg"} className="my-1"/>
                    <span>JANGAN LUPA MASUK KELOMPOKMU</span>
                </div>
                <img src={props.images + "/home/separator.svg"} className="w-full"/>
            </div>
        </>
    );
}

export default Home;
