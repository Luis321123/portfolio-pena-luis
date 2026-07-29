import { motion } from "framer-motion";
import { Dispatch } from "react";
import { Link } from "react-scroll";

type PropsType = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navbar = ({ isOpen, setIsOpen }: PropsType) => {
  return (
    <motion.nav
      className="w-full h-full px-16 pt-32 fixed top-0 right-0 bg-white flex flex-col  gap-4 shadow-md sm:w-72 sm:h-96 sm:absolute sm:right-6 sm:top-4 sm:p-8 sm:pt-16 z-[90]"
      initial={{ opacity: 0 }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.7 }}
      variants={variants}
    >
      <motion.ul
        className="w-full h-36 mb-8 flex flex-col gap-4 font-light text-lg tracking-widest sm:text-sm"
        onClick={() => setIsOpen(false)}
        initial={{ scale: 0.5 }}
        animate={isOpen && { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <li className="hover:scale-110 transition cursor-pointer">
          <Link to="/" spy={true} smooth={true} offset={-100} duration={300}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 transition cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={300}>
            About
          </Link>
        </li>
        <li className="hover:scale-110 transition cursor-pointer">
          <Link to="projects" spy={true} smooth={true} offset={-100} duration={300}>
            Projects
          </Link>
        </li>
        <li className="hover:scale-110 transition cursor-pointer">
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={300}>
            Contacts
          </Link>
        </li>
      </motion.ul>
      <div className="w-full h-36">
        <h4 className="text-xl font-semibold tracking-widest uppercase text-center mb-8 sm:text-base">
          Hello me
        </h4>
        <motion.ul
          className="w-full h-36 mb-8 flex flex-col gap-4 font-light text-sm tracking-widest"
          initial={{ scale: 0.5 }}
          animate={isOpen && { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <li className="cursor-pointer hover:scale-110 transition">
            luis123321@gmail.com
          </li>
          <li className="hover:scale-110 transition">
            <a href="https://github.com/Luis321123" target="_blank">
              @Luis321123
            </a>
          </li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
