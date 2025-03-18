import { motion } from "framer-motion";
import CardCSS from "./CardCSS";
import { useState, useEffect } from "react";

function DaftarCSS({ teamData, user }) {
    const [active, setActive] = useState([]);
    const [matchedItems, setMatchedItems] = useState([]);

    const MAX_TEAMS = {
        futsal: 16,
        basket: 16,
        ml: 32,
        badmintonPutra: 16,
        badmintonCampuran: 16,
    };

    const [futsalIsFull, setFutsalIsFull] = useState(false);
    const [basketIsFull, setBasketIsFull] = useState(false);
    const [mlIsFull, setMlIsFull] = useState(false);
    const [badmintonPutraIsFull, setBadmintonPutraIsFull] = useState(false);
    const [badmintonCampuranIsFull, setBadmintonCampuranIsFull] =
        useState(false);

    const teamCounts = teamData.team;

    const checkTeamIsFull = (category) => {
        const count = teamCounts[category];
        const max = MAX_TEAMS[category];
        return count >= max;
    };

    useEffect(() => {
        setFutsalIsFull(checkTeamIsFull("Futsal"));
        setBasketIsFull(checkTeamIsFull("Basket"));
        setMlIsFull(checkTeamIsFull("Mobile Legend"));
        setBadmintonPutraIsFull(checkTeamIsFull("Badminton Putra"));
        setBadmintonCampuranIsFull(checkTeamIsFull("Badminton Campuran"));
    }, [teamCounts]);

    useEffect(() => {
        const matched = [];

        Object.entries(teamData.data).forEach(([category, items]) => {
            items.forEach((item) => {
                if (item["Alamat Email"] === user) {
                    matched.push({
                        category: category,
                        refCode: item["Reference Code"],
                    });
                }
            });
        });

        setActive(matched);
    }, [teamData.data]);

    useEffect(() => {
        const allMatchedItems = [];

        active.forEach(({ category, refCode }) => {
            if (teamData.data[category]) {
                const matchedForCategory = teamData.data[category].filter(
                    (person) => person["Reference Code"] === refCode
                );
                allMatchedItems.push(...matchedForCategory);
            }
        });

        setMatchedItems(allMatchedItems);
    }, [active, teamData.data]);

    return (
        <>
            <div id="daftarSekarang" className="w-full">
                <div className="w-full h-fit px-5 py-10 md:p-10">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="font-worksans font-bold text-sm lg:text-lg text-if-neutral-500"
                    >
                        BIAR KAMU MAKIN KELIHATAN SIGMA 💪
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="font-kanit font-bold text-5xl text-white"
                    >
                        Ayo ikutan lomba di{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                            CSS
                        </span>
                        !
                    </motion.div>
                </div>
                {matchedItems.length > 0 ? (
                    <div className="w-full h-fit px-5 py-10 md:px-10 md:pt-0 flex flex-col gap-5">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="font-kanit text-xl lg:text-4xl text-white"
                        >
                            Kamu sudah mengikuti lomba {` `}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                                {active.map((match, index) => (
                                    <span key={index}>
                                        {match.category}
                                        {index < active.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                            </span>
                            !
                        </motion.div>
                        <div className="">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="font-kanit text-xl lg:text-4xl text-white"
                            >
                                Reference Code Team Kamu
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="font-kanit text-xl lg:text-4xl text-white"
                            >
                                {active.map((match, index) => (
                                    <div key={index}>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                                            {match.refCode}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className="font-kanit text-xl lg:text-4xl text-white"
                            >
                                Anggota Team Kamu
                            </motion.div>
                            {matchedItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="font-kanit text-xl lg:text-4xl text-white"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
                                        {item["Nama Lengkap"]}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                <div className="w-full h-fit flex flex-col lg:flex-row">
                    <CardCSS
                        x={-100}
                        delay={0.2}
                        image="Rectangle_1.webp"
                        title="Badminton"
                        teamCount={{
                            campuran: teamData.team["Badminton Campuran"],
                            putra: teamData.team["Badminton Putra"],
                        }}
                        user={user}
                        date="14 & 21 September 2024"
                        location="UMN Gedung D Lantai 23"
                    />
                    <CardCSS
                        x={-50}
                        delay={0}
                        image="basketball.webp"
                        title="Basket"
                        teamCount={teamData.team.Basket}
                        user={user}
                        date="15 & 22 September 2024"
                        location="Lapangan Basket UMN"
                    />
                    <CardCSS
                        x={50}
                        delay={0}
                        image="futsal.webp"
                        title="Futsal"
                        isFull={futsalIsFull}
                        teamCount={teamData.team.Futsal}
                        user={user}
                        date="15 dan 22 September 2024"
                        location="UMN Gedung D Lantai 23"
                    />
                    <CardCSS
                        x={100}
                        delay={0.2}
                        image="Rectangle_4.webp"
                        title="Mobile Legends"
                        teamCount={teamData.team["Mobile Legend"]}
                        user={user}
                        date="9 - 13 September 2024"
                        location="Kantin UMN Gedung C"
                    />
                </div>
            </div>
        </>
    );
}

export default DaftarCSS;
