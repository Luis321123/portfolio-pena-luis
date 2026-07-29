import { AnimatedWords, ImageLanding } from "@/components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ArrowScroll from "@/assets/icons/arrow-scroll.svg";
import GifMask from '@/assets/fishoptimizedpro.gif';

const HomePage = () => {
  return (
    <main id="#" className="sm:flex overflow-hidden">
      <section className="h-[80vh] w-full flex flex-col justify-center bg-[#ececec] p-16 sm:w-[67%] sm:h-[60vh] lg:h-screen">
        <article className="sm:pt-8 w-full ">
          <AnimatedWords
            line1="Hi, i'm"
            line2="Luis Peña"
            line3="Software Developer"
            classText="text-[#0f7b9c] text-5xl font-bold font-xp tracking-widest my-4 lg:text-8xl"
          />
          <motion.p
            className="text-[#0f7b9c] my-4 text-lg sm:text-sm text-white font-light lg:text-2xl"
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

      <section className="h-[40vh] w-full flex flex-col items-center justify-center bg-[#0f85e6] sm:w-[33%] sm:h-[60vh] lg:h-screen sm:items-start relative overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <img 
            src={GifMask} 
            alt="animated mask" 
            className="w-full h-full object-cover object-[80%_center] opacity-100 mix-blend-overlay"
          />
        </div>

        <ImageLanding />
      </section>
    </main>
  );
};

export default HomePage;