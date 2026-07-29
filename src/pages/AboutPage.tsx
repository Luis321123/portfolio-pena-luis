import { experiences } from "@/services";
import { CardExperience, ViewPdf } from "@/components";
import LinkedinIconPixel from "@/assets/icons/linkedinPixel.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const [isViewPdf, setIsViewPdf] = useState<boolean>(false);
  return (
    <>
      {isViewPdf && (
        <ViewPdf isViewPdf={isViewPdf} setIsViewPdf={setIsViewPdf} />
      )}
      <aside className="mx-auto bg-third flex justify-center items-center gap-2 pt-6 sm:py-14">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luis-pe%C3%B1a-b76a51151/"
        >
          <img
            src={LinkedinIconPixel}
            alt="linkedin icon heroicon"
            className="w-6 h-6 md:h-10 md:w-10 hover:scale-105 transition"
          />
        </a>
        <button
          className="text-gray-900 text-sm font-light hover:underline md:text-lg hover:scale-105 transition"
          onClick={() => setIsViewPdf(true)}
        >
          View
          <span className="text-sm font-light md:text-lg"> CV</span>
        </button>
      </aside>
      <section
        id="about"
        className=" w-full bg-third flex flex-col items-center p-10 text-primary py-14 px-10 sm:px-20 sm:py-4 sm:flex-row sm:items-start  mb-6 overflow-hidden gap-10 md:gap-0"
      >
        <motion.div
          className="flex w-full relative mb-4 shrink-0 justify-center sm:w-[33%] sm:flex-col sm:justify-start md:pr-10"
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <article>
            <h3 className="font-bold text-lg pb-2 border border-transparent border-b-slate-300 inline-block md:text-2xl">
              Technologies:
            </h3>
            <ul className="whitespace-pre flex flex-wrap flex-col gap-2 pt-2 text-third font-light text-sm list-disc list-inside md:text-lg">
              <li>Python</li>
              <li>PHP</li>
              <li>Nodejs</li>
              <li>Typescript</li>
              <li>FastApi</li>
              <li>Django</li>
              <li>Sanctrum</li>
              <li>Laravel</li>
              <li>Sockets</li>
              <li>React</li>
              <li>Vue</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>Docker</li>
              <li>Patterns Arquitectures</li>
            </ul>
          </article>
          <article className="ml-4 sm:ml-0 sm:mt-4">
            <h3 className="font-bold text-lg pb-2 border border-transparent border-b-slate-300 inline-block md:text-2xl">
              Tools and others:
            </h3>
            <ul className="flex flex-wrap flex-col gap-2 pt-2 text-third font-light text-sm list-disc list-inside md:text-lg">
              <li>Testing</li>
              <li>Git</li>
            </ul>
          </article>
        </motion.div>
        <div className="sm:w-[67%]">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bold text-7xl tracking-[-0.3rem] lg:text-8xl pt-4">
              Luis Peña
            </h2>
            <h3 className="font-semibold text-2xl tracking-widest my-4 md:text-3xl">
              <b className="text-[#00008B]"> Python</b> and{" "}
              <b className="text-[#7A86B8]">PHP</b> Developer
            </h3>
            <p className="text-sm font-light text-third md:text-lg lg:text-2xl sm:border sm:border-transparent sm:border-b-gray-300 sm:pb-10">
              Hi! 👋 I’m Luis Mario Peña, a backend developer with over 2 years of experience building robust and scalable solutions for industries such as travel, solar energy, business management, CRM integrations, and AI-powered product processing. I’ve worked in environments ranging from monolithic architectures (Python/FastAPI, PHP/Laravel) to microservices with Docker, including hexagonal architectures and cloud deployments (AWS, VPS). I’m proficient in Python/FastAPI, Node.js/TypeScript/Express, PHP/Laravel, PostgreSQL, and SQLAlchemy, and I have experience integrating social authentication (Apple/Google/Firebase), external APIs (YouTube, GoHighLevel), automations with n8n, and AI models (OpenAI, Gemini, DeepSeek R8) using strategies such as RAG and batch processing. I adapt quickly, am a lifelong learner, and actively collaborate on agile teams with continuous integration. I’m passionate about clean design, maintainable code, and tackling new technological challenges.
            </p>
          </motion.div>
          <article>
            <h2 className="text-3xl font-bold py-10 lg:text-4xl">Experience</h2>
            <motion.ul
              className="flex flex-col items-center md:gap-0"
              initial={{ opacity: 0, x: "50%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {experiences.map((experience) => (
                <CardExperience experience={experience} key={experience.id} />
              ))}
            </motion.ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
