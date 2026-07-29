// src/hooks/UseResizeWindows.ts
import { useState, useRef, useEffect, MutableRefObject } from 'react';

type Size = { width: number; height: number };

export const useResizeWindow = (initialSize: Size, minSize: Size = { width: 300, height: 200 }) => {
  const [size, setSize] = useState(initialSize);
  const [isResizing, setIsResizing] = useState(false);
  const resizeRef = useRef<HTMLDivElement | null>(null) as MutableRefObject<HTMLDivElement | null>;
  const startPosRef = useRef({ x: 0, y: 0 });
  const startSizeRef = useRef({ width: 0, height: 0 });
  const edgeRef = useRef<string>('');

  const handleResizeStart = (e: React.MouseEvent<HTMLDivElement>, edge: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    edgeRef.current = edge;
    startPosRef.current = { x: e.clientX, y: e.clientY };
    if (resizeRef.current) {
      startSizeRef.current = {
        width: resizeRef.current.offsetWidth,
        height: resizeRef.current.offsetHeight,
      };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !resizeRef.current) return;

      const deltaX = e.clientX - startPosRef.current.x;
      const deltaY = e.clientY - startPosRef.current.y;
      let newWidth = startSizeRef.current.width;
      let newHeight = startSizeRef.current.height;

      if (edgeRef.current.includes('e')) {
        newWidth = Math.max(minSize.width, startSizeRef.current.width + deltaX);
      }
      if (edgeRef.current.includes('w')) {
        newWidth = Math.max(minSize.width, startSizeRef.current.width - deltaX);
      }
      if (edgeRef.current.includes('s')) {
        newHeight = Math.max(minSize.height, startSizeRef.current.height + deltaY);
      }
      if (edgeRef.current.includes('n')) {
        newHeight = Math.max(minSize.height, startSizeRef.current.height - deltaY);
      }

      setSize({ width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, minSize]);

  return { 
    size, 
    setSize, 
    resizeRef, 
    isResizing, 
    handleResizeStart 
  };
};