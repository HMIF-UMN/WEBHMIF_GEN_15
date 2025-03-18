import { useState } from "react";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({
    currentPage,
    color = "trasnsparent",
    user = null,
    navbars,
}) {
    const [navbar, setNavbar] = useState(false);
    const [userMenu, setUserMenu] = useState(false);

    function isNotCurrentPage(page) {
        return page !== currentPage;
    }

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            document.querySelector("#navbar").classList.remove(`bg-${color}`);
            document.querySelector("#navbar").classList.add("bg-black");
        } else {
            document.querySelector("#navbar").classList.remove("bg-black");
            document.querySelector("#navbar").classList.add(`bg-${color}`);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const logout = () => {
        if (user !== null) {
            if (userMenu == true) {
                setUserMenu(false);
            } else {
                setUserMenu(true);
            }
        }
    };

    const mobileThreshold = 768;
    const isMobile = window.innerWidth < mobileThreshold;

    return (
        <nav
            className={`w-screen bg-${color} shadow fixed top-0 z-50 transition-all duration-500 font-worksans font-extralight lg:px-4`}
            id="navbar"
        >
            <div className="justify-between lg:max-w-7xl lg:items-center lg:flex mx-auto">
                <div>
                    <div className="flex items-center justify-between px-2 py-3 lg:py-5">
                        <Link href="/" className="flex">
                            <svg
                                width="30"
                                height="31"
                                viewBox="0 0 30 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.0765 1.53924V0.826263H18.5069V0.852109C16.9299 0.967896 15.4038 1.46043 14.0573 2.2882C12.7108 3.11598 11.5833 4.25474 10.7699 5.60854C10.1682 -0.929437 0.224404 -0.501652 0.224404 6.10228C0.212799 9.12618 2.8177 11.5699 5.8395 11.3667C4.26961 12.1158 2.92587 13.2658 1.94437 14.7001C0.962861 16.1345 0.378443 17.8023 0.250292 19.5347H0.224404V30.0868C3.99161 30.306 7.53742 28.4095 9.36568 25.3446V30.0868C14.7915 30.4236 19.5425 26.332 19.9094 20.9607H19.9353V20.9348C25.3156 20.573 29.4158 15.8255 29.0765 10.4086H23.4855C25.159 9.60526 26.5715 8.34676 27.5605 6.77778C28.5495 5.2088 29.075 3.39305 29.0765 1.53924ZM10.8654 19.18C11.293 15.3415 14.6505 12.126 18.5114 11.8649V19.5347H10.8244C10.8342 19.4162 10.8476 19.2977 10.861 19.18H10.8654ZM18.5069 2.28251V9.95234H10.8244C10.9953 7.97544 11.8596 6.12218 13.265 4.7191C14.6704 3.31602 16.5268 2.45315 18.5069 2.28251ZM1.65273 6.10228C1.742 1.04283 9.27551 1.04283 9.36568 6.10228C9.27462 11.1644 1.742 11.1644 1.65273 6.10228ZM10.0798 11.8346H14.1032C11.4144 13.4548 9.59064 16.4003 9.39067 19.5347H1.68308C1.8644 17.4354 2.82725 15.4801 4.38167 14.0546C5.93608 12.6292 7.96918 11.8371 10.0798 11.8346ZM1.65273 28.6323V20.9607H9.33532C9.16429 22.9377 8.29999 24.7911 6.89464 26.1944C5.48929 27.5978 3.63302 28.4611 1.65273 28.6323ZM10.794 28.6323V20.9607H18.4766C18.3057 22.9378 17.4415 24.7913 16.0361 26.1946C14.6307 27.598 12.7744 28.4612 10.794 28.6323ZM19.9353 19.5062V11.8346H27.6179C27.447 13.8116 26.5827 15.665 25.1773 17.0682C23.7719 18.4714 21.9155 19.3345 19.9353 19.5053V19.5062ZM19.9353 9.92293V2.25221H27.6179C27.447 4.22912 26.5826 6.08237 25.1772 7.48546C23.7718 8.88854 21.9155 9.75141 19.9353 9.92204V9.92293Z"
                                    fill="#F0F2F5"
                                />
                            </svg>
                            <svg
                                className="mt-3 ml-1"
                                width="84"
                                height="13"
                                viewBox="0 0 669 107"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.651516 104.773V0.980317H30.9512V39.6608H66.7307V0.980317H97.0304V104.773H66.7307V66.0925H30.9512V104.773H0.651516ZM103.554 104.773V0.980317H133.048L158.835 53.6825L184.461 0.980317H213.793V104.773H183.494V52.8766L166.893 87.0444H150.615L133.854 52.8766V104.773H103.554ZM220.307 104.773V0.980317H250.607V104.773H220.307ZM257.105 104.773V0.980317H335.111V23.5439H287.405V41.4337H328.986V64.3196H287.405V104.773H257.105ZM407.678 106.385C393.388 106.385 382.052 102.946 373.671 96.0698C365.398 89.0859 361.261 78.986 361.261 65.7701V0.980317H383.019V64.1584C383.019 72.1094 385.168 78.0727 389.466 82.0482C393.764 85.9162 399.834 87.8502 407.678 87.8502C415.522 87.8502 421.538 85.9162 425.729 82.0482C430.027 78.0727 432.176 72.1094 432.176 64.1584V0.980317H453.933V65.7701C453.933 78.986 449.797 89.0859 441.523 96.0698C433.25 102.946 421.968 106.385 407.678 106.385ZM463.396 104.773V0.980317H485.315L515.776 63.3526L546.236 0.980317H567.994V104.773H546.236V37.2433L522.061 86.8832H509.49L485.153 37.2433V104.773H463.396ZM578.26 104.773V0.980317H597.117L646.273 70.1217V0.980317H668.031V104.773H649.174L600.018 35.6316V104.773H578.26Z"
                                    fill="#F0F2F5"
                                />
                            </svg>
                        </Link>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-end md:justify-self-end pb-0 mt-0 lg:block lg:pb-0 lg:mt-0 transition-all duration-500 overflow-hidden max-h-full ${
                            navbar ? "h-[14.5rem] lg:h-full" : "h-0 lg:h-full"
                        }`}
                    >
                        <div className="bg-white h-full justify-between lg:bg-transparent">
                            <ul className="lg:items-end  space-y-4 flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-2 pt-5 lg:py-5 lg:px-0">
                                {/* {isNotCurrentPage("home") && (
                                    <Link
                                        href="/"
                                        className="lg:text-slate-50 hover:text-slate-400 lg:space-x-15 text-black"
                                    >
                                        <li>
                                            <b>Beranda</b>
                                        </li>
                                    </Link>
                                )}
                                {isNotCurrentPage("aboutus") && (
                                    <Link
                                        href="/about-us"
                                        className="lg:text-slate-50 hover:text-slate-400 lg:space-x-15 text-black"
                                    >
                                        <li>
                                            <b>Tentang Kami</b>
                                        </li>
                                    </Link>
                                )}
                                {isNotCurrentPage("proker") && (
                                    <Link
                                        href="/proker"
                                        className="lg:text-slate-50 hover:text-slate-400 lg:space-x-15 text-black"
                                    >
                                        <li>
                                            <b>Program Kerja</b>
                                        </li>
                                    </Link>
                                )} */}
                                <Link
                                    href="/about-us"
                                    className="lg:text-slate-50 hover:text-slate-400 lg:space-x-15 text-black px-5 lg:px-0"
                                >
                                    <li>
                                        <b>Tentang Kami</b>
                                    </li>
                                </Link>
                                <Link
                                    href="/proker"
                                    className="lg:text-slate-50 hover:text-slate-400 lg:space-x-15 text-black px-5 lg:px-0"
                                >
                                    <li>
                                        <b>Program Kerja</b>
                                    </li>
                                </Link>
                                {navbars && navbars.length == 1 && (
                                    <a
                                        href={navbars[0].link}
                                        className="text-slate-50 lg:space-x-15 lg:border-2 lg:hover:border-transparent lg:border-if-blue-400 lg:hover:bg-gradient-to-r lg:hover:from-umn-blue-400 lg:hover:to-if-blue-400 lg:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] lg:shadow-if-blue-400 lg:px-4 px-5 lg:py-1 py-3 lg:rounded-lg max-[1024px]:bg-gradient-to-r max-[1024px]:from-umn-blue-400 max-[1024px]:to-if-blue-400 max-[1024px]:hover:text-black transition-all duration-300"
                                    >
                                        <li>
                                            <b>{navbars[0].name}</b>
                                        </li>
                                    </a>
                                )}
                                {navbars && navbars.length == 2 && (
                                    <>
                                        <a
                                            href={navbars[0].link}
                                            className="text-slate-50 lg:space-x-15 lg:border-2 lg:hover:border-transparent lg:border-if-blue-400 lg:hover:bg-gradient-to-r lg:hover:from-umn-blue-400 lg:hover:to-if-blue-400 lg:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] lg:shadow-if-blue-400 lg:px-4 px-5 lg:py-1 py-3 lg:rounded-lg max-[1024px]:bg-gradient-to-r max-[1024px]:from-umn-blue-400 max-[1024px]:to-if-blue-400 max-[1024px]:hover:text-black transition-all duration-300"
                                        >
                                            <li>
                                                <b>{navbars[0].name}</b>
                                            </li>
                                        </a>
                                        <a
                                            href={navbars[1].link}
                                            className="text-slate-50 lg:space-x-15 lg:border-2 lg:hover:border-transparent lg:border-if-orange-400 lg:hover:bg-gradient-to-r lg:hover:from-if-orange-400 lg:hover:to-if-orange-400 lg:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] lg:shadow-if-orange-400 lg:px-4 px-5 lg:py-1 py-3 lg:rounded-lg max-[1024px]:bg-gradient-to-r max-[1024px]:from-if-orange-400 max-[1024px]:to-if-orange-400 max-[1024px]:hover:text-black transition-all duration-300"
                                        >
                                            <li>
                                                <b>{navbars[1].name}</b>
                                            </li>
                                        </a>
                                    </>
                                )}
                                {/* <a
                                    href="https://hmif.umn.ac.id/connectifti2024"
                                    className="text-slate-50 lg:space-x-15 lg:border-2 lg:hover:border-transparent lg:border-if-blue-400 lg:hover:bg-gradient-to-r lg:hover:from-umn-blue-400 lg:hover:to-if-blue-400 lg:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] lg:shadow-if-blue-400 lg:px-4 px-5 lg:py-1 py-3 lg:rounded-lg max-[1024px]:bg-gradient-to-r max-[1024px]:from-umn-blue-400 max-[1024px]:to-if-blue-400 max-[1024px]:hover:text-black transition-all duration-300"
                                >
                                    <li>
                                        <b>ConnectiFTI 2024</b>
                                    </li>
                                </a>
                                <a
                                    target="_blank"
                                    href="https://hmif.umn.ac.id/comvisAppleDev"
                                    className="text-slate-50 lg:space-x-15 lg:border-2 lg:hover:border-transparent lg:border-if-orange-400 lg:hover:bg-gradient-to-r lg:hover:from-if-orange-400 lg:hover:to-if-orange-400 lg:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] lg:shadow-if-orange-400 lg:px-4 px-5 lg:py-1 py-3 lg:rounded-lg max-[1024px]:bg-gradient-to-r max-[1024px]:from-if-orange-400 max-[1024px]:to-if-orange-400 max-[1024px]:hover:text-black transition-all duration-300"
                                >
                                    <li>Comvis Apple Dev</li>
                                </a> */}
                                {/*<a*/}
                                {/*    href="/padiIF"*/}
                                {/*    className="text-slate-50 lg:space-x-15 lg:border-2 lg:hover:border-transparent lg:border-if-orange-400 lg:hover:bg-gradient-to-r lg:hover:from-if-red-400 lg:hover:to-if-orange-400 lg:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] lg:shadow-if-orange-400 lg:px-4 px-5 lg:py-1 py-3 lg:rounded-lg max-[1024px]:bg-gradient-to-r max-[1024px]:from-if-red-400 max-[1024px]:to-if-orange-400 max-[1024px]:hover:text-black transition-all duration-300"*/}
                                {/*>*/}
                                {/*    <li>*/}
                                {/*        <b>PADI IF</b>*/}
                                {/*    </li>*/}
                                {/*</a>*/}
                                {/* <a
                                    href="/cssIF"
                                    className="!mt-0 text-slate-50 lg:space-x-15 lg:border-2 lg:hover:border-transparent lg:border-if-blue-400 lg:hover:bg-gradient-to-r lg:hover:from-umn-blue-400 lg:hover:to-if-blue-400 lg:shadow-[0_0_20px_1px_rgba(0,0,0,0.1)] lg:shadow-if-blue-400 lg:px-4 px-5 lg:py-1 py-3 lg:rounded-lg max-[1024px]:bg-gradient-to-r max-[1024px]:from-umn-blue-400 max-[1024px]:to-if-blue-400 max-[1024px]:hover:text-black transition-all duration-300"
                                >
                                    <li>
                                        <b>CSS IF</b>
                                    </li>
                                </a> */}
                                {/* <div className="block lg:hidden h-full cursor-pointer">
                                    <a
                                        href={user ? null : "/sso/login"}
                                        onClick={logout}
                                        className="lg:text-slate-50 hover:text-slate-400 lg:space-x-15 text-black lg:ml-4 flex items-center"
                                    >
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faUser}
                                                className="ml-6 lg:ml-0 mr-3 text-if-black lg:text-slate-50"
                                            />
                                            <b>
                                                {user
                                                    ? "Hi, " + user + "!"
                                                    : "Login"}
                                            </b>
                                        </li>
                                    </a>
                                    {isMobile ? (
                                        navbar && user && (
                                            <a
                                                href="/sso/logout"
                                                className="py-2 my-4 ml-10 px-10 absolute text-white border rounded bg-if-black hover:bg-white hover:border-black hover:text-black"
                                            >
                                                <li>Logout</li>
                                            </a>
                                        )
                                        ) : (
                                        userMenu && (
                                            <a
                                                href="/sso/logout"
                                                className="py-2 my-4 ml-10 px-10 absolute text-white border rounded bg-if-black hover:bg-white hover:border-black hover:text-black"
                                            >
                                                <li>Logout</li>
                                            </a>
                                        )
                                    )}
                                </div> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="hidden lg:block h-full cursor-pointer list-none">
                    <a
                        href={user ? null : "/sso/login"}
                        onClick={logout}
                        className="lg:text-slate-50 hover:text-slate-400 lg:space-x-15 text-black lg:ml-4 flex items-center"
                    >
                        <li>
                            <FontAwesomeIcon
                                icon={faUser}
                                className="ml-6 lg:ml-0 mr-3 text-if-black lg:text-slate-50"
                            />
                            <b>
                                {user
                                    ? "Hi, " + user + "!"
                                    : "Login"}
                            </b>
                        </li>
                    </a>
                    {userMenu && (
                        <a
                            href="/sso/logout"
                            className="py-2 my-4 ml-10 px-10 absolute text-white border rounded bg-if-black hover:bg-white hover:border-black hover:text-black"
                        >
                            <li>Logout</li>
                        </a>
                    )}
                </div> */}
            </div>
        </nav>
    );
}
