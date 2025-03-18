import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import { useState, useRef, useEffect } from "react";
import Team from "@/Components/Team/Team";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function aboutUs(props) {
    const { divisi_anggota, about_us, vision, mission, grid_photo } = props;

    // const gridPhotos = [
    //     { img: props.photos + "/1.webp" },
    //     { img: props.photos + "/14.webp" },
    //     { img: props.photos + "/7.webp" },
    //     { img: props.photos + "/9.webp" },
    //     { img: props.photos + "/11.webp" },
    //     { img: props.photos + "/2.webp" },
    //     { img: props.photos + "/8.webp" },
    //     { img: props.photos + "/21.webp" },
    //     { img: props.photos + "/4.webp" },
    //     { img: props.photos + "/10.webp" },
    //     { img: props.photos + "/19.webp" },
    //     { img: props.photos + "/22.webp" },
    //     { img: props.photos + "/24.webp" },
    //     { img: props.photos + "/3.webp" },
    //     { img: props.photos + "/20.webp" },
    //     { img: props.photos + "/23.webp" },
    //     { img: props.photos + "/20.webp" },
    // ];

    const medparPhotos = [
        {
            img: props.medpar + "/juice.png",
            link: "https://www.instagram.com/umn_juice/?hl=en",
        },
        {
            img: props.medpar + "/radio.png",
            link: "https://radio.umn.ac.id/",
        },
        {
            img: props.medpar + "/juice.png",
            link: "https://www.instagram.com/umn_juice/?hl=en",
        },
        {
            img: props.medpar + "/radio.png",
            link: "https://radio.umn.ac.id/",
        },
        {
            img: props.medpar + "/juice.png",
            link: "https://www.instagram.com/umn_juice/?hl=en",
        },
        {
            img: props.medpar + "/radio.png",
            link: "https://radio.umn.ac.id/",
        },
    ];

    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            const timeout = setTimeout(() => {
                setCarouselIndex((carouselIndex + 1) % grid_photo.length);
            }, 5000);

            const hide = setTimeout(() => {
                document
                    .querySelector("#carousel-1")
                    .classList.add("opacity-0");
            }, 4700);

            const hide2 = setTimeout(() => {
                document
                    .querySelector("#carousel-2")
                    .classList.add("opacity-0");
            }, 4600);

            const hide3 = setTimeout(() => {
                document
                    .querySelector("#carousel-3")
                    .classList.add("opacity-0");
            }, 4500);

            const show = setTimeout(() => {
                document
                    .querySelector("#carousel-1")
                    .classList.remove("opacity-0");
                document
                    .querySelector("#carousel-2")
                    .classList.remove("opacity-0");
                document
                    .querySelector("#carousel-3")
                    .classList.remove("opacity-0");
            }, 5000);

            return () => {
                clearTimeout(hide);
                clearTimeout(hide2);
                clearTimeout(hide3);
                clearTimeout(show);
                clearTimeout(timeout);
            };
        }
    }, [carouselIndex]);

    var indicators = [];

    for (var i = 0; i < grid_photo.length / 3; i++) {
        indicators.push(
            <button
                type="button"
                class="w-3 h-3 rounded-full bg-slate-500"
            ></button>
        );
    }

    function carouselGoTo(index) {
        const hide = setTimeout(() => {
            document.querySelector("#carousel-1").classList.add("opacity-0");
        }, 200);

        const hide2 = setTimeout(() => {
            document.querySelector("#carousel-2").classList.add("opacity-0");
        }, 100);
        document.querySelector("#carousel-3").classList.add("opacity-0");
        const show = setTimeout(() => {
            document.querySelector("#carousel-1").classList.remove("opacity-0");
            document.querySelector("#carousel-2").classList.remove("opacity-0");
            document.querySelector("#carousel-3").classList.remove("opacity-0");
            setCarouselIndex(index * 3);
        }, 500);
    }

    const [divisi, setDivisi] = useState("Badan Pengurus Harian");
    const [gen, setGen] = useState("GEN XIV");

    const teamDropdownRef = useRef();
    const teamDropdownArrowRef = useRef();
    const genDropdownRef = useRef();
    const genDropdownArrowRef = useRef();

    const handleAnggotaDropdown = () => {
        if (teamDropdownRef.current.classList.contains("h-0")) {
            teamDropdownRef.current.classList.remove("h-0");
            teamDropdownRef.current.classList.add("h-80");
            teamDropdownArrowRef.current.classList.add("rotate-180");
            teamDropdownArrowRef.current.classList.remove("rotate-0");
        } else {
            teamDropdownRef.current.classList.remove("h-80");
            teamDropdownRef.current.classList.add("h-0");
            teamDropdownArrowRef.current.classList.add("rotate-0");
            teamDropdownArrowRef.current.classList.remove("rotate-180");
        }
    };

    const handleGenDropdown = () => {
        if (genDropdownRef.current.classList.contains("h-0")) {
            genDropdownRef.current.classList.remove("h-0");
            genDropdownRef.current.classList.add("h-80");
            genDropdownArrowRef.current.classList.add("rotate-180");
            genDropdownArrowRef.current.classList.remove("rotate-0");
        } else {
            genDropdownRef.current.classList.remove("h-80");
            genDropdownRef.current.classList.add("h-0");
            genDropdownArrowRef.current.classList.add("rotate-0");
            genDropdownArrowRef.current.classList.remove("rotate-180");
        }
    };

    const handleAnggotaDropdownItemClick = (name) => {
        document
            .querySelector(`#${divisi.split(" ")[0]}`)
            .classList.add("opacity-0");
        document
            .querySelector(`#${divisi.split(" ")[0]}`)
            .classList.add("hidden");
        document
            .querySelector(`#${divisi.split(" ")[0]}`)
            .classList.remove("opacity-100");
        setDivisi(name);
        document
            .querySelector(`#${name.split(" ")[0]}`)
            .classList.remove("opacity-0");
        document
            .querySelector(`#${name.split(" ")[0]}`)
            .classList.remove("hidden");
        document
            .querySelector(`#${name.split(" ")[0]}`)
            .classList.add("opacity-100");
    };

    const handleGenDropdownItemClick = (name) => {
        setGen(name);
        setDivisi("Badan Pengurus Harian");
    };

    return (
        <>
            <Head title="About Us" />
            <div className="overflow-x-hidden">
                <AnimatePresence>
                    <div className="w-screen bg-gradient-to-b from-[#0B6FC1] to-black flex flex-col items-center pt-16">
                        <NavBar
                            currentPage="aboutus"
                            user={props.user !== null ? props.user.name : null}
                            navbars={props.navbars}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="mt-12 text-center w-2/3 text-white font-work-sans lg:text-xl sm:text-base text-xs"
                        >
                            <p className="mb-8 text-xl lg:text-2xl">
                                {about_us[0].title1}
                            </p>
                            <div className="mb-8 font-kanit-semibold text-4xl sm:text-5xl md:text-6xl lg:text-8xl ">
                                <h3>{about_us[0].title2}</h3>
                                <h3>{about_us[0].title3}</h3>
                            </div>
                            <p className="text-lg lg:text-2xl lg:px-20">
                                {about_us[0].title4}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="lg:mt-28 mt-12 text-center lg:text-4xl md:text-xl sm:text-base text-white w-2/3"
                        >
                            <span className="font-kanit text-xl lg:text-3xl">
                                {about_us[0].title5}
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="hidden lg:block md:columns-3 lg:columns-5 mt-28"
                        >
                            {/* {gridPhotos.map((photo, i) => {
                                return (
                                    <LazyLoadImage
                                        placeholderSrc={
                                            props.image + "/gray.webp"
                                        }
                                        effect="blur"
                                        key={i}
                                        className="mb-4"
                                        src={photo.img}
                                    ></LazyLoadImage>
                                );
                            })} */}
                            {grid_photo.map((photo, i) => {
                                return (
                                    <LazyLoadImage
                                        placeholderSrc={
                                            props.image + "/gray.webp"
                                        }
                                        effect="blur"
                                        key={i}
                                        className="mb-4"
                                        src={photo.image}
                                    ></LazyLoadImage>
                                );
                            })}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="flex justify-center w-2/3 gap-4 mt-28 lg:hidden duration-500 transition-all"
                        >
                            <LazyLoadImage
                                // placeholderSrc={props.image+"/gray.webp"}
                                // effect="blur"
                                className="mb-4 w-1/3 h-40 object-center object-cover duration-500 rounded-md"
                                id="carousel-1"
                                src={grid_photo[carouselIndex].image}
                            ></LazyLoadImage>
                            <LazyLoadImage
                                // placeholderSrc={props.image+"/gray.webp"}
                                // effect="blur"
                                className="mb-4 w-1/3 h-40 object-center object-cover duration-500 rounded-md"
                                id="carousel-2"
                                src={
                                    grid_photo[
                                        (carouselIndex + 1) % grid_photo.length
                                    ].image
                                }
                            ></LazyLoadImage>
                            <LazyLoadImage
                                // placeholderSrc={props.image+"/gray.webp"}
                                // effect="blur"
                                className="mb-4 w-1/3 h-40 object-center object-cover duration-500 rounded-md"
                                id="carousel-3"
                                src={
                                    grid_photo[
                                        (carouselIndex + 2) % grid_photo.length
                                    ].image
                                }
                            ></LazyLoadImage>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="mb-28 flex space-x-3 lg:hidden"
                        >
                            {indicators.map((indicator, i) => {
                                if (Math.floor(carouselIndex / 3) == i) {
                                    return (
                                        <button
                                            type="button"
                                            key={i}
                                            className="w-2 h-2 rounded-full bg-blue-400"
                                            onClick={() => carouselGoTo(i)}
                                        ></button>
                                    );
                                } else {
                                    return (
                                        <button
                                            type="button"
                                            key={i}
                                            className="w-2 h-2 rounded-full bg-slate-500"
                                            onClick={() => carouselGoTo(i)}
                                        ></button>
                                    );
                                }
                            })}
                        </motion.div>
                    </div>
                    <div className="w-screen bg-black flex flex-col items-center relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="w-2/3 my-28 text-start"
                        >
                            <div className="font-work-sans text-[#C2CAD6] mt-20 mb-4 lg:text-3xl text-xl">
                                <p>Our Vision</p>
                            </div>
                            <div className="font-kanit-light text-white lg:text-2xl text-base">
                                <p>{vision[0].visi}</p>
                            </div>
                            <div className="font-work-sans text-[#C2CAD6] mt-20 mb-4 lg:text-3xl text-xl">
                                <p>Our Mission</p>
                            </div>
                            <div className="font-kanit-light text-white lg:pl-8 pl-0">
                                <ul className="list-disc list-outside lg:text-2xl text-base space-y-4">
                                    {mission.map((misi, index) => (
                                        <li key={index}>{misi.misi}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                        <LazyLoadImage
                            placeholderSrc={props.image + "/gray.webp"}
                            effect="blur"
                            src={props.aboutUs + "/SymbolLeft.svg"}
                            className="absolute lg:my-auto my-0 left-0 lg:top-auto top-0 w-[14%] lg:h-full mt-4 lg:mt-0"
                        ></LazyLoadImage>
                        <LazyLoadImage
                            placeholderSrc={props.image + "/gray.webp"}
                            effect="blur"
                            src={props.aboutUs + "/SymbolRight.svg"}
                            className="absolute lg:my-auto my-0 right-0 lg:bottom-auto bottom-0 w-[14%] lg:h-full"
                        ></LazyLoadImage>
                    </div>
                    {/*<div className="w-screen bg-black">*/}
                    {/*<motion.div*/}
                    {/*    initial={{opacity: 0}}*/}
                    {/*    whileInView={{opacity: 1}}*/}
                    {/*    transition={{duration: 1.5}}*/}
                    {/*    viewport={{once: false, amount: 0.1}}*/}
                    {/*    className="font-work-sans text-[#C2CAD6] lg:text-base text-xs text-left"*/}
                    {/*>*/}
                    {/*    <p className="w-2/3 mx-auto">GEN</p>*/}
                    {/*</motion.div>*/}
                    {/*<motion.div*/}
                    {/*    initial={{opacity: 0}}*/}
                    {/*    whileInView={{opacity: 1}}*/}
                    {/*    transition={{duration: 1.5}}*/}
                    {/*    viewport={{once: false, amount: 0.1}}*/}
                    {/*    className="flex items-center justify-end mb-6 w-1/2"*/}
                    {/*>*/}
                    {/*    <div*/}
                    {/*        onClick={handleGenDropdown}*/}
                    {/*        className="cursor-pointer w-2/3 text-white bg-transparent border-b-2 border-x-0 border-t-0 text-base md:text-3xl relative"*/}
                    {/*    >*/}
                    {/*        {gen}*/}
                    {/*        <div*/}
                    {/*            ref={genDropdownArrowRef}*/}
                    {/*            className="absolute top-0 right-2 z-20 transform transition-all"*/}
                    {/*        >*/}
                    {/*            <MdKeyboardArrowDown/>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            ref={genDropdownRef}*/}
                    {/*            className="absolute transition-all duration-300 z-10 top-10 left-0 w-full max-h-80 h-0 overflow-hidden"*/}
                    {/*        >*/}
                    {/*            <div className="bg-gradient-to-b from-black to-[#0B6FC1]/90 rounded-xl">*/}
                    {/*                <div*/}
                    {/*                    onClick={() =>*/}
                    {/*                        handleGenDropdownItemClick("GEN XIV")*/}
                    {/*                    }*/}
                    {/*                    key={i}*/}
                    {/*                    className="text-white text-lg p-2 transition-all hover:font-bold"*/}
                    {/*                >*/}
                    {/*                    GEN XIV*/}
                    {/*                </div>*/}
                    {/*                <div*/}
                    {/*                    onClick={() =>*/}
                    {/*                        handleGenDropdownItemClick("GEN XIII")*/}
                    {/*                    }*/}
                    {/*                    key={i}*/}
                    {/*                    className="text-white text-lg p-2 transition-all hover:font-bold"*/}
                    {/*                >*/}
                    {/*                    GEN XIII*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</motion.div>*/}
                    {/*<motion.div*/}
                    {/*    initial={{opacity: 0}}*/}
                    {/*    whileInView={{opacity: 1}}*/}
                    {/*    transition={{duration: 1.5}}*/}
                    {/*    viewport={{once: false, amount: 0.1}}*/}
                    {/*    className="font-work-sans text-[#C2CAD6] lg:text-base text-xs text-left"*/}
                    {/*>*/}
                    {/*    <p className="w-2/3 mx-auto">Our Team</p>*/}
                    {/*</motion.div>*/}
                    {/*<motion.div*/}
                    {/*    initial={{opacity: 0}}*/}
                    {/*    whileInView={{opacity: 1}}*/}
                    {/*    transition={{duration: 1.5}}*/}
                    {/*    viewport={{once: false, amount: 0.1}}*/}
                    {/*    className="flex items-center justify-center"*/}
                    {/*>*/}
                    {/*    <div*/}
                    {/*        onClick={handleAnggotaDropdown}*/}
                    {/*        className="cursor-pointer w-2/3 text-white bg-transparent border-b-2 border-x-0 border-t-0 text-base md:text-3xl relative"*/}
                    {/*    >*/}
                    {/*        {divisi}*/}
                    {/*        <div*/}
                    {/*            ref={teamDropdownArrowRef}*/}
                    {/*            className="absolute top-0 right-2 z-20 transform transition-all"*/}
                    {/*        >*/}
                    {/*            <MdKeyboardArrowDown/>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            ref={teamDropdownRef}*/}
                    {/*            className="absolute transition-all duration-300 z-10 top-10 left-0 w-full max-h-80 h-0 overflow-hidden"*/}
                    {/*        >*/}
                    {/*            <div className="bg-gradient-to-b from-black to-[#0B6FC1]/90 rounded-xl">*/}
                    {/*                {props.pengurus.map((data, i) => {*/}
                    {/*                    if (data[0].gen.gen === gen) {*/}
                    {/*                        return (*/}
                    {/*                            <div*/}
                    {/*                                onClick={() =>*/}
                    {/*                                    handleAnggotaDropdownItemClick(*/}
                    {/*                                        data[0].divisi.nama*/}
                    {/*                                    )*/}
                    {/*                                }*/}
                    {/*                                key={i}*/}
                    {/*                                className="text-white text-lg p-2 transition-all hover:font-bold">*/}
                    {/*                                {data[0].divisi.nama}*/}
                    {/*                            </div>*/}
                    {/*                        );*/}
                    {/*                    }*/}
                    {/*                })}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/* <select
                                className="w-2/3 text-white bg-transparent border-b-2 border-x-0 border-t-0 text-base md:text-3xl"
                                value={divisi}
                                onChange={handleChange}
                            >
                                {props.pengurus.map((data, i) => {
                                    return (
                                        <option className="text-white text-lg bg-black">
                                            {data[0].divisi.nama}
                                        </option>
                                    );
                                })}
                            </select> */}
                    {/*</motion.div>*/}
                    {/*<motion.div*/}
                    {/*    initial={{opacity: 0}}*/}
                    {/*    whileInView={{opacity: 1}}*/}
                    {/*    transition={{duration: 1.5}}*/}
                    {/*    viewport={{once: false, amount: 0.1}}*/}
                    {/*    className="relative pb-4"*/}
                    {/*>*/}
                    {/*    {props.pengurus.map((data, i) => {*/}
                    {/*        if (data[0].gen.gen === gen) {*/}
                    {/*            if (data[0].divisi.nama.split(" ")[0] == "Badan") {*/}
                    {/*                return (*/}
                    {/*                    <div*/}
                    {/*                        className="flex flex-col items-center z-[5] opacity-100 mt-4 w-full transition-all duration-300"*/}
                    {/*                        key={i}*/}
                    {/*                        id={data[0].divisi.nama.split(" ")[0]}*/}
                    {/*                    >*/}
                    {/*                        <div className="w-2/3">*/}
                    {/*                            <Team*/}
                    {/*                                divisi={data}*/}
                    {/*                                linkAsset={props.anggota}*/}
                    {/*                                linkImage={props.image}*/}
                    {/*                            />*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                );*/}
                    {/*            } else {*/}
                    {/*                return (*/}
                    {/*                    <div*/}
                    {/*                        className="hidden flex flex-col items-center z-[5] opacity-0 mt-4 w-full transition-all duration-300"*/}
                    {/*                        key={i}*/}
                    {/*                        id={data[0].divisi.nama.split(" ")[0]}*/}
                    {/*                    >*/}
                    {/*                        <div className="w-2/3">*/}
                    {/*                            <Team*/}
                    {/*                                divisi={data}*/}
                    {/*                                linkAsset={props.anggota}*/}
                    {/*                                linkImage={props.image}*/}
                    {/*                            />*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                );*/}
                    {/*            }*/}
                    {/*        }*/}
                    {/*    })}*/}
                    {/*</motion.div>*/}
                    {/*</div>*/}

                    <div className="w-screen bg-black flex justify-center font-worksans ">
                        <div className="md:w-2/3 w-4/5 flex flex-col items-start gap-14">
                            <div className="font-work-sans text-[#C2CAD6] mt-20 -mb-10 lg:text-3xl text-xl">
                                <p>Our Team</p>
                            </div>
                            <div>
                                {divisi_anggota.map((divisi, index) => (
                                    <div key={index}>
                                        <div className="font-work-sans text-[#C2CAD6] mt-10 mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold">
                                            <h1>{divisi.nama_divisi}</h1>
                                        </div>
                                        <div className="p-1 bg-gray-200 rounded-xl w-full mb-6">
                                            <img
                                                src={divisi.image}
                                                className="w-full rounded-tl-xl rounded-bl-xl object-cover"
                                                alt={divisi.nama_divisi}
                                            />
                                        </div>
                                        <div className="text-[#C2CAD6] text-sm sm:text-lg md:text-xl mt-4 mb-10 space-y-4 flex flex-wrap items-start justify-start">
                                            {divisi.anggota}{" "}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* BPH */}
                            {/* <div>
                                <div className="p-3 bg-gray-200 rounded-xl w-full mb-6">
                                    <h1 className="text-lg lg:text-2xl font-bold">
                                        Badan Pengurus Harian
                                    </h1>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center">
                                        <div className="w-[25%]">
                                            <img
                                                src={
                                                    props.anggota +
                                                    "/" +
                                                    "BPH - Gerald Imanuel.webp"
                                                }
                                                className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                alt="Gerald Imanuel Wijaya"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-base lg:text-lg font-bold">
                                                Gerald Imanuel Wijaya
                                            </h2>
                                            <p className="text-gray-400">
                                                Ketua
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center">
                                        <div className="w-[25%]">
                                            <img
                                                src={
                                                    props.anggota +
                                                    "/" +
                                                    "placeholder.webp"
                                                }
                                                className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                alt="Alfonsus Vega H.T."
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-base lg:text-lg font-bold">
                                                Alfonsus Vega H.T.
                                            </h2>
                                            <p className="text-gray-400">
                                                Wakil Ketua
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center">
                                        <div className="w-[25%]">
                                            <img
                                                src={
                                                    props.anggota +
                                                    "/" +
                                                    "BPH - Jefer Setiawan.webp"
                                                }
                                                className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                alt="Jefer Setiawan"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-base lg:text-lg font-bold">
                                                Jefer Setiawan
                                            </h2>
                                            <p className="text-gray-400">
                                                Sekretaris
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center">
                                        <div className="w-[25%]">
                                            <img
                                                src={
                                                    props.anggota +
                                                    "/" +
                                                    "placeholder.webp"
                                                }
                                                className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                alt="Jefer Setiawan"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-base lg:text-lg font-bold">
                                                Chelsea Arantza Phoebe
                                            </h2>
                                            <p className="text-gray-400">
                                                Bendahara
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* R & D*/}
                            {/* <div>
                                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                                    <div>
                                        <div className="p-3 bg-gray-200 rounded-xl w-full">
                                            <h1 className="text-lg lg:text-2xl font-bold">
                                                Research & Development
                                            </h1>
                                        </div>
                                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
                                            <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center mt-4">
                                                <div className="w-[25%] lg:w-[50%]">
                                                    <img
                                                        src={
                                                            props.anggota +
                                                            "/" +
                                                            "RD - Kevin Sorensen.webp"
                                                        }
                                                        className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                        alt="Kevin Sorensen"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-base font-bold">
                                                        Kevin Sorensen
                                                    </h2>
                                                    <p className="text-gray-400">
                                                        Koordinator
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center mt-4">
                                                <div className="w-[25%] lg:w-[50%]">
                                                    <img
                                                        src={
                                                            props.anggota +
                                                            "/" +
                                                            "placeholder.webp"
                                                        }
                                                        className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                        alt="Henry Salim"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-base font-bold">
                                                        Henry Salim
                                                    </h2>
                                                    <p className="text-gray-400">
                                                        Wakil Koordinator
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 rounded-xl flex flex-row gap-6 p-3 font-semibold">
                                        <div className="space-y-2 w-1/2">
                                            <p>Michael Tio</p>
                                            <p>Christian Ivan Wibowo</p>
                                            <p>Arin Winardi</p>
                                            <p>Alvianda Chairofta</p>
                                        </div>
                                        <div className="space-y-2 w-1/2">
                                            <p>Nathan Angelo</p>
                                            <p>Nathanael Axl</p>
                                            <p>Jonathan Susanto</p>
                                            <p>Reynaldo</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* CREATIVE */}
                            {/* <div>
                                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                                    <div>
                                        <div className="p-3 bg-gray-200 rounded-xl w-full">
                                            <h1 className="text-lg lg:text-2xl font-bold">
                                                Creative
                                            </h1>
                                        </div>
                                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
                                            <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center mt-4">
                                                <div className="w-[25%] lg:w-[60%]">
                                                    <img
                                                        src={
                                                            props.anggota +
                                                            "/" +
                                                            "CR - Rivo.webp"
                                                        }
                                                        className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                        alt="Rivo Juicer Wowor"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-base font-bold">
                                                        Rivo Juicer Wowor
                                                    </h2>
                                                    <p className="text-gray-400">
                                                        Koordinator
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center mt-4">
                                                <div className="w-[25%] lg:w-[50%]">
                                                    <img
                                                        src={
                                                            props.anggota +
                                                            "/" +
                                                            "placeholder.webp"
                                                        }
                                                        className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                        alt="Frendy Zhuang"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-base font-bold">
                                                        Frendhy Zhuang
                                                    </h2>
                                                    <p className="text-gray-400">
                                                        Wakil Koordinator
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 rounded-xl flex flex-row gap-6 p-3 font-semibold">
                                        <div className="space-y-2 w-1/2">
                                            <p>Amanda Citra Dewanti</p>
                                            <p>Maulidya Isnaini</p>
                                        </div>
                                        <div className="space-y-2 w-1/2">
                                            <p>Ari Maulana</p>
                                            <p>Jonathan Christian Gunawan</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* PR */}
                            {/* <div>
                                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                                    <div>
                                        <div className="p-3 bg-gray-200 rounded-xl w-full">
                                            <h1 className="text-lg lg:text-2xl font-bold">
                                                Public Relations
                                            </h1>
                                        </div>
                                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
                                            <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center mt-4">
                                                <div className="w-[25%] lg:w-[60%]">
                                                    <img
                                                        src={
                                                            props.anggota +
                                                            "/" +
                                                            "placeholder.webp"
                                                        }
                                                        className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                        alt="Charel Rosabel"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-base font-bold">
                                                        Charel Rosabel
                                                    </h2>
                                                    <p className="text-gray-400">
                                                        Koordinator
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center mt-4">
                                                <div className="w-[25%] lg:w-[50%]">
                                                    <img
                                                        src={
                                                            props.anggota +
                                                            "/" +
                                                            "PR - Devin Kurnia.webp"
                                                        }
                                                        className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                        alt="Devin Kurnia"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-base font-bold">
                                                        Devin Kurnia
                                                    </h2>
                                                    <p className="text-gray-400">
                                                        Wakil Koordinator
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 rounded-xl flex flex-row gap-6 p-3 font-semibold">
                                        <div className="space-y-2 w-1/2">
                                            <p>Nataniel Tambayung</p>
                                            <p>Sharon Tionardi</p>
                                            <p>Hosea Dunatus S.</p>
                                            <p>Austin Gilbert Liwanto</p>
                                            <p>Bryan</p>
                                        </div>
                                        <div className="space-y-5 w-1/2">
                                            <p>Ryann Chandiari</p>
                                            <p>Steven Christian Y.P.</p>
                                            <p>Descellia Ng</p>
                                            <p>Fellisca Veren</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* PM */}
                            {/* <div className="mb-16">
                                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                                    <div>
                                        <div className="p-3 bg-gray-200 rounded-xl w-full">
                                            <h1 className="text-lg lg:text-2xl font-bold">
                                                Project Manager
                                            </h1>
                                        </div>
                                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
                                            <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center mt-4">
                                                <div className="w-[25%] lg:w-[60%]">
                                                    <img
                                                        src={
                                                            props.anggota +
                                                            "/" +
                                                            "placeholder.webp"
                                                        }
                                                        className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                        alt="Marthin Riyaldo Solini Kese"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-base font-bold">
                                                        Martin Riyaldo Solini
                                                        Kese
                                                    </h2>
                                                    <p className="text-gray-400">
                                                        Koordinator
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-200 rounded-xl flex flex-row gap-6 items-center mt-4">
                                                <div className="w-[25%] lg:w-[50%]">
                                                    <img
                                                        src={
                                                            props.anggota +
                                                            "/" +
                                                            "placeholder.webp"
                                                        }
                                                        className="w-full rounded-tl-xl rounded-bl-xl object-fit"
                                                        alt="Vika Gisella"
                                                    />
                                                </div>
                                                <div>
                                                    <h2 className="text-base font-bold">
                                                        Vika Gisella
                                                    </h2>
                                                    <p className="text-gray-400">
                                                        Wakil Koordinator
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 rounded-xl flex flex-row gap-6 p-3 font-semibold">
                                        <div className="space-y-3 w-1/2">
                                            <p>Aaron Kho</p>
                                            <p>Michael Aditya</p>
                                            <p>Russel Shivah</p>
                                            <p>Wian Sanjaya</p>
                                        </div>
                                        <div className="space-y-8 w-1/2">
                                            <p>Vedian Bunka</p>
                                            <p>Felix Rafael</p>
                                            <p>Theresia Glory Emmanuella</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="relative flex overflow-hidden bg-black border-y-2">
                        <div className="py-0 lg:py-12 animate-marquee whitespace-nowrap flex">
                            {medparPhotos.map((photo, i) => {
                                return (
                                    <span key={i} className="mx-4 text-4xl">
                                        <a href={photo.link} target="_blank">
                                            <img
                                                className="object-contain transform h-24 lg:h-40"
                                                src={photo.img}
                                            />
                                        </a>
                                    </span>
                                );
                            })}
                        </div>

                        <div className="absolute top-0 py-0 lg:py-12 animate-marquee2 whitespace-nowrap flex">
                            {medparPhotos.map((photo, i) => {
                                return (
                                    <span key={i} className="mx-4 text-4xl">
                                        <a href={photo.link} target="_blank">
                                            <img
                                                className="object-contain transform h-24 lg:h-40"
                                                src={photo.img}
                                            />
                                        </a>
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-screen bg-black pt-28 lg:block hidden">
                        <LazyLoadImage
                            placeholderSrc={props.image + "/gray.webp"}
                            effect="blur"
                            src={props.aboutUs + "/Supergraphics.svg"}
                            className="w-screen"
                        ></LazyLoadImage>
                    </div>
                    <Footer />
                </AnimatePresence>
            </div>
        </>
    );
}
