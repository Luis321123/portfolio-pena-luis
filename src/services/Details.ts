import i18n from "@/i18n";
import { Details } from "@/interfaces/Details";

interface DetailsData {
  title: string;
  date: string;
  description: string;
  achievements: string[];
}

export const getDetails = (): Details[] => {
  const data = i18n.t("details", { returnObjects: true }) as DetailsData[];
  return (data || []).map((item, index) => ({
    id: `detail-${index}`,
    title: item.title,
    date: item.date,
    description: item.description,
    achievements: item.achievements,
  }));
};
