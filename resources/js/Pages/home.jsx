import React, { useState, useEffect } from "react";
import NavBar from "@/Components/Navbar/Navbar";
import Banner from "@/Components/Banner/Banner";
import Card from "@/Components/Card/Card";
import Button from "@/Components/Button/Button";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/Footer/Footer";
import { Head, usePage } from "@inertiajs/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineWarning } from "react-icons/ai";

import "react-lazy-load-image-component/src/effects/blur.css";

function home(props) {
    const { homes, prokerImg, link, contacts, photos, image, home_carousel } =
        props;
    const { flash } = usePage().props;

    const [message, setMessage] = useState(null);

    const carouselImages = [
        {
            id: 1,
            src: photos + "/1.webp",
            placeholder: image + "/gray.webp",
            alt: "HMIF Photo 1",
        },
        {
            id: 14,
            src: photos + "/14.webp",
            placeholder: image + "/gray.webp",
            alt: "HMIF Photo 14",
        },
        {
            id: 21,
            src: photos + "/21.webp",
            placeholder: image + "/gray.webp",
            alt: "HMIF Photo 21",
        },
        {
            id: 22,
            src: photos + "/22.webp",
            placeholder: image + "/gray.webp",
            alt: "HMIF Photo 22",
        },
        {
            id: 9,
            src: photos + "/9.webp",
            placeholder: image + "/gray.webp",
            alt: "HMIF Photo 9",
        },
    ];

    const contacts2 = [
        {
            iconPath:
                "M36 8L20 18L4 8V4L20 14L36 4M36 0H4C1.78 0 0 1.78 0 4V28C0 29.0609 0.421427 30.0783 1.17157 30.8284C1.92172 31.5786 2.93913 32 4 32H36C37.0609 32 38.0783 31.5786 38.8284 30.8284C39.5786 30.0783 40 29.0609 40 28V4C40 2.93913 39.5786 1.92172 38.8284 1.17157C38.0783 0.421427 37.0609 0 36 0Z",
            label: contacts[0].email,
            link: contacts[0].email_link,
            iconViewBox: "0 0 40 32",
        },
        {
            icon: faDiscord,
            label: contacts[0].discord,
            link: contacts[0].discord_link,
        },
        {
            iconPath:
                "M33.326 16.68C33.3255 16.9587 33.2144 17.2258 33.0172 17.4226C32.8199 17.6195 32.5527 17.73 32.274 17.73H29.35V19.606H32.274C32.4156 19.5999 32.557 19.6224 32.6897 19.6723C32.8223 19.7223 32.9435 19.7985 33.0459 19.8966C33.1483 19.9946 33.2298 20.1123 33.2854 20.2427C33.3411 20.373 33.3698 20.5133 33.3698 20.655C33.3698 20.7968 33.3411 20.9371 33.2854 21.0674C33.2298 21.1978 33.1483 21.3155 33.0459 21.4135C32.9435 21.5115 32.8223 21.5878 32.6897 21.6377C32.557 21.6877 32.4156 21.7102 32.274 21.704H28.3C28.0231 21.7019 27.7581 21.5907 27.5627 21.3945C27.3672 21.1983 27.257 20.933 27.256 20.656V12.704C27.256 12.13 27.726 11.654 28.306 11.654H32.282C32.5605 11.6548 32.8272 11.7662 33.0236 11.9637C33.2199 12.1612 33.3298 12.4286 33.329 12.707C33.3282 12.9855 33.2168 13.2523 33.0193 13.4486C32.8219 13.645 32.5545 13.7548 32.276 13.754H29.352V15.63H32.276C32.858 15.63 33.326 16.104 33.326 16.68ZM25.13 21.65C25.0226 21.684 24.9106 21.7009 24.798 21.7C24.6334 21.7037 24.4703 21.6678 24.3224 21.5954C24.1745 21.5231 24.0461 21.4163 23.948 21.284L19.876 15.756V20.656C19.856 20.92 19.737 21.1667 19.5429 21.3467C19.3487 21.5267 19.0937 21.6267 18.829 21.6267C18.5643 21.6267 18.3093 21.5267 18.1151 21.3467C17.921 21.1667 17.802 20.92 17.782 20.656V12.704C17.7815 12.4275 17.8907 12.162 18.0857 11.9659C18.2806 11.7698 18.5455 11.6591 18.822 11.658C19.146 11.658 19.446 11.83 19.646 12.08L23.75 17.63V12.704C23.75 12.13 24.22 11.654 24.8 11.654C25.374 11.654 25.85 12.13 25.85 12.704V20.656C25.8497 20.8764 25.78 21.091 25.6507 21.2695C25.5215 21.4479 25.3393 21.5811 25.13 21.65ZM15.23 21.704C14.9527 21.7025 14.6873 21.5915 14.4914 21.3952C14.2955 21.199 14.1851 20.9333 14.184 20.656V12.704C14.184 12.13 14.656 11.654 15.234 11.654C15.812 11.654 16.282 12.13 16.282 12.704V20.656C16.2804 20.9342 16.1689 21.2004 15.9719 21.3968C15.7748 21.5931 15.5082 21.7035 15.23 21.704ZM12.17 21.704H8.196C7.91835 21.7025 7.65249 21.5916 7.45598 21.3955C7.25946 21.1993 7.1481 20.9337 7.146 20.656V12.704C7.16895 12.4414 7.2895 12.1969 7.48388 12.0187C7.67826 11.8406 7.93234 11.7418 8.196 11.7418C8.45966 11.7418 8.71374 11.8406 8.90812 12.0187C9.1025 12.1969 9.22305 12.4414 9.246 12.704V19.604H12.174C12.4525 19.604 12.7195 19.7147 12.9165 19.9116C13.1134 20.1085 13.224 20.3756 13.224 20.654C13.224 20.9325 13.1134 21.1996 12.9165 21.3965C12.7195 21.5934 12.4525 21.704 12.174 21.704H12.17ZM20 0.144043C8.974 0.144043 0 7.43004 0 16.38C0 24.4 7.116 31.118 16.726 32.394C17.376 32.53 18.264 32.824 18.488 33.378C18.688 33.878 18.62 34.654 18.552 35.178L18.278 36.878C18.204 37.378 17.878 38.854 20.026 37.952C22.178 37.054 31.554 31.156 35.754 26.328C38.626 23.178 40 19.954 40 16.38C40 7.43004 31.024 0.144043 20 0.144043",
            label: contacts[0].line,
            link: contacts[0].line_link,
            iconViewBox: "0 0 40 39",
        },
        {
            iconPath:
                "M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z",
            label: contacts[0].instagram,
            link: contacts[0].instagram_link,
            iconViewBox: "0 0 256 256",
        },
    ];

    useEffect(() => {
        setMessage(flash.message);
        const timer = setTimeout(() => setMessage(null), 4000);
        return () => clearTimeout(timer);
    }, [flash.message]);

    return (
        <div className="relative bg-if-black z-0 pt-16">
            {/* Alert */}
            <div
                className={`mt-16 transition-all fixed top-2 z-[100] w-80 h-20 rounded-lg p-4 flex
            items-center text-white ${
                message == "Code not found!" ||
                message?.replace(/ .*/, "") == "Failed" ||
                message == "Registration Limit Exceeded!" ||
                message == "Error occured, please try again!" ||
                message == "Registration cancelled! Fill in the fields!" ||
                message == "Login failed!"
                    ? "bg-red-500/75"
                    : "bg-green-600"
            }
            ${message ? "opacity-100 right-8" : "opacity-0 -right-10"}`}
            >
                <AiOutlineWarning className="w-10 h-10 mr-4" />
                {message}
            </div>
            <AnimatePresence>
                <Head title="Home" />
                <NavBar
                    currentPage="home"
                    user={props.user !== null ? props.user.name : null}
                    navbars={props.navbars}
                />
                <div className="text-white mt-16 md:mt-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="text-center flex flex-col md:flex-row md:justify-center md:gap-6 text-6xl md:text-8xl"
                    >
                        <span className="font-kanit ">
                            {homes[0].titleWhite}
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-umn-blue-500 to-if-blue-500 font-kanit-bold drop-shadow-dropShadowHMIF">
                            {homes[0].titleBlue}
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="max-w-2xl lg:max-w-4xl text-center mx-5 md:mx-auto font-work-sans text-lg md:text-xl lg:text-xl text-neutral-500 font-2xl leading-7 mt-9"
                    >
                        <p>{homes[0].description}</p>
                    </motion.div>
                    <div className="relative">
                        <div className="my-20 mb-28 z-10">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className="carousel gap-5"
                            >
                                {home_carousel.map((image, index) => (
                                    <div key={index} className="carousel-item">
                                        <LazyLoadImage
                                            className="w-72 h-[200px] md:w-96 md:h-[393px] drop-shadow-xl object-cover"
                                            src={image.image}
                                            effect="blur"
                                            alt="Carousel Image"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="absolute -bottom-48 inset-x-0 -z-10"
                        >
                            <LazyLoadImage
                                src={props.logo + "/Supergraphics1.svg"}
                                className="opacity-25 w-full"
                                effect="blur"
                            />
                        </motion.div>
                    </div>
                </div>

                <Banner homes={homes} />

                <motion.div className="mt-24 md:mt-24 bg-slate-500 p-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: false, amount: 0.8 }}
                        className="font-kanit text-white text-center text-lg md:text-xl lg:text-xl"
                    >
                        <p>Our events for UMN Informatics Students</p>
                        <p className="text-5xl md:text-7xl bold mt-9">
                            Program Kerja Kami
                        </p>
                        <div className="relative">
                            <Link
                                href={link != null ? link : "/proker"}
                                className="flex justify-center mt-4"
                            >
                                <Button
                                    className="md:block"
                                    label="Selengkapnya"
                                    theme=""
                                />
                            </Link>
                            {/* <div className="grid lg:flex gap-9 justify-center mt-16 z-10">
                            {props.prokers.map((proker, i) => {
                                return (
                                    <Card
                                        logo={prokerImg + "/" + proker.logo}
                                        judul={proker.nama}
                                        tanggal={proker.tanggal}
                                        description={proker.deskripsi}
                                        link={proker.link}
                                    />
                                );
                            })}
                        </div> */}
                        </div>
                    </motion.div>

                    <div className="absolute inset-x-0 -z-10 -mt-96">
                        <LazyLoadImage
                            src={props.logo + "/Supergraphics2.svg"}
                            effect="blur"
                        ></LazyLoadImage>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="text-white"
                >
                    <div className="text-xl md:text-2xl text-center font-work-sans text-neutral-400 mt-28 md:mt-40 italic">
                        <p>Tertarik untuk bekerja sama?</p>
                        <p>Punya pertanyaan atau aspirasi?</p>
                        <p>Atau sekedar kepo?</p>
                    </div>
                    <p className="font-kanit text-5xl mt-10 md:text-7xl text-center">
                        Hubungi Kami
                    </p>

                    <div className="flex justify-center mt-12 mb-40">
                        <div className="w-5/6 md:w-3/4 bg-gradient-to-r from-[#BF1E2D] to-[#E46225] rounded-3xl">
                            <div className="my-16 mx-8 md:mx-0 grid justify-center gap-10 text-base md:text-3xl">
                                <div className="flex flex-col gap-10">
                                    {contacts2.map((contact, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-10 items-center"
                                        >
                                            {contact.iconPath ? (
                                                <svg
                                                    className="w-6 md:w-10"
                                                    viewBox={
                                                        contact.iconViewBox
                                                    }
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d={contact.iconPath}
                                                        fill="#F8F8F8"
                                                    />
                                                </svg>
                                            ) : (
                                                <FontAwesomeIcon
                                                    icon={contact.icon}
                                                    className="w-6 md:w-10 my-auto"
                                                />
                                            )}
                                            <a
                                                href={contact.link}
                                                className="hover:text-slate-300"
                                            >
                                                {contact.label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <Footer />
            </AnimatePresence>
        </div>
    );
}

export default home;
