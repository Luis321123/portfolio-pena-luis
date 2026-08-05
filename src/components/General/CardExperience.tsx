import { getDetails } from "@/services/Details"; 
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import TechBadge from "@/components/TechBadge";
import TechIcon from "@/assets/icons/sysstem.ico";
import AchievementsIcon from "@/assets/icons/trophy.png";
import DetailsIcon from "@/assets/icons/info.svg";

interface CardExperienceProps {
  index: number;
}

const CardExperience = ({ index }: CardExperienceProps) => {
  const { t } = useTranslation();
  const detail = getDetails();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [isExpanded, setIsExpanded] = useState(false);
  // Estado para las pestañas internas
  const [activeTab, setActiveTab] = useState<'tech' | 'achievements' | 'details'>('tech');

  const getSafeExperience = (idx: number) => {
    const total = detail.length;
    if (total === 0) return null;
    const safeIndex = ((idx % total) + total) % total;
    return detail[safeIndex];
  };

  const currentExperience = getSafeExperience(index);

  const extractTechStack = (description: string) => {
    if (!description) return [];
    
    const knownTechs = [
      'Python', 'FastAPI', 'Django', 'Flask', 'SQLAlchemy', 'PyMongo',
      'ghl',
      'PHP', 'Laravel', 'Node.js', 'Express', 'TypeScript', 'NestJS',
      'React', 'Vue', 'AWS', 'GCP', 'Docker', 'PostgreSQL', 'MySQL',
      'MongoDB', 'Git', 'Testing', 'n8n', 'Firebase', 'Nginx', 'VPS',
      'OpenAI', 'Gemini', 'GitHub', 'RAG', 'API Gateway', 'Cognito',
      'S3', 'CloudWatch', 'EC2', 'ECS', 'ECR', 'Lambda'
    ];
    
    const foundTechs: string[] = [];
    const descriptionLower = description.toLowerCase();
    
    knownTechs.forEach(tech => {
      if (descriptionLower.includes(tech.toLowerCase())) {
        foundTechs.push(tech);
      }
    });
    
    return foundTechs;
  };

  const techStack = extractTechStack(currentExperience?.description || '');
  const achievements = currentExperience?.achievements || [];

  if (!currentExperience) {
    return (
      <div className="w-full mb-4 p-4 bg-[#ece9d8] border border-[#d4d0c8] rounded text-center text-gray-500">
        {t("cardExperience.none")}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.25,
        ease: "easeOut" 
      }}
      className="w-full mb-4 font-mono"
    >
      <div className="w-full border border-[#d4d0c8] rounded overflow-hidden bg-[#ece9d8]">
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#ece9d8] hover:bg-[#e0ddd4] transition-colors text-left"
        >
          <div className="flex flex-col gap-0.5">
            <h3 className="text-sm font-bold text-[#1a1a1a]">
              {currentExperience.title}
            </h3>
            <span className="text-[10px] text-gray-500 font-medium tracking-wide">
              {currentExperience.date}
            </span>
          </div>

          <div className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#d4d0c8] transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 text-[#1a1a1a] transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-[800px] opacity-100 border-t border-[#d4d0c8]' : 'max-h-0 opacity-0'
          }`}
        >
          <menu role="tablist" aria-label={t("cardExperience.tabsLabel")} className="flex border-b border-[#d4d0c8] bg-[#ece9d8]">
            <button 
              role="tab" 
              aria-selected={activeTab === 'tech'}
              aria-controls="tab-tech"
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-1.5 text-sm font-medium flex items-center gap-2 ${
                activeTab === 'tech' 
                  ? 'bg-[#ece9d8] border-l border-t border-r border-[#d4d0c8] rounded-t' 
                  : 'bg-transparent hover:bg-[#e5f3ff] rounded-t'
              }`}
            >
              <img src={TechIcon} alt={t("cardExperience.techAlt")} className="w-4 h-4" />
              {t("cardExperience.tech")}
            </button>
            <button 
              role="tab" 
              aria-selected={activeTab === 'achievements'}
              aria-controls="tab-achievements"
              onClick={() => setActiveTab('achievements')}
              className={`px-4 py-1.5 text-sm font-medium flex items-center gap-2 ${
                activeTab === 'achievements' 
                  ? 'bg-[#ece9d8] border-l border-t border-r border-[#d4d0c8] rounded-t' 
                  : 'bg-transparent hover:bg-[#e5f3ff] rounded-t'
              }`}
            >
              <img src={AchievementsIcon} alt={t("cardExperience.achievementsAlt")} className="w-4 h-4" />
              {t("cardExperience.achievements")}
            </button>
            <button 
              role="tab" 
              aria-selected={activeTab === 'details'}
              aria-controls="tab-details"
              onClick={() => setActiveTab('details')}
              className={`px-4 py-1.5 text-sm font-medium flex items-center gap-2 ${
                activeTab === 'details' 
                  ? 'bg-[#ece9d8] border-l border-t border-r border-[#d4d0c8] rounded-t' 
                  : 'bg-transparent hover:bg-[#e5f3ff] rounded-t'
              }`}
            >
              <img src={DetailsIcon} alt={t("cardExperience.detailsAlt")} className="w-4 h-4" />
              {t("cardExperience.details")}
            </button>
          </menu>

          <article 
            role="tabpanel" 
            id="tab-tech"
            hidden={activeTab !== 'tech'}
            className="p-4 min-h-[260px] bg-[#ece9d8] rounded-b overflow-y-auto"
          >
            <div className="space-y-3">
              <div className="font-medium text-[#316ac5] text-[11px] uppercase tracking-wide mb-1 flex items-center gap-2">
                <img src={TechIcon} alt={t("cardExperience.techAlt")} className="w-4 h-4" />
                {t("cardExperience.techStack", { title: currentExperience.title })}
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.length > 0 ? (
                  techStack.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))
                ) : (
                  <div className="text-sm text-gray-500">{t("cardExperience.noTech")}</div>
                )}
              </div>
            </div>
          </article>

          <article 
            role="tabpanel" 
            id="tab-achievements"
            hidden={activeTab !== 'achievements'}
            className="p-4 min-h-[260px] bg-[#ece9d8] rounded-b overflow-y-auto"
          >
            <div className="space-y-2">
              <div className="font-medium text-[#316ac5] text-[11px] uppercase tracking-wide mb-1 flex items-center gap-2">
                <img src={AchievementsIcon} alt={t("cardExperience.achievementsAlt")} className="w-4 h-4" />
                {t("cardExperience.achievementsTitle", { title: currentExperience.title })}
              </div>
              {achievements.length > 0 ? (
                <ul className="space-y-2">
                  {achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                      <span className="text-yellow-600 mt-0.5">🏆</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-sm text-gray-500">{t("cardExperience.noAchievements")}</div>
              )}
            </div>
          </article>

          <article 
            role="tabpanel" 
            id="tab-details"
            hidden={activeTab !== 'details'}
            className="p-3 min-h-[260px] bg-[#ece9d8] rounded-b overflow-y-auto"
          >
            <div className="space-y-2 text-xs leading-relaxed text-[#1a1a1a]">
              <div className="font-medium text-[#316ac5] text-[11px] uppercase tracking-wide mb-1 flex items-center gap-2">
                <img src={DetailsIcon} alt={t("cardExperience.detailsAlt")} className="w-4 h-4" />
                {t("cardExperience.description", { title: currentExperience.title })}
              </div>
              <p className="text-xs leading-relaxed whitespace-pre-wrap">
                {currentExperience.description}
              </p>
            </div>
          </article>
        </div>
      </div>
    </motion.div>
  );
};

export default CardExperience;