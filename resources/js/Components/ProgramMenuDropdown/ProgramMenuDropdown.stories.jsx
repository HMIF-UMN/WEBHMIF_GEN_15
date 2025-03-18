import React from "react";
import ProgramMenuDropdown from "./ProgramMenuDropdown";

export default {
    title: "Program Menu Dropdown",
    component: ProgramMenuDropdown,
};

export const Dropdown1 = () => (
    <ProgramMenuDropdown
        label="Computer Science Shelter"
        date="07-09 September 2023"
        desc="Lorem ipsum dolor sit amet consectetur. Turpis velit ut nulla suspendisse lectus quam. Congue et diam ac amet. Vivamus id at sit elementum. Et scelerisque
Nibh dictum commodo faucibus. Pellentesque tempus faucibus quis ac dapibus risus suspendisse blandit. Tempor amet quis proin amet."
        url="https://facebook.com"
    />
);

export const Dropdown2 = () => (
    <ProgramMenuDropdown
        date="07-09 September 2023"
        desc="Lorem ipsum dolor sit amet consectetur. Turpis velit ut nulla suspendisse lectus quam. Congue et diam ac amet. Vivamus id at sit elementum. Et scelerisque
Nibh dictum commodo faucibus. Pellentesque tempus faucibus quis ac dapibus risus suspendisse blandit. Tempor amet quis proin amet."
    />
);
