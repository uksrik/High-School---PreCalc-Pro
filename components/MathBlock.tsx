
import React, { useEffect, useRef } from 'react';

interface MathBlockProps {
  math: string;
  block?: boolean;
}

const MathBlock: React.FC<MathBlockProps> = ({ math, block = false }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && (window as any).katex) {
      (window as any).katex.render(math, containerRef.current, {
        throwOnError: false,
        displayMode: block,
      });
    }
  }, [math, block]);

  return <span ref={containerRef} />;
};

export default MathBlock;
