import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import WindowsFullLogo from "@/assets/icons/wimdowsfull.png";

const SHUTDOWN_MS = 4500;

const ShutdownScreen = () => {
  const { t } = useTranslation();
  const [isOff, setIsOff] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const offTimer = setTimeout(() => setIsOff(true), SHUTDOWN_MS);
    return () => clearTimeout(offTimer);
  }, []);

  useEffect(() => {
    if (!isOff) return;
    const hintTimer = setTimeout(() => setShowHint(true), 1500);
    const powerOn = () => window.location.reload();
    window.addEventListener("click", powerOn);
    window.addEventListener("keydown", powerOn);
    return () => {
      clearTimeout(hintTimer);
      window.removeEventListener("click", powerOn);
      window.removeEventListener("keydown", powerOn);
    };
  }, [isOff]);

  return (
    <div
      className="shutdown-screen"
      role="dialog"
      aria-label={t("shutdown.shuttingDown")}
    >
      {!isOff ? (
        <>
          <div className="shutdown-header" />
          <div className="shutdown-body">
            <img
              src={WindowsFullLogo}
              alt={t("shutdown.windows")}
              className="shutdown-logo"
            />
            <span className="shutdown-dialog-text">
              {t("shutdown.shuttingDown")}
            </span>
          </div>
          <div className="shutdown-footer" />
        </>
      ) : (
        <div className="shutdown-off">
          {showHint && (
            <button className="shutdown-power-btn" type="button">
              {t("shutdown.clickToTurnOn")}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ShutdownScreen;
