import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  onComplete?: () => void;
}

export const useTypewriter = ({ 
  lines, 
  speed = 10, 
  lineDelay = 50,
  onComplete 
}: UseTypewriterProps) => {
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayLines(prev => {
            const newLines = [...prev];
            if (newLines.length <= currentLineIndex) {
              newLines.push('');
            }
            const updatedLines = [...newLines];
            updatedLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
            return updatedLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, lineDelay);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentLineIndex, currentCharIndex, lines, speed, lineDelay, onComplete]);

  return { displayLines, isComplete };
};