import NotepadIcon from "@/assets/icons/notepad.png";

interface DesktopIconsProps {
  onOpenNotepad: () => void;
}

const DesktopIcons = ({ onOpenNotepad }: DesktopIconsProps) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 80,
        height: "calc(100vh - 40px)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "10px 4px",
        zIndex: 1,
        pointerEvents: "auto",
      }}
    >
      <button
        onDoubleClick={onOpenNotepad}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          padding: "6px 4px",
          background: "transparent",
          border: "1px solid transparent",
          borderRadius: 4,
          cursor: "pointer",
          color: "white",
          fontSize: 11,
          fontFamily: "Tahoma, sans-serif",
          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
          textAlign: "center",
          width: 72,
          wordBreak: "break-word",
          lineHeight: 1.2,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "transparent";
        }}
      >
        <img
          src={NotepadIcon}
          alt="My Portfolio"
          style={{ width: 32, height: 32, imageRendering: "pixelated" }}
          draggable={false}
        />
        <span>My Portfolio</span>
      </button>
    </div>
  );
};

export default DesktopIcons;
