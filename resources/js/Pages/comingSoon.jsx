import { Head } from '@inertiajs/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ButtonSosmed from '@/Components/ButtonSosmed/ButtonSosmed';
import { motion } from "framer-motion";

export default function comingSoon(props) {
    return (
        <>
            <Head title="Coming Soon" />
            <div className="h-screen w-screen bg-if-black overflow-hidden flex flex-col lg:flex-row">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="z-10 flex flex-col text-white w-5/6 justify-center pl-[10vw] lg:pl-[18vw] mt-[5vh] lg:mt-0"
                >
                    <LazyLoadImage src={props.comingSoon+'/hmif-logo-word.svg'} className="h-8 lg:h-16 w-fit my-2 lg:my-4"></LazyLoadImage>
                    <h1 className="text-4xl lg:text-5xl font-kanit-medium my-4">Bentar lagi udah mau<br/>kelar kok...</h1>
                    <p className="text-if-gray font-worksans">Untuk sementara ini, kamu mungkin bisa pakai link-link ini dulu</p>
                    <div className="flex flex-row flex-wrap gap-2 mt-4 mb-12">
                        <ButtonSosmed link="https://discord.gg/ywjuhAmXut" name="Discord"></ButtonSosmed>
                        <ButtonSosmed link="https://www.instagram.com/hmif.umn/" name="Instagram"></ButtonSosmed>
                        <ButtonSosmed link="https://mail.google.com/mail/?view=cm&fs=1&to=hmif@umn.ac.id" name="Email"></ButtonSosmed>
                    </div>
                </motion.div>
                <LazyLoadImage src={props.comingSoon+'/Supergraphics.svg'} className="z-10 hidden lg:block w-fit"></LazyLoadImage>
                <LazyLoadImage src={props.comingSoon+'/supergraphics-hp.svg'} className="z-10 absolute bottom-0 w-screen lg:hidden"></LazyLoadImage>
                <LazyLoadImage src={props.comingSoon+'/gradient.png'} className="h-screen absolute top-0 left-0 z-0 object-center bg-left-top"></LazyLoadImage>
            </div>
        </>
    )
}
