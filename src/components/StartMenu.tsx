import WindowsLogo from "../../public/Windows XP.ico";
import MyPcIcon from "@/assets/icons/mypc.png";
import DocumentsIcon from "@/assets/icons/documents.png";
import NotepadIcon from "@/assets/icons/notepad.png";
import ExplorerIcon from "@/assets/icons/explorer.ico";
import MusicIcon from "@/assets/icons/music.png";
import PaintIcon from "@/assets/icons/paint.png";
import QuitIcon from "@/assets/icons/printer.png";
import ToolsIcon from "@/assets/icons/control.png";
import WoWIcon from "@/assets/icons/WoW.svg";
import MinesweeperIcon from "@/assets/icons/minessweeper.png";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTranslation } from "react-i18next";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWoW?: () => void;
  onOpenPortfolio?: () => void;
  onOpenMinesweeper?: () => void;
  onOpenNotepadApp?: () => void;
  onOpenMyDocuments?: () => void;
  onOpenAres?: () => void;
  onOpenPaint?: () => void;
}

const MENU_WIDTH = 340;
const MENU_HEIGHT = 440;
const TASKBAR_HEIGHT = 40;

const StartMenu = ({ isOpen, onClose, onOpenWoW, onOpenPortfolio, onOpenMinesweeper, onOpenNotepadApp, onOpenMyDocuments, onOpenAres, onOpenPaint }: StartMenuProps) => {
  const { t } = useTranslation();
  const isMobile = useIsMobile(768);

  if (!isOpen) return null;

  const leftItems = [
    { icon: NotepadIcon, label: t("startMenu.notepad"), action: onOpenNotepadApp },
    { icon: PaintIcon, label: t("startMenu.paint"), action: onOpenPaint },
    { icon: MusicIcon, label: t("startMenu.ares"), action: onOpenAres },
    { icon: ExplorerIcon, label: t("startMenu.myPortfolio"), action: onOpenPortfolio },
    { icon: MinesweeperIcon, label: t("startMenu.minesweeper"), action: onOpenMinesweeper },
  ];

  const rightItems = [
    { icon: WoWIcon, label: t("startMenu.worldOfWarcraft"), action: onOpenWoW },
    { icon: DocumentsIcon, label: t("startMenu.myDocuments"), action: onOpenMyDocuments },
    { icon: MyPcIcon, label: t("startMenu.myComputer") },
    { icon: ToolsIcon, label: t("startMenu.controlPanel") },
    { icon: QuitIcon, label: t("startMenu.printers") },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: TASKBAR_HEIGHT,
          left: 0,
          width: isMobile ? "100%" : MENU_WIDTH,
          height: isMobile ? `calc(100vh - ${TASKBAR_HEIGHT}px)` : MENU_HEIGHT,
          background: "#fff",
          border: "2px solid #0a3fa0",
          borderBottom: "none",
          boxShadow: "2px -2px 6px rgba(0,0,0,0.3)",
          zIndex: 99999999998,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Tahoma, Segoe UI, sans-serif",
          userSelect: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            overflowY: isMobile ? "auto" : "visible",
          }}
        >
          <div
            style={{
              width: isMobile ? "42%" : 200,
              minWidth: isMobile ? 120 : 200,
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              padding: "6px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 10px 10px 10px",
                borderBottom: "1px solid #d4d0c8",
                marginBottom: 4,
              }}
            >
              <img
                src={WindowsLogo}
                alt="Windows XP"
                style={{ width: 24, height: 24 }}
              />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "#000",
                  fontStyle: "italic",
                }}
              >
                Windows XP
              </span>
            </div>

            <div style={{ fontSize: 12, color: "#333", padding: "2px 10px", fontWeight: "bold" }}>
              {t("startMenu.programs")}
            </div>

            {leftItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action?.();
                  onClose();
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 10px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 12,
                  color: "#000",
                  textAlign: "left",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#d4e0f9";
                  e.currentTarget.style.borderRadius = "3px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <img src={item.icon} alt="" style={{ width: 20, height: 20 }} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div
            style={{
              width: 1,
              background: "#d4d0c8",
              margin: "8px 0",
            }}
          />

          <div
            style={{
              flex: 1,
              background:
                "linear-gradient(to bottom, #fff 0%, #e8e6dc 100%)",
              padding: "6px 0",
            }}
          >
            <div style={{ fontSize: 12, color: "#333", padding: "2px 10px", fontWeight: "bold" }}>
              {t("startMenu.places")}
            </div>

            {rightItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { item.action?.(); onClose(); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "5px 10px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 12,
                  color: "#000",
                  textAlign: "left",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#d4e0f9";
                  e.currentTarget.style.borderRadius = "3px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <img src={item.icon} alt="" style={{ width: 20, height: 20 }} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4px 8px",
            borderTop: "2px solid #0a3fa0",
            background: "linear-gradient(to bottom, #245edb 0%, #1941a5 50%, #1941a5 100%)",
          }}
        >
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "3px 10px",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 3,
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: 12,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
          >
            <img src={QuitIcon} alt="" style={{ width: 16, height: 16 }} />
            <span>{t("startMenu.logOff")}</span>
          </button>

          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "3px 10px",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 3,
              background: "rgba(255,255,255,0.1)",
              color: "white",
              fontSize: 12,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
          >
            <span>{t("startMenu.turnOff")}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StartMenu;
