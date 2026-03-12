
import { QuizQuestion } from './types';

export const MOCK_QUIZZES: Record<number, QuizQuestion[]> = {
  1: [
    {
      id: "q1-1",
      question: "Evaluate the difference quotient $\\frac{f(x+h)-f(x)}{h}$ for the function $f(x) = x^2 - 4x + 7$.",
      options: ["$2x + h - 4$", "$2x - 4$", "$x + h - 4$", "$2x + h + 7$"],
      correctAnswer: 0,
      explanation: "Step 1: Find $f(x+h) = (x+h)^2 - 4(x+h) + 7 = x^2 + 2xh + h^2 - 4x - 4h + 7$.\nStep 2: $f(x+h)-f(x) = (x^2 + 2xh + h^2 - 4x - 4h + 7) - (x^2 - 4x + 7) = 2xh + h^2 - 4h$.\nStep 3: Divide by $h$: $\\frac{h(2x + h - 4)}{h} = 2x + h - 4$.",
      standard: "F-IF.7"
    },
    {
      id: "q1-2",
      question: "Determine the domain of the function $g(x) = \\frac{\\sqrt{x-2}}{x-5}$.",
      options: ["$[2, \\infty)$", "$(2, 5) \\cup (5, \\infty)$", "$[2, 5) \\cup (5, \\infty)$", "All real numbers except 5"],
      correctAnswer: 2,
      explanation: "For the numerator $\\sqrt{x-2}$, we need $x-2 \\geq 0 \\Rightarrow x \\geq 2$. For the denominator, $x-5 \\neq 0 \\Rightarrow x \\neq 5$. Combining these, we get $x \\in [2, 5) \\cup (5, \\infty)$.",
      standard: "F-IF.7"
    },
    {
      id: "q1-3",
      question: "Identify the transformation of $f(x) = |x|$ that results in $g(x) = -|x+3| - 2$.",
      options: [
        "Left 3, Down 2, Reflect over x-axis",
        "Right 3, Up 2, Reflect over y-axis",
        "Left 3, Up 2, Reflect over x-axis",
        "Right 3, Down 2, Reflect over x-axis"
      ],
      correctAnswer: 0,
      explanation: "Inside the absolute value, $+3$ shifts Left 3. Outside, the negative sign reflects over the x-axis, and $-2$ shifts Down 2.",
      standard: "F-BF.3"
    },
    {
      id: "q1-4",
      question: "If $f(x) = 3x - 1$ and $g(x) = x^2 + 2$, find $(g \\circ f)(x)$.",
      options: ["$3x^2 + 5$", "$9x^2 - 6x + 3$", "$9x^2 + 1$", "$3x^2 + 1$"],
      correctAnswer: 1,
      explanation: "$(g \\circ f)(x) = g(f(x)) = g(3x-1) = (3x-1)^2 + 2 = (9x^2 - 6x + 1) + 2 = 9x^2 - 6x + 3$.",
      standard: "F-BF.1c"
    },
    {
      id: "q1-5",
      question: "Which of the following functions is 'odd'?",
      options: ["$f(x) = x^2 + 1$", "$f(x) = x^3 - x$", "$f(x) = |x|$", "$f(x) = \\cos(x)$"],
      correctAnswer: 1,
      explanation: "A function is odd if $f(-x) = -f(x)$. For $x^3-x$: $(-x)^3 - (-x) = -x^3 + x = -(x^3-x)$. Correct.",
      standard: "F-IF.7"
    },
    {
      id: "q1-6",
      question: "Find the inverse function $f^{-1}(x)$ for $f(x) = \\frac{2x-3}{x+1}$.",
      options: ["$\\frac{x+3}{2-x}$", "$\\frac{x-1}{2x+3}$", "$\\frac{2x+1}{x-3}$", "$\\frac{x+1}{2x-3}$"],
      correctAnswer: 0,
      explanation: "1. Replace $f(x)$ with $y$: $y = (2x-3)/(x+1)$.\n2. Swap $x$ and $y$: $x = (2y-3)/(y+1)$.\n3. Solve for $y$: $x(y+1) = 2y-3 \\Rightarrow xy + x = 2y-3 \\Rightarrow xy - 2y = -x-3 \\Rightarrow y(x-2) = -(x+3) \\Rightarrow y = \\frac{x+3}{2-x}$.",
      standard: "F-BF.4"
    },
    {
      id: "q1-7",
      question: "In the function $y = f(2x)$, what is the effect on the graph of $f(x)$?",
      options: ["Horizontal stretch by 2", "Horizontal shrink by 1/2", "Vertical stretch by 2", "Vertical shrink by 1/2"],
      correctAnswer: 1,
      explanation: "A multiplier inside the function argument $(bx)$ results in a horizontal transformation. Since $b=2 > 1$, it is a shrink by factor $1/b = 1/2$.",
      standard: "F-BF.3"
    },
    {
      id: "q1-8",
      question: "Given $f(x) = \\begin{cases} 2x+1 & x < 0 \\\\ x^2 & x \\geq 0 \\end{cases}$, evaluate $f(-2) + f(3)$.",
      options: ["6", "10", "12", "7"],
      correctAnswer: 0,
      explanation: "$f(-2)$ uses the first piece: $2(-2)+1 = -3$. $f(3)$ uses the second piece: $3^2 = 9$. Sum: $-3+9 = 6$.",
      standard: "F-IF.7b"
    },
    {
      id: "q1-9",
      question: "The graph of $y = f(x)$ is shifted 4 units right and 5 units up. The new equation is:",
      options: ["$y = f(x-4) + 5$", "$y = f(x+4) + 5$", "$y = f(x-4) - 5$", "$y = f(x+4) - 5$"],
      correctAnswer: 0,
      explanation: "Right shift is $(x-h)$, Up shift is $+k$.",
      standard: "F-BF.3"
    },
    {
      id: "q1-10",
      question: "What parent function is described by $f(x) = \\frac{1}{x}$?",
      options: ["Linear", "Quadratic", "Reciprocal", "Square Root"],
      correctAnswer: 2,
      explanation: "The reciprocal function is $1/x$. It has asymptotes at $x=0$ and $y=0$.",
      standard: "F-IF.7"
    }
  ],
  4: [
    {
      id: "q4-1",
      question: "Convert $225^\\circ$ to radian measure.",
      options: ["$\\frac{3\\pi}{4}$", "$\\frac{5\\pi}{4}$", "$\\frac{7\\pi}{4}$", "$\\frac{4\\pi}{3}$"],
      correctAnswer: 1,
      explanation: "Multiply degrees by $\\frac{\\pi}{180^\\circ}$: $225 \\cdot \\frac{\\pi}{180} = \\frac{225\\pi}{180} = \\frac{5\\pi}{4}$.",
      standard: "F-TF.1"
    },
    {
      id: "q4-2",
      question: "Find a coterminal angle for $\\theta = -\\frac{\\pi}{6}$ in the interval $[0, 2\\pi)$.",
      options: ["$\\frac{\\pi}{6}$", "$\\frac{5\\pi}{6}$", "$\\frac{7\\pi}{6}$", "$\\frac{11\\pi}{6}$"],
      correctAnswer: 3,
      explanation: "Add $2\\pi$: $-\\frac{\\pi}{6} + \\frac{12\\pi}{6} = \\frac{11\\pi}{6}$.",
      standard: "F-TF.1"
    },
    {
      id: "q4-3",
      question: "Evaluate $\\cos\\left(\\frac{7\\pi}{6}\\right)$ using the unit circle.",
      options: ["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$"],
      correctAnswer: 3,
      explanation: "$\\frac{7\\pi}{6}$ is in Quadrant III. The reference angle is $\\frac{\\pi}{6}$. $\\cos(\\pi/6) = \\sqrt{3}/2$. In QIII, cosine is negative.",
      standard: "F-TF.2"
    },
    {
      id: "q4-4",
      question: "A wheel with radius 10 inches rotates at 3 radians per second. What is the linear speed?",
      options: ["30 in/sec", "3.33 in/sec", "10 in/sec", "60 in/sec"],
      correctAnswer: 0,
      explanation: "Linear speed $v = r\\omega$. $v = 10 \\text{ in} \\cdot 3 \\text{ rad/sec} = 30 \\text{ in/sec}$.",
      standard: "F-TF.1"
    },
    {
      id: "q4-5",
      question: "Determine the period of the function $y = 4\\cos\\left(\\frac{\\pi x}{3}\\right)$.",
      options: ["3", "6", "$\\frac{\\pi}{3}$", "2"],
      correctAnswer: 1,
      explanation: "Period $P = \\frac{2\\pi}{b}$. Here $b = \\pi/3$. $P = \\frac{2\\pi}{\\pi/3} = 2\\pi \\cdot \\frac{3}{\\pi} = 6$.",
      standard: "F-TF.5"
    },
    {
      id: "q4-6",
      question: "Find the amplitude of $y = -3\\sin(2x - \\pi) + 5$.",
      options: ["-3", "3", "2", "5"],
      correctAnswer: 1,
      explanation: "Amplitude is the absolute value of the coefficient $a$. $|-3| = 3$.",
      standard: "F-TF.5"
    },
    {
      id: "q4-7",
      question: "Identify the phase shift of $y = \\sin(2x - \\pi)$.",
      options: ["Right $\\pi$", "Left $\\pi$", "Right $\\pi/2$", "Left $\\pi/2$"],
      correctAnswer: 2,
      explanation: "Set argument to zero: $2x - \\pi = 0 \\Rightarrow 2x = \\pi \\Rightarrow x = \\pi/2$. Positive result means shift right.",
      standard: "F-TF.5"
    },
    {
      id: "q4-8",
      question: "Evaluate $\\arcsin\\left(-\\frac{1}{2}\\right)$ in the standard range.",
      options: ["$\\frac{7\\pi}{6}$", "$\\frac{11\\pi}{6}$", "$-\\frac{\\pi}{6}$", "$\\frac{4\\pi}{3}$"],
      correctAnswer: 2,
      explanation: "Range of $\\arcsin$ is $[-\\pi/2, \\pi/2]$. The value $-\\pi/6$ is the unique angle in this range where sine is $-1/2$.",
      standard: "F-TF.6"
    },
    {
      id: "q4-9",
      question: "What is the domain of $y = \\tan(x)$?",
      options: ["All real numbers", "$x \\neq n\\pi$", "$x \\neq \\frac{\\pi}{2} + n\\pi$", "$[-1, 1]$"],
      correctAnswer: 2,
      explanation: "Tangent is undefined where cosine is zero, which occurs at odd multiples of $\\pi/2$.",
      standard: "F-TF.4"
    },
    {
      id: "q4-10",
      question: "For a tidal model $y = 6\\sin(\\frac{\\pi}{6}t) + 10$, what is the maximum depth of the water?",
      options: ["6", "10", "16", "4"],
      correctAnswer: 2,
      explanation: "Max depth = Midline + Amplitude = $10 + 6 = 16$.",
      standard: "F-TF.5"
    }
  ]
};
