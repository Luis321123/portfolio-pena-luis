import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const ButtonUp = () => {
  const { t } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);

  return (
    <Link
      to="#"
      spy={true}
      smooth={true}
      offset={-100}
      duration={300}
      className={`${
        isScroll ? "text-white" : "text-secundary"
      } fixed cursor-pointer bottom-20 right-5 w-10 h-10 p-1 flex justify-center items-center hover:scale-105 transition-all rounded-full bg-secundary`}
    >
      {t("buttonUp.up")}
    </Link>
  );
};

export default ButtonUp;
