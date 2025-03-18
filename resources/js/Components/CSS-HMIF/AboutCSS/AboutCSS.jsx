import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function AboutCSS() {
    const carouselImage = [
        "./CSS-HMIF/images/css2023/IMG_7907.webp",
        "./CSS-HMIF/images/css2023/IMG_8118.webp",
        "./CSS-HMIF/images/css2023/IMG_7956.webp",
        "./CSS-HMIF/images/css2023/IMG_8123.webp",
        "./CSS-HMIF/images/css2023/IMG_8029.webp",
        "./CSS-HMIF/images/css2023/IMG_8128.webp",
    ];

    return (
        <>
            <div className="w-screen h-fit py-10 2xl:py-20 flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col lg:flex-row px-4 2xl:p-0 2xl:gap-56 justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="w-full 2xl:w-1/3 flex flex-col gap-10"
                    >
                        <h1 className="text-if-white font-kanit-regular text-3xl 2xl:text-5xl font-kanit">
                            Memperkenalkan,
                        </h1>
                        <div className="flex flex-row gap-6 items-center justify-center lg:justify-start text-if-white mt-0 xl:mt-16">
                            <LazyLoadImage
                                src="./CSS-HMIF/images/Home/LogoColored.webp"
                                alt="Logo CSS"
                                className="w-1/4 lg:w-1/3"
                            />
                            <h2 className="font-bold text-2xl 2xl:text-5xl font-kanit">
                                Computer
                                <br />
                                Science
                                <br />
                                Shelter{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-600 to-purple-500">
                                    2024
                                </span>
                            </h2>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-if-gray space-y-2 2xl:text-2xl 2xl:w-1/3 font-works-sans-regular mt-4 2xl:mt-0 font-worksans text-pretty"
                    >
                        <p>
                            Tingkatkan adrenalin dan tunjukkan bakatmu di CSS
                            (Computer Science Shelter)! Diprakarsai oleh para
                            mahasiswa Informatika di Universitas Multimedia
                            Nusantara, acara ini bukan hanya tentang komputer,
                            tapi juga tentang komunitas, kompetisi, dan
                            kolaborasi. Siapkan dirimu untuk pertandingan{" "}
                            <span className="italic">e-sport</span> yang intens,
                            atau rasakan semangat kompetisi dalam olahraga
                            konvensional.
                        </p>
                        <p>
                            Perlu kalian ketahui juga bahwa CSS merupakan
                            rangkaian wajib dari Perkenalan Prodi Informatika
                            (PPIF) 2024, nih! <span className="italic">So</span>
                            , CSS ini <span className="font-bold">wajib</span>{" "}
                            kalian ikuti setelah menyelesaikan rangkaian PPIF!
                        </p>
                        {/* <p>
                            Apakah kamu seorang pemenang yang sedang menunggu
                            kesempatan untuk bersinar? CSS adalah panggungmu!
                            Bergabunglah dalam petualangan seru mencari bakat di
                            balik layar dan lapangan. Jadilah bagian dari CSS
                            dan raih kejayaan bersama kami!
                        </p> */}
                    </motion.div>
                </div>
                <div className="w-full px-4 2xl:px-0 2xl:w-5/6">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {carouselImage.map((image, index) => (
                            <SwiperSlide key={index}>
                                <LazyLoadImage
                                    src={image}
                                    alt="carousel"
                                    className="object-cover w-full h-48 2xl:h-72"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
