import React from "react";
import ProgramMenuWraper from "./ProgramMenuWraper";

export default {
    title: "Program Menu Wraper",
    component: ProgramMenuWraper,
};

export const Wraper1 = () => (
    <ProgramMenuWraper
        label="Computer Science Shelter"
        date="07-09 September 2023"
        desc="Lorem ipsum dolor sit amet consectetur. Turpis velit ut nulla suspendisse lectus quam. Congue et diam ac amet. Vivamus id at sit elementum. Et scelerisque
Nibh dictum commodo faucibus. Pellentesque tempus faucibus quis ac dapibus risus suspendisse blandit. Tempor amet quis proin amet."
        color="blue"
    />
);

export const Wraper2 = () => (
    <ProgramMenuWraper
        label="BIOS"
        date="05-07 August 2023"
        desc="Lorem ipsum dolor sit amet consectetur. Turpis velit ut nulla suspendisse lectus quam. Congue et diam ac amet. Vivamus id at sit elementum. Et scelerisque
Nibh dictum commodo faucibus. Pellentesque tempus faucibus quis ac dapibus risus suspendisse blandit. Tempor amet quis proin amet."
        color="orange"
    />
);

export const Wraper3 = () => (
    <ProgramMenuWraper
        label="BIOS"
        date="05-07 August 2023"
        desc="Lorem ipsum dolor sit amet consectetur. Turpis velit ut nulla suspendisse lectus quam. Congue et diam ac amet. Vivamus id at sit elementum. Et scelerisque
Nibh dictum commodo faucibus. Pellentesque tempus faucibus quis ac dapibus risus suspendisse blandit. Tempor amet quis proin amet."
        color="orange"
        url="https://facebook.com"
    />
);
