import JammmingBackground from "@/Components/Jamming/images/Background.png";
import Supergraphics from "@/Components/Jamming/images/Supergraphics.png";
import JammingLogo from "@/Components/Jamming/images/jammingLogo.png";
import Footer from "@/Components/Jamming/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function FormPembayaran() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [donationAmount, setDonationAmount] = useState('');

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    const handlePresetClick = (amount) => {
        setDonationAmount(amount);
        setValue('jumlahDonasi', amount);
    };

    return (
        <>
            {/* Background Layer */}
            <div className="bg-[#010632] z-[-999] absolute w-full h-[100%]">
                <div className="absolute z-[-1] bg-[#010632] w-full">
                    <LazyLoadImage src={JammmingBackground} className="md:w-[100%]" alt="Background" />
                    <LazyLoadImage src={Supergraphics} className="md:w-[100%]" alt="Supergraphic" />
                    <div className="hidden md:block">
                        <Footer />
                    </div>
                </div>

                {/* Content Layer */}
                <div className="relative z-[999]">
                    <div className="flex justify-center md:pt-[8rem] pt-[4rem]">
                        <LazyLoadImage src={JammingLogo} className="md:w-[30rem] w-[15rem]" alt="Jamming Logo" />
                    </div>
                    <div className="mx-auto mt-6 md:mt-10 w-[20rem] sm:w-[30rem] md:w-[45rem] h-auto p-8 md:p-12 bg-white rounded-xl border border-b-800 shadow-[18px_20px_0px_rgba(0,0,0,0.8)]">
                        {/* Form */}
                        <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <label className="block text-lg  font-bold mb-2" htmlFor="jumlahDonasi">Jumlah Donasi</label>
                                <div className="flex flex-col gap-2">
                                    
                                    <div className="flex justify-between gap-4">
                                        <span className="flex items-center text-lg font-bold">Rp</span>
                                        <input 
                                            className={`w-full px-4 py-3 border-b-2 text-base md:text-lg ${errors.jumlahDonasi ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`} 
                                            type="text" 
                                            placeholder="Masukkan Jumlah Donasi"
                                            value={donationAmount}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                {errors.jumlahDonasi && <p className="text-red-500 text-sm italic mt-1">{errors.jumlahDonasi.message}</p>}
                            </div>
                            <div className="flex flex-wrap justify-center gap-5">
                                {[5000, 10000, 25000, 100000].map((amount, index) => {
                                    // Define the colors in an array to apply them dynamically
                                    const colors = ['#BF1E2D', '#149ED8', '#108EE9', '#FAAE2B'];
                                    const color = colors[index]; // Select the color based on the index

                                    return (
                                        <button 
                                            key={amount} 
                                            type="button" 
                                            style={{ backgroundColor: color }}
                                            className="md:w-[8rem] md:h-[3rem] w-full text-white  rounded-md shadow-[5px_5px_0px_rgba(0,0,0,0.8)]"
                                            onClick={() => handlePresetClick(amount)}
                                        >
                                            {amount / 1000}k
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="md:w-[30%] w-full bg-[#E46625] text-white py-3 text-lg rounded-md hover:bg-[#f98d57]">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="md:hidden pt-[2rem] bg-[#010632]">
                    <Footer />
                </div>
            </div>
        </>
    );
}
