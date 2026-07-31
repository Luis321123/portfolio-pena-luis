import { useState, useEffect } from 'react';
import { useDragWindow } from "../hooks/useDragWindows";
import { useResizeWindow } from "../hooks/useResizeWindows";

const TASKBAR_HEIGHT = 40;

interface WindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
  scrollable?: boolean;
  isMinimized?: boolean;
  onMinimize?: () => void;
  isMaximized?: boolean;
  onMaximizeChange?: (value: boolean) => void;
}

const Window = ({
  isOpen,
  onClose,
  title,
  children,
  initialWidth = 600,
  initialHeight = 400,
  scrollable = false,
  isMinimized = false,
  onMinimize,
  isMaximized = false,
  onMaximizeChange,
}: WindowProps) => {
  const [previousSize, setPreviousSize] = useState({ width: initialWidth, height: initialHeight });
  const [previousPosition, setPreviousPosition] = useState({ x: 100, y: 50 });

  const { position, setPosition, dragRef, handleMouseDown, isDragging } = useDragWindow({ x: 100, y: 50 });
  const { size, setSize, resizeRef, handleResizeStart } = useResizeWindow(
    { width: initialWidth, height: initialHeight },
    { width: 300, height: 200 }
  );

  const handleMaximize = () => {
    if (!onMaximizeChange) return;
    if (isMaximized) {
      setSize(previousSize);
      setPosition(previousPosition);
      onMaximizeChange(false);
    } else {
      setPreviousSize(size);
      setPreviousPosition(position);
      setSize({ width: window.innerWidth, height: window.innerHeight - TASKBAR_HEIGHT });
      setPosition({ x: 0, y: 0 });
      onMaximizeChange(true);
    }
  };

  useEffect(() => {
    const handleResizeEvent = () => {
      if (isMaximized) {
        const padding = 7;
        setSize({
          width: window.innerWidth - padding * 2,
          height: window.innerHeight - TASKBAR_HEIGHT - padding * 2,
        });
        setPosition({ x: padding, y: padding });
      }
    };
    window.addEventListener('resize', handleResizeEvent);
    return () => window.removeEventListener('resize', handleResizeEvent);
  }, [isMaximized, setSize, setPosition]);

  if (!isOpen) return null;

  return (
    <div
      ref={(node) => {
        if (node) {
          dragRef.current = node;
          resizeRef.current = node;
        }
      }}
      className="window"
      style={{
        position: "fixed",
        top: isMaximized ? 0 : position.y,
        left: isMaximized ? 0 : position.x,
        width: isMaximized ? "100vw" : size.width,
        height: isMaximized ? `calc(100vh - ${TASKBAR_HEIGHT}px)` : size.height,
        zIndex: 99999999,
        cursor: isDragging ? "grabbing" : "default",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
        display: isMinimized ? "none" : "block",
        overflow: "hidden",
      }}
    >
      <div
        className="title-bar"
        onMouseDown={(e) => {
          if (isMaximized && onMaximizeChange && !(e.target as HTMLElement).closest('.title-bar-controls')) {
            handleMaximize();
          }
          handleMouseDown(e);
        }}
        style={{ cursor: "grab", padding: "0 8px", height: 28, minHeight: 28 }}
      >
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onMinimize}>
            <span className="sr-only">Minimizar</span>
          </button>
          <button aria-label="Maximize" onClick={handleMaximize}>
            <span className="sr-only">{isMaximized ? "Restaurar" : "Maximizar"}</span>
          </button>
          <button aria-label="Close" onClick={onClose}>
            <span className="sr-only">Cerrar</span>
          </button>
        </div>
      </div>

      <div className="window-body" style={{
        height: "calc(100% - 28px)",
        padding: 0,
        overflow: scrollable ? "auto" : "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
        {children}
      </div>

      {!isMaximized && (
        <>
          <div
            className="resize-handle-se"
            onMouseDown={(e) => handleResizeStart(e, "se")}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "15px",
              height: "15px",
              cursor: "se-resize",
              background: "transparent",
              zIndex: 10,
            }}
          />
          <div
            className="resize-handle-s"
            onMouseDown={(e) => handleResizeStart(e, "s")}
            style={{
              position: "absolute",
              bottom: 0,
              left: "15px",
              right: "15px",
              height: "5px",
              cursor: "s-resize",
              background: "transparent",
              zIndex: 10,
            }}
          />
          <div
            className="resize-handle-e"
            onMouseDown={(e) => handleResizeStart(e, "e")}
            style={{
              position: "absolute",
              top: "15px",
              right: 0,
              bottom: "15px",
              width: "5px",
              cursor: "e-resize",
              background: "transparent",
              zIndex: 10,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Window;
