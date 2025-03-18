import { useState, useEffect } from "react";
import { usePage, router } from "@inertiajs/react";
import { AiOutlineWarning } from "react-icons/ai";

function ModalOther(props) {
    const [showCreateGroup, setShowCreateGroup] = useState(false);
    const [showJoinGroup, setShowJoinGroup] = useState(false);

    const closeModal = () => {
        props.setModal({ ...props.modal, show: false });
        setShowCreateGroup(false);
        setShowJoinGroup(false);
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
            team_name: null,
            line: null,
            type: props.title == "Basketball" ? "2" : "3",
        },
        join: {
            team_code: null,
        },
    });

    const handleSubmit = (type) => {
        if (type == "create") {
            router.post("/cssIF/createTeam", values.create);
        } else {
            router.post("/cssIF/joinTeam", values.join);
        }
        props.modal.show = false;
        setShowCreateGroup(false);
        setShowJoinGroup(false);
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
                    showCreateGroup || showJoinGroup ? "h-1/2" : "h-1/4"
                } -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-tl from-black to-orange-600 rounded-lg p-4 md:p-16 flex items-center transition-all duration-300 shadow-lg shadow-slate-900 flex-col justify-center`}
            >
                <div>
                    <h1 className="text-white text-xl md:text-4xl font-bold text-center mb-6">
                        Register {props.title}
                    </h1>
                </div>
                {/* Create or Join */}
                <div
                    className={`${
                        (showCreateGroup || showJoinGroup) && "hidden"
                    } flex justify-center w-full md:w-1/2 gap-6`}
                >
                    <div className="text-xs lg:text-sm font-semibold">
                        <button
                            onClick={() => setShowCreateGroup(true)}
                            className="hover:text-indigo-600 bg-transparent hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            CREATE A NEW TEAM
                        </button>
                    </div>
                    <div className="text-xs lg:text-sm font-semibold">
                        <button
                            onClick={() => setShowJoinGroup(true)}
                            className="hover:text-indigo-600 bg-transparent hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            JOIN A TEAM
                        </button>
                    </div>
                </div>

                {/* Form Submit */}
                <div
                    className={`${
                        !(showCreateGroup || showJoinGroup) && "hidden"
                    } flex justify-center w-full gap-6`}
                >
                    {/* Create a new team */}
                    <div
                        className={`${
                            !showCreateGroup && "hidden"
                        } flex flex-col items-center w-full gap-6`}
                    >
                        <div className="text-white text-base md:text-xl font-bold">
                            Create A New Team
                        </div>
                        <input
                            className="w-full md:w-2/5 bg-white border border-black rounded-full p-2 text-black"
                            placeholder="Enter your team name"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    create: {
                                        ...values.create,
                                        team_name: e.target.value,
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
                                        line: e.target.value,
                                    },
                                })
                            }
                        />
                        <button
                            onClick={() => handleSubmit("create")}
                            className="hover:text-indigo-600 bg-transparent w-1/2 md:w-1/4 hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            SUBMIT
                        </button>
                    </div>

                    {/* Join a team */}
                    <div
                        className={`${
                            !showJoinGroup && "hidden"
                        } flex flex-col items-center w-full gap-6`}
                    >
                        <div className="text-white text-base md:text-xl font-bold">
                            Join A Team
                        </div>
                        <input
                            className="w-full md:w-2/5 bg-white border border-black rounded-full p-2 text-black"
                            placeholder="Enter your team code"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    join: {
                                        ...values.join,
                                        team_code: e.target.value,
                                    },
                                })
                            }
                        />
                        <button
                            onClick={() => handleSubmit("join")}
                            className="hover:text-indigo-600 bg-transparent w-1/2 md:w-1/4 hover:bg-white text-white border border-white transition-all rounded-lg p-2 font-sans"
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ModalOther;
