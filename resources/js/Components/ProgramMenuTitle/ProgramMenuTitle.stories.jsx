import React from "react";
import ProgramMenuTitle from "./ProgramMenuTitle";

export default {
    title: "Program Menu Title",
    component: ProgramMenuTitle,
};

export const Title1 = () => (
    <ProgramMenuTitle label="Computer Science Shelter" color="blue" />
);

export const Title2 = () => (
    <ProgramMenuTitle label="UMN Tech Festival" color="blue" />
);

export const Title3 = () => (
    <ProgramMenuTitle label="Perkenalan Prodi Informatika" color="blue" />
);

export const Title4 = () => <ProgramMenuTitle label="BIOS" color="orange" />;

export const Title5 = () => (
    <ProgramMenuTitle label="Technofest" color="orange" />
);

export const Title6 = () => (
    <ProgramMenuTitle label="FesTIval" color="orange" />
);
