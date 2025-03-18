"use client";

import { AnimatePresence, motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { forEach } from "lodash";

function DownloadButton({ title }) {
    const getDownloadInfo = (title) => {
        switch (title) {
            case "Badminton":
                return {
                    href: "/CSS-HMIF/Peraturan Badminton CSS 2024.pdf",
                    download: "Peraturan Badminton CSS 2024.pdf",
                };
            case "Futsal":
                return {
                    href: "/CSS-HMIF/Peraturan Futsal CSS 2024.pdf",
                    download: "Peraturan Futsal CSS 2024.pdf",
                };
            case "Basket":
                return {
                    href: "/CSS-HMIF/Peraturan Basket CSS 2024.pdf",
                    download: "Peraturan Basket CSS 2024.pdf",
                };
            case "Mobile Legends":
                return {
                    href: "/CSS-HMIF/Peraturan ML CSS 2024.pdf",
                    download: "Peraturan ML CSS 2024.pdf",
                };
            default:
                return {
                    href: "/CSS-HMIF/DefaultFile.pdf",
                    download: "DefaultFile.pdf",
                };
        }
    };

    // Get the download info based on the title prop
    const { href, download } = getDownloadInfo(title);

    return (
        <a
            href={href}
            download={download}
            className="px-4 py-2 w-fit z-50 font-bold bg-[#AB3392] hover:bg-[#681e58] text-white rounded"
        >
            Rules
        </a>
    );
}

const Modal = ({ isOpen, onClose, props }) => {
    const isBadminton = props.title === "Badminton";
    const active = true;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100vh" }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-200 w-full md:w-1/2 p-10 mx-10 min-h-fit h-2/3 lg:h-1/2 flex flex-col justify-between rounded-lg shadow-lg"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-0 m-6 px-4 py-2 text-slate-500 rounded"
                    >
                        X
                    </button>
                    <LazyLoadImage
                        className="hidden md:block w-96 absolute left-0 -translate-x-[17.7rem]"
                        src="/CSS-HMIF/images/fun-3d-cartoon-medieval-man2.png"
                    />
                    {active ? (
                        <>
                            <div className="flex flex-col gap-0">
                                <div className="text-transparent bg-clip-text text-4xl lg:text-6xl font-bold bg-gradient-to-br from-[#77257C] to-[#E243AA]">
                                    {props.title}
                                </div>
                                <div className="text-base lg:text-xl text-slate-600">
                                    {props.date}
                                </div>
                                <div className="text-base lg:text-xl text-slate-600">
                                    {props.location}
                                </div>
                                <DownloadButton title={props.title} />
                            </div>
                            {isBadminton ? (
                                <>
                                    <div className="flex flex-row gap-4">
                                        <div className="flex items-center w-1/2 gap-5 flex-col">
                                            <h1 className="text-xl lg:text-2xl text-nowrap font-bold bg-gradient-to-br from-[#77257C] to-[#E243AA] text-transparent bg-clip-text">
                                                Ganda Putra
                                            </h1>
                                            <div className="text-center">
                                                <p>Badminton Putra:</p>
                                                <p>
                                                    {props.teamCount.putra}/16
                                                    tim
                                                </p>
                                            </div>
                                            <Link
                                                href="/cssIF/formPendaftaran/r/BadmintonP"
                                                className="w-full"
                                            >
                                                <button className="w-full px-4 py-2 bg-[#AB3392] hover:bg-[#681e58] text-white rounded">
                                                    Register
                                                </button>
                                            </Link>
                                            <Link
                                                href="/cssIF/formPendaftaran/j/BadmintonP"
                                                className="w-full"
                                            >
                                                <button className="w-full px-4 py-2 bg-[#E243AA] hover:bg-[#681e58] text-white rounded">
                                                    Join
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="flex items-center w-1/2 gap-5 flex-col">
                                            <h1 className="text-xl lg:text-2xl text-nowrap font-bold  bg-gradient-to-br from-[#77257C] to-[#E243AA] text-transparent bg-clip-text">
                                                Ganda Campur
                                            </h1>
                                            <div className="text-center">
                                                <p className="text-nowrap">
                                                    Badminton Campuran:
                                                </p>
                                                <p>
                                                    {props.teamCount.campuran}
                                                    /16 tim
                                                </p>
                                            </div>
                                            <Link
                                                href="/cssIF/formPendaftaran/r/BadmintonC"
                                                className="w-full"
                                            >
                                                <button className="w-full px-4 py-2 bg-[#AB3392] hover:bg-[#681e58] text-white rounded">
                                                    Register
                                                </button>
                                            </Link>
                                            <Link
                                                href="/cssIF/formPendaftaran/j/BadmintonC"
                                                className="w-full"
                                            >
                                                <button className="w-full px-4 py-2 bg-[#E243AA] hover:bg-[#681e58] text-white rounded">
                                                    Join
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center w-full gap-5 flex-col">
                                        {props.title == "Mobile Legends" ? (
                                            <p>
                                                Kuota pendaftaran:{" "}
                                                {props.teamCount}
                                                /32
                                            </p>
                                        ) : (
                                            <p>
                                                Kuota pendaftaran:{" "}
                                                {props.teamCount}/16
                                            </p>
                                        )}
                                        <Link
                                            href={`/cssIF/formPendaftaran/r/${
                                                props.title === "Mobile Legends"
                                                    ? "MobileLegends"
                                                    : props.title
                                            }`}
                                            className="w-full"
                                        >
                                            <button className="w-full px-4 py-2 bg-[#AB3392] hover:bg-[#681e58] text-white rounded">
                                                Register
                                            </button>
                                        </Link>
                                        <Link
                                            href={`/cssIF/formPendaftaran/j/${
                                                props.title === "Mobile Legends"
                                                    ? "MobileLegends"
                                                    : props.title
                                            }`}
                                            className="w-full"
                                        >
                                            <button className="w-full px-4 py-2 bg-[#E243AA] hover:bg-[#681e58] text-white rounded">
                                                Join
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-around">
                            <LazyLoadImage
                                src="./CSS-HMIF/images/Home/LogoColored.webp"
                                alt="Logo CSS"
                                className="w-20 md:w-32"
                            />
                            <p className="text-xl lg:text-2xl text-[#77257C] text-pretty">
                                Halo peserta CSS 2024, ga sabaran amat. Ingin
                                cepat cepat ikut lomba yaaa. Tunggu dulu yaa,
                                pendaftaran akan dibuka tanggal 26 Agustus 2024,
                                jadi kalian siap siap dulu yaa
                            </p>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function CardCSS(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleButtonClick = (props) => {
        setModalData(props);
        setIsOpen(true);
    };

    return (
        <>
            <div
                className={`fixed z-50 flex top-0 w-screen h-screen items-center justify-center transition-all duration-300 ease-linear bg-black ${
                    !isOpen
                        ? "bg-opacity-0  pointer-events-none"
                        : "bg-opacity-50 "
                }`}
            >
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    props={props}
                />
            </div>
            <motion.div
                initial={{ opacity: 0, x: props.x }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: props.delay }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full h-[30dvh] lg:h-screen bg-purple-400/100 group relative"
            >
                <LazyLoadImage
                    className="mix-blend-normal group-hover:mix-blend-multiply object-cover w-full h-full filter contrast-100 transition-all duration-500"
                    src={`CSS-HMIF/images/daftarCSS/${props.image}`}
                    alt="image"
                />
                <div className="absolute h-fit top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-kanit text-center text-white">
                    <div
                        className={`lg:group-hover:-translate-y-20 transition-all duration-500 whitespace-nowrap text-3xl lg:text-4xl`}
                    >
                        {props.title}
                    </div>
                    <div className="z-50 text-xs lg:text-sm font-semibold lg:mb-2 mt-8">
                        <button
                            onClick={() => handleButtonClick(props)}
                            className="w-full lg:hidden text-white text-md font-bold bg-none mr-4 hover:bg-white hover:text-indigo-600 border-white border-2 transition-all rounded-lg p-2 mb-1 lg:mb-0"
                        >
                            {props.title === "Futsal"
                                ? "KICK OFF!"
                                : props.title === "Basket"
                                ? "JUMP BALL!"
                                : props.title === "Mobile Legends"
                                ? "WELCOME TO MOBILE LEGENDS!"
                                : props.title === "Badminton"
                                ? "SERVE!"
                                : ""}
                        </button>
                    </div>
                    <div
                        className={`-z-50 pointer-events-none lg:pointer-events-auto lg:group-hover:-translate-y-14 absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 whitespace-nowrap flex flex-col font-sans`}
                    >
                        <div className="mb-0 text-sm lg:text-base font-semibold tracking-widest">
                            {props.date}
                        </div>
                        <div className="mb-0 text-sm lg:text-base font-semibold tracking-widest">
                            {props.location}
                        </div>

                        <div className="text-xs lg:text-sm font-semibold lg:mb-2 mt-8">
                            <button
                                onClick={() => handleButtonClick(props)}
                                className="w-full text-white text-md font-bold bg-none mr-4 hover:bg-white hover:text-indigo-600 border-white border-2 transition-all rounded-lg p-2 mb-1 lg:mb-0"
                            >
                                {props.title === "Futsal"
                                    ? "KICK OFF!"
                                    : props.title === "Basket"
                                    ? "JUMP BALL!"
                                    : props.title === "Mobile Legends"
                                    ? "WELCOME TO MOBILE LEGENDS!"
                                    : props.title === "Badminton"
                                    ? "SERVE!"
                                    : ""}
                            </button>
                        </div>

                        <div className="text-sm lg:text-base font-semibold">
                            {props.title === "Badminton" ? (
                                <>
                                    <p>
                                        Badminton Putra: {props.teamCount.putra}
                                        /16 tim
                                    </p>
                                    <p>
                                        Badminton Campuran:{" "}
                                        {props.teamCount.campuran}/16 tim
                                    </p>
                                </>
                            ) : props.title === "Mobile Legends" ? (
                                <span>
                                    Kuota pendaftaran: {props.teamCount}/32
                                </span>
                            ) : (
                                <span>
                                    Kuota pendaftaran: {props.teamCount}/16
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}
