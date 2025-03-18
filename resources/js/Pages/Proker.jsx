import React from "react";
import { Head } from "@inertiajs/react";
import ProgramMenu from "@/Components/ProgramMenu/ProgramMenu";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

function Proker({ word, prokers, prokerImg, user, navbars, prokerText }) {
    return (
        <div>
            <Head title="Program Kerja" />
            <div className="bg-gradient-to-r from-red-500 to-orange-500 w-full max-h-screen pt-16">
                <div>
                    <Navbar
                        currentPage="proker"
                        user={user !== null ? user.name : null}
                        navbars={navbars}
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className="py-16 md:py-14 mx-auto max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center flex justify-center"
                >
                    <div>
                        <div className="text-white text-4xl md:text-6xl font-[500]">
                            Our <span className="font-extrabold">Programs</span>{" "}
                            and <span className="font-extrabold">Events</span>
                        </div>
                        <div className="text-white text-lg lg:text-xl font-light mt-10">
                            {prokerText[0].description}
                        </div>
                    </div>
                </motion.div>
            </div>
            <ProgramMenu prokers={prokers} prokerImg={prokerImg} />
            <hr />
            <Footer />
        </div>
    );
}

export default Proker;
