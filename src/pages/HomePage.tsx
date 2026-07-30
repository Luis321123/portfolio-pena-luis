import { AnimatedWords, ImageLanding } from "@/components";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ArrowScroll from "@/assets/icons/arrow-scroll.svg";
import GifMask from '@/assets/fishoptimizedpro.gif';
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      <section className="flex-1 min-h-[60vh] md:min-h-screen w-full flex flex-col justify-center bg-[#ececec] px-6 py-12 sm:px-12 md:px-16 lg:px-20 relative">
        <article className="max-w-4xl mx-auto md:mx-0 w-full">
          <AnimatedWords
            line1="Hi, i'm"
            line2="Luis Peña"
            line3="Software Developer"
            classText="text-[#0f7b9c] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-xp tracking-widest my-2 sm:my-4"
          />
          
          <motion.p
            className="text-[#0f7b9c] mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Discover my professional expertise and accomplishments by exploring
            my portfolio.
          </motion.p>

          <motion.div
            className="mt-8 md:hidden"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-block px-8 py-3 bg-[#0f7b9c] text-white rounded-full font-medium hover:bg-[#0d6a86] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore More
            </Link>
          </motion.div>
        </article>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hidden md:block absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
        >
          <motion.img
            src={ArrowScroll}
            alt="Scroll down to about section"
            className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </Link>

        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <motion.img
            src={ArrowScroll}
            alt="Scroll down"
            className="h-10 w-10 opacity-60"
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </Link>
      </section>

      <section className="relative min-h-[40vh] md:min-h-screen w-full md:w-[45%] lg:w-[40%] flex-shrink-0 bg-[#0f85e6] overflow-hidden">
        
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-[#0f85e6] to-[#0a6bb8]" />
        </div>

        <div className="absolute inset-0 w-full h-full z-10">
          <div className="w-full h-full flex items-center justify-center p-6 md:p-8">
            <motion.div
              className="w-full max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageLanding />
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
          <img
            src={GifMask}
            alt="Animated overlay"
            className="w-full h-full object-cover object-center md:object-[80%_center] opacity-100"
            loading="eager"
            decoding="async"
          />
        </div>

        <motion.div
          className="absolute bottom-6 right-6 z-30 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hidden sm:flex items-center gap-2"
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-gray-700">Available for work</span>
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;