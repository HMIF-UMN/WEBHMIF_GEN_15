import { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";

export default function testFormCSS({ response, email }) {
    const [formData, setFormData] = useState({
        referenceCode: "2024A01",
        nama: "test nama lengkap",
        email: "test.email@student.umn.ac.id",
        idLine: "idhna7wda0",
        noTelp: "081398471332",
        nim: "00000070382",
        angkatan: "2024",
        kelas: "A",
        lomba: "Futsal",
        userNameMl: "dawdauiwg",
        medicalHistory: "tidak ada !",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        console.log(formData);
        e.preventDefault();
        Inertia.post("/testformcss", formData);
    };

    const handleClick = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            perwakilan: !prevFormData.perwakilan,
        }));
    };

    // FETCH DATA
    useEffect(() => {
        console.log(response);
        console.log(email);
    }, [response]);

    return (
        <>
            <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
                <label htmlFor="nama">Nama</label>
                <input
                    className=" text-black"
                    type="text"
                    name="nama"
                    placeholder="nama"
                    id="nama"
                    value={formData.nama}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    className=" text-black"
                    type="email"
                    name="email"
                    placeholder="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="idline">Id Line</label>
                <input
                    className=" text-black"
                    type="text"
                    name="idLine"
                    placeholder="idline"
                    id="idline"
                    value={formData.idLine}
                    onChange={handleChange}
                />
                <label htmlFor="notelp">Nomor Telepon</label>
                <input
                    className=" text-black"
                    type="text"
                    name="noTelp"
                    placeholder="notelp"
                    id="notelp"
                    value={formData.noTelp}
                    onChange={handleChange}
                />
                <label htmlFor="nim">NIM</label>
                <input
                    className=" text-black"
                    type="text"
                    name="nim"
                    placeholder="nim"
                    id="nim"
                    value={formData.nim}
                    onChange={handleChange}
                />
                <div>
                    <label>Angkatan</label>
                    <div>
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
                                />
                                <label htmlFor={`angkatan-${year}`}>
                                    {year}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <label htmlFor="perwakilan">Perwakilan</label>

                <div>
                    <label htmlFor="kelas">Kelas</label>
                    <select
                        id="kelas"
                        name="kelas"
                        value={formData.kelas}
                        onChange={handleChange}
                        className="text-black"
                    >
                        <option value="">Pilih Kelas</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                        <option value="G">G</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="lomba">Jenis Lomba</label>
                    <select
                        id="lomba"
                        name="lomba"
                        value={formData.lomba}
                        onChange={handleChange}
                        className="text-black"
                    >
                        <option value="0">Pilih Jenis Lomba</option>
                        <option value="Futsal">Futsal</option>
                        <option value="Basket">Basket</option>
                        <option value="Mobile Legends">Mobile Legend</option>
                        <option value="BadmintonP">Badminton Ganda Putra</option>
                        <option value="BadmintonC">Badminton Ganda Campuran</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className=" px-4 py-2 border-2 border-white mt-10 rounded-lg"
                >
                    Submit
                </button>
            </form>
        </>
    );
}
