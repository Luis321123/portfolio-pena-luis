import { useState, useEffect } from 'react';
import { useDragWindow } from '../hooks/useDragWindows';
import { useResizeWindow } from '../hooks/useResizeWindows';

type WindowsManagerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  initialWidth?: number;
  initialHeight?: number;
  isMaximized: boolean; 
  onMaximizeChange: (value: boolean) => void; 
  scrollContainerId?: string;
};

const WindowsManager = ({
  isOpen,
  onClose,
  children,
  title = 'Mi Portafolio',
  initialWidth = 500,
  initialHeight = 500,
  isMaximized,
  scrollContainerId,
  onMaximizeChange,
}: WindowsManagerProps) => {
  const [previousSize, setPreviousSize] = useState({ width: initialWidth, height: initialHeight });
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0 });

  const { position, setPosition, dragRef, handleMouseDown, isDragging } = useDragWindow({ x: 0, y: 0 });
  const { size, setSize, resizeRef, handleResizeStart } = useResizeWindow(
    { width: initialWidth, height: initialHeight },
    { width: 300, height: 200 }
  );


  const handleMaximize = () => {
    if (isMaximized) {
      setSize(previousSize);
      setPosition(previousPosition);
      onMaximizeChange(false);
    } else {
      setPreviousSize(size);
      setPreviousPosition(position);
      
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setPosition({
        x: 0,
        y: 0
      });
      onMaximizeChange(true);
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

  const windowStyles: React.CSSProperties = {
    position: 'fixed',
    top: isMaximized ? 0 : position.y,
    left: isMaximized ? 0 : position.x,
    width: isMaximized ? '100vw' : size.width,
    height: isMaximized ? 'calc(100% - 28px)' : 'calc(100% - 28px)',
    zIndex: isMaximized ? 9999999 : 9999, 
    display: isOpen ? 'block' : 'none',
    cursor: isDragging ? 'grabbing' : 'default',
    borderRadius: isMaximized ? 0 : '0px',
    overflow: 'hidden',
  };

  const bodyStyles: React.CSSProperties = {
  height: isMaximized ? 'calc(100% - 28px)' : 'auto',
  display: 'flex',      
  flexDirection: 'column',
  overflow: 'hidden',   
  maxHeight: isMaximized ? 'calc(100vh - 50px)' : 'auto',
  padding: '0px',
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
  onMouseDown={(e) => {
    if (isMaximized) {
      handleMaximize(); 
    }
    handleMouseDown(e);
  }}
  style={{ 
    cursor: isDragging ? 'grabbing' : 'grab',
    flexShrink: 0,
    backgroundColor: 'transparent',
    borderBottom: 'none',
    height: '28px',
    minHeight: '28px', 
    padding: '0 8px',
  }}
>
  <div className="title-bar-text">{title}</div>
  <div className="title-bar-controls">
    <button aria-label="Minimize" onClick={onClose}>
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

      <div 
  className="window-body" 
  id={scrollContainerId}
  style={bodyStyles}
>
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

export default WindowsManager;