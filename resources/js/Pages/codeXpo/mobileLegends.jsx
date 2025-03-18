
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer/Footer";
import NavBar from "@/Components/Navbar/Navbar";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ButtonSosmed from '@/Components/ButtonSosmed/ButtonSosmed';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function mobileLegends(props) {
  return (
    <div class="overflow-x-hidden ">
      <Head title="Mobile Legends Leaderboard" />
      <div className="min-h-screen w-screen bg-if-black flex flex-col lg:flex-row pt-16 md:pt-0">
        <NavBar currentPage="aboutus" color="if-black" user={props.user !== null ? props.user.name : null}/>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="z-10 flex flex-col text-white w-5/6 justify-center pl-[10vw] lg:pl-[18vw] mt-8 md:mt-0"
        >
          <LazyLoadImage src={props.comingSoon+'/hmif-logo-word.svg'} className="h-8 lg:h-16 w-fit my-2 lg:my-4"></LazyLoadImage>
          <h1 className="text-4xl lg:text-5xl font-kanit-medium my-4">Bracket Mobile Legends</h1>
          <iframe src="https://challonge.com/codeXpo/module" frameborder="0" scrolling="auto" allowtransparency="true" className="w-full lg:w-11/12 h-[50vh] mb-4"></iframe>
          <ButtonSosmed link="/codexpo-if231/typeracer" name="Go to Type Racer"></ButtonSosmed>
        </motion.div>
        <LazyLoadImage src={props.comingSoon+'/supergraphics-hp.svg'} className="w-screen max-w-[100vw] mt-12 lg:hidden"></LazyLoadImage>
        <LazyLoadImage src={props.comingSoon+'/Supergraphics.svg'} className="z-10 hidden lg:block w-fit"></LazyLoadImage>
        <LazyLoadImage src={props.comingSoon+'/gradient.png'} className="h-screen absolute top-0 left-0 z-0 object-center bg-left-top"></LazyLoadImage>
      </div>
    </div>
  )
}