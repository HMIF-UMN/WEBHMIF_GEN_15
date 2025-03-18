import React from "react";
import { motion } from "framer-motion";

function Timeline(props) {
    return (
        <div id="timeline" className="bg-black overflow-hidden mt-24">
            <motion.div initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: false, amount: 0.1 }}
                className="flex items-center justify-center pt-20">
                <h1 className="mx-auto text-3xl lg:text-5xl font-kanit text-white font-bold">TIMELINE KEGIATAN</h1>
            </motion.div>

            <motion.div initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: false, amount: 0.1 }} className="flex flex-row mt-10 -ml-20 overflow-hidden">
                <div className="pt-3.5 lg:pt-7">
                    <img className="w-[150px] lg:w-[361px] h-[196px]" src="/PPIF/images/timeline/GarisTimeline1.svg" />
                </div>
                <div className="mt-5 lg:mt-20 relative z-10 w-full h-[185px]">
                    <div className="absolute top-0 left-0 w-full h-full bg-ppif-pink-100 border-t-l">
                        <div className="absolute top-0 left-0 border-t-[60px] border-r-[60px] border-t-black border-r-transparent">
                        </div>
                    </div>

                    <div className="z-20">
                        <div className="text-white font-tomorrow text-6xl md:text-7xl lg:text-9xl absolute inset-y-1/3 lg:inset-y-7 left-6 lg:left-10 ">01</div>
                        <div className="text-white font-tomorrow text-xs md:text-base lg:text-xl text-extrabold absolute inset-y-8 md:inset-y-10 left-28 md:left-32 lg:left-60 right-2">BRIEFING DAY - 21 AGUSTUS 2023</div>
                        <div className=" text-white font-worksans text-[0.5rem] md:text-sm lg:text-base absolute inset-y-16 md:inset-y-[72px] left-28 md:left-32 lg:left-60 right-2">
                            Petualangan menarik akan dimulai dengan langkah pertama yaitu <b>Briefing Day</b>, menghadirkan semangat baru melalui
                            <b> Zoom Meeting</b> dari <b>pukul 13.00 hingga 15.00 WIB</b>. Jangan lupa kenakan <b>polo putih</b> sebagai kostum anti-virus mu!
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-row mt-10 -mr-20 lg:-mr-14 overflow-hidden">
                <div className="relative z-10 w-full h-[185px]">
                    <div className="absolute top-0 left-0 w-full h-full bg-ppif-pink-100 border-t-l">
                        <div className="absolute top-0 right-0 border-t-[60px] border-l-[60px] border-t-black border-l-transparent">
                        </div>
                    </div>

                    <div className="z-20">
                        <div className="text-white font-tomorrow text-6xl md:text-7xl lg:text-9xl absolute inset-y-1/3 lg:inset-y-7 right-5 lg:right-10 ">02</div>
                        <div className="text-white font-tomorrow text-right md:text-base text-xs lg:text-xl text-extrabold absolute inset-y-8 md:inset-y-10 right-28 md:right-32 lg:right-60 left-2">HARI PERTAMA - 22 AGUSTUS 2023</div>
                        <div className=" text-white font-worksans text-right text-[0.5rem] md:text-sm lg:text-base absolute inset-y-16 md:inset-y-[72px] right-28 md:right-32 lg:right-60 left-2">
                            Bersiaplah untuk menjalani Cyber Adventure yang tak terlupakan! Hari pertama akan dimulai di <b>Lecture Theatre,
                            Building D</b>, pada hari <b>Selasa, tanggal 22 Agustus 2023, pukul 12.30 - 14.30 WIB</b>. Jangan lupa pakai <b>Polo Oranye, topi
                            lidah berlengkung, handuk Good Morning & Bits Identity (nametag)</b> sebagai kostum Cyber Adventure Defender.
                        </div>
                    </div>
                    
                </div>
                <div className="mt-[108px]">
                    <img className="w-[150px] lg:w-[361px] h-[2px]" src="/PPIF/images/timeline/GarisTimeline2.svg" />
                </div>
            </motion.div>

            <motion.div initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-row mt-10 -ml-20 overflow-hidden">
                <div className="pt-14 lg:pt-24">
                    <img className="w-[150px] lg:w-[361px] h-[196px]" src="/PPIF/images/timeline/GarisTimeline3.svg" />
                </div>
                <div className="relative z-10 w-full h-[185px]">
                    <div className="absolute top-0 left-0 w-full h-full bg-ppif-pink-100 border-t-l">
                        <div className="absolute top-0 left-0 border-t-[60px] border-r-[60px] border-t-black border-r-transparent">
                        </div>
                    </div>

                    <div className="z-20">
                        <div className="text-white font-tomorrow text-6xl md:text-7xl lg:text-9xl absolute inset-y-1/3 lg:inset-y-7 left-4 lg:left-10 ">03</div>
                        <div className="text-white font-tomorrow text-xs md:text-base lg:text-xl text-extrabold absolute inset-y-8 md:inset-y-10 left-28 md:left-32 lg:left-60 right-2">HARI KEDUA - 26 AGUSTUS 2023</div>
                        <div className=" text-white font-worksans text-[0.5rem] md:text-sm lg:text-base absolute inset-y-16 md:inset-y-[72px] left-28 lg:left-60 md:left-32 right-2">
                            Hari kedua akan diadakan di <b>Lecture Theatre, Building D, pada hari Sabtu, tanggal 26 Agustus, pukul 8.00 - 12.00 WIB</b>.
                            Dalam gaya Cyberpunk yang elegan, kenakan <b>kaos hitam & jeans</b> yang mencerminkan semangat futuristik Anda.
                            Lengkapi tampilan dengan <b>Good Morning Towel, topi lidah berlengkung</b> yang stylish dan <b>Bits Identity (nametag)</b>!
                        </div> 
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: false, amount: 0.1 }}
                className="flex items-center justify-center mt-5 pb-10">
                <a href="https://www.instagram.com/ppif.umn/" className="rounded-lg bg-gradient-to-r from-ppif-blue-300 via-ppif-blue-200 to-ppif-blue-100 p-0.5">
                    <div className="rounded-lg h-full w-full items-center justify-center bg-black hover:bg-if-lighter-black py-4 px-20 lg:px-10 duration-300 transition-all">
                        <div className="font-kanit text-white text-lg">Cek Selengkapnya</div>
                    </div>
                </a>     
            </motion.div>
        </div>
    );
}

export default Timeline;
