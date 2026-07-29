import { useState } from "react";
import { motion } from "framer-motion";
import hamburguerIcon from "@/assets/icons/hamburguer.svg";
import quitIcon from "@/assets/icons/quit.svg";
import Navbar from "../PrimitiveElements/Navbar";
import MenuHamburguer from "../PrimitiveElements/MenuHamburguer";

const Header = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <motion.header
  className="h-10 w-full flex items-center justify-between bg-transparent sm:h-10 px-4 z-[999999] shrink-0 -translate-y-2 -mt-12"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.7 }}
>
      <a href="#" className="hover:scale-110 transition text-5xl text-white font-bold">
      </a>
      <div className="pt-28">
  <MenuHamburguer isChecked={isChecked} setIsChecked={setIsChecked} />
</div>
      {isChecked && <Navbar isOpen={isChecked} setIsOpen={setIsChecked} />}
    </motion.header>
  );
};

export default Header;