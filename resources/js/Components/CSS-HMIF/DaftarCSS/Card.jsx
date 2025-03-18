import { motion, AnimatePresence } from "framer-motion";
import ModalBadminton from "./ModalBadminton";
import ModalOther from "./ModalOther";
import ModalFutsal from "./ModalFutsal";
import ModalLogin from "./ModalLogin";
import { useState } from "react";

function Card(props) {
    const registered =
        props.user !== null
            ? props.user.css.find((obj) => obj.id === props.id)
            : null;

    const [modalLogin, setModalLogin] = useState({
        show: false,
        route: "",
    });

    const [modalBadminton, setModalBadminton] = useState({
        show: false,
        route: "",
    });
    const [modalOther, setModalOther] = useState({
        show: false,
        route: "",
    });
    const [modalTypeRacer, setModalTypeRacer] = useState({
        show: false,
        route: "",
    });

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: props.x }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: props.delay }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full h-[30dvh] lg:h-screen group relative bg-purple-400/100"
            >
                <img
                    className="mix-blend-normal group-hover:mix-blend-multiply object-cover w-full h-full filter contrast-100 transition-all duration-500"
                    src={`CSS-HMIF/images/daftarCSS/${props.image}`}
                    alt="image"
                />
                <div className="absolute h-fit top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-kanit text-center text-white">
                    <div
                        className={`${
                            props.type == "badminton"
                                ? "group-hover:-translate-y-12"
                                : "group-hover:-translate-y-10"
                        } transition-all duration-500 whitespace-nowrap text-3xl lg:text-4xl`}
                    >
                        {props.title}
                    </div>
                    <div
                        className={`${
                            props.type == "badminton"
                                ? "group-hover:-translate-y-6"
                                : "group-hover:-translate-y-2"
                        } absolute top-1/2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap flex flex-col lg:gap-3 font-sans`}
                    >
                        <div className="mb-1 lg:mb-0 text-sm lg:text-base font-semibold tracking-widest">
                            {props.date}
                        </div>
                        {!registered && (
                            <div className="text-xs lg:text-sm font-semibold lg:mb-2">
                                <button
                                    onClick={() => {}}
                                    className="w-3/4 text-white text-md font-bold bg-none mr-4 hover:bg-white hover:text-indigo-600 border-white border-2 transition-all rounded-lg p-2 mb-1 lg:mb-0"
                                >
                                    {props.title === "Futsal"
                                        ? "KICK OFF!"
                                        : props.title === "Basketball"
                                        ? "JUMP BALL!"
                                        : props.title === "Mobile Legends"
                                        ? "WELCOME TO MOBILE LEGENDS!"
                                        : props.title === "Badminton"
                                        ? "SERVE!"
                                        : ""}
                                </button>
                            </div>
                        )}
                        {registered && (
                            <div className="text-xs lg:text-base font-semibold lg:mb-2">
                                Kamu sudah terdaftar! <br />
                                {
                                    props.user.group.find(
                                        (obj) => obj.type.charAt(0) == props.id
                                    )?.name
                                }{" "}
                                {props.id === 4 &&
                                    (props.user.group
                                        .find((obj) => obj.type.charAt(0) == 4)
                                        .type.charAt(1) == "i"
                                        ? "- Badminton Putri/Campuran"
                                        : "- Badminton Putra")}{" "}
                                <br />
                                {props.id !== 1 &&
                                    "Secret Code: " +
                                        props.user.group.find(
                                            (obj) =>
                                                obj.type.charAt(0) == props.id
                                        )?.secret}
                            </div>
                        )}
                        {props.current.map((cur, index) => {
                            if (props.current.length > 1) {
                                if (index == 0) {
                                    return (
                                        <div className="text-sm lg:text-base font-semibold">
                                            Badminton Putra: {cur}/{props.total}
                                        </div>
                                    );
                                }
                                return (
                                    <div className="text-sm lg:text-base font-semibold">
                                        Badminton Putri/Campuran: {cur}/
                                        {props.total}
                                    </div>
                                );
                            }
                            return (
                                <div className="text-sm lg:text-base font-semibold">
                                    Kuota pendaftaran: {cur}/{props.total}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </>
    );
}
export default Card;
