import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const completeDataForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: props.email,
    NIM: "",
    jurusan: "",
    angkatan: "",
  });

  const [errorMessage, setErrormessage] = useState({
    name: null,
    email: null,
    NIM: null,
    jurusan: null,
    angkatan: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrormessage({
      name: null,
      email: null,
      NIM: null,
      jurusan: null,
      angkatan: null,
    });

    if (formData.name == "" || formData.name == null) {
      setErrormessage((prevData) => ({
        ...prevData,
        name: errorRequired('name')
      }));
    } else if (!(/^[a-zA-Z ]+$/.test(formData.name))) {
      setErrormessage((prevData) => ({
        ...prevData,
        name: errorRegex('name')
      }));
    }

    if (formData.email == "" || formData.email == null) {
      setErrormessage((prevData) => ({
        ...prevData,
        email: errorRequired('email')
      }));
    }
    
    if (formData.NIM == "" || formData.NIM == null) {
      setErrormessage((prevData) => ({
        ...prevData,
        NIM: errorRequired('NIM')
      }));
    } else if (!(/^000000[0-9]{5}$/.test(formData.NIM))) {
      setErrormessage((prevData) => ({
        ...prevData,
        NIM: errorRegex('NIM')
      }));
    }
    
    if (formData.angkatan == "" || formData.angkatan == null) {
      setErrormessage((prevData) => ({
        ...prevData,
        angkatan: errorRequired('angkatan')
      }));
    }

    if (formData.jurusan == "" || formData.jurusan == null) {
      setErrormessage((prevData) => ({
        ...prevData,
        jurusan: errorRequired('jurusan')
      }));
    }

    if (errorMessage.name == null && errorMessage.email == null && errorMessage.NIM == null && errorMessage.angkatan == null && errorMessage.jurusan == null) {
      //Hit axios store, kalo return status 200, redirect ke /css
      axios.post("https://hmif.umn.ac.id/create/mahasiswa", {
        name: formData.name,
        email: formData.email,
        NIM: formData.NIM,
        jurusan: formData.jurusan,
        angkatan: formData.angkatan,
      }).then((response) => {
        window.location.href ='https://hmif.umn.ac.id/cssIF';
      }).catch((e) => {
        const keys = Object.keys(e.response.data.errors);
        keys.forEach((key) => {
          setErrormessage((prevData) => ({
            ...prevData,
            [key]: e.response.data.errors[key]
          }));
        });
      });
    }
  };

  const errorRequired = (type) => {
    return "The "+type+" is required"
  }

  const errorRegex = (type) => {
    if (type == 'name') {
      return "The "+type+" should contains only letters and spaces"
    }
    if (type == 'NIM') {
      return "The "+type+" should be written in 000000xxxxx format"
    }
    if (type == 'email') {
      return "The "+type+" should be a valid email"
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-if-black">
      <Head title="Personal Data Form"/>
      <img src={props.image + "/about-us/SymbolLeft.svg"} className="hidden md:block"/>
      <div className="max-w-md mx-auto p-6 px-7.6 bg-umn-blue-500 rounded shadow-xl text-white">
        <h2 className="text-xl font-semibold mb-4 mx-8">
          Fill Your Personal Profile
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 text-black"
            />
            { errorMessage.name && <small className="text-red block">*{errorMessage.name}</small> }
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={props.email}
              onChange={handleChange}
              disabled // Disable the email input
              className="mt-1 p-2 w-full border rounded-md bg-gray-200 text-black "
            />
            { errorMessage.email && <small className="text-red block">*{errorMessage.email}</small> }
          </div>
          <div className="mb-4">
            <label
              htmlFor="NIM"
              className="block text-sm font-medium text-white"
            >
              NIM (000000xxxxx)
            </label>
            <input
              type="text"
              id="NIM"
              name="NIM"
              value={formData.NIM}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 text-black"
            />
            { errorMessage.NIM && <small className="text-red block">*{errorMessage.NIM}</small> }
          </div>
          <div className="mb-4">
            <label
              htmlFor="jurusan"
              className="block text-sm font-medium text-white"
            >
              Jurusan
            </label>
            <select
              type="text"
              id="jurusan"
              name="jurusan"
              value={formData.jurusan}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 text-black"
            >
              <option selected value="">Choose Jurusan</option>
              <option value="Informatika">Informatika</option>
              <option value="Teknik Komputer">Teknik Komputer</option>
              <option value="Teknik Elektro">Teknik Elektro</option>
              <option value="Teknik Fisika">Teknik Fisika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Perhotelan">Perhotelan</option>
              <option value="Komunikasi Strategis">Komunikasi Strategis</option>
              <option value="Jurnalistik">Jurnalistik</option>
              <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
              <option value="Arsitektur">Arsitektur</option>
              <option value="Film & Animasi">Film & Animasi</option>
            </select>
            { errorMessage.jurusan && <small className="text-red block">*{errorMessage.jurusan}</small> }
          </div>
          <div className="mb-4">
            <label
              htmlFor="angkatan"
              className="block text-sm font-medium text-white"
            >
              Angkatan
            </label>
            <select 
              type="text"
              id="angkatan"
              name="angkatan"
              value={formData.angkatan}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 text-black"
            >
              <option selected value="">Choose Angkatan</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            { errorMessage.angkatan && <small className="text-red block">*{errorMessage.angkatan}</small> }
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <img src={props.image + "/about-us/SymbolRight.svg"} className="hidden md:block"/>
    </div>
  );
};

export default completeDataForm;
