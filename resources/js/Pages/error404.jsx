import { Head } from '@inertiajs/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonSosmed from '@/Components/ButtonSosmed/ButtonSosmed';
import { motion } from "framer-motion";

export default function error404(props) {
    return (
        <>
            <Head title="404 Not Found" />
            <div className="h-screen w-screen bg-if-black overflow-hidden flex flex-col lg:flex-row">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="z-10 flex flex-col text-white w-5/6 justify-center pl-[10vw] lg:pl-[18vw] mt-[5vh] lg:mt-0"
                >
                    <LazyLoadImage src={props.comingSoon+'/hmif-logo-word.svg'} className="h-8 lg:h-16 w-fit my-2 lg:my-4"></LazyLoadImage>
                    <h1 className="text-4xl lg:text-5xl font-kanit-medium my-4">Error 404</h1>
                    <p className="text-if-gray font-worksans">Halaman yang kamu cari ga ada nih... Coba link lain yaa!<br/> Untuk kembali ke halaman utama klik tombol dibawah!</p>
                    <div className="mt-4">
                        <ButtonSosmed link="/" name="Back to Home"></ButtonSosmed>
                    </div>
                </motion.div>
                <LazyLoadImage src={props.comingSoon+'/Supergraphics.svg'} className="z-10 hidden lg:block w-fit"></LazyLoadImage>
                <LazyLoadImage src={props.comingSoon+'/supergraphics-hp.svg'} className="z-10 absolute bottom-0 w-screen lg:hidden"></LazyLoadImage>
                <LazyLoadImage src={props.comingSoon+'/gradient.png'} className="h-screen absolute top-0 left-0 z-0 object-center bg-left-top"></LazyLoadImage>
            </div>
        </>
    )
}
