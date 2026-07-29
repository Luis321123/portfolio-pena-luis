import { getTechIcon } from "@/utils/techIcons";
import { useState } from "react";

interface TechBadgeProps {
  tech: string;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
  const icon = getTechIcon(tech);
  const [hasError, setHasError] = useState(false);
  const [useEmoji, setUseEmoji] = useState(!icon);
  
  const displayName = tech.replace(/api/i, '').trim();
  
  if (useEmoji || !icon) {
    return (
      <span className="inline-flex items-center gap-1.5 bg-[#d4d0c8] px-2.5 py-1.5 rounded text-xs text-[#1a1a1a] border border-[#d4d0c8]">
        <span className="text-sm">🔧</span>
        {displayName || tech}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 bg-[#d4d0c8] px-2.5 py-1.5 rounded text-xs text-[#1a1a1a] border border-[#d4d0c8]">
      <img 
        src={icon} 
        alt={tech} 
        className="w-4 h-4 object-contain"
        onError={() => {
          setHasError(true);
          setUseEmoji(true);
        }}
        onLoad={() => {
          console.log(`Icono cargado: ${tech}`);
        }}
      />
      {displayName || tech}
    </span>
  );
};

export default TechBadge;