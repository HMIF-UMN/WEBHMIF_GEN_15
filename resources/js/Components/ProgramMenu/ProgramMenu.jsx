import React from "react";
import ProgramMenuWraper from "../ProgramMenuWraper/ProgramMenuWraper";

function ProgramMenu({ prokers, prokerImg }) {
    // Memisahkan prokers menjadi ongoing dan past
    const ongoingProkers = prokers.filter((proker) => proker.isFinished === 0);
    const pastProkers = prokers.filter((proker) => proker.isFinished === 1);

    return (
        <div>
            {ongoingProkers.length > 0 && (
                <div className="w-100 bg-black pt-10 text-neutral-500">
                    <div className="mx-auto max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center lg:text-start">
                        Currently Ongoing
                    </div>
                    {ongoingProkers.map((proker, index) => (
                        <ProgramMenuWraper
                            key={index}
                            logo={"storage/" + proker.logo}
                            label={proker.nama}
                            date={proker.tanggal}
                            desc={proker.deskripsi}
                            color="blue"
                        />
                    ))}
                </div>
            )}

            {pastProkers.length > 0 && (
                <div className="w-100 bg-black pt-10 text-neutral-500">
                    <div className="mx-auto max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl text-center lg:text-start">
                        Past Programs
                    </div>
                    {pastProkers.map((proker, index) => (
                        <ProgramMenuWraper
                            key={index}
                            logo={"storage/" + proker.logo}
                            label={proker.nama}
                            date={proker.tanggal}
                            desc={proker.deskripsi}
                            color="orange"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProgramMenu;
