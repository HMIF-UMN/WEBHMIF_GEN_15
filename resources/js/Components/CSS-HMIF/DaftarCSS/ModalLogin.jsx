import { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import { AiOutlineWarning } from "react-icons/ai";

function ModalLogin(props) {
    const closeModal = () => {
        props.setModal({ ...props.modal, show: false });
        setMessage("You should login first!");
    };

    const { flash } = usePage().props;

    const [message, setMessage] = useState(null);

    useEffect(() => {
        setMessage(flash.message);
        const timer = setTimeout(() => setMessage(null), 10000);
        return () => clearTimeout(timer);
    }, [flash.message]);

    const [values, setValues] = useState({
        lomba: "typeracer",
    });

    return (
        <>
            {/* Alert */}
            <div
                className={`mt-16 transition-all fixed top-2 z-[1005] w-80 h-20 rounded-lg p-4 flex
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
                ${message ? "opacity-100 right-8" : "opacity-0 -right-80"}`}
            >
                <AiOutlineWarning className="w-10 h-10 mr-4" />
                {message}
            </div>

            {/* Content */}
            <div
                onClick={() => closeModal()}
                className={`${
                    !props.modal.show && "hidden"
                } bg-slate-800/50 fixed z-10 w-full h-full top-0 left-0`}
            />
            <div
                className={`${
                    !props.modal.show ? "top-[2000px]" : "top-1/2"
                } fixed z-10 w-11/12 md:w-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-tl from-black to-indigo-600 rounded-lg p-16 flex items-center transition-all duration-300 shadow-lg shadow-slate-900`}
            >
                {/* Are you sure? */}
                <div className="flex-col justify-center w-full gap-6">
                    <h1 className="text-white text-xl md:text-4xl font-bold text-center mb-6">
                        Anda belum melakukan login!
                    </h1>
                    <div className="text-white text-base md:text-xl font-bold text-center mb-6">
                        Anda harus melakukan login terlebih dahulu sebelum
                        melakukan pendaftaran lomba.
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-full md:w-1/2 flex gap-4">
                            <div className="text-xs lg:text-sm font-semibold w-full flex justify-center">
                                <a
                                    href="/sso/login"
                                    className="text-center w-full hover:text-indigo-600 bg-transparent bg-white text-indigo-600 border-none transition-all rounded-lg p-2 font-sans"
                                >
                                    Login
                                </a>
                            </div>
                            <div className="text-xs lg:text-sm font-semibold w-full flex justify-center">
                                <button
                                    onClick={closeModal}
                                    className="w-full hover:text-indigo-600 bg-transparent hover:bg-gray-200 text-white border border-white transition-all rounded-lg p-2 font-sans"
                                >
                                    Batalkan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ModalLogin;
