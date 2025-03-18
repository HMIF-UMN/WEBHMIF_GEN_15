function Card({label, logo, description, url}) {
    return ( 
    <div className="Icon mx-auto mb-4 relative">
        <div className="boxes-container grid justify-center">
            <div className="box box1 bg-gradient-to-r from-black via-ppif-pink-100 to-black rounded-lg relative z-10">
                <div className="box box2 bg-if-light-black rounded-lg mt-2 w-64 h-56 relative z-0">
                    <div className="Social-zone">
                        <div className="Social-Icon">
                            <img src={logo} alt="Logo Discord" className="w-28 h-28 mx-auto pt-4" />
                        </div>
                        <div className="Social-Title">
                            <h3 className="text-white font-kanit text-center pt-2 mb-4 text-2xl">{label}</h3>
                        </div>
                        <div className="Social-Button flex justify-center items-center">
                            <a href={url} target="" rel="">
                                <div className="Button-Text relative w-56 h-10 rounded-lg overflow-hidden transition duration-300 hover:shadow-md hover:shadow-ppif-pink-100">
                                    <div className="bg-gradient-to-r via-ppif-pink-100 to-black from-black absolute inset-0 hover:shadow-2xl hover:shadow-ppif-pink-100 transition duration-300 opacity-80 hover:opacity-100">
                                        <p className="text-center text-sm text-white font-kanit flex items-center justify-center h-full">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default Card;