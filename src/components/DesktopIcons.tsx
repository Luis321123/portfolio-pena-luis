import { useState, useRef, useCallback, useEffect } from "react";
import PortfolioIcon from "@/assets/icons/explorer.png";
import ComputerIcon from "@/assets/icons/mypc.png";
import NotepadAppIcon from "@/assets/icons/notepad.png";
import DocumentsIcon from "@/assets/icons/documents.png";

interface DesktopIconsProps {
  onOpenPortfolio: () => void;
  onOpenNotepadApp: () => void;
  onOpenMyDocuments: () => void;
}

interface IconDef {
  id: string;
  label: string;
  icon: string;
  onDoubleClick: () => void;
}

const ICON_WIDTH = 72;
const ICON_HEIGHT = 76;
const TASKBAR_HEIGHT = 40;
const STORAGE_KEY = "desktop-icon-positions";

const iconButtonStyle: React.CSSProperties = {
  position: "absolute",
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
  width: ICON_WIDTH,
  wordBreak: "break-word",
  lineHeight: 1.2,
  userSelect: "none",
};

const loadPositions = (): Record<string, { x: number; y: number }> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return {};
};

const DesktopIcons = ({ onOpenPortfolio, onOpenNotepadApp, onOpenMyDocuments }: DesktopIconsProps) => {
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>(loadPositions);
  const [selected, setSelected] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number; moved: boolean } | null>(null);
  const justDraggedRef = useRef(false);
  const positionsRef = useRef(positions);
  positionsRef.current = positions;

  const icons: IconDef[] = [
    { id: "portfolio", label: "My Portfolio", icon: PortfolioIcon, onDoubleClick: onOpenPortfolio },
    { id: "mypc", label: "Mi PC", icon: ComputerIcon, onDoubleClick: () => {} },
    { id: "documents", label: "Mis documentos", icon: DocumentsIcon, onDoubleClick: onOpenMyDocuments },
    { id: "notepad", label: "Notepad", icon: NotepadAppIcon, onDoubleClick: onOpenNotepadApp },
  ];

  const defaultPositions: Record<string, { x: number; y: number }> = {
    portfolio: { x: 4, y: 10 },
    mypc: { x: 4, y: 92 },
    documents: { x: 4, y: 174 },
    notepad: { x: 4, y: 256 },
  };

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    justDraggedRef.current = false;
    const pos = positions[id] ?? defaultPositions[id] ?? { x: 4, y: 10 };
    dragRef.current = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y, moved: false };
    setSelected(id);
    setDraggingId(id);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragRef.current || !draggingId) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      if (Math.abs(dx) + Math.abs(dy) > 4) dragRef.current.moved = true;

      const maxX = Math.max(0, window.innerWidth - ICON_WIDTH - 8);
      const maxY = Math.max(0, window.innerHeight - TASKBAR_HEIGHT - ICON_HEIGHT - 4);
      const x = Math.min(Math.max(0, dragRef.current.origX + dx), maxX);
      const y = Math.min(Math.max(0, dragRef.current.origY + dy), maxY);

      setPositions((prev) => ({ ...prev, [draggingId]: { x, y } }));
    },
    [draggingId]
  );

  const handleMouseUp = useCallback(() => {
    if (dragRef.current) {
      if (dragRef.current.moved && draggingId) {
        const pos = positionsRef.current[draggingId];
        if (pos) {
          const next = { ...positionsRef.current, [draggingId]: pos };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        }
        justDraggedRef.current = true;
      }
    }
    dragRef.current = null;
    setDraggingId(null);
  }, [draggingId]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: `calc(100vh - ${TASKBAR_HEIGHT}px)`,
        zIndex: 1,
        pointerEvents: "auto",
      }}
      onMouseDown={() => setSelected(null)}
    >
      {icons.map((icon, index) => {
        const pos = positions[icon.id] ?? defaultPositions[icon.id] ?? { x: 4, y: 10 + index * 82 };
        const isSelected = selected === icon.id;
        return (
          <button
            key={icon.id}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleMouseDown(e, icon.id);
            }}
            onClick={() => {
              if (justDraggedRef.current) return;
              setSelected(icon.id);
            }}
            onDoubleClick={() => {
              if (justDraggedRef.current) return;
              icon.onDoubleClick();
            }}
            style={{
              ...iconButtonStyle,
              left: pos.x,
              top: pos.y,
              background: isSelected ? "rgba(49,106,197,0.6)" : "transparent",
              border: isSelected ? "1px solid rgba(255,255,255,0.4)" : "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (selected !== icon.id) {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== icon.id) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "transparent";
              }
            }}
          >
            <img
              src={icon.icon}
              alt={icon.label}
              style={{ width: 32, height: 32, imageRendering: "pixelated", pointerEvents: "none" }}
              draggable={false}
            />
            <span style={{ pointerEvents: "none" }}>{icon.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DesktopIcons;
