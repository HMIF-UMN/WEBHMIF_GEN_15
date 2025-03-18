import React from "react";
import { motion } from "framer-motion";

function CardContact({ sosmed, icon, link, x, delay }) {
    return (
        <motion.a
            initial={{ opacity: 0, x:x }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 1, delay: delay }}
            viewport={{ once: true, amount: 0.1 }} 
            href={link} 
            className="w-full rounded-lg border border-if-neutral-700 h-[300px] bg-gradient-to-br from-if-neutral-900/50 to-if-black bg-radial-gradient hover:bg-gradient-to-br hover:from-if-blue-600 hover:to-umn-blue-700  hover:bg-radial-gradient">
            <div className="h-full ml-10 grid content-center gap-24 ">
                <span className="text-if-neutral-100 text-4xl font-kanit leading-7">{sosmed}</span>
                <img className="w-16" src={'/images/css/' + icon + '.svg'} alt="" />
            </div>
        </motion.a>
    );
}

export default CardContact;