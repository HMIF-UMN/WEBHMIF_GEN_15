import { useState, useEffect } from "react";
import { usePage, router } from "@inertiajs/react";
import { AiOutlineWarning } from "react-icons/ai";

function ModalBadminton(props) {
    const [showCreateGroupPutraOrPutri, setShowCreateGroupPutraOrPutri] =
        useState(false);
    const [showJoinGroupPutraOrPutri, setShowJoinGroupPutraOrPutri] =
        useState(false);
    const [showCreateGroupPutra, setShowCreateGroupPutra] = useState(false);
    const [showJoinGroupPutra, setShowJoinGroupPutra] = useState(false);
    const [showCreateGroupPutri, setShowCreateGroupPutri] = useState(false);
    const [showJoinGroupPutri, setShowJoinGroupPutri] = useState(false);

    const closeModal = () => {
        props.setModal({ ...props.modal, show: false });
        setShowCreateGroupPutra(false);
        setShowCreateGroupPutri(false);
        setShowJoinGroupPutra(false);
        setShowJoinGroupPutri(false);
        setShowCreateGroupPutraOrPutri(false);
        setShowJoinGroupPutraOrPutri(false);
    };

    const { flash } = usePage().props;

    const [message, setMessage] = useState(null);

    useEffect(() => {
        setMessage(flash.message);
        const timer = setTimeout(() => setMessage(null), 10000);
        return () => clearTimeout(timer);
    }, [flash.message]);

    const [values, setValues] = useState({
        create: {
            putra: {
                team_name: null,
                line: null,
                type: "4a",
            },
            putri: {
                team_name: null,
                line: null,
                type: "4i",
            },
        },
        join: {
            putra: {
                team_code: null,
                type: "4a",
            },
            putri: {
                team_code: null,
                type: "4i",
            },
        },
    });

    const handleSubmit = (type, gender) => {
        const createURL = "/cssIF/createTeam";
        const joinURL = "/cssIF/joinTeam";
        if (type == "create") {
            if (gender == "putra") {
                router.post(createURL, values.create.putra);
            } else {
                router.post(createURL, values.create.putri);
            }
        } else {
            if (gender == "putra") {
                router.post(joinURL, values.join.putra);
            } else {
                router.post(joinURL, values.join.putri);
            }
        }
        props.modal.show = false;
        setShowCreateGroupPutra(false);
        setShowCreateGroupPutri(false);
        setShowJoinGroupPutra(false);
        setShowJoinGroupPutri(false);
        setShowCreateGroupPutraOrPutri(false);
        setShowJoinGroupPutraOrPutri(false);
    };

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
                } fixed z-10 w-11/12 md:w-1/2 ${
                    showCreateGroupPutra ||
                    showJoinGroupPutra ||
                    showCreateGroupPutri ||
                    showJoinGroupPutri
                        ? "h-1/2"
                        : "h-1/4"
                } -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-tl from-black to-orange-600 rounded-lg p-4 md:p-16 flex flex-col justify-center items-center transition-all duration-300 shadow-lg shadow-slate-900`}
            >
                <h1 className="text-white text-xl md:text-4xl font-bold text-center mb-6">
                    Register Badminton
                </h1>
                {/* Create or Join */}
                <div
                    className={`${
                        (showCreateGroupPutra ||
                            showJoinGroupPutra ||
                            showCreateGroupPutri ||
                            showJoinGroupPutri ||
                            showCreateGroupPutraOrPutri ||
                            showJoinGroupPutraOrPutri) &&
                        "hidden"
                    } flex justify-center w-full gap-6`}
                >
                    <div className="text-xs lg:text-sm font-semibold">
                        <button
                            onClick={() => setShowCreateGroupPutraOrPutri(true)}
                            className="hover:text-indigo-600 bg-transparent hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            CREATE A NEW TEAM
                        </button>
                    </div>
                    <div className="text-xs lg:text-sm font-semibold">
                        <button
                            onClick={() => setShowJoinGroupPutraOrPutri(true)}
                            className="hover:text-indigo-600 bg-transparent hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            JOIN A TEAM
                        </button>
                    </div>
                </div>

                {/* Create Putra or Putri */}
                <div
                    className={`${
                        (!showCreateGroupPutraOrPutri ||
                            showCreateGroupPutra ||
                            showJoinGroupPutra ||
                            showCreateGroupPutri ||
                            showJoinGroupPutri) &&
                        "hidden"
                    } flex justify-center w-full gap-6`}
                >
                    <div className="text-xs lg:text-sm font-semibold">
                        <button
                            onClick={() => setShowCreateGroupPutra(true)}
                            className="hover:text-indigo-600 bg-transparent hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            GANDA PUTRA
                        </button>
                    </div>
                    <div className="text-xs lg:text-sm font-semibold">
                        <button
                            onClick={() => setShowCreateGroupPutri(true)}
                            className="hover:text-indigo-600 bg-transparent hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            GANDA CAMPURAN
                        </button>
                    </div>
                </div>

                {/* Join Putra or Putri */}
                <div
                    className={`${
                        (!showJoinGroupPutraOrPutri ||
                            showCreateGroupPutra ||
                            showJoinGroupPutra ||
                            showCreateGroupPutri ||
                            showJoinGroupPutri) &&
                        "hidden"
                    } flex justify-center w-full gap-6`}
                >
                    <div className="text-xs lg:text-sm font-semibold">
                        <button
                            onClick={() => setShowJoinGroupPutra(true)}
                            className="hover:text-indigo-600 bg-transparent hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            GANDA PUTRA
                        </button>
                    </div>
                    <div className="text-xs lg:text-sm font-semibold">
                        <button
                            onClick={() => setShowJoinGroupPutri(true)}
                            className="hover:text-indigo-600 bg-transparent hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            GANDA CAMPURAN
                        </button>
                    </div>
                </div>

                {/* Form Submit */}
                <div
                    className={`${
                        !(
                            showCreateGroupPutra ||
                            showJoinGroupPutra ||
                            showCreateGroupPutri ||
                            showJoinGroupPutri
                        ) && "hidden"
                    } flex justify-center w-full gap-6`}
                >
                    {/* Create a new team - PUTRA*/}
                    <div
                        className={`${
                            !showCreateGroupPutra && "hidden"
                        } flex flex-col items-center w-full gap-6`}
                    >
                        <div className="text-white text-base md:text-xl text-center font-bold">
                            GANDA PUTRA - Create A New Team
                        </div>
                        <input
                            className="w-full md:w-2/5 bg-white border border-black rounded-full p-2 text-black"
                            placeholder="Enter your team name"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    create: {
                                        ...values.create,
                                        putra: {
                                            ...values.create.putra,
                                            team_name: e.target.value,
                                        },
                                    },
                                })
                            }
                        />
                        <input
                            className="w-full md:w-2/5 bg-white border border-black rounded-full p-2 text-black"
                            placeholder="Enter your line contact"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    create: {
                                        ...values.create,
                                        putra: {
                                            ...values.create.putra,
                                            line: e.target.value,
                                        },
                                    },
                                })
                            }
                        />
                        <button
                            onClick={() => handleSubmit("create", "putra")}
                            className="hover:text-indigo-600 bg-transparent w-1/2 md:w-1/4 hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            SUBMIT
                        </button>
                    </div>

                    {/* Join a team - PUTRA*/}
                    <div
                        className={`${
                            !showJoinGroupPutra && "hidden"
                        } flex flex-col items-center w-full gap-6`}
                    >
                        <div className="text-white text-base md:text-xl text-center font-bold">
                            GANDA PUTRA - Join A Team
                        </div>
                        <input
                            className="w-full md:w-2/5 bg-white border border-black rounded-full p-2 text-black"
                            placeholder="Enter your team secret code"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    join: {
                                        ...values.join,
                                        putra: {
                                            ...values.join.putra,
                                            team_code: e.target.value,
                                        },
                                    },
                                })
                            }
                        />
                        <button
                            onClick={() => handleSubmit("join", "putra")}
                            className="hover:text-[#ff6741] bg-transparent w-1/2 md:w-1/4 hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            SUBMIT
                        </button>
                    </div>

                    {/* Create a new team - PUTRI*/}
                    <div
                        className={`${
                            !showCreateGroupPutri && "hidden"
                        } flex flex-col items-center w-full gap-6`}
                    >
                        <div className="text-white text-base md:text-xl text-center font-bold">
                            GANDA CAMPURAN - Create A New Team
                        </div>
                        <input
                            className="w-full md:w-2/5 bg-white border border-black rounded-full p-2 text-black"
                            placeholder="Enter your team name"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    create: {
                                        ...values.create,
                                        putri: {
                                            ...values.create.putri,
                                            team_name: e.target.value,
                                        },
                                    },
                                })
                            }
                        />
                        <input
                            className="w-full md:w-2/5 bg-white border border-black rounded-full p-2 text-black"
                            placeholder="Enter your line contact"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    create: {
                                        ...values.create,
                                        putri: {
                                            ...values.create.putri,
                                            line: e.target.value,
                                        },
                                    },
                                })
                            }
                        />
                        <button
                            onClick={() => handleSubmit("create", "putri")}
                            className="hover:text-[#ff6741] bg-transparent w-1/2 md:w-1/4 hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            SUBMIT
                        </button>
                    </div>

                    {/* Join a team - PUTRI*/}
                    <div
                        className={`${
                            !showJoinGroupPutri && "hidden"
                        } flex flex-col items-center w-full gap-6`}
                    >
                        <div className="text-white text-base md:text-xl text-center font-bold">
                            GANDA CAMPURAN - Join A Team
                        </div>
                        <input
                            className="w-full md:w-2/5 bg-white border border-black rounded-full p-2 text-black"
                            placeholder="Enter your team secret code"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    join: {
                                        ...values.join,
                                        putri: {
                                            ...values.join.putri,
                                            team_code: e.target.value,
                                        },
                                    },
                                })
                            }
                        />
                        <button
                            onClick={() => handleSubmit("join", "putri")}
                            className="hover:text-[#ff6741] bg-transparent w-1/2 md:w-1/4 hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ModalBadminton;
