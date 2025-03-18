import Welcome1 from "../../../../../public/PPIF/images/welcome/Welcome1.png"
import Welcome2 from "../../../../../public/PPIF/images/welcome/Welcome2.png"
import Welcome3 from "../../../../../public/PPIF/images/welcome/Welcome3.png"
import Welcome4 from "../../../../../public/PPIF/images/welcome/Welcome4.png"

import "./Welcome.css"
import { motion } from "framer-motion";

export default function Welcome(){
    return(
        <div className="Welcome-Background pt-2 pl-6 pr-6 pb-6 lg:pt-96 lg:px-20 lg:pb-52 flex flex-col">
            <motion.div initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-[#FFFFFF] mt-40 lg:mt-8">
                <h6 className="font-tomorrow colors-if-white text-xs lg:text-lg lg:mt-80">\ \ &nbsp; S C I E N T I A &nbsp; B O U L E V A R D</h6>     
                <h2 className="font-kanit text-4xl lg:text-8xl text-left w-full">    
                    Selamat datang di 
                    <span className="font-extrabold">
                        <br />
                        Informatika UMN
                    </span>                        
                </h2>
            </motion.div>
            <motion.div initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: false, amount: 0.1 }}
                className="text-[#FFFFFF] mt-8 lg:mt-20 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-8">
                <div className="lg:w-1/2 mt-8">
                    <p className="font-worksans text-base lg:text-lg lg:leading-loose text-justify lg:text-left">Informatika merupakan sebuah ilmu yang mempelajari dasar-dasar dan teori Komputasi. Melalui program studi ini mahasiswa akan mempelajari bagaimana mengelola sebuah data dan informasi yang mereka dapat untuk dapat dijadikan sebuah sistem yang dapat bekerja secara otomatis dan dibantu dengan adanya teknologi sehingga tercipta sebuah alat yang dapat mempermudah kehidupan manusia.</p>
                    <p className="font-worksans text-base lg:text-lg lg:leading-loose mt-12 text-justify lg:text-left">Program studi Informatika UMN memfokuskan pembelajaran mahasiswa kepada Artificial Intelligence, Software Engineering, dan Cyber security. Mahasiswa akan dibekali dengan pengetahuan–pengetahuan yang mendalam tentang dunia informatika dari para ahlinya. </p>
                </div>
                <div className="lg:w-1/2 flex gap-8 mt-8 lg:mt-20 lg:m-0 justify-center">
                    <div className="flex flex-col gap-8 mt-12">
                        <img src={Welcome1} alt="Welcome1" />                     
                        <img src={Welcome3} alt="Welcome3" />                                                   
                    </div>
                    <div className="flex flex-col gap-8 mb-12">
                        <img src={Welcome2} alt="Welcome2" />                             
                        <img src={Welcome4} alt="Welcome4" />     
                    </div>
                </div>
            </motion.div>  
        </div>      
    )
}