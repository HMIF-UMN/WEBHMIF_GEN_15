import React from "react";
import Team from "./Team";

//jangan lupa di delete kalo udah ok
import TestFoto from "./testfoto-janganlupadelete.jpg"

export default {
    title: "Team",
    component: Team,
};
export const Team1 = () => (
    <Team
        foto = {[TestFoto,
                TestFoto,
                TestFoto,
                TestFoto,
                TestFoto,
                ]}
        anggota = {["Budi Setiawan","Asep Setiawan","Asri Setiawan","Agus Setiawan", "Udin Setiawan"]}
        jabatan ={["President","Bendahara","Bendahara 2","Sekretaris","Sekretaris 2"]}
    />
);

