// src/components/WindowManager.tsx
import { useState, useEffect } from 'react';
import { useDragWindow } from '../hooks/useDragWindows';
import { useResizeWindow } from '../hooks/useResizeWindows';

type WindowManagerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  initialWidth?: number;
  initialHeight?: number;
};

const WindowManager = ({
  isOpen,
  onClose,
  children,
  title = 'Mi Portafolio',
  initialWidth = 500,
  initialHeight = 400,
}: WindowManagerProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [previousSize, setPreviousSize] = useState({ width: initialWidth, height: initialHeight });
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0 });

  const { position, setPosition, dragRef, handleMouseDown, isDragging } = useDragWindow({ x: 0, y: 0 });
  const { size, setSize, resizeRef, handleResizeStart } = useResizeWindow(
    { width: initialWidth, height: initialHeight },
    { width: 300, height: 200 }
  );

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    if (isMaximized) {
      setSize(previousSize);
      setPosition(previousPosition);
      setIsMaximized(false);
    } else {
      setPreviousSize(size);
      setPreviousPosition(position);
      
      const padding = 7;
      setSize({
        width: window.innerWidth - padding * 2,
        height: window.innerHeight - padding * 2
      });
      setPosition({
        x: padding,
        y: padding
      });
      setIsMaximized(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (isMaximized) {
        const padding = 7;
        setSize({
          width: window.innerWidth - padding * 2,
          height: window.innerHeight - padding * 2
        });
        setPosition({
          x: padding,
          y: padding
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMaximized, setSize, setPosition]);

  if (!isOpen) return null;

  const windowStyles: React.CSSProperties = {
    position: 'fixed',
    left: isMaximized ? 7 : position.x,
    top: isMaximized ? 7 : position.y,
    width: isMaximized ? window.innerWidth - 14 : size.width,
    height: isMaximized ? window.innerHeight - 14 : size.height,
    zIndex: 9999,
    cursor: isDragging ? 'grabbing' : 'default',
    display: isMinimized ? 'none' : 'block',
    borderRadius: isMaximized ? 0 : '0px',
    overflow: 'hidden',
  };

  const bodyStyles: React.CSSProperties = {
    height: isMaximized ? 'calc(100% - 28px)' : 'auto',
    overflow: 'auto',
    maxHeight: isMaximized ? 'calc(100vh - 50px)' : 'auto',
    padding: isMaximized ? '12px 10px' : '12px 10px',
  };

  return (
    <div
      ref={(node) => {
        if (node) {
          dragRef.current = node;
          resizeRef.current = node;
        }
      }}
      className="window"
      style={windowStyles}
    >
      <div
        className="title-bar"
        onMouseDown={handleMouseDown}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          flexShrink: 0,
        }}
      >
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={handleMinimize}>
            <span className="sr-only">Minimizar</span>
          </button>
          <button aria-label="Maximize" onClick={handleMaximize}>
            <span className="sr-only">{isMaximized ? 'Restaurar' : 'Maximizar'}</span>
          </button>
          <button aria-label="Close" onClick={onClose}>
            <span className="sr-only">Cerrar</span>
          </button>
        </div>
      </div>

      <div className="window-body" style={bodyStyles}>
        {children}
      </div>

      {!isMaximized && (
        <>
          <div
            className="resize-handle-se"
            onMouseDown={(e) => handleResizeStart(e, 'se')}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '15px',
              height: '15px',
              cursor: 'se-resize',
              background: 'transparent',
              zIndex: 10,
            }}
          />
          
          <div
            className="resize-handle-s"
            onMouseDown={(e) => handleResizeStart(e, 's')}
            style={{
              position: 'absolute',
              bottom: 0,
              left: '15px',
              right: '15px',
              height: '5px',
              cursor: 's-resize',
              background: 'transparent',
              zIndex: 10,
            }}
          />
          
          <div
            className="resize-handle-e"
            onMouseDown={(e) => handleResizeStart(e, 'e')}
            style={{
              position: 'absolute',
              top: '15px',
              right: 0,
              bottom: '15px',
              width: '5px',
              cursor: 'e-resize',
              background: 'transparent',
              zIndex: 10,
            }}
          />
        </>
      )}
    </div>
  );
};

export default WindowManager;