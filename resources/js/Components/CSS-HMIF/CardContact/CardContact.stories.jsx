import React from "react";
import CardContact from "./CardContact";

export default {
    title: "CardContact",
    component: CardContact,
};

export const CardContact = () => (
    <section className="bg-black h-auto">
          <div className="mx-5 lg:mx-10">

            <p className="font-worksans text-base md:text-xl text-if-neutral-500">
                MALU BERTANYA TERSESAT DI JALAN
            </p>
            <p className="font-kanit-medium text-5xl mt-2 text-if-neutral-200">
                Masih bingung? Tanya kami aja!
            </p>

            <div className="flex flex-col lg:flex-row gap-5 mt-8">
                <CardContact sosmed="LINE" icon="line" link="https://hmif.umn.ac.id/" />
                <CardContact sosmed="Instagram" icon="instagram" link="https://hmif.umn.ac.id/" />
                <CardContact sosmed="Email" icon="email" link="https://hmif.umn.ac.id/" />
                <CardContact sosmed="Discord" icon="discord" link="https://hmif.umn.ac.id/" />
            </div>
          </div>
        </section>
);

