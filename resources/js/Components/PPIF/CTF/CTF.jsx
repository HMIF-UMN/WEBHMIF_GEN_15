import React, { useState, useEffect } from "react";
import { router, usePage } from '@inertiajs/react';
import {AiOutlineWarning} from 'react-icons/Ai';

function CTF(props) {

    const [input, setInput] = useState()
    const { flash } = usePage().props;
    // const [flashState, setFlashState] = useState(null)

    const handleSubmit = () => {
        router.post('/padiIF/code/submit', input)
    }

    useEffect(() => {
        console.log("Secret number: 23");
    }, []);

    const [message, setMessage] = useState(null);

    useEffect(() => {
        setMessage(flash.message);
        const timer = setTimeout(() => setMessage(null), 10000);
        return () => clearTimeout(timer);
    }, [flash.message])

    return (
        <>
            {/* Alert */}
            <div className={`transition-all fixed top-2 z-[1005] w-80 h-20 rounded-lg p-4 flex
            items-center text-white ${message == "Wrong code!" || message == "Fill in the secret code!" ? "bg-red-500/75" : "bg-green-600"}
            ${message ? "opacity-100 right-8" : "opacity-0 -right-80"}`}>
                <AiOutlineWarning className="w-10 h-10 mr-4" />
                { message }
            </div>

            {/* Content */}
            <div onClick={() => props.handleCtf()} className={`fixed top-0 z-[1001] bg-slate-800/50 w-screen h-screen ${props.ctfIsOpen ? "" : "hidden"}`}></div>
            <div className={`fixed z-[1002] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4/5 lg:w-1/2 h-1/2 ${props.ctfIsOpen ? 'top-0 opacity-100' : 'top-[1500px] opacity-0'} transition-all flex items-center justify-center`}>
                <div className="bg-slate-200 rounded-xl w-full h-full">
                    <div className="flex w-full h-full p-14 items-center">
                        <div className="w-full">
                            <div className="text-center py-2">
                                <label className="font-serif text-slate-700">Enter Secret Code:</label><br />
                                <input onChange={(e) => setInput({code: e.target.value})} className="bg-slate-200 hover:bg-white rounded-full w-3/5 focus:w-3/4 lg:focus:w-4/5 focus:bg-white text-center transition-all" id="code" type="text" name="code" minLength="6" maxLength="6" />
                            </div>
                            <div className="text-center py-2">
                                <button onClick={handleSubmit} id="submit_code" type="button" className="bg-green-500 w-1/2 h-8 lg:h-12 text-slate-800 font-semibold rounded-full hover:bg-green-300 hover:text-lg transition-all">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CTF;
