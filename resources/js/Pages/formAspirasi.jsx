import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Inertia } from "@inertiajs/inertia";

export default function FormAspirasi({ email }) {
    const [formData, setFormData] = useState({
        "nama-lengkap": "",
        nim: "",
        email: email,
        keluhan: "",
        tanggal: "",
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [validateData, setValidateData] = useState({
        validateNama: false,
        validateNim: false,
        validateEmail: false,
        validateKeluhan: false,
    });
    const [popUp, setPopUp] = useState(false);
    const [confirmationPopup, setConfirmationPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlePopUp = () => {
        setPopUp(false);
        setIsValidating(false);
        setFormData({
            "nama-lengkap": "",
            nim: "",
            email: "",
            keluhan: "",
            tanggal: "",
        });
    };

    const validateForm = () => {
        const { "nama-lengkap": namaLengkap, nim, email, keluhan } = formData;
        const nimRegex = /^0{6}\d{5}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isNamaValid = namaLengkap !== "";
        const isNimValid =
            !isNaN(nim) && nim.length === 11 && nimRegex.test(nim);
        const isEmailValid = emailRegex.test(email);
        const isKeluhanValid = keluhan !== "";

        setValidateData({
            validateNama: isNamaValid,
            validateNim: isNimValid,
            validateEmail: isEmailValid,
            validateKeluhan: isKeluhanValid,
        });

        setTimeout(() => {
            setIsValidating(true);
        }, 100);

        return isNamaValid && isNimValid && isEmailValid && isKeluhanValid;
    };

    const handleConfirmSubmit = () => {
        setConfirmationPopup(false);
        setIsLoading(true);

        const formDataWithTimestamp = {
            ...formData,
            timestamp: new Date().toISOString(),
        };

        Inertia.post("/submit-form", formDataWithTimestamp, {
            onFinish: () => setIsLoading(false),
            onSuccess: handleSubmitSuccess,
            onError: () => {
                alert("An error occurred during form submission.");
                setIsLoading(false);
            },
        });
    };

    const handleCancelSubmit = () => {
        setConfirmationPopup(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setConfirmationPopup(true);
    };

    const handleSubmitSuccess = () => {
        setShowSuccess(true);
        setTimeout(() => {
            handlePopUp();
            setShowSuccess(false);
            window.location.reload();
        }, 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        const currentDate = new Date();

        const addLeadingZero = (number) =>
            number < 10 ? `0${number}` : number;

        const hours = addLeadingZero(currentDate.getHours());
        const minutes = addLeadingZero(currentDate.getMinutes());
        const seconds = addLeadingZero(currentDate.getSeconds());
        const day = addLeadingZero(currentDate.getDate());
        const month = addLeadingZero(currentDate.getMonth() + 1);

        const formattedDate = `${hours}:${minutes}:${seconds} - ${day}/${month}/${currentDate.getFullYear()}`;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            tanggal: formattedDate,
        }));
    };

    return (
        <>
            <Head title="Form Aspirasi Mahasiswa Informatika" />
            <div className="w-screen min-h-screen flex flex-col items-center bg-[#031C30]">
                {confirmationPopup && (
                    <div className="fixed z-20 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="p-8 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
                            <h2 className="font-semibold text-lg">
                                Are you sure you want to submit this form?
                            </h2>
                            <p>
                                The data will be submitted and sent to your
                                email for confirmation.
                            </p>
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handleConfirmSubmit}
                                    className="mx-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    OK
                                </button>
                                <button
                                    onClick={handleCancelSubmit}
                                    className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className={`z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed flex ${
                        isLoading ? "" : "hidden"
                    }`}
                    role="status"
                >
                    <svg
                        aria-hidden="true"
                        className="w-56 h-56 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                </div>
                {popUp && (
                    <div
                        className={`z-10 fixed flex flex-col rounded-lg bg-slate-200 items-center justify-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96`}
                    >
                        <LazyLoadImage
                            src="/images/icon/checkmark.svg"
                            className="w-56 h-56"
                        />
                        <h1 className="text-black text-xl mb-2">
                            Form submission successful!
                        </h1>
                        <button
                            onClick={handlePopUp}
                            className="bg-black text-2xl px-4 py-2 rounded-full"
                        >
                            Close
                        </button>
                    </div>
                )}
                <div className="w-full p-8 mt-10 flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between text-xl">
                        <div className="flex flex-col text-xl mb-8 w-full md:w-5/6">
                            {/* logo */}
                            <svg width="100%" height="auto" viewBox="0 0 193 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="pl-4 w-3/6 md:w-2/6 pb-4">
                            <path d="M46.787 3.17225V2.06314H30.3449V2.10335C27.8917 2.28346 25.5177 3.04965 23.4231 4.33734C21.3285 5.62503 19.5746 7.39649 18.3092 9.50246C17.3732 -0.668028 1.9046 -0.00256538 1.9046 10.2705C1.88655 14.9745 5.93874 18.776 10.6395 18.4599C8.19732 19.6252 6.10701 21.4141 4.58018 23.6454C3.05335 25.8767 2.14422 28.4711 1.94487 31.166H1.9046V47.5808C7.76487 47.9218 13.2807 44.9716 16.1248 40.2038V47.5808C24.5652 48.1048 31.9558 41.74 32.5266 33.3842H32.5668V33.344C40.9365 32.7812 47.3147 25.3959 46.787 16.9695H38.0897C40.6929 15.7198 42.8901 13.762 44.4286 11.3213C45.9672 8.88062 46.7846 6.05604 46.787 3.17225ZM18.4578 30.6143C19.1229 24.6431 24.3458 19.6411 30.3519 19.2348V31.166H18.3939C18.4092 30.9816 18.43 30.7973 18.4508 30.6143H18.4578ZM30.3449 4.32849V16.2597H18.3939C18.6598 13.1844 20.0043 10.3015 22.1906 8.11884C24.3768 5.93621 27.2645 4.59392 30.3449 4.32849ZM4.1265 10.2705C4.26537 2.40003 15.9845 2.40003 16.1248 10.2705C15.9831 18.1452 4.26537 18.1452 4.1265 10.2705ZM17.2357 19.1877H23.4945C19.3118 21.7081 16.4747 26.2901 16.1637 31.166H4.17372C4.45578 27.9003 5.95359 24.8586 8.37164 22.6412C10.7897 20.4237 13.9524 19.1915 17.2357 19.1877ZM4.1265 45.3182V33.3842H16.0776C15.8115 36.4597 14.467 39.3429 12.2808 41.5259C10.0947 43.7089 7.20704 45.0519 4.1265 45.3182ZM18.3467 45.3182V33.3842H30.2977C30.0319 36.4598 28.6875 39.3431 26.5013 41.5262C24.3151 43.7093 21.4273 45.0521 18.3467 45.3182ZM32.5668 31.1217V19.1877H44.5179C44.2521 22.2631 42.9076 25.1462 40.7214 27.3291C38.5351 29.512 35.6474 30.8545 32.5668 31.1203V31.1217ZM32.5668 16.2139V4.28135H44.5179C44.252 7.35662 42.9075 10.2396 40.7212 12.4222C38.535 14.6048 35.6472 15.9471 32.5668 16.2125V16.2139Z" fill="#F0F2F5"/>
                            <path d="M60.7453 38.4034V18.1076H66.6702V25.6713H73.6666V18.1076H79.5915V38.4034H73.6666V30.8398H66.6702V38.4034H60.7453ZM80.8671 38.4034V18.1076H86.6344L91.6768 28.4131L96.6877 18.1076H102.424V38.4034H96.4986V28.2555L93.2526 34.9367H90.0695L86.792 28.2555V38.4034H80.8671ZM103.697 38.4034V18.1076H109.622V38.4034H103.697ZM110.893 38.4034V18.1076H126.146V22.5197H116.818V26.0179H124.949V30.4931H116.818V38.4034H110.893ZM140.336 38.7186C137.542 38.7186 135.325 38.0463 133.686 36.7016C132.069 35.3359 131.26 33.361 131.26 30.7767V18.1076H135.514V30.4616C135.514 32.0163 135.934 33.1824 136.775 33.9598C137.615 34.7161 138.802 35.0943 140.336 35.0943C141.87 35.0943 143.046 34.7161 143.866 33.9598C144.706 33.1824 145.126 32.0163 145.126 30.4616V18.1076H149.381V30.7767C149.381 33.361 148.572 35.3359 146.954 36.7016C145.337 38.0463 143.13 38.7186 140.336 38.7186ZM151.231 38.4034V18.1076H155.517L161.474 30.304L167.43 18.1076H171.685V38.4034H167.43V25.1985L162.703 34.9052H160.245L155.486 25.1985V38.4034H151.231ZM173.692 38.4034V18.1076H177.379L186.991 31.6276V18.1076H191.246V38.4034H187.559L177.947 24.8834V38.4034H173.692Z" fill="#F0F2F5"/>
                            </svg>

                            <h1 className="md:text-4xl text-3xl px-4 pb-4 text-white rounded-lg mb-4 font-bold">
                                Form Aspirasi Mahasiswa Informatika UMN
                            </h1>
                            <p className="text-left px-4 mb-4 text-gray-300 font-light text-base">
                                Form aspirasi mahasiswa informatika UMN adalah
                                wadah untuk menyampaikan pemikiran, ide, dan
                                harapan mahasiswa terhadap program studi
                                informatika di Universitas Multimedia Nusantara
                                (UMN). Melalui formulir ini, kami mengajak Anda
                                untuk berpartisipasi aktif dalam meningkatkan
                                kualitas sarana, prasarana dan pengalaman
                                belajar di lingkungan UMN. Setiap masukan dan
                                saran yang Anda berikan akan menjadi bahan
                                pertimbangan yang berharga untuk terus
                                memperbaiki dan menyempurnakan program studi
                                ini.
                            </p>
                            {/* supergraphic */}
                            <div>

                                <svg width="100%" height="auto" viewBox="0 0 649 198" preserveRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" className="py-4 pl-4 pr-8">
                                    <g clip-path="url(#clip0_17_249)">
                                    <path d="M649 198H549V98C575.522 98 600.957 108.536 619.711 127.289C638.464 146.043 649 171.478 649 198Z" fill="#005696" fill-opacity="0.4"/>
                                    <path d="M549 98V-2L649 -2C649 24.5216 638.464 49.957 619.711 68.7107C600.957 87.4643 575.522 98 549 98Z" fill="#E46225" fill-opacity="0.4"/>
                                    <path d="M549 198H449V98C475.522 98 500.957 108.536 519.711 127.289C538.464 146.043 549 171.478 549 198Z" fill="#005696" fill-opacity="0.4"/>
                                    <path d="M449 -2H549V98C522.478 98 497.043 87.4643 478.289 68.7107C459.536 49.957 449 24.5216 449 -2Z" fill="#E46225" fill-opacity="0.4"/>
                                    <path d="M349 98H449V198C422.478 198 397.043 187.464 378.289 168.711C359.536 149.957 349 124.522 349 98Z" fill="#005696" fill-opacity="0.4"/>
                                    <path d="M349 -2H449V98C422.478 98 397.043 87.4643 378.289 68.7107C359.536 49.957 349 24.5216 349 -2Z" fill="#149ED8" fill-opacity="0.4"/>
                                    <path d="M249 198V98H349C349 124.522 338.464 149.957 319.711 168.711C300.957 187.464 275.522 198 249 198Z" fill="#E46225" fill-opacity="0.4"/>
                                    <path d="M249 98V-2L349 -2C349 24.5216 338.464 49.957 319.711 68.7107C300.957 87.4643 275.522 98 249 98Z" fill="#BF1E2D" fill-opacity="0.4"/>
                                    <path d="M149 198V98H249C249 124.522 238.464 149.957 219.711 168.711C200.957 187.464 175.522 198 149 198Z" fill="#E46225" fill-opacity="0.4"/>
                                    <path d="M149 98V-2L249 -2C249 24.5216 238.464 49.957 219.711 68.7107C200.957 87.4643 175.522 98 149 98Z" fill="#BF1E2D" fill-opacity="0.4"/>
                                    <path d="M99 98C71.3858 98 49 120.386 49 148C49 175.614 71.3858 198 99 198C126.614 198 149 175.614 149 148C149 120.386 126.614 98 99 98Z" fill="#BF1E2D" fill-opacity="0.4"/>
                                    <path d="M49 48C49 75.6142 71.3858 98 99 98C126.614 98 149 75.6142 149 48C149 20.3858 126.614 -2 99 -2C71.3858 -2 49 20.3858 49 48Z" fill="#BF1E2D" fill-opacity="0.4"/>
                                    <path d="M49 198H-51L-51 98C-24.4784 98 0.957043 108.536 19.7107 127.289C38.4643 146.043 49 171.478 49 198Z" fill="#E46225" fill-opacity="0.4"/>
                                    <path d="M-51 48C-51 75.6142 -28.6142 98 -1 98C26.6142 98 49 75.6142 49 48C49 20.3858 26.6142 -2 -1 -2C-28.6142 -2 -51 20.3858 -51 48Z" fill="#BF1E2D" fill-opacity="0.4"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_17_249">
                                    <rect width="649" height="198" fill="white" transform="matrix(-1 0 0 -1 649 198)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>

                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col w-full p-2 text-[#DBDBDB] rounded-lg"
                        >
                            <label>Nama Lengkap</label>
                            <div className="flex mt-2 mb-4 items-center justify-end">
                                <LazyLoadImage
                                    src={`${
                                        validateData.validateNama
                                            ? "/images/icon/checkmark.svg"
                                            : "/images/icon/prohibited.svg"
                                    }`}
                                    className={`absolute w-8 h-8 mr-4 ${
                                        isValidating ? "" : "hidden"
                                    }`}
                                ></LazyLoadImage>
                                <input
                                    type="text"
                                    name="nama-lengkap"
                                    placeholder="Nama Lengkap"
                                    className="w-full rounded-xl text-xl text-black"
                                    value={formData["nama-lengkap"]}
                                    onChange={handleChange}
                                />
                            </div>
                            <label>NIM</label>
                            <div className="flex mt-2 mb-4 items-center justify-end">
                                <LazyLoadImage
                                    src={`${
                                        validateData.validateNim
                                            ? "/images/icon/checkmark.svg"
                                            : "/images/icon/prohibited.svg"
                                    }`}
                                    className={`absolute w-8 h-8 mr-4 ${
                                        isValidating ? "" : "hidden"
                                    }`}
                                ></LazyLoadImage>
                                <input
                                    type="text"
                                    name="nim"
                                    placeholder="000000XXXXXX"
                                    className="w-full rounded-xl text-xl text-black"
                                    value={formData.nim}
                                    onChange={handleChange}
                                />
                            </div>
                            <label>Email</label>
                            <div className="flex mt-2 mb-4 items-center justify-end">
                                <LazyLoadImage
                                    src={`${
                                        validateData.validateEmail
                                            ? "/images/icon/checkmark.svg"
                                            : "/images/icon/prohibited.svg"
                                    }`}
                                    className={`absolute w-8 h-8 mr-4 ${
                                        isValidating ? "" : "hidden"
                                    }`}
                                ></LazyLoadImage>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="example@mail.com"
                                    className="w-full rounded-xl text-xl text-black"
                                    value={formData.email}
                                    onChange={handleChange}
                                    readOnly
                                />
                            </div>
                            <label>Keluhan yang ingin disampaikan</label>
                            <textarea
                                name="keluhan"
                                placeholder={`${
                                    !validateData.validateKeluhan &&
                                    isValidating
                                        ? "Tolong di isi keluhannya kakak ⸜(｡˃ ᵕ ˂ )⸝♡"
                                        : "Keluhan"
                                }`}
                                className={`w-full rounded-xl text-xl resize-none h-56 text-black mt-2 mb-4${
                                    isValidating &&
                                    !validateData.validateKeluhan
                                        ? "placeholder-red-300"
                                        : ""
                                }`}
                                value={formData.keluhan}
                                onChange={handleChange}
                            />
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="before:ease relative mt-6 rounded-md h-12 w-full overflow-hidden border border-orange-500 bg-[#E46625] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-orange-500 hover:before:-translate-x-40"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
