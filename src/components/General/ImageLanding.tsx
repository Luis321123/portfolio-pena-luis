import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ImageLanding = () => {
  const { t } = useTranslation();
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <motion.img
      src="windowsPc.png"
      alt={t("home.landingAlt")}
      className="w-[700px] max-w-full h-auto object-contain mx-auto"
      initial={{ height: "100px", opacity: 0 }}
      animate={{
        height: imageLoading ? "100px" : "auto",
        opacity: imageLoading ? 0 : 1,
      }}
      transition={{ opacity: { delay: 0.5, duration: 0.4 } }}
      onLoad={imageLoaded}
    />
  );
};

export default ImageLanding;
