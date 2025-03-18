import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";

export default function Home() {
    const images = [
        "./CSS-HMIF/images/Home/Soccer.webp",
        "./CSS-HMIF/images/Home/Badminton.webp",
        "./CSS-HMIF/images/Home/Basket.webp",
        "./CSS-HMIF/images/Home/MobileLegend.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="w-screen h-screen flex">
                <div className="absolute h-full w-full">
                    <div className="absolute z-10 bg-indigo-600 w-full h-full mix-blend-multiply"></div>
                    {images.map((src, index) => (
                        <LazyLoadImage
                            key={src}
                            src={src}
                            alt={`Slide ${index}`}
                            className={`absolute w-full h-full filter grayscale object-cover transition-opacity duration-1000 ease-linear ${
                                currentIndex === index
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        />
                    ))}
                </div>
                <div className="w-full h-full absolute lg:flex justify-end hidden">
                    <LazyLoadImage
                        src="./CSS-HMIF/images/Home/Logo.svg"
                        alt="Logo CSS"
                        className=" w-1/3 mix-blend-color-dodge"
                    />
                </div>
                <div className="z-20 w-full h-full">
                    <div className="h-1/2 w-2/3 hidden lg:block"></div>
                    <div className="px-4 gap-4 w-full h-full flex flex-col justify-center md:px-20 lg:w-2/3 lg:justify-start lg:gap-6">
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="text-xs text-white font-mono md:text-sm"
                        >
                            ./hmif.sh --exec ComputerScienceShelter
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="text-4xl text-pretty font-bold font-kanit text-white md:text-5xl"
                        >
                            Kadang, anak Informatika juga butuh hiburan
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="text-sm text-white font-worksans md:text-base"
                        >
                            Bertanding dan bersenang-senang dengan sesama anak
                            Informatika UMN dalam Computer Science Shelter.
                            Sebuah perlombaan internal yang diadakan oleh HMIF
                            UMN.
                        </motion.h1>
                        <div className="flex flex-col-2 gap-4">
                            <a href="#daftarSekarang">
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="px-3 py-1 text-xs md:text-lg bg-white text-sky-800 rounded border font-mono font-bold border-white hover:bg-opacity-0 hover:text-white outline-white transition-all duration-300"
                                >
                                    DAFTAR SEKARANG
                                </motion.button>
                            </a>
                            <a href="#kontakKami">
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="px-3 py-1 text-xs md:text-lg bg-transparent text-white rounded border font-mono font-bold border-white hover:bg-white hover:text-sky-800 outline-white transition-all duration-300"
                                >
                                    KONTAK KAMI
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
