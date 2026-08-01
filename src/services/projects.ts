import i18n from "@/i18n";
import { Project, typeStack } from "@/interfaces";

interface ProjectData {
  title: string;
  subTitle: string;
  link: string;
  stack: typeStack[];
  preview: string;
}

export const getProjects = (): Project[] => {
  const data = i18n.t("projectsData", { returnObjects: true }) as ProjectData[];
  return (data || []).map((item, index) => ({
    id: `project-${index}`,
    title: item.title,
    subTitle: item.subTitle,
    link: item.link,
    stack: item.stack,
    preview: item.preview,
  }));
};
