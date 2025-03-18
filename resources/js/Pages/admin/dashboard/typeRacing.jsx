import { Head, useForm } from "@inertiajs/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function typeRacing(props) {
    const { data, setData, errors, post } = useForm({
        name: "",
        instagram: "",
        WPM: null,
        accuracy: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/admin/typeracer");
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-if-red-300 to-if-orange-300 text-if-white z-10">
                <Head title="CodeXpo | Type Racing" />
                <LazyLoadImage
                    className="w-56 bg-if-black px-4 py-2 rounded-lg"
                    src={props.logo + "/codeXpo.svg"}
                ></LazyLoadImage>
                <h2 className="mt-12 mb-4 font-kanit text-4xl text-center">
                    Insert TypeRacer Record
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center text-if-black"
                >
                    <input type="hidden" name="_token" value={props.csrf} />
                    <div className="mb-4">
                        <input
                            type="text"
                            className="rounded-full"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="Name"
                        />
                        <p className="text-if-black">{errors.name}</p>
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="rounded-full"
                            id="instagram"
                            name="instagram"
                            value={data.instagram}
                            onChange={(e) =>
                                setData("instagram", e.target.value)
                            }
                            placeholder="Username Instagram"
                        />
                        <p className="text-if-black">{errors.instagram}</p>
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            className="rounded-full"
                            id="WPM"
                            name="WPM"
                            value={data.WPM}
                            onChange={(e) => setData("WPM", e.target.value)}
                            placeholder="WPM (Word per Minute)"
                        />
                        <p className="text-if-black">{errors.WPM}</p>
                    </div>
                    <div className="mb-4">
                        <input
                            type="number"
                            className="rounded-full"
                            id="accuracy"
                            name="accuracy"
                            value={data.accuracy}
                            onChange={(e) =>
                                setData("accuracy", e.target.value)
                            }
                            placeholder="Accuracy"
                        />
                        <p className="text-if-black">{errors.accuracy}</p>
                    </div>
                    <button
                        type="submit"
                        className="bg-if-orange-600 border-2 border-if-red-600 text-white px-8 py-2 rounded-full"
                    >
                        Insert
                    </button>
                </form>
                <a href="/codexpo/racingsimulator" className="mt-6 underline">
                    Insert Racing Simulator record
                </a>
                <form
                    action="/logout"
                    method="POST"
                    className="bg-if-white px-8 py-2 rounded-full text-if-black mt-4"
                >
                    <input type="hidden" name="_token" value={props.csrf} />
                    <button type="submit" className="">
                        Logout
                    </button>
                </form>
            </div>
        </>
    );
}
