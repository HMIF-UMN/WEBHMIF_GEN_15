import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Home from "@/Components/CSS-HMIF/Home/Home";
import DaftarCSS from "@/Components/CSS-HMIF/DaftarCSS/DaftarCSS";
import AboutCSSComponent from "@/Components/CSS-HMIF/AboutCSS/AboutCSS";
import Faq from "@/Components/CSS-HMIF/Faq/Faq";
import CardContact from "@/Components/CSS-HMIF/CardContact/CardContact";
import { motion } from "framer-motion";

function css(props) {
    return (
        <>
            <Head title="CSS" />
            <div className="w-full bg-black overflow-x-hidden scroll-smooth">
                <div className="w-full">
                    <NavBar
                        currentPage="aboutus"
                        user={props.user !== null ? props.user.name : null}
                        navbars={props.navbars}
                    />
                    <Home />
                    <AboutCSSComponent />
                    <DaftarCSS
                        teamData={
                            props.teamData == null ? null : props.teamData
                        }
                        user={props.user != null ? props.user : null}
                    />
                    <Faq />
                    <section
                        className="bg-black h-auto mb-16 mt-8"
                        id="kontakKami"
                    >
                        <div className="mx-5 lg:mx-10">
                            <motion.p
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className="font-worksans text-base md:text-xl text-if-neutral-500"
                            >
                                MALU BERTANYA TERSESAT DI JALAN
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: false, amount: 0.1 }}
                                className="font-kanit-medium text-5xl mt-2 text-if-neutral-200"
                            >
                                Masih bingung?
                                <br />
                                Tanya kami aja!
                            </motion.p>

                            <div className="flex flex-col lg:flex-row gap-5 mt-8">
                                <CardContact
                                    x={-100}
                                    delay={0.2}
                                    sosmed="LINE"
                                    icon="line"
                                    link="https://line.me/ti/p/G6LqjVineM"
                                />
                                <CardContact
                                    x={-50}
                                    delay={0}
                                    sosmed="Instagram"
                                    icon="instagram"
                                    link="https://hmif.umn.ac.id/instagram"
                                />
                                <CardContact
                                    x={50}
                                    delay={0}
                                    sosmed="Email"
                                    icon="email"
                                    link="https://hmif.umn.ac.id/email"
                                />
                                <CardContact
                                    x={100}
                                    delay={0.2}
                                    sosmed="Discord"
                                    icon="discord"
                                    link="https://hmif.umn.ac.id/discord"
                                />
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        </>
    );
}
// console.log("🚀 ~ css ~ teamCounts:", teamCounts)
// // console.log("🚀 ~ css ~ teamCounts:", teamCounts)

export default css;
