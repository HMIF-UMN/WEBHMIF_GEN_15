import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

export default function JoinKomunitas() {
  return (
    <section id="joinKomunitas">
      <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-col justify-center items-center bg-black">
        <div className="JoinKomunitas w-4/5 p-5 rounded-lg items-center">
          <div className="Headline">
            <p className="text-center text-3xl lg:text-6xl font-bold font-kanit text-white">Join Komunitas Informatika UMN</p>
          </div>
          <div className="Subline font-worksans mt-8 mb-10 mr-2 ml-2 text-white">
            <p className="text-center text-xs lg:text-base">
              Ayo, bergabung sekarang dan jadilah bagian dari keluarga besar INFORMATIKA UMN! Mari bersama-sama membentuk masa depan yang lebih
              cerah dalam lingkungan yang inspiratif. Cek link dibawah : Discord Informatika UMN, Line Group IF UMN 2023 dan Instagram @ppif.umn!
            </p>
          </div>
          <div className="Social mt-4 flex flex-wrap justify-around pr-10 pl-10">
            <Card label="Informatika UMN" logo="./PPIF/images/joinKomunitas/Discord.svg" description="Join Discord Channel" url="https://discord.gg/XMKnwjpJcf"/>
            <Card label="IF UMN 2023" logo="./PPIF/images/joinKomunitas/Line.svg" description="Join LINE Group" url="https://chat.whatsapp.com/KIvqMQI3BqaI2DFZh8phkw"/>
            <Card label="PADI IF" logo="./PPIF/images/joinKomunitas/Instagram.svg" description="Follow Our Instagram" url="https://www.instagram.com/ppif.umn/"/>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
