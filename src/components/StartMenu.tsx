import WindowsLogo from "../../public/Windows XP.ico";
import MyPcIcon from "@/assets/icons/mypc.png";
import DocumentsIcon from "@/assets/icons/documents.png";
import NotepadIcon from "@/assets/icons/notepad.png";
import ExplorerIcon from "@/assets/icons/explorer.ico";
import MusicIcon from "@/assets/icons/music.png";
import QuitIcon from "@/assets/icons/quit.svg";
import ToolsIcon from "@/assets/icons/tools.svg";
import WoWIcon from "@/assets/icons/WoW.svg";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWoW?: () => void;
}

const MENU_WIDTH = 340;
const MENU_HEIGHT = 440;
const TASKBAR_HEIGHT = 40;

const StartMenu = ({ isOpen, onClose, onOpenWoW }: StartMenuProps) => {
  if (!isOpen) return null;

  const leftItems = [
    { icon: ExplorerIcon, label: "Internet" },
    { icon: NotepadIcon, label: "Notepad" },
    { icon: MusicIcon, label: "Music Player" },
    { icon: NotepadIcon, label: "My Portfolio" },
  ];

  const rightItems = [
    { icon: WoWIcon, label: "World of Warcraft", action: onOpenWoW },
    { icon: DocumentsIcon, label: "My Documents" },
    { icon: MyPcIcon, label: "My Computer" },
    { icon: ToolsIcon, label: "Control Panel" },
    { icon: QuitIcon, label: "Printers and Faxes" },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: TASKBAR_HEIGHT,
          left: 0,
          width: MENU_WIDTH,
          height: MENU_HEIGHT,
          background: "#fff",
          border: "2px solid #0a3fa0",
          borderBottom: "none",
          boxShadow: "2px -2px 6px rgba(0,0,0,0.3)",
          zIndex: 99999998,
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
          }}
        >
          <div
            style={{
              width: 200,
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
              Programs
            </div>

            {leftItems.map((item, idx) => (
              <button
                key={idx}
                onClick={onClose}
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
              Places
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
            <span>Log Off</span>
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
            <span>Turn Off Computer</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default StartMenu;
