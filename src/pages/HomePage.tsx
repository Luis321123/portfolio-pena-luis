import { AnimatedWords, ImageLanding } from "@/components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ArrowScroll from "@/assets/icons/arrow-scroll.svg";

const HomePage = () => {
  return (
    <main id="#" className="sm:flex overflow-hidden">
      <section className="h-[80vh] w-full flex flex-col justify-center bg-primary p-16 sm:w-[67%] sm:h-[60vh] lg:h-screen">
        <article className="sm:pt-8 w-full ">
          <AnimatedWords
            line1="Hi, i'm"
            line2="Backend 💻"
            line3="Developer"
            classText="text-secundary text-5xl font-bold font-inter tracking-widest my-4 lg:text-8xl"
          />
          <motion.p
            className="my-4 text-lg sm:text-sm text-white font-light lg:text-2xl"
            initial={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Discover my professional expertise and accomplishments by exploring
            my portfolio.
          </motion.p>
        </article>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={300}>
          <img
            src={ArrowScroll}
            alt="arrow scroll"
            className="h-16 w-16 absolute animate-bounce bottom-40 right-[40%] sm:bottom-[50%] lg:bottom-0 lg:left-[50%] cursor-pointer"
          />
        </Link>
      </section>
      <section className="h-[40vh] w-full flex flex-col items-center justify-center bg-secundary sm:w-[33%] sm:h-[60vh] lg:h-screen sm:items-start">
        <ImageLanding />
      </section>
    </main>
  );
};

export default HomePage;
