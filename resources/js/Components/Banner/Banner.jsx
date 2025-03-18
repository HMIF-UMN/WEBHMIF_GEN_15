import React from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

function Banner(props) {
    const { homes, prokerImg, link } = props;

    return (
        <div className="bg-gradient-to-r from-umn-blue-600 to-if-blue-600 p-12 md:max-w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false, amount: 0.8 }}
            >
                <div className="flex justify-center">
                    {/* Images or other content */}
                </div>
                <div className="text-5xl md:text-7xl text-if-white text-center font-kanit-semibold tracking-tighter my-5">
                    {homes[0].taglineUpper} <br />
                    {homes[0].taglineBottom}
                </div>

                <div className="text-lg md:text-xl lg:text-xl text-if-white text-center font-light tracking-wide md:max-w-3xl md:mx-auto">
                    {homes[0].tagDesc}
                </div>

                <Link className="text-center" href={link || "/about-us"}>
                    <Button label="Kenali Kami" theme="light" />
                </Link>
            </motion.div>
        </div>
    );
}

export default Banner;
