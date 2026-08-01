import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import soundFile from "../../assets/sounds/exclamation.mp3";

interface WindowsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  icon?: 'warning' | 'info' | 'error' | 'question';
}

const WindowsDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message,
  icon = 'warning'
}: WindowsDialogProps) => {
  const { t } = useTranslation();
  const dialogTitle = title ?? t("dialog.warning");
  const dialogMessage = message ?? t("dialog.confirmExpand");
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.log("No se pudo reproducir el audio automático:", error);
      });
    }
  }, [isOpen]);

  const getIcon = () => {
    switch(icon) {
      case 'warning':
        return (
          <div className="flex-shrink-0 text-3xl">
            <span role="img" aria-label="warning">⚠️</span>
          </div>
        );
      case 'error':
        return (
          <div className="flex-shrink-0 text-3xl text-red-600">
            <span role="img" aria-label="error">❌</span>
          </div>
        );
      case 'question':
        return (
          <div className="flex-shrink-0 text-3xl text-blue-600">
            <span role="img" aria-label="question">❓</span>
          </div>
        );
      default:
        return (
          <div className="flex-shrink-0 text-3xl text-blue-600">
            <span role="img" aria-label="info">ℹ️</span>
          </div>
        );
    }
  };

  return (
    <>
      <audio ref={audioRef} src={soundFile} preload="auto" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="window"
              style={{ width: '380px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="title-bar">
                <div className="title-bar-text">{dialogTitle}</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize" onClick={onClose}></button>
                  <button aria-label="Maximize" onClick={onClose}></button>
                  <button aria-label="Close" onClick={onClose}></button>
                </div>
              </div>

              <div className="window-body">
                <div className="flex items-start gap-3">
                  {/* Icono */}
                  {getIcon()}
                  {/* Mensaje */}
                  <p className="text-sm text-[#1a1a1a] font-medium font-[Segoe UI] leading-relaxed pt-0.5">
                    {dialogMessage}
                  </p>
                </div>
                
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => {
                      onConfirm();
                      onClose();
                    }}
                    className="px-4 py-1 bg-[#c0c0c0] border-2 border-[#fdfdfd] border-r-[#404040] border-b-[#404040] hover:bg-[#d5d5d5] active:border-[#404040] active:border-r-[#fdfdfd] active:border-b-[#fdfdfd] text-sm font-medium font-[Segoe UI] min-w-[75px]"
                  >
                    {t("dialog.yes")}
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-1 bg-[#c0c0c0] border-2 border-[#fdfdfd] border-r-[#404040] border-b-[#404040] hover:bg-[#d5d5d5] active:border-[#404040] active:border-r-[#fdfdfd] active:border-b-[#fdfdfd] text-sm font-medium font-[Segoe UI] min-w-[75px]"
                  >
                    {t("dialog.no")}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WindowsDialog;