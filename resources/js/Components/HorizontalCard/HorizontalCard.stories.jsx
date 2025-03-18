import React from "react";
import HorizontalCard from "./HorizontalCard";

export default {
    title: "Horizontal Card",
    component: HorizontalCard,
};

export const Card1 = () => (
    <HorizontalCard
        date="23 - 25 August 2023"
        desc="Lorem ipsum dolor sit amet consectetur. Turpis velit ut nulla suspendisse lectus quam. Congue et diam ac amet. Vivamus id at sit elementum. Et scelerisque Nibh dictum commodo faucibus. Pellentesque tempus faucibus quis ac dapibus risus suspendisse blandit. Tempor amet quis proin amet."
    />
);
export const Card2 = () => (
    <HorizontalCard
        date="05 April 2023"
        desc="Lorem ipsum dolor sit amet consectetur. Turpis velit ut nulla suspendisse lectus quam. Congue et diam ac amet. Vivamus id at sit elementum. Et scelerisque Nibh dictum commodo faucibus. Pellentesque tempus faucibus quis ac dapibus risus suspendisse blandit. Tempor amet quis proin amet."
    />
);
