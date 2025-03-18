import React, { useState, useRef, useEffect } from "react";
import { Head } from "@inertiajs/react";
import { useInView } from "framer-motion";

// import Home from "@/Components/PPIF/Home/Home";
// import Welcome from "@/Components/PPIF/Welcome/Welcome";
// import AboutPadi from "@/Components/PPIF/AboutPadi/AboutPadi";
// import Timeline from "@/Components/PPIF/Timeline/Timeline";
// import JoinKomunitas from "@/Components/PPIF/JoinKomunitas/JoinKomunitas";
// import NavbarPPIF from "@/Components/PPIF/Navbar/NavbarPPIF";
// import FooterPPIF from "@/Components/PPIF/Footer/FooterPPIF";
// import CTF from "@/Components/PPIF/CTF/CTF";

function ppif(props) {
    const [ctfIsOpen, setCtfIsOpen] = useState(false);

    const handleCtf = () => {
        setCtfIsOpen(ctfIsOpen ? false : true);
    };

    const [activeMenuItem, setActiveMenuItem] = useState(0);

    const homeRef = useRef(null);
    const isInHomeRef = useInView(homeRef);
    const tentangRef = useRef(null);
    const isInTentangRef = useInView(tentangRef);
    const kegiatanRef = useRef(null);
    const isInKegiatanRef = useInView(kegiatanRef);
    const kontakRef = useRef(null);
    const isInKontakRef = useInView(kontakRef);

    useEffect(() => {
        if (isInHomeRef) {
            setActiveMenuItem(0);
        }
        if (isInTentangRef) {
            setActiveMenuItem(1);
        }
        if (isInKegiatanRef) {
            setActiveMenuItem(2);
        }
        if (isInKontakRef) {
            setActiveMenuItem(3);
        }
    }, [isInHomeRef, isInTentangRef, isInKegiatanRef, isInKontakRef]);

    return (
        <>
            <Head title="Padi IF" />
            <div className="w-full bg-black overflow-x-hidden scroll-smooth">
                <div className="w-full h-screen">
                    <NavbarPPIF
                        images={props.images}
                        activeMenuItem={activeMenuItem}
                        setActiveMenuItem={setActiveMenuItem}
                    />
                    <div ref={homeRef}>
                        <Home images={props.images} />
                    </div>
                    <Welcome images={props.images} />
                    <div ref={tentangRef}>
                        <AboutPadi images={props.images} />
                    </div>
                    <div ref={kegiatanRef}>
                        <Timeline images={props.images} />
                    </div>
                    <div ref={kontakRef}>
                        <JoinKomunitas images={props.images} />
                    </div>
                    <FooterPPIF images={props.images} handleCtf={handleCtf} />
                    <CTF ctfIsOpen={ctfIsOpen} handleCtf={handleCtf} />
                </div>
            </div>
        </>
    );
}

export default ppif;
