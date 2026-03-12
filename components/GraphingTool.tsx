
import React, { useEffect, useRef } from 'react';

interface GraphingToolProps {
  expressions?: string[];
  className?: string;
  chapterId?: number;
}

const GraphingTool: React.FC<GraphingToolProps> = ({ expressions = [], className = "", chapterId }) => {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const calculatorInstance = useRef<any>(null);

  useEffect(() => {
    if (calculatorRef.current && (window as any).Desmos) {
      if (!calculatorInstance.current) {
        calculatorInstance.current = (window as any).Desmos.GraphingCalculator(calculatorRef.current, {
          keypad: true,
          expressions: true,
          settingsMenu: true,
          zoomButtons: true,
          border: false,
          autosize: true,
          expressionsCollapsed: false
        });
      }

      const calc = calculatorInstance.current;
      calc.setBlank();

      // Chapter-specific logic for interactive modeling
      if (chapterId === 1) {
        // Transformation Modeling for Chapter 1
        calc.setExpression({ id: 'a', latex: 'a=1', sliderBounds: { min: -5, max: 5 } });
        calc.setExpression({ id: 'h', latex: 'h=0', sliderBounds: { min: -10, max: 10 } });
        calc.setExpression({ id: 'k', latex: 'k=0', sliderBounds: { min: -10, max: 10 } });
        calc.setExpression({ 
          id: 'trans-func', 
          latex: 'y=a(x-h)^2+k', 
          color: '#4f46e5',
          lineWidth: 4
        });
        calc.setExpression({ id: 'parent', latex: 'y=x^2', color: '#cbd5e1', lineStyle: (window as any).Desmos.Styles.DASHED });
      } else if (chapterId === 4) {
        // Periodic Modeling for Chapter 4
        calc.updateSettings({ degreeMode: false });
        calc.setExpression({ id: 'A', latex: 'A=1', sliderBounds: { min: 0.1, max: 10 } });
        calc.setExpression({ id: 'B', latex: 'B=1', sliderBounds: { min: 0.1, max: 5 } });
        calc.setExpression({ id: 'C', latex: 'C=0', sliderBounds: { min: -6.28, max: 6.28 } });
        calc.setExpression({ id: 'D', latex: 'D=0', sliderBounds: { min: -5, max: 5 } });
        calc.setExpression({ 
          id: 'sine-func', 
          latex: 'y=A\\sin(B(x-C))+D', 
          color: '#e11d48',
          lineWidth: 4
        });
        calc.setMathBounds({ left: -10, right: 10, bottom: -10, top: 10 });
      } else {
        // Default static expressions
        expressions.forEach((expr, index) => {
          calc.setExpression({ 
            id: `expr-${index}`, 
            latex: expr,
            color: index === 0 ? '#4f46e5' : index === 1 ? '#e11d48' : '#059669',
            lineWidth: 3
          });
        });
      }

      // Initial view optimization
      if (chapterId !== 4) {
        calc.setMathBounds({ left: -10, right: 10, bottom: -10, top: 10 });
      }
    }

    return () => {
      // Instance is kept for the lifecycle of the component mount
    };
  }, [expressions, chapterId]);

  return (
    <div 
      ref={calculatorRef} 
      className={`w-full bg-white border border-slate-200 shadow-inner overflow-hidden ${className}`}
      style={{ minHeight: '450px' }}
    />
  );
};

export default GraphingTool;
