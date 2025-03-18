import React from "react";

function Profile(props) {
    const links = [
        {
            id: 1,
            icon: "vote.svg",
            href: "https://hmif.umn.ac.id/formAspirasi",
            text: "Form Aspirasi<br>Mahasiswa Informatika UMN",
            imgClass: "w-10 md:w-28 md:-ml-8 md:-mb-6 lg:-ml-8 lg:-mb-10",
        },
        {
            id: 2,
            icon: "internet.svg",
            href: "https://hmif.umn.ac.id/",
            text: "Website<br>Himpunan Mahasiswa Informatika",
            imgClass: "w-10 md:w-28 md:-ml-9 md:-mb-7 lg:-ml-10 lg:-mb-8",
        },
        {
            id: 3,
            icon: "instagram.svg",
            href: "https://www.instagram.com/hmif.umn?igsh=MXNlMnZpeDE0NXN3dg%3D%3D&utm_source=qr",
            text: "Instagram<br>@hmif.umn",
            imgClass: "w-10 md:w-48 md:-ml-16 md:-mb-12 lg:-ml-16 lg:-mb-14",
        },
		{
            id: 4,
            icon: "business.svg",
            href: "https://api.whatsapp.com/send?phone=6285250483555",
            text: "For Business Inquiries<br>(Internal UMN)",
            imgClass: "w-10 md:w-32 md:-ml-8 md:-mb-8 lg:-ml-8 lg:-mb-10",
        },
        {
            id: 5,
            icon: "business.svg",
            href: "https://api.whatsapp.com/send?phone=6281296418855",
            text: "For Business Inquiries<br>(External UMN 1)",
            imgClass: "w-10 md:w-32 md:-ml-8 md:-mb-8 lg:-ml-8 lg:-mb-10",
        },
		{
            id: 6,
            icon: "business.svg",
            href: "https://api.whatsapp.com/send?phone=6281217682424",
            text: "For Business Inquiries<br>(External UMN 2)",
            imgClass: "w-10 md:w-32 md:-ml-8 md:-mb-8 lg:-ml-8 lg:-mb-10",
        },
    ];

    return (
        <div
            className={`flex flex-col items-center justify-center w-screen h-screen transition-colors lg:-mt-4 relative bg-zinc-900`}
        >
            <main className="flex flex-col items-center content-center md:flex-row md:items-baseline md:content-normal md:justify-center mx-8 md:mx-0">
                <img
                    className="w-40 max-w-full md:absolute md:top-24 md:left-12 m-5 md:m-0 pb-8 -mt-10 z-30"
                    src={props.proker + "/logoHMIF.png"}
                    alt="HMIF UMN"
                    loading="lazy"
                />

                <section className="w-full lg:w-10/12 px-8 md:p-10 lg:pt-2">
                    <img
                        className="w-full top-20 left-0 absolute object-cover object-bottom opacity-50 md:px-12 px-8"
                        src={props.foto + "/SupergraphicsProfile.svg"}
                        alt="HMIF UMN"
                        loading="lazy"
                    />
                    <img
                        className="w-full bottom-24 left-0 absolute object-cover object-top opacity-50 md:px-12 px-8"
                        src={props.foto + "/SupergraphicsProfile.svg"}
                        alt="HMIF UMN"
                        loading="lazy"
                    />

                    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                className={`w-full px-5 py-2 lg:p-5 flex gap-5 md:gap-0 text-white transition-colors bg-[#005696] hover:bg-blue-500 rounded-lg relative overflow-hidden`}
                                href={link.href}
                                target="_blank"
                            >
                                <img
                                    className={link.imgClass}
                                    src={props.icon + "/" + link.icon}
                                    alt="HMIF UMN"
                                    loading="lazy"
                                />
                                <div className="flex w-full lg:px-10 md:px-4 items-center relative z-30">
                                    <p
                                        className="text-lg lg:text-2xl z-30 font-kanit leading-none"
                                        dangerouslySetInnerHTML={{
                                            __html: link.text,
                                        }}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/quicklink/2.3.0/quicklink.umd.js"></script>
        </div>
    );
}

export default Profile;
