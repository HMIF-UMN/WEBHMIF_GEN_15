import React from "react";
import Card from "./Card";

export default {
    title: "Card",
    component: Card,
};

export const card1 = () => (
    <Card judul="Computer Science Shelter" tanggal="12 March 2023" />
);
export const card2 = () => (
    <Card judul="Perkenalan Prodi Informatika" tanggal="XX Agustus 2023" />
);
export const card3 = () => (
    <Card judul="UMN Tech Festival 10" tanggal="XX Oktober 2023" />
);
