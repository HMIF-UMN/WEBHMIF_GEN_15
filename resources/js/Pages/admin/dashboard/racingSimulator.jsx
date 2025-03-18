import { Head, useForm } from "@inertiajs/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function racingSimulator(props) {
    const { data, setData, errors, post } = useForm({
        name: "",
        instagram: "",
        duration: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/admin/racingsimulator");
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-if-red-300 to-if-orange-300 text-if-white z-10">
                <Head title="CodeXpo | Racing Simulator" />
                <LazyLoadImage
                    className="w-56 bg-if-black px-4 py-2 rounded-lg"
                    src={props.logo + "/codeXpo.svg"}
                ></LazyLoadImage>
                <h2 className="mt-12 mb-4 font-kanit text-4xl text-center">
                    Insert Racing Simulator Record
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
                            id="duration"
                            name="duration"
                            value={data.duration}
                            onChange={(e) =>
                                setData("duration", e.target.value)
                            }
                            placeholder="Duration (in minute)"
                        />
                        <p className="text-if-black">{errors.duration}</p>
                    </div>
                    <button
                        type="submit"
                        className="bg-if-orange-600 border-2 border-if-red-600 text-white px-8 py-2 rounded-full"
                    >
                        Insert
                    </button>
                </form>
                <a href="/codexpo/racingsimulator" className="mt-6 underline">
                    Insert Type Racing record
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
