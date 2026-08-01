// pages/AboutPage.tsx
import { useTranslation, Trans } from "react-i18next";
import { CardExperience, CardConsole, ViewPdf } from "@/components";
import LinkedinIconPixel from "@/assets/icons/linkedinPixel.svg";
import PythonIcon from "@/assets/icons/python.svg";
import PhpIcon from "@/assets/icons/php.svg";
import NodeIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import VueIcon from "@/assets/icons/vuejs.svg";
import CloudIcon from "@/assets/icons/cloud.svg";
import DatabaseIcon from "@/assets/icons/database.svg";
import ToolsIcon from "@/assets/icons/tools.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const { t } = useTranslation();
  const [isViewPdf, setIsViewPdf] = useState<boolean>(false);

  const experienceIndices = [0, 1, 2, 3, 4];

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
          className="text-gray-900 text-sm font-semibold hover:underline md:text-lg hover:scale-105 transition"
          onClick={() => setIsViewPdf(true)}
        >
          {t("about.viewCv")}
        </button>
      </aside>
      <section
        id="about"
        className="w-full bg-third flex flex-col items-start p-10 text-primary py-14 px-4 sm:px-6 md:px-8 lg:px-12 sm:py-4 sm:flex-row sm:items-start mb-6 overflow-hidden gap-0"
      >
        <div className="flex flex-col w-full lg:w-[30%] xl:w-[25%] shrink-0 pl-0 sm:pl-0 md:pl-0 gap-8">
          <motion.div
            className="w-full relative"
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <article className="w-full">
              <h3 className="font-bold text-base pb-2 border border-transparent border-b-slate-300 inline-block md:text-xl mb-3">
                {t("about.technologies")}
              </h3>
              <ul 
                className="tree-view bg-[#c0c0c0] p-4 rounded border-2 border-[#fdfdfd] border-t-[#808080] border-l-[#808080] text-xs md:text-sm"
                style={{ 
                  fontFamily: '"W95FA", "Segoe UI", sans-serif',
                  boxShadow: 'inset -1px -1px 0 #0a0a0a',
                  listStyle: 'none',
                  paddingLeft: '1.5rem'
                }}
              >
                <li className="font-bold text-sm md:text-base mb-2 flex items-center gap-2">
                  {t("about.techStack")}
                </li>
                
                <li className="mb-0.5">
                  <details open>
                    <summary className="cursor-pointer hover:bg-gray-100/20 px-1.5 rounded py-0.5 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      <img src={PythonIcon} alt="Python" className="w-4 h-4 md:w-5 md:h-5" />
                      Python
                    </summary>
                    <ul className="pl-4 border-l-2 border-third/30 ml-1.5 space-y-0.5">
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">FastAPI</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Django</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Flask</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">SQLAlchemy</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">PyMongo</li>
                    </ul>
                  </details>
                </li>

                <li className="mb-0.5">
                  <details>
                    <summary className="cursor-pointer hover:bg-gray-100/20 px-1.5 rounded py-0.5 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      <img src={PhpIcon} alt="PHP" className="w-4 h-4 md:w-5 md:h-5" />
                      PHP
                    </summary>
                    <ul className="pl-4 border-l-2 border-third/30 ml-1.5 space-y-0.5">
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Laravel</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Sanctrum</li>
                    </ul>
                  </details>
                </li>

                <li className="mb-0.5">
                  <details>
                    <summary className="cursor-pointer hover:bg-gray-100/20 px-1.5 rounded py-0.5 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      <img src={NodeIcon} alt="JavaScript" className="w-4 h-4 md:w-5 md:h-5" />
                      JavaScript
                    </summary>
                    <ul className="pl-4 border-l-2 border-third/30 ml-1.5 space-y-0.5">
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">NodeJs</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Express</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">TypeScript</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">NestJs</li>
                    </ul>
                  </details>
                </li>

                <li className="mb-0.5">
                  <details>
                    <summary className="cursor-pointer hover:bg-gray-100/20 px-1.5 rounded py-0.5 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      <img src={ReactIcon} alt="Frontend" className="w-4 h-4 md:w-5 md:h-5" />
                      ReactJs
                    </summary>
                  </details>
                </li>

                <li className="mb-0.5">
                  <details>
                    <summary className="cursor-pointer hover:bg-gray-100/20 px-1.5 rounded py-0.5 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      <img src={VueIcon} alt="Frontend" className="w-4 h-4 md:w-5 md:h-5" />
                      VueJs
                    </summary>
                  </details>
                </li>

                <li className="mb-0.5">
                  <details>
                    <summary className="cursor-pointer hover:bg-gray-100/20 px-1.5 rounded py-0.5 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      <img src={CloudIcon} alt={t("about.cloudAndDevOps")} className="w-4 h-4 md:w-5 md:h-5" />
                      {t("about.cloud")}
                    </summary>
                    <ul className="pl-4 border-l-2 border-third/30 ml-1.5 space-y-0.5">
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">AWS</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">GCP</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Docker</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">VPS</li>
                    </ul>
                  </details>
                </li>

                <li className="mb-0.5">
                  <details>
                    <summary className="cursor-pointer hover:bg-gray-100/20 px-1.5 rounded py-0.5 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      <img src={DatabaseIcon} alt={t("about.databases")} className="w-4 h-4 md:w-5 md:h-5" />
                      {t("about.databases")}
                    </summary>
                    <ul className="pl-4 border-l-2 border-third/30 ml-1.5 space-y-0.5">
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">PostgreSQL</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">MySQL</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">MongoDB</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">NoSQL</li>
                    </ul>
                  </details>
                </li>

                <li className="mb-0.5">
                  <details>
                    <summary className="cursor-pointer hover:bg-gray-100/20 px-1.5 rounded py-0.5 font-semibold text-sm md:text-base flex items-center gap-1.5">
                      <img src={ToolsIcon} alt={t("about.tools")} className="w-4 h-4 md:w-5 md:h-5" />
                      {t("about.tools")}
                    </summary>
                    <ul className="pl-4 border-l-2 border-third/30 ml-1.5 space-y-0.5">
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Git</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Testing</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">n8n</li>
                      <li className="hover:bg-gray-100/10 px-1.5 py-0.5 rounded text-xs md:text-sm font-medium">Patterns</li>
                    </ul>
                  </details>
                </li>
              </ul>
            </article>
          </motion.div>

          <div className="w-full">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold py-4 lg:text-2xl pl-0"
            >
                         
            <br />            
                    <br/>                

            </motion.h2>
            <div className="flex flex-col gap-60 w-full">
              {experienceIndices.map((index) => (
                <CardExperience 
                  key={index} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[70%] xl:w-[75%] pl-0 sm:pl-0 md:pl-4 lg:pl-6 xl:pl-10 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[-0.3rem] pt-4">
              Luis Peña
            </h2>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl tracking-widest my-4">
              <b className="text-[#00008B]"> {t("about.role").split(" ")[0]}</b>{" "}
              <b className="text-[#7A86B8]"></b> {t("about.role").split(" ").slice(1).join(" ")}
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-medium text-third lg:text-1xl sm:border sm:border-transparent sm:border-b-gray-300 sm:pb-10">
              <Trans
                i18nKey="about.intro"
                components={{
                  1: <span className="font-bold" />,
                  2: <span className="font-bold" />,
                  3: <span className="font-bold" />,
                  4: <span className="font-bold" />,
                  5: <span className="font-bold" />,
                  6: <span className="font-bold" />,
                  7: <span className="font-bold" />,
                  8: <span className="font-bold" />,
                  9: <span className="font-bold" />,
                  10: <span className="font-bold" />,
                  11: <span className="font-bold" />,
                  12: <span className="font-bold" />,
                  13: <span className="font-bold" />,
                  14: <span className="font-bold" />,
                  15: <span className="font-bold" />,
                  16: <span className="font-bold" />,
                  17: <span className="font-bold" />,
                }}
              />
            </p>
          </motion.div>

          <div className="w-full">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold py-1 text-center lg:text-2x1  -mt-9"
            >
              
                        {t("about.experience")}
              <br/>
             <br/>
            </motion.h2>
            <div className="flex flex-col gap-14 w-full">
              {experienceIndices.map((index) => (
                <CardConsole 
                  key={index} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;