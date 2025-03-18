import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./FormColors.css";
import { Head, router, useForm, usePage } from "@inertiajs/react";

function ComponentFormLomba({ user, rj, category }) {
    const [showModal, setShowModal] = useState(false);

    const SubmissionModal = ({ onClose }) => {
        return (
            <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center h-[1200px]">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold">
                        Form Submitted Successfully!
                    </h2>
                    <p className="mb-10">
                        Please check your email for the reference code.
                    </p>
                    <a
                        href="/cssIF"
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Okay
                    </a>
                </div>
            </div>
        );
    };

    const [isInformatics, setIsInformatics] = useState(false);
    const [formData, setFormData] = useState({
        referenceCode: "",
        teamName: "",
        nama: "",
        email: user,
        idLine: "",
        noTelp: "",
        nim: "",
        angkatan: "",
        kelas: "",
        lomba: category,
        userNameML: "",
        medicalHistory: "",
    });

    const [message, setMessage] = useState("");
    const { post, processing, reset } = useForm(formData);
    const { flash } = usePage().props;

    const [disabledClasses, setDisabledClasses] = useState([]);

    useEffect(() => {
        axios
            .get("/cssIF/disabled-classes")
            .then((response) => {
                const categoriesData = response.data;
                // Update state to reflect only the classes disabled for the current category
                setDisabledClasses(categoriesData[category] || []);
                console.log(
                    "Disabled classes for category:",
                    category,
                    categoriesData[category]
                );
            })
            .catch((error) => {
                console.error("Error fetching disabled classes:", error);
                setDisabledClasses([]); // Clear previous state in case of error
            });
    }, [category]); // Depend on category to re-fetch when it changes

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // Attempt to post the main registration form data
        router.post("/cssIF/pendaftaran", formData, {
            onSuccess: () => {
                if (formData.angkatan === "2024") {
                    router.post(
                        "/cssIF/registerKelasCss",
                        {
                            ...formData,
                            kelas: formData.kelas,
                            category: formData.lomba,
                        },
                        {
                            onFinish: () => {
                                reset(); // Reset form fields
                                setMessage("Form submitted successfully!"); // Display success message
                                setTimeout(() => setMessage(""), 5000); // Clear message after 5 seconds
                            },
                        }
                    );
                } else {
                    console.log("Not 2024");
                    reset();
                    setMessage("Form submitted successfully!");
                    setShowModal(true);
                    setTimeout(() => setMessage(""), 5000);
                }
            },
            onError: (error) => {
                console.error("Submission error:", error);
                setMessage("Failed to submit the form. Please try again.");
                setTimeout(() => setMessage(""), 5000);
            },
        });
    };

    return (
        <>
            <Head title="Registrasi/Join Team" />
            <div className="font-kanit">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <h1 className="text-[32px] gradient-text font-bold">
                        {rj == "r" ? "Bentuk Team" : "Join Team"}{" "}
                        {category == "BadmintonC"
                            ? "Badminton Campur"
                            : category == "BadmintonP"
                            ? "Badminton Putra"
                            : category == "MobileLegends"
                            ? "Mobile Legends"
                            : category}
                    </h1>
                    {rj == "j" ? (
                        <>
                            <label
                                htmlFor="referenceCode"
                                className="text-[#77257C] text-[22px]"
                            >
                                Refrence Code
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                className=" text-black outline-none rounded-xl border-white"
                                type="text"
                                name="referenceCode"
                                placeholder="Refrence Code"
                                id="referenceCode"
                                value={formData.referenceCode}
                                onChange={handleChange}
                            />
                        </>
                    ) : (
                        <>
                            <label
                                htmlFor="teamName"
                                className="text-[#77257C] text-[22px]"
                            >
                                Team Name<span className="text-red-600">*</span>
                            </label>
                            <input
                                className=" text-black outline-none rounded-xl border-white"
                                type="text"
                                name="teamName"
                                placeholder="Team Name"
                                id="teamName"
                                value={formData.teamName}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}

                    {category == "MobileLegends" && (
                        <>
                            <label
                                htmlFor="userNameML"
                                className="text-[#77257C] text-[22px]"
                            >
                                Username Mobile Legends
                                <span className="text-red-600">*</span>
                            </label>
                            <input
                                className=" text-black outline-none rounded-xl border-white"
                                type="text"
                                name="userNameML"
                                placeholder="Username Mobile Legends"
                                id="userNameML"
                                value={formData.userNameML}
                                onChange={handleChange}
                            />
                        </>
                    )}

                    <label
                        htmlFor="nama"
                        className="text-[#77257C] text-[22px]"
                    >
                        Nama<span className="text-red-600">*</span>
                    </label>
                    <input
                        className=" text-black outline-none rounded-xl border-white"
                        type="text"
                        name="nama"
                        placeholder="Nama"
                        id="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="nim" className="text-[#77257C] text-[22px]">
                        NIM<span className="text-red-600">*</span>
                    </label>
                    <input
                        className=" text-black outline-none rounded-xl border-white"
                        type="text"
                        name="nim"
                        placeholder="NIM"
                        id="nim"
                        value={formData.nim}
                        onChange={handleChange}
                        required
                    />

                    <label
                        htmlFor="email"
                        className="text-[#77257C] text-[22px]"
                    >
                        Email<span className="text-red-600">*</span>
                    </label>
                    <input
                        className=" text-black outline-none rounded-xl border-white"
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        disabled={true}
                    />

                    <label
                        htmlFor="noTelp"
                        className="text-[#77257C] text-[22px]"
                    >
                        No HP<span className="text-red-600">*</span>
                    </label>
                    <input
                        className=" text-black outline-none rounded-xl border-white"
                        type="text"
                        name="noTelp"
                        id="noTelp"
                        onChange={handleChange}
                        value={formData.noTelp}
                        placeholder="Nomor HP"
                        required
                    />

                    <label
                        htmlFor="idLine"
                        className="text-[#77257C] text-[22px]"
                    >
                        ID Line<span className="text-red-600">*</span>
                    </label>
                    <input
                        className=" text-black outline-none rounded-xl border-white"
                        type="text"
                        name="idLine"
                        id="idLine"
                        onChange={handleChange}
                        value={formData.idLine}
                        placeholder="ID Line"
                        required
                    />

                    <div className="px-2 text-[#77257C] text-[22px]">
                        <label>
                            Angkatan<span className="text-red-600">*</span>
                        </label>
                        {[2021, 2022, 2023, 2024].map((year) => (
                            <div key={year}>
                                <input
                                    type="radio"
                                    id={`angkatan-${year}`}
                                    name="angkatan"
                                    value={year.toString()}
                                    checked={
                                        formData.angkatan === year.toString()
                                    }
                                    onChange={handleChange}
                                    className="custom-radio"
                                    required
                                />
                                <label htmlFor={`angkatan-${year}`}>
                                    {year}
                                </label>
                            </div>
                        ))}
                    </div>

                    {formData.angkatan == "2024" && (
                        <>
                            <label
                                htmlFor="kelas"
                                className="text-[#77257C] text-[22px]"
                            >
                                Kelas<span className="text-red-600">*</span>
                            </label>
                            <select
                                id="kelas"
                                name="kelas"
                                value={
                                    formData.angkatan == "2024"
                                        ? formData.kelas
                                        : ""
                                }
                                onChange={handleChange}
                                className="text-black outline-none rounded-xl"
                            >
                                <option value="">Pilih Kelas</option>
                                {"ABCDEFGHIJKLMN".split("").map((letter) => (
                                    <option
                                        key={letter}
                                        value={letter}
                                        disabled={disabledClasses.includes(
                                            letter
                                        )}
                                    >
                                        Kelas {letter}
                                    </option>
                                ))}
                            </select>
                        </>
                    )}

                    <label
                        htmlFor="medicalHistory"
                        className="text-[#77257C] text-[22px]"
                    >
                        Medical History<span className="text-red-600">*</span>
                    </label>
                    <textarea
                        className=" text-black outline-none rounded-xl border-white h-32 resize-none"
                        type="text"
                        name="medicalHistory"
                        placeholder="Medical History"
                        id="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleChange}
                        required
                    />

                    <div className="px-2 flex flex-col text-[#77257C] text-[22px]">
                        <label>
                            Jurusan Informatika ?
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            id="default-checkbox"
                            type="checkbox"
                            value={isInformatics}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            onClick={() => {
                                setIsInformatics(!isInformatics);
                            }}
                        ></input>
                    </div>

                    <button
                        type="submit"
                        className={`px-4 py-2 rounded-2xl mt-4 bg-[#77257C] ${
                            isInformatics && "hover:bg-[#cb3ed3]"
                        } ease-in-out duration-300 text-white`}
                        disabled={!isInformatics}
                    >
                        Submit
                    </button>
                    {message && <div className="alert">{message}</div>}
                </form>
            </div>
            {showModal && (
                <SubmissionModal onClose={() => setShowModal(false)} />
            )}
        </>
    );
}

export default ComponentFormLomba;
