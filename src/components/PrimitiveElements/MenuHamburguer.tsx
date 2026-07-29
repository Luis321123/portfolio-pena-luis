import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const MenuHamburguer = ({ isChecked, setIsChecked }: Props) => {
  const [showNotification, setShowNotification] = useState(false);
  
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const scheduleNotification = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    const timerAppear = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

    timersRef.current.push(timerAppear);
  };

  useEffect(() => {
    scheduleNotification();

    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsChecked(!isChecked);
    
    if (showNotification) {
      setShowNotification(false);
      setTimeout(() => {
        
        if (!isChecked) {
          scheduleNotification();
        }
      }, 3000); 
    }
  };

  return (
    <div className="sticky top-2 items-center z-[999999] pr-6">
      
      <button
        onClick={handleToggleMenu}
        className={`
          w-10 h-10 flex items-center justify-center bg-[#c0c0c0] 
          border-2 
          ${isChecked 
            ? 'border-[#404040] border-r-[#f0f0f0] border-b-[#f0f0f0] translate-y-[1px] translate-x-[1px]' 
            : 'border-[#f0f0f0] border-r-[#404040] border-b-[#404040]'
          }
          active:border-[#404040] active:border-r-[#f0f0f0] active:border-b-[#f0f0f0] active:translate-y-[1px] active:translate-x-[1px]
          transition-colors
        `}
        aria-label={isChecked ? "Cerrar menú" : "Abrir menú"}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" className="transition-all duration-200">
          {isChecked ? (
            <path d="M6 6L18 18M18 6L6 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <g stroke="black" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="7" x2="18" y2="7" />
              <line x1="6" y1="12" x2="18" y2="12" />
              <line x1="6" y1="17" x2="18" y2="17" />
            </g>
          )}
        </svg>
      </button>

      <AnimatePresence>
        {showNotification && !isChecked && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 1.2,
              ease: "easeInOut"
            }}
            className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ y: [0, -5, 0, 5, 0] }}
              transition={{ 
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative bg-[#ffffe1] border-2 border-[#f0f0f0] border-r-[#404040] border-b-[#404040] px-3 py-1.5 rounded shadow-md whitespace-nowrap flex items-center gap-2"
            >
              <span className="text-xs text-[#316ac5] font-bold">📢 Click here!</span>

              <div 
                className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 
                border-t-[8px] border-t-transparent 
                border-b-[8px] border-b-transparent 
                border-l-[8px] border-l-[#ffffe1]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuHamburguer;