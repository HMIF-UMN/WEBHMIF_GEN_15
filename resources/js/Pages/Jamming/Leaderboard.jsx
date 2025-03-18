import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Footer from "@/Components/Jamming/Footer";
import { Flipper, Flipped } from "react-flip-toolkit";

//firebase
import {
    database,
    ref,
    onValue,
    query,
    orderByChild,
} from "@/Pages/Jamming/configuration";

export default function Leaderboard(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const requestLaguRef = ref(database, "listRequestLagu");
        const requestLaguQuery = query(
            requestLaguRef,
            orderByChild("jumlahDonasi")
        );

        const unsubscribe = onValue(
            requestLaguQuery,
            (snapshot) => {
                if (snapshot.exists()) {
                    const fetchedData = snapshot.val();
                    const dataArray = Object.entries(fetchedData).map(
                        ([key, value]) => ({
                            key,
                            ...value,
                        })
                    );
                    dataArray.sort((a, b) => b.jumlahDonasi - a.jumlahDonasi);
                    setData(dataArray);
                    setLoading(false);
                } else {
                    setData([]);
                    setLoading(false);
                }
            },
            (error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    return (
        <div className="relative bg-[#010632]">
            <Head title="Leaderboard Jamming" />
            <img
                className="z-0 object-fit object-scale-down md:object-cover h-[1200px] md:h-auto w-full"
                src={props.foto + "/Background.png"}
                alt="HMIF UMN"
                loading="lazy"
            />
            <img
                className="w-full"
                src={props.foto + "/Supergraphics.png"}
                alt="HMIF UMN"
                loading="lazy"
            />
            <div className="absolute z-40 top-0 md:top-28 w-full text-black">
                <img
                    className="w-44 md:w-96 mx-auto"
                    src={props.foto + "/JamSesLogo-Putih.svg"}
                    alt="HMIF UMN"
                    loading="lazy"
                />
                <Flipper
                    flipKey={data.map((item) => item.jumlahDonasi).join("-")}
                >
                    <div className="mx-auto text-center mt-6 md:mt-10 w-full md:w-3/4 h-auto bg-white rounded-xl border border-b-800 shadow-[18px_20px_0px_rgba(0,0,0,0.8)] overflow-y-auto max-h-[700px]">
                        <div className="sticky top-0 z-10 bg-white p-6">
                            <img
                                className="w-36 md:w-72 mx-auto"
                                src={props.foto + "/leaderboard.png"}
                                alt="HMIF UMN"
                                loading="lazy"
                            />
                            <div className="grid grid-cols-12 gap-2 my-2 p-3 font-bold text-lg bg-umn-blue-600 rounded-xl">
                                <div>Rank</div>
                                <div className="col-span-4">Nama Lagu</div>
                                <div className="col-span-3">Penyanyi</div>
                                <div className="col-span-3">Jumlah Donasi</div>
                                <div>Played</div>
                            </div>
                        </div>

                        {loading ? (
                            <p>Loading...</p>
                        ) : data.length > 0 ? (
                            data.map((item, index) => (
                                <Flipped key={item.key} flipId={item.key}>
                                    <div>
                                        <div className="grid grid-cols-12 grid-rows-1 gap-2 my-2 p-3">
                                            <div>
                                                {index < 3 ? (
                                                    <img
                                                        className="w-10 mx-auto"
                                                        src={
                                                            props.foto +
                                                            `/rank-${
                                                                index + 1
                                                            }.svg`
                                                        }
                                                        alt={`Rank ${
                                                            index + 1
                                                        }`}
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <span className="font-bold text-sm md:text-lg">
                                                        {index + 1}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="col-span-4 font-medium text-sm md:text-lg">
                                                {item.namaLagu}
                                            </div>
                                            <div className="col-span-3  font-medium text-sm md:text-lg">
                                                {item.penyanyi}
                                            </div>
                                            <div className="col-span-3 text-sm md:text-lg">
                                                <span className="font-medium">
                                                    Rp.{" "}
                                                </span>
                                                <span className="font-normal">
                                                    {item.jumlahDonasi.toLocaleString()}
                                                </span>
                                            </div>
                                            <div className="text-center">
                                                {item.played ? "Played" : ""}
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </Flipped>
                            ))
                        ) : (
                            <p>No data available.</p>
                        )}
                    </div>
                </Flipper>
            </div>
            <Footer />
        </div>
    );
}
