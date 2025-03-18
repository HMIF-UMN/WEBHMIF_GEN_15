import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FooterPPIF(props) {
  return(
    <motion.div initial={{ y: 200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: false, amount: 0.1 }}className="w-full h-[40dvh] xl:h-[30dvh] 2xl:h-[25dvh] bg-if-lighter-black p-4 md:p-16 xl:p-10 xl:px-20 flex flex-col md:flex-row justify-around md:justify-between">
      <div className="grid gap-8">
        <div className="flex justify-center md:justify-start">
          <img className="w-1/2" src={props.images + "/footer/logo_footer.svg"} />
        </div>
        <div className="text-white text-center md:text-left text-xs xl:text-base">
          © 2023 Himpunan Mahasiswa Informatika UMN <br />
          PADI IF dan HMIF UMN merupakan organisasi kemahasiswaan <br />
          dibawah naungan Universitas Multimedia Nusantara
        </div>
      </div>
      <div className="grid gap-8">
        <div className="flex justify-center md:justify-start text-gray-300">
          <button onClick={() => props.handleCtf()} >Secret?</button>
        </div>
        <div className="text-white text-center md:text-left text-xs xl:text-base">
          Made with ❤️ by <br />
          PADI IF UMN Console Team <br />
          and HMIF UMN R&D Division
        </div>
      </div>
    </motion.div>
  );
}
