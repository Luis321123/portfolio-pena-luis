import { detail } from "@/services/Details"; 
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface CardExperienceProps {
  index: number;
}

const CardExperience = ({ index }: CardExperienceProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState<'tech' | 'achievements' | 'details'>('tech');

  const getExperienceIndex = (cardIndex: number, offset: number) => {
    const total = detail.length;
    return (cardIndex + offset) % total;
  };

  const techIndex = getExperienceIndex(index, 1); 
  const achievementsIndex = getExperienceIndex(index, 2); 
  const detailsIndex = getExperienceIndex(index, 0);      

  const techExperience = detail[techIndex];
  const achievementsExperience = detail[achievementsIndex];
  const detailsExperience = detail[detailsIndex];

  const extractTechStack = (description: string) => {
    const techs = description.match(/[•]\s*([^•\n]+)/g) || [];
    return techs.map(t => t.replace('•', '').trim());
  };

  const extractAchievements = (description: string) => {
    const achievements = description.match(/[•]\s*([^•\n]+)/g) || [];
    return achievements.slice(0, 3).map(t => t.replace('•', '').trim());
  };

  const techStack = extractTechStack(techExperience?.description || '');
  const achievements = extractAchievements(achievementsExperience?.description || '');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.25,
        ease: "easeOut" 
      }}
      className="w-full mb-4 font-mono"
    >
      <div className="w-full">
        <menu role="tablist" aria-label="Experience Tabs" className="flex border-b border-[#d4d0c8]">
          <button 
            role="tab" 
            aria-selected={activeTab === 'tech'}
            aria-controls="tab-tech"
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-1.5 text-sm font-medium ${
              activeTab === 'tech' 
                ? 'bg-[#ece9d8] border-l border-t border-r border-[#d4d0c8] rounded-t' 
                : 'bg-transparent hover:bg-[#e5f3ff] rounded-t'
            }`}
          >
            Tech
          </button>
          <button 
            role="tab" 
            aria-selected={activeTab === 'achievements'}
            aria-controls="tab-achievements"
            onClick={() => setActiveTab('achievements')}
            className={`px-4 py-1.5 text-sm font-medium ${
              activeTab === 'achievements' 
                ? 'bg-[#ece9d8] border-l border-t border-r border-[#d4d0c8] rounded-t' 
                : 'bg-transparent hover:bg-[#e5f3ff] rounded-t'
            }`}
          >
            Achiev.
          </button>
          <button 
            role="tab" 
            aria-selected={activeTab === 'details'}
            aria-controls="tab-details"
            onClick={() => setActiveTab('details')}
            className={`px-4 py-1.5 text-sm font-medium ${
              activeTab === 'details' 
                ? 'bg-[#ece9d8] border-l border-t border-r border-[#d4d0c8] rounded-t' 
                : 'bg-transparent hover:bg-[#e5f3ff] rounded-t'
            }`}
          >
            Details
          </button>
        </menu>

        {/* Tab panels */}
        <article 
          role="tabpanel" 
          id="tab-tech"
          hidden={activeTab !== 'tech'}
          className="p-4 min-h-[260px] bg-[#ece9d8] border-x border-b border-[#d4d0c8] rounded-b overflow-y-auto"
        >
          <div className="space-y-2">
            <div className="font-medium text-[#316ac5] text-[11px] uppercase tracking-wide mb-1">
              🔧 Tech Stack - {techExperience?.title || 'N/A'}
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.length > 0 ? (
                techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-[#d4d0c8] px-2.5 py-1.5 rounded text-xs text-[#1a1a1a] border border-[#d4d0c8]"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <div className="text-sm text-gray-500">No tech stack listed</div>
              )}
            </div>
          </div>
        </article>

        <article 
          role="tabpanel" 
          id="tab-achievements"
          hidden={activeTab !== 'achievements'}
          className="p-4 min-h-[260px] bg-[#ece9d8] border-x border-b border-[#d4d0c8] rounded-b overflow-y-auto"
        >
          <div className="space-y-2">
            <div className="font-medium text-[#316ac5] text-[11px] uppercase tracking-wide mb-1">
              🏆 Achievements - {achievementsExperience?.title || 'N/A'}
            </div>
            {achievements.length > 0 ? (
              achievements.map((achievement, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                  <span className="text-yellow-600">*</span>
                  <span>{achievement}</span>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500">No achievements listed</div>
            )}
          </div>
        </article>

        <article 
          role="tabpanel" 
          id="tab-details"
          hidden={activeTab !== 'details'}
          className="p-3 min-h-[260px] bg-[#ece9d8] border-x border-b border-[#d4d0c8] rounded-b overflow-y-auto"
        >
          <div className="space-y-2 text-xs leading-relaxed text-[#1a1a1a]">
            <div className="font-medium text-[#316ac5] text-[11px] uppercase tracking-wide mb-1">
              📋 Description - {detailsExperience?.title || 'N/A'}
            </div>
            <p className="text-xs leading-relaxed whitespace-pre-wrap">
              {detailsExperience?.description || 'No description available'}
            </p>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default CardExperience;