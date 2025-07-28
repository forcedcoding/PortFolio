import { useEffect, useState } from "react";

const TypingEffect = ({ text, className = "", speed = 100, delay = 0 }: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text.charAt(currentIndex));
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + currentIndex * speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-0.5 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </span>
  );
};

export default TypingEffect;