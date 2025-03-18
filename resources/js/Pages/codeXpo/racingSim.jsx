import { Head } from "@inertiajs/react";
import NavBar from "@/Components/Navbar/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import ButtonSosmed from "@/Components/ButtonSosmed/ButtonSosmed";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function racingSim(props) {
    return (
        <div class="overflow-x-hidden ">
            <Head title="Racing Simulator Leaderboard" />
            <div className="min-h-screen w-screen bg-if-black flex flex-col lg:flex-row pt-16 md:pt-0">
                <NavBar
                    currentPage="aboutus"
                    color="if-black"
                    // user={props.user !== null ? props.user.name : null}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="z-10 flex flex-col text-white w-5/6 justify-center pl-[10vw] lg:pl-[18vw] mt-8 md:mt-0"
                >
                    <LazyLoadImage
                        src={props.comingSoon + "/hmif-logo-word.svg"}
                        className="h-8 lg:h-16 w-fit my-2 lg:my-4"
                    ></LazyLoadImage>
                    <h1 className="text-4xl lg:text-5xl font-kanit-medium my-4">
                        Leaderboard Racing Simulator
                    </h1>
                    <table className="border border-separate border-spacing-x-2 border-spacing-y-1 py-2 border-if-white mr-4 mb-4 rounded-lg w-[80vw] lg:w-[50vw]">
                        <thead>
                            <tr>
                                <th className="">No.</th>
                                <th className="">Nama</th>
                                <th className="">Durasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.top10s.map((data, i) => (
                                <tr className="text-center">
                                    <td className="">{i + 1}</td>
                                    <td className="">{data.name}</td>
                                    <td className="">{data.duration}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <ButtonSosmed
                        link="/codexpo-if231/mobilelegends"
                        name="Go to Mobile Legends"
                    ></ButtonSosmed> */}
                </motion.div>
                <LazyLoadImage
                    src={props.comingSoon + "/supergraphics-hp.svg"}
                    className="w-screen max-w-[100vw] mt-12 lg:hidden"
                ></LazyLoadImage>
                <LazyLoadImage
                    src={props.comingSoon + "/Supergraphics.svg"}
                    className="z-10 hidden lg:block w-fit"
                ></LazyLoadImage>
                <LazyLoadImage
                    src={props.comingSoon + "/gradient.png"}
                    className="h-screen absolute top-0 left-0 z-0 object-center bg-left-top"
                ></LazyLoadImage>
            </div>
        </div>
    );
}
