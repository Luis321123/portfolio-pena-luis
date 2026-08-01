import i18n from "@/i18n";
import { Experience } from "@/interfaces/Experience";

interface ExperienceData {
  title: string;
  date: string;
  description: string;
}

export const getExperiences = (): Experience[] => {
  const data = i18n.t("experiences", { returnObjects: true }) as ExperienceData[];
  return (data || []).map((item, index) => ({
    id: `exp-${index}`,
    title: item.title,
    date: item.date,
    description: item.description,
  }));
};
