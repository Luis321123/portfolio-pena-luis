import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../PrimitiveElements/Navbar";
import MenuHamburguer from "../PrimitiveElements/MenuHamburguer";

const Header = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <motion.header
      className="h-32 absolute w-full flex items-center justify-between sm:bg-transparent sm:h-28 px-4 z-[999999]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <a href="#" className="hover:scale-110 transition text-5xl text-white font-bold">
        L
      </a>
      
      <MenuHamburguer isChecked={isChecked} setIsChecked={setIsChecked} />
      
      {isChecked && <Navbar isOpen={isChecked} setIsOpen={setIsChecked} />}
    </motion.header>
  );
};

export default Header;