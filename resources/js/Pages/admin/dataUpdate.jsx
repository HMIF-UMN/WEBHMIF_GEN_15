import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function dataUpdate(props){
    const [nim, setNim] = useState(props.mahasiswa.NIM);
    const [name, setName] = useState(props.mahasiswa.name);
    const [email, setEmail] = useState(props.mahasiswa.email);
    const [jurusan, setJurusan] = useState(props.mahasiswa.jurusan);
    const [angkatan, setAngkatan] = useState(props.mahasiswa.angkatan);
    const id = props.mahasiswa.id;

    const handleNimChange = (event) => {
        setNim(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleJurusanChange = (event) => {
        setJurusan(event.target.value);
    }

    const handleAngkatanChange = (event) => {
        setAngkatan(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.put(route(`mahasiswa.update`, id), {
            nim: nim,
            name: name,
            email: email,
            jurusan: jurusan,
            angkatan: angkatan
        });
    }

    return (
        <div className="bg-gray-200 h-full">
            <div className="w-full max-w-xs mx-auto py-5">
                <form action="/admin/adminPage" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NIM">
                            NIM
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="NIM" type="text" value={nim} onChange={handleNimChange}/>  
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nama
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={name} onChange={handleNameChange}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" value={email} onChange={handleEmailChange}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jurusan">
                            Jurusan
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="jurusan" type="text" value={jurusan} onChange={handleJurusanChange}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="angkatan">
                            Angkatan
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="angkatan" type="text" value={angkatan} onChange={handleAngkatanChange}/>
                    </div>

                    {/* <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lomba">
                            Lomba
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lomba" type="text" value={props.mahasiswa.name}/>
                    </div> */}

                    <div className="flex items-center justify-between">
                        <button type="submit" className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}