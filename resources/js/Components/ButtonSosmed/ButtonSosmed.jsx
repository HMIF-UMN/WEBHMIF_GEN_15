import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ButtonSosmed({link, name}) {
  return (
    <motion.a 
      whileTap={{ scale: 0.9 }} 
      href={link} 
      className="rounded group border-2 border-white text-white flex flex-row w-fit py-1 px-4 justify-center items-center hover:bg-white hover:text-if-black transition-all duration-300"
    >
      {
        name == 'Email' &&
        <FontAwesomeIcon icon={faEnvelope} className="pr-2 text-xl text-white group-hover:text-if-black fill-current"/> ||
        name == 'Discord' &&
        <FontAwesomeIcon icon={faDiscord} className="pr-2 text-xl text-white group-hover:text-if-black fill-current"/> || 
        name == 'Instagram' &&
        <FontAwesomeIcon icon={faInstagram} className="pr-2 text-xl text-white group-hover:text-if-black fill-current"/> ||
        name == 'Back to Home' &&
        <FontAwesomeIcon icon={faHouse} className="pr-2 text-xl text-white group-hover:text-if-black fill-current"/>
      }
      <h3 className="font-montserrat-bold">{name}</h3>
    </motion.a>
  )
}