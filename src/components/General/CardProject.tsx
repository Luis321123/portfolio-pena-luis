import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import deployIcon from "@/assets/icons/deploy.svg";
import { Project } from "@/interfaces";
import SelectTech from "./SelectTech";
import { Image } from 'antd';

type PropsTypes = {
  project: Project;
  index: number
};

const CardProject = ({ project, index }: PropsTypes) => {
  const { t } = useTranslation();
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setTimeout(() => setImageLoading(false), 400);
  };

  return (
    <li style={{ height: `50%` }} className={`w-full flex flex-col justify-center items-center md:flex-row md:gap-10 md:h-96 `}>
      <div className="w-full h-3/4 bg-transparent flex items-start justify-center md:h-full">
        <Image
          src={project.preview}
          alt={`${project.title} image`}
          className="w-full h-full max-h-72 object-cover object-center rounded-lg "
          onLoad={imageLoaded}
        />
      </div>
      <div className="flex justify-around items-start md:items-start m-5 mt-0 w-full flex-col mb-auto">
        <span className="my-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl text-center md:text-start">
          {project.title}
        </span>
        <div className="flex my-2 justify-center w-full flex-wrap gap-2 items-center md:items-start md:justify-start md:gap-6">
          {project.stack.map((tech) => (
            <SelectTech stack={tech} key={uuid()} />
          ))}
        </div>
        <span className="text-md font-semibold opacity-80 lg:text-base text-center md:text-start md:mb-2">
          {project.subTitle}
        </span>
        <button className="w-48 h-10 mt-2 md:w-36 md:h-12 bg-secundary font-semibold text-lg rounded-lg cursor-pointer hover:scale-110 transition">
          <a
            href={project.link}
            target="_blank"
            className="flex justify-center items-center gap-4"
          >
            <p>{t("projects.deploy")}</p>
            <img
              src={deployIcon}
              alt="arrow right top icon "
              className="w-4 h-4 md:h-8 md:w-8 "
            />
          </a>
        </button>
      </div>
    </li>
  );
};

export default CardProject;
