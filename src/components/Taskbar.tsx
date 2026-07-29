import { useState } from "react";
import { useClock } from "@/hooks/useClock";
import WindowsLogo from "../../public/Windows XP.ico";

const TASKBAR_HEIGHT = 30;

interface TaskbarProps {
  isMinimized: boolean;
  onTaskbarClick: () => void;
}

export const Taskbar = ({ isMinimized, onTaskbarClick }: TaskbarProps) => {
  const [showClockTooltip, setShowClockTooltip] = useState(false);
  const { time, date } = useClock();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: TASKBAR_HEIGHT,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(to bottom, #245edb 0%, #1941a5 50%, #1941a5 100%)",
        borderTop: "1px solid #0a3fa0",
        boxShadow: "0 -1px 0 rgba(255,255,255,0.2) inset",
        zIndex: 999999,
        padding: "0 3px",
        fontFamily: "Tahoma, Segoe UI, sans-serif",
        userSelect: "none",
      }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          height: 24,
          padding: "0 12px 0 6px",
          background: "linear-gradient(to bottom, #4fc44f 0%, #2d8b39 45%, #1f6e2b 100%)",
          border: "1px solid #1a5c22",
          borderRadius: "3px 6px 6px 3px",
          color: "white",
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: 13,
          cursor: "pointer",
          textShadow: "1px 1px 1px rgba(0,0,0,0.4)",
        }}
      >
        <img src={WindowsLogo} alt="Windows" style={{ width: 16, height: 16, flexShrink: 0 }} />
        inicio
      </button>

      <div style={{ width: 2, height: 22, background: "#14367f", borderRight: "1px solid rgba(255,255,255,0.25)", margin: "0 6px" }} />

      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 4, height: "100%" }}>
        <button
          onClick={onTaskbarClick}
          style={{
            height: 22,
            minWidth: 150,
            maxWidth: 200,
            padding: "0 10px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: isMinimized
              ? "linear-gradient(to bottom, #3f7ee8 0%, #2c5fc7 100%)"
              : "linear-gradient(to bottom, #1c3f8f 0%, #14337a 100%)",
            border: isMinimized ? "1px solid #14367f" : "1px solid #0a2454",
            boxShadow: isMinimized ? "none" : "inset 1px 1px 2px rgba(0,0,0,0.5)",
            borderRadius: 3,
            color: "white",
            fontSize: 12,
            cursor: "pointer",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <span>🗔</span>
          My porfolio.exe
        </button>
      </div>

      <div style={{ width: 2, height: 22, background: "#14367f", borderRight: "1px solid rgba(255,255,255,0.25)", margin: "0 6px" }} />

      <div
        onMouseEnter={() => setShowClockTooltip(true)}
        onMouseLeave={() => setShowClockTooltip(false)}
        style={{
          position: "relative",
          height: 22,
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(to bottom, #1941a5 0%, #163a8f 100%)",
          border: "1px solid #0a2454",
          boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.4)",
          borderRadius: "6px 3px 3px 6px",
          color: "white",
          fontSize: 12,
          cursor: "default",
        }}
      >
        {time}

        {showClockTooltip && (
          <div
            style={{
              position: "absolute",
              bottom: 28,
              right: 0,
              background: "#ffffe1",
              border: "1px solid #000",
              color: "#000",
              fontSize: 11,
              padding: "3px 8px",
              whiteSpace: "nowrap",
              boxShadow: "1px 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            {date}
          </div>
        )}
      </div>
    </div>
  );
};