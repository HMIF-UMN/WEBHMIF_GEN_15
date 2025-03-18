import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center h-[80px] md:h-[120px] text-white">
            <div className="text-center">
                <p className="mb-2">
                    Made with ❤ by Gen XIV UNIVERSITAS MULTIMEDIA NUSANTARA
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="mailto:hmif@umn.ac.id"
                        aria-label="Email"
                        className="hover:text-gray-400"
                    >
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://hmif.umn.ac.id/line">
                        <img
                            className="w-9"
                            src={"/images/jamming/line.svg"}
                            alt=""
                        />
                    </a>
                    <a
                        href="https://instagram.com/hmif.umn"
                        aria-label="Instagram"
                        className="hover:text-gray-400"
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
