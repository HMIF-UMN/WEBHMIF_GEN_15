import JammmingBackground from "@/Components/Jamming/images/Background.png";
import Supergraphics from "@/Components/Jamming/images/Supergraphics.png";
import JammingLogo from "@/Components/Jamming/images/jammingLogo.png";
import Footer from "@/Components/Jamming/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import firebase data
import {
    database,
    ref,
    set,
    push,
    get,
    query,
    orderByChild,
    equalTo,
    update,
} from "@/Pages/Jamming/configuration";

export default function FormJamming() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    //keperluan login
    const [isAuth, setIsAuth] = useState(false);
    const [loginData, setLoginData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    useEffect(() => {
        const authStatus = localStorage.getItem("isAuth");
        setIsAuth(authStatus === "true");
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const onSubmit = async ({ namaLagu, penyanyi, donasi }) => {
        setLoading(true);
        try {
            const listRequestLaguRef = ref(database, "listRequestLagu");
            const namaLaguQuery = query(
                listRequestLaguRef,
                orderByChild("namaLagu"),
                equalTo(namaLagu)
            );

            const snapshot = await get(namaLaguQuery);
            if (snapshot.exists()) {
                let songFound = false;
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.val().penyanyi === penyanyi) {
                        songFound = true;
                        const songKey = childSnapshot.key;
                        const existingDonasi = childSnapshot.val().jumlahDonasi;
                        const newJumlahDonasi = existingDonasi + donasi;
                        const updates = {};
                        updates[
                            "/listRequestLagu/" + songKey + "/jumlahDonasi"
                        ] = newJumlahDonasi;

                        update(ref(database), updates)
                            .then(() => {
                                toast.success("Donasi berhasil diupdate!");
                                reset(); // Clear inputs after successful update
                            })
                            .catch((error) => {
                                toast.error(
                                    "Gagal mengupdate donasi: " + error.message
                                );
                            });
                    }
                });
                if (!songFound) {
                    const newSongRef = push(ref(database, "listRequestLagu"));
                    await set(newSongRef, {
                        namaLagu,
                        penyanyi,
                        jumlahDonasi: donasi,
                    });
                    toast.success("Donasi berhasil ditambahkan!");
                    reset(); // Clear inputs after successful addition
                }
            } else {
                const newSongRef = push(ref(database, "listRequestLagu"));
                await set(newSongRef, {
                    namaLagu,
                    penyanyi,
                    jumlahDonasi: donasi,
                    played: false,
                });
                toast.success("Donasi berhasil ditambahkan!");
                reset(); // Clear inputs after successful addition
            }
        } catch (error) {
            toast.error("Gagal menambahkan donasi: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    //handle untuk submit form login
    const loginSubmit = (e) => {
        e.preventDefault();

        if (
            loginData.username === "admin" &&
            loginData.password === "kevinganteng000"
        ) {
            setIsAuth(true);
            localStorage.setItem("isAuth", "true");
        } else {
            setError("Username atau password salah.");
        }
    };
    if (isAuth) {
        return (
            <>
                {/* Background Layer */}
                <div className="bg-[#010632] z-[-999] absolute w-full h-[100%]">
                    <div className="absolute z-[-1] bg-[#010632] w-full">
                        <LazyLoadImage
                            src={JammmingBackground}
                            className="md:w-[100%]"
                            alt="Background"
                        />
                        <LazyLoadImage
                            src={Supergraphics}
                            className="md:w-[100%]"
                            alt="Supergraphic"
                        />
                        <div className="hidden lg:block ">
                            <Footer />
                        </div>
                    </div>

                    {/* Form Layer */}
                    <div className="relative z-[999]">
                        <div className="flex justify-center md:pt-[8rem] pt-[4rem]">
                            <LazyLoadImage
                                src={JammingLogo}
                                className="md:w-[30rem] w-[15rem]"
                                alt="Jamming Logo"
                            />
                        </div>
                        <div className="mx-auto mt-6 md:mt-10 w-[20rem] sm:w-[30rem] md:w-[45rem] h-auto p-8 md:p-12 bg-white rounded-xl border border-b-800 shadow-[18px_20px_0px_rgba(0,0,0,0.8)]">
                            {/* Form */}
                            <form
                                className="flex flex-col gap-y-6"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="md:mb-6">
                                    <label
                                        className="block text-lg font-bold md:mb-2"
                                        htmlFor="namaLagu"
                                    >
                                        Nama Lagu
                                    </label>
                                    <input
                                        className={`w-full px-4 py-3 border-b-2 text-lg ${
                                            errors.namaLagu
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } focus:outline-none focus:border-blue-500`}
                                        id="namaLagu"
                                        type="text"
                                        placeholder="冰淇淋"
                                        {...register("namaLagu", {
                                            required:
                                                "Nama lagu ga boleh kosong",
                                        })}
                                    />
                                    {errors.namaLagu && (
                                        <p className="text-red-500 text-sm italic mt-1">
                                            {errors.namaLagu.message}
                                        </p>
                                    )}
                                </div>
                                <div className="md:mb-6">
                                    <label
                                        className="block text-lg font-bold md:mb-2"
                                        htmlFor="penyanyi"
                                    >
                                        Penyanyi
                                    </label>
                                    <input
                                        className={`w-full px-4 py-3 border-b-2 text-lg ${
                                            errors.penyanyi
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } focus:outline-none focus:border-blue-500`}
                                        id="penyanyi"
                                        type="text"
                                        placeholder="Neil Armstrong the Great"
                                        {...register("penyanyi", {
                                            required:
                                                "Nama penyanyinya siapa bang?",
                                        })}
                                    />
                                    {errors.penyanyi && (
                                        <p className="text-red-500 text-sm italic mt-1">
                                            {errors.penyanyi.message}
                                        </p>
                                    )}
                                </div>
                                <div className="md:mb-6">
                                    <label
                                        className="block text-lg font-bold md:mb-2"
                                        htmlFor="donasi"
                                    >
                                        Jumlah Donasi
                                    </label>
                                    <input
                                        className={`w-full px-4 py-3 border-b-2 text-lg ${
                                            errors.donasi
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } focus:outline-none focus:border-blue-500`}
                                        id="donasi"
                                        type="number"
                                        placeholder="20000"
                                        {...register("donasi", {
                                            required: "Masukkan Jumlah Donasi",
                                            min: {
                                                value: 1,
                                                message:
                                                    "Jumlah Donasi harus lebih dari 0",
                                            },
                                            valueAsNumber: true,
                                            step: 1,
                                        })}
                                    />
                                    {errors.donasi && (
                                        <p className="text-red-500 text-sm italic mt-1">
                                            {errors.donasi.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="md:w-[30%] w-full bg-[#E46625] text-white py-3 text-lg rounded-md hover:bg-[#f98d57] disabled:opacity-50"
                                    >
                                        {loading ? "Memproses..." : "Submit"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="lg:hidden py-[2rem] bg-[#010632]">
                        <Footer />
                    </div>
                </div>
            </>
        );
        //tampilan kalo belom auth
    } else {
        return (
            <div className="max-w-sm mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={loginSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700"
                        >
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={loginData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700"
                        >
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm mb-4">{error}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <ToastContainer position="top-center" autoClose={5000} />
            </div>
        );
    }
}
