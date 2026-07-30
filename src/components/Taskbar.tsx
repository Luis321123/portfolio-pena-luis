import { useState } from "react";
import { useClock } from "@/hooks/useClock";
import CalendarXP from "../components/calendar";

import WindowsLogo from "../../public/Windows XP.ico";
import FolderIcon from "@/assets/icons/documents.png";
import ComputerIcon from "@/assets/icons/mypc.png";
import Notepad from "@/assets/icons/notepad.png";
import InternetIcon from "@/assets/icons/explorer.ico";
import MusicIcon from "@/assets/icons/music.png";
import VolumeIcon from "@/assets/icons/volume.png";
import virtualboxicon from "@/assets/icons/virtualbox.svg";
import WoWIcon from "@/assets/icons/WoW.svg";

const TASKBAR_HEIGHT = 40;

interface TaskbarProps {
  onStartMenuClick?: () => void;
  isWoWOpen?: boolean;
  onWowClick?: () => void;
  isPortfolioOpen?: boolean;
  isPortfolioMinimized?: boolean;
  onPortfolioClick?: () => void;
}

const TASKBAR_ICONS = [
  { id: 1, name: "Mi PC", icon: ComputerIcon, action: () => console.log("Mi PC") },
  { id: 2, name: "Documentos", icon: FolderIcon, action: () => console.log("Documentos") },
  { id: 3, name: "Explorer", icon: InternetIcon, action: () => console.log("Internet Explorer") },
  { id: 4, name: "Ares", icon: MusicIcon, action: () => console.log("Reproductor") },
];

const NOTIFICATION_ICONS = [
  { id: 1, icon: VolumeIcon, tooltip: "Volumen" },
  { id: 2, icon: virtualboxicon, tooltip: "VirtualBox" },
];

export const Taskbar = ({ 
  onStartMenuClick,
  isWoWOpen,
  onWowClick,
  isPortfolioOpen,
  isPortfolioMinimized,
  onPortfolioClick,
}: TaskbarProps) => {
  const [showClockTooltip, setShowClockTooltip] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const { time, date } = useClock();

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
    setShowClockTooltip(false);
  };

  return (
    <>
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
          zIndex: 9999999999,
          padding: "0 3px",
          fontFamily: "Tahoma, Segoe UI, sans-serif",
          userSelect: "none",
        }}
      >
        <button
          onClick={onStartMenuClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            height: 30,
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
          <img 
            src={WindowsLogo} 
            alt="Windows" 
            style={{ width: 18, height: 18, flexShrink: 0 }} 
          />
          Start
        </button>

        <div style={{ 
          width: 2, 
          height: 30, 
          background: "#14367f", 
          borderRight: "1px solid rgba(255,255,255,0.25)", 
          margin: "0 6px" 
        }} />

        <div style={{ 
          flex: 1, 
          display: "flex", 
          alignItems: "center", 
          gap: 4, 
          height: "100%", 
          overflow: "hidden" 
        }}>

          {isWoWOpen && (
            <button
              onClick={onWowClick}
              style={{
                height: 28,
                minWidth: 140,
                maxWidth: 200,
                padding: "0 10px",
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "linear-gradient(to bottom, #3f7ee8 0%, #2c5fc7 100%)",
                border: "1px solid #14367f",
                borderRadius: 3,
                color: "white",
                fontSize: 12,
                cursor: "pointer",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              <img 
                src={WoWIcon} 
                alt="WoW" 
                style={{ width: 20, height: 20, flexShrink: 0 }} 
              />
              <span>World of Warcraft</span>
            </button>
          )}

          {isPortfolioOpen && (
            <button
              onClick={onPortfolioClick}
              style={{
                height: 28,
                minWidth: 140,
                maxWidth: 200,
                padding: "0 10px",
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: isPortfolioMinimized
                  ? "linear-gradient(to bottom, #3f7ee8 0%, #2c5fc7 100%)"
                  : "linear-gradient(to bottom, #1c3f8f 0%, #14337a 100%)",
                border: isPortfolioMinimized ? "1px solid #14367f" : "1px solid #0a2454",
                boxShadow: isPortfolioMinimized ? "none" : "inset 1px 1px 2px rgba(0,0,0,0.5)",
                borderRadius: 3,
                color: "white",
                fontSize: 12,
                cursor: "pointer",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              <img 
                src={Notepad} 
                alt="Portfolio" 
                style={{ width: 20, height: 20, flexShrink: 0 }} 
              />
              <span>Notepad - My Portfolio</span>
              {isPortfolioMinimized && (
                <span style={{ 
                  fontSize: 10, 
                  opacity: 0.7, 
                  marginLeft: 4,
                  background: "rgba(255,255,255,0.15)",
                  padding: "0 6px",
                  borderRadius: 2
                }}>
                  minimizado
                </span>
              )}
            </button>
          )}

          {TASKBAR_ICONS.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              style={{
                height: 28,
                padding: "0 10px",
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: "transparent",
                border: "1px solid transparent",
                borderRadius: 3,
                color: "white",
                fontSize: 12,
                cursor: "pointer",
                transition: "all 0.2s",
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
                src={item.icon} 
                alt={item.name} 
                style={{ width: 18, height: 18, flexShrink: 0 }} 
              />
              <span style={{ fontSize: 11 }}>{item.name}</span>
            </button>
          ))}
        </div>

        <div style={{ 
          width: 2, 
          height: 30, 
          background: "#14367f", 
          borderRight: "1px solid rgba(255,255,255,0.25)", 
          margin: "0 6px" 
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: 4, height: "100%" }}>
          
          {NOTIFICATION_ICONS.map((item) => (
            <div
              key={item.id}
              style={{
                height: 26,
                width: 26,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
              title={item.tooltip}
            >
              <img 
                src={item.icon} 
                alt={item.tooltip} 
                style={{ width: 16, height: 16 }} 
              />
            </div>
          ))}

          <div style={{ 
            width: 2, 
            height: 26, 
            background: "#14367f", 
            borderRight: "1px solid rgba(255,255,255,0.25)", 
            margin: "0 4px" 
          }} />

          <div
            onClick={toggleCalendar}
            onMouseEnter={() => setShowClockTooltip(true)}
            onMouseLeave={() => {
              if (!showCalendar) {
                setShowClockTooltip(false);
              }
            }}
            style={{
              position: "relative",
              height: 28,
              padding: "0 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(to bottom, #1941a5 0%, #163a8f 100%)",
              border: "1px solid #0a2454",
              boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.4)",
              borderRadius: "6px 3px 3px 6px",
              color: "white",
              fontSize: 12,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: 13 }}>{time}</span>

            {showClockTooltip && !showCalendar && (
              <div
                style={{
                  position: "absolute",
                  bottom: 32,
                  right: 0,
                  background: "#ffffe1",
                  border: "1px solid #000",
                  color: "#000",
                  fontSize: 11,
                  padding: "4px 10px",
                  whiteSpace: "nowrap",
                  boxShadow: "1px 1px 3px rgba(0,0,0,0.4)",
                  borderRadius: 2,
                  zIndex: 999999,
                }}
              >
                {date}
              </div>
            )}
          </div>
        </div>
      </div>

      <CalendarXP 
        isOpen={showCalendar} 
        onClose={() => setShowCalendar(false)} 
      />
    </>
  );
};