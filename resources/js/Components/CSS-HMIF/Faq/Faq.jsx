import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Faq() {
    const [openAnswers, setOpenAnswers] = useState([]);

    const toggleAnswer = (index) => {
        if (openAnswers.includes(index)) {
            setOpenAnswers(openAnswers.filter((item) => item !== index));
        } else {
            setOpenAnswers([...openAnswers, index]);
        }
    };

    return (
        <section className="bg-gradient-to-br from-purple-500 to-indigo-700 h-fit lg:h-screen flex items-start lg:items-center py-20 lg:py-0 justify-center">
            <div className="Bungkus flex flex-col md:flex-row w-11/12 min-h-auto text-white mx-auto">
                <div className="Info-Kiri md:w-1/2">
                    <div className="text-base sm:text-2xl pb-6">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="text-base lg:text-lg font-worksans text-slate-100 pb-1 uppercase"
                        >
                            Makan siang di bawah pohon kelapa, <br />
                            Angin sepoi sejuk terasa. <br />
                            Temukan solusi tanpa tunggu lama,
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="font-kanit-semibold lg:w-9/12 w-11/12 text-4xl lg:text-7xl md:text-4xl sm:text-4xl"
                        >
                            Di sini jawabannya!
                        </motion.div>
                    </div>
                </div>
                <div className="Dropdown-Kanan md:w-1/2 mt-4 sm:mt-0 cursor-pointer">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="Pertanyaan flex justify-between mr-10 items-center"
                    >
                        <div
                            className="font-kanit mb-2 sm:text-xl lg:text-2xl md:text-xl w-full"
                            onClick={() => toggleAnswer(0)}
                        >
                            Kapan hari terakhir pendaftarannya, min? 📅
                        </div>
                        <div className="ml-12">
                            <img
                                src="../CSS-HMIF/images/feArrowDown0.svg"
                                alt="arrow"
                                className={`w-5 h-5 -translate-y-2 transform transition-transform duration-300 ${
                                    openAnswers.includes(0) ? "rotate-180" : ""
                                }`}
                                onClick={() => toggleAnswer(0)}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className={`Jawaban font-kanit text-slate-100 lg:text-lg md:text-sm mb-4 overflow-hidden transition-max-h duration-300 ${
                            openAnswers.includes(0)
                                ? "max-h-32 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        Pendaftaran akan ditutup jika memenuhi kuota maksimal
                        peserta atau H-1 lomba jika memang kuota belum
                        terpenuhi.
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="Pertanyaan flex justify-between mr-10 items-center"
                    >
                        <div
                            className="font-kanit mb-2 sm:text-xl lg:text-2xl md:text-xl w-full"
                            onClick={() => toggleAnswer(1)}
                        >
                            Apakah pendaftarannya dipungut biaya? 💸
                        </div>
                        <div className="ml-12">
                            <img
                                src="../CSS-HMIF/images/feArrowDown0.svg"
                                alt="arrow"
                                className={`w-5 h-5 -translate-y-2 transform transition-transform duration-300 ${
                                    openAnswers.includes(1) ? "rotate-180" : ""
                                }`}
                                onClick={() => toggleAnswer(1)}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className={`Jawaban font-kanit text-slate-100 lg:text-lg md:text-sm mb-4 overflow-hidden transition-max-h duration-300 ${
                            openAnswers.includes(1)
                                ? "max-h-32 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        Free kok!! HMIF menyediakan sarana untuk mengembangkan
                        bakat HMIFellas melalui perlombaan yang diadakan secara
                        gratis!!
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="Pertanyaan flex justify-between mr-10 items-center"
                    >
                        <div
                            className="font-kanit mb-2 sm:text-xl lg:text-2xl md:text-xl w-full"
                            onClick={() => toggleAnswer(2)}
                        >
                            Buat pemenang apakah ada hadiahnya, min? 🏆
                        </div>
                        <div className="ml-12">
                            <img
                                src="../CSS-HMIF/images/feArrowDown0.svg"
                                alt="arrow"
                                className={`w-5 h-5 -translate-y-2 transform transition-transform duration-300 ${
                                    openAnswers.includes(2) ? "rotate-180" : ""
                                }`}
                                onClick={() => toggleAnswer(2)}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className={`Jawaban font-kanit text-slate-100 lg:text-lg md:text-sm mb-4 overflow-hidden transition-max-h duration-300 ${
                            openAnswers.includes(2)
                                ? "max-h-32 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        Tentu saja ada dongss! Akan ada hadiah menarik buat
                        juara 1-3 per kategori lomba!!
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="Pertanyaan flex justify-between mr-10 items-center"
                    >
                        <div
                            className="font-kanit mb-2 sm:text-xl lg:text-2xl md:text-xl w-full"
                            onClick={() => toggleAnswer(3)}
                        >
                            Ada batas jumlah maksimal peserta ga, min? 🙎🏻
                        </div>
                        <div className="ml-12">
                            <img
                                src="../CSS-HMIF/images/feArrowDown0.svg"
                                alt="arrow"
                                className={`w-5 h-5 -translate-y-2 transform transition-transform duration-300 ${
                                    openAnswers.includes(3) ? "rotate-180" : ""
                                }`}
                                onClick={() => toggleAnswer(3)}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className={`Jawaban font-kanit text-slate-100 lg:text-lg md:text-sm mb-4 overflow-hidden transition-max-h duration-300 ${
                            openAnswers.includes(3)
                                ? "max-h-36 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        Jumlah peserta maksimal berbeda tiap lombanya.
                        <ul className="ms-3">
                            <li>
                                <span className="block">
                                    Basket (hanya putra){" "}
                                    <span className="font-bold">
                                        3 pemain utama + 1 cadangan, maks. 16
                                        tim
                                    </span>
                                    .
                                </span>
                            </li>
                            <li>
                                Badminton maks.{" "}
                                <span className="font-bold">
                                    8 tim ganda putra dan 8 tim ganda campuran
                                </span>
                            </li>
                            <li>
                                Futsal (hanya putra){" "}
                                <span className="font-bold">
                                    5 pemain utama + 1 cadangan, maks. 16 tim
                                </span>{" "}
                            </li>
                            <li>
                                Mobile Legends{" "}
                                <span className="font-bold">maks. 16 tim</span>{" "}
                                (anggota boleh campur)
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="Pertanyaan flex justify-between mr-10 items-center"
                    >
                        <div
                            className="font-kanit mb-2 sm:text-xl lg:text-2xl md:text-xl w-full"
                            onClick={() => toggleAnswer(4)}
                        >
                            Duh, butuh SKKM nihh min, kira-kira dengan ikut CSS
                            bisa dapet gak ya? ⭐
                        </div>
                        <div className="ml-12">
                            <img
                                src="../CSS-HMIF/images/feArrowDown0.svg"
                                alt="arrow"
                                className={`w-5 h-5 -translate-y-2 transform transition-transform duration-300 ${
                                    openAnswers.includes(4) ? "rotate-180" : ""
                                }`}
                                onClick={() => toggleAnswer(4)}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className={`Jawaban font-kanit text-slate-100 lg:text-lg md:text-sm mb-4 overflow-hidden transition-max-h duration-300 ${
                            openAnswers.includes(4)
                                ? "max-h-32 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                    >
                        Dapet dong buat semua peserta!! Peserta akan mendapatkan
                        +1 SKKM minat & bakat, Juara 3 akan mendapatkan +2 SKKM
                        minat & bakat, Juara 2 akan mendapatkan +3 SKKM minat &
                        bakat, Juara 1 akan mendapatkan +4 SKKM minat & bakat!!
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
