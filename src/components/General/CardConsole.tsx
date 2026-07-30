import { experiences } from "@/services/experiences"; 
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { getRandomPath } from "@/constants/path";
import WindowsDialog from "@/components/Animates/WindowsDialog";

interface CardConsoleProps {
  index: number;
}

const CardConsole = ({ index }: CardConsoleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldType, setShouldType] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const getSafeExperience = (idx: number) => {
    const total = experiences.length;
    if (total === 0) return null;
    const safeIndex = ((idx % total) + total) % total;
    return experiences[safeIndex];
  };

  const experience = getSafeExperience(index);
  const path = getRandomPath();

  if (!experience) {
    return (
      <div className="w-full mb-4 p-4 bg-[#c0c0c0] border border-[#d4d0c8] text-center text-gray-500">
        No experience available
      </div>
    );
  }

  const buildLines = () => {
    const lines = [
      `Microsoft(R) Windows DOS`,
      `<C> Copyright Microsoft Corp 1990-2001.`,
      ``,
      `${path}> ${experience.title}`,
      ``,
      `│ ${experience.date}`,
      `│`,
      ...experience.description.split('\n').map(line => `│ ${line}`),
      ``,
      `${path}>`
    ];
    return lines;
  };

  const fullLines = buildLines();

  useEffect(() => {
    if (!shouldType) return;

    if (currentLineIndex < fullLines.length) {
      const currentLine = fullLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayLines(prev => {
            const newLines = [...prev];
            if (newLines.length <= currentLineIndex) {
              newLines.push('');
            }
            const updatedLines = [...newLines];
            updatedLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
            return updatedLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 10);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 50);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsComplete(true);
    }
  }, [shouldType, currentLineIndex, currentCharIndex, fullLines]);

  useEffect(() => {
    if (isInView) {
      setShouldType(true);
    }
  }, [isInView]);

  const consoleHeight = isExpanded ? 'h-[400px]' : 'h-[200px]';

  const handleExpandClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setShowDialog(true);
    }
  };

  const handleConfirmExpand = () => {
    setIsExpanded(true);
    setShowDialog(false);
  };

  return (
    <>
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
        {!isComplete && (
          <div className="flex items-center gap-2 mb-1 px-2 py-1 bg-[#ece9d8] justify-center border border-[#d4d0c8] rounded-sm">
            <progress className="w-[100px]"></progress>
            <span style={{ fontSize: '11px', color: '#333' }}>Loading...</span>
          </div>
        )}

        <div className="window">
          <div 
            className="title-bar" 
            style={{ 
              padding: '6px 10px', 
              minHeight: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between' 
            }}
          >
            <div 
              className="title-bar-text" 
              style={{ 
                fontSize: '14px', 
                fontWeight: 'bold',
                maxWidth: 'calc(100% - 150px)', 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis' 
              }}
              title={experience.title} 
            >
              {experience.title}
            </div>
            
            <div className="title-bar-controls" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {isComplete && (
                <button
                  onClick={handleExpandClick}
                  className="px-4 py-1 bg-[#c0c0c0] border border-[#fdfdfd] border-t-[#808080] border-l-[#808080] text-sm text-black hover:bg-[#d5d5d5] active:border-[#404040] rounded-sm font-medium"
                  style={{ fontSize: '12px' }}
                >
                  {isExpanded ? '▲ Collapse' : '▼ Expand'}
                </button>
              )}
            </div>
          </div>

          <div className="window-body" style={{ padding: 0 }}>
            <div 
              className={`bg-black text-[#00ff00] p-4 ${consoleHeight} overflow-hidden transition-all duration-300 relative`}
            >
              <div className={`h-full ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}>
                <pre className="text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap font-mono">
                  {displayLines.map((line, lineIndex) => (
                    <div key={lineIndex}>
                      {line}
                      {lineIndex === displayLines.length - 1 && !isComplete && shouldType && (
                        <span className="inline-block w-2 h-4 bg-[#00ff00] animate-pulse" />
                      )}
                    </div>
                  ))}
                  {isComplete && (
                    <div className="animate-pulse">_</div>
                  )}
                </pre>
              </div>
              
              {isComplete && !isExpanded && displayLines.length > 10 && (
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <WindowsDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onConfirm={handleConfirmExpand}
        title="Warning"
        message="Are you sure you want to expand?"
        icon="warning"
      />
    </>
  );
};

export default CardConsole;