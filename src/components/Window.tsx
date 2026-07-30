import { useDragWindow } from "../hooks/useDragWindows";

interface WindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
}

const Window = ({ isOpen, onClose, title, children, initialWidth = 600, initialHeight = 400 }: WindowProps) => {
  const { position, dragRef, handleMouseDown, isDragging } = useDragWindow({ x: 100, y: 50 });

  if (!isOpen) return null;

  return (
    <div
      ref={dragRef}
      className="window"
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: initialWidth,
        height: initialHeight,
        zIndex: 99999999,
        cursor: isDragging ? "grabbing" : "default",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="title-bar"
        onMouseDown={handleMouseDown}
        style={{ cursor: "grab", padding: "0 8px", height: 28, minHeight: 28 }}
      >
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={onClose}>
            <span className="sr-only">Cerrar</span>
          </button>
        </div>
      </div>

      <div className="window-body" style={{ height: "calc(100% - 28px)", padding: 0, overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
};

export default Window;
