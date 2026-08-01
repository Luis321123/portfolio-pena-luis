import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CardProject } from "@/components";
import { getProjects } from "@/services";

const ProjectsPage = () => {
  const { t } = useTranslation();
  const projects = getProjects();

  return (
    <>
      <section
        id="projects"
        className="min-h-screen w-full bg-[#f4f1de] text-gray-900 p-4 md:py-18 md:px-24 overflow-hidden"
      >
        <h2 className="-mb-48 font-bold text-6xl md:-mb-36 text-center text-secundary ">
          {t("projects.title")}
        </h2>
        <motion.ul
          className="flex flex-wrap h-fit w-full mt-48 gap-4 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <CardProject index={index} project={project} key={project.id} />
          ))}
        </motion.ul>
      </section>
    </>
  );
};

export default ProjectsPage;
