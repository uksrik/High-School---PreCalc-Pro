
import { Chapter, Lab } from './types';

export const CURRICULUM: Chapter[] = [
  {
    id: 1,
    title: "Polynomial Functions",
    weeks: "1–2",
    focus: "Change in functions, linear/quadratic models, and polynomial zeros.",
    standards: ["AP 1.1-1.6", "A-APR.3"],
    semester: 1,
    description: "Analyze polynomial behavior, including rates of change, zeros, and multiplicities. Build polynomial models from data.",
    suggestedEquations: ["f(x) = a_n x^n + ... + a_0"],
    lessons: [
      { title: "Change in Functions", type: "Study", description: "Average rate of change and linear models" },
      { title: "Quadratic Functions", type: "Study", description: "Vertex form and modeling" },
      { title: "Polynomial Zeros", type: "Study", description: "Finding real and complex zeros" },
      { title: "Multiplicity & Graphs", type: "Study", description: "Behavior near zeros" },
      { title: "Polynomial Modeling", type: "Practice", description: "Fitting polynomials to data" }
    ]
  },
  {
    id: 2,
    title: "Rational Functions",
    weeks: "3–4",
    focus: "Asymptotes, holes, and end behavior.",
    standards: ["AP 1.7-1.10", "F-IF.7d"],
    semester: 1,
    description: "Explore the behavior of rational functions, focusing on vertical/horizontal asymptotes and removable discontinuities.",
    suggestedEquations: ["f(x) = \frac{P(x)}{Q(x)}"],
    lessons: [
      { title: "Rational Function Basics", type: "Study", description: "Domain and intercepts" },
      { title: "Vertical Asymptotes", type: "Study", description: "Infinite behavior" },
      { title: "Holes & Discontinuities", type: "Study", description: "Removable discontinuities" },
      { title: "End Behavior", type: "Study", description: "Horizontal and slant asymptotes" },
      { title: "Graphing Rational Functions", type: "Practice", description: "Complete analysis of rational graphs" }
    ]
  },
  {
    id: 3,
    title: "Function Composition & Inverses",
    weeks: "5",
    focus: "Composing functions and finding inverse relationships.",
    standards: ["AP 1.11-1.13", "F-BF.4"],
    semester: 1,
    description: "Master the algebra of function composition and the properties of inverse functions.",
    suggestedEquations: ["(f \circ g)(x)", "f^{-1}(x)"],
    lessons: [
      { title: "Function Composition", type: "Study", description: "Chaining functions together" },
      { title: "Inverse Functions", type: "Study", description: "Algebraic and graphical inverses" },
      { title: "Verifying Inverses", type: "Study", description: "Using composition to prove inverses" },
      { title: "Restricting Domains", type: "Study", description: "Making functions invertible" }
    ]
  },
  {
    id: 4,
    title: "Exponential Functions",
    weeks: "6–7",
    focus: "Growth models, arithmetic/geometric sequences, and base e.",
    standards: ["AP 2.1-2.8", "F-LE.1"],
    semester: 1,
    description: "Analyze exponential growth and decay. Connect sequences to exponential models.",
    suggestedEquations: ["f(x) = ab^x", "A = Pe^{rt}"],
    lessons: [
      { title: "Arithmetic & Geometric Sequences", type: "Study", description: "Linear vs exponential growth" },
      { title: "Exponential Growth & Decay", type: "Study", description: "Modeling with base b" },
      { title: "The Number e", type: "Study", description: "Natural base and continuous growth" },
      { title: "Exponential Regression", type: "Practice", description: "Modeling data with exponentials" }
    ]
  },
  {
    id: 5,
    title: "Logarithmic Functions",
    weeks: "8–9",
    focus: "Log properties, equations, and semi-log plots.",
    standards: ["AP 2.9-2.15", "F-LE.4"],
    semester: 1,
    description: "Explore logarithms as inverses of exponentials. Solve complex equations and analyze semi-log data.",
    suggestedEquations: ["\log_b(x) = y", "\ln(x)"],
    lessons: [
      { title: "Logarithmic Basics", type: "Study", description: "Definition and graphs" },
      { title: "Properties of Logs", type: "Study", description: "Expansion and condensation" },
      { title: "Solving Log Equations", type: "Practice", description: "Algebraic techniques" },
      { title: "Semi-Log Plots", type: "Study", description: "Linearizing exponential data" }
    ]
  },
  {
    id: 6,
    title: "Trigonometric Functions",
    weeks: "10–12",
    focus: "Unit circle, sinusoidal models, and identities.",
    standards: ["AP 3.1-3.11", "F-TF.2"],
    semester: 2,
    description: "Deep dive into trigonometric functions, their graphs, and their applications in modeling periodic phenomena.",
    suggestedEquations: ["y = A \sin(B(x-C)) + D"],
    lessons: [
      { title: "Unit Circle & Radians", type: "Study", description: "Defining trig functions" },
      { title: "Sine & Cosine Graphs", type: "Study", description: "Amplitude, period, and shifts" },
      { title: "Sinusoidal Modeling", type: "Practice", description: "Fitting trig functions to data" },
      { title: "Trig Identities", type: "Study", description: "Pythagorean and reciprocal identities" }
    ]
  },
  {
    id: 7,
    title: "Polar Functions & Complex Numbers",
    weeks: "13–14",
    focus: "Polar coordinates, polar graphs, and De Moivre's Theorem.",
    standards: ["AP 3.12-3.15", "N-CN.4"],
    semester: 2,
    description: "Transition to polar coordinates and explore the geometry of complex numbers.",
    suggestedEquations: ["r = f(\theta)", "z = r(\cos\theta + i\sin\theta)"],
    lessons: [
      { title: "Polar Coordinates", type: "Study", description: "Plotting in the polar plane" },
      { title: "Polar Graphs", type: "Study", description: "Roses, limacons, and cardioids" },
      { title: "Complex Numbers in Polar Form", type: "Study", description: "Geometric representation" },
      { title: "De Moivre's Theorem", type: "Study", description: "Powers and roots of complex numbers" }
    ]
  },
  {
    id: 8,
    title: "Parametric Equations & Conic Sections",
    weeks: "15",
    focus: "Parametric motion and geometric properties of conics.",
    standards: ["AP 4.1-4.4", "G-GPE.3"],
    semester: 2,
    description: "Model motion with parametric equations and analyze the geometry of conic sections.",
    suggestedEquations: ["x = f(t), y = g(t)"],
    lessons: [
      { title: "Parametric Basics", type: "Study", description: "Defining motion over time" },
      { title: "Modeling with Parametrics", type: "Practice", description: "Projectile motion" },
      { title: "Conic Sections: Ellipses", type: "Study", description: "Properties and foci" },
      { title: "Conic Sections: Hyperbolas", type: "Study", description: "Asymptotes and foci" }
    ]
  },
  {
    id: 9,
    title: "Vectors & Matrices",
    weeks: "16–17",
    focus: "Vector operations and matrix transformations.",
    standards: ["AP 4.5-4.14", "N-VM.1"],
    semester: 2,
    description: "Use vectors and matrices to solve systems and transform space.",
    suggestedEquations: ["\vec{v} = \langle a, b \rangle", "A \mathbf{x} = \mathbf{b}"],
    lessons: [
      { title: "Vector Operations", type: "Study", description: "Addition and scalar multiplication" },
      { title: "Dot Product & Angles", type: "Study", description: "Geometric vector properties" },
      { title: "Matrix Transformations", type: "Study", description: "Linear maps in the plane" },
      { title: "Solving Systems with Matrices", type: "Practice", description: "Inverses and determinants" }
    ]
  },
  {
    id: 10,
    title: "Limits & Series",
    weeks: "18",
    focus: "Calculus readiness and discrete sums.",
    standards: ["Honors/Calculus Prep"],
    semester: 2,
    description: "Prepare for Calculus with limits and explore arithmetic/geometric series.",
    suggestedEquations: ["\lim_{x \to c} f(x)", "S_n = \frac{a(1-r^n)}{1-r}"],
    lessons: [
      { title: "Introduction to Limits", type: "Study", description: "Concept of a limit" },
      { title: "Continuity", type: "Study", description: "Formal definition of continuity" },
      { title: "Arithmetic & Geometric Series", type: "Study", description: "Summing sequences" },
      { title: "Binomial Theorem", type: "Study", description: "Expanding binomial powers" }
    ]
  }
];

export const LABS: Lab[] = [
  {
    id: 1,
    title: "The Regression Master",
    topic: "Exponential Growth Modeling",
    description: "Use Excel’s LINEST and Trendline to model population data from Unit 4.",
    excelFeatures: ["LINEST", "Scatter Plot", "Trendline Equation"],
    chapterLink: 4
  },
  {
    id: 2,
    title: "Matrix Solver",
    topic: "System of Equations",
    description: "Learning MMULT and MINVERSE to solve systems from Unit 9.",
    excelFeatures: ["MMULT", "MINVERSE", "Array Formulas"],
    chapterLink: 9
  },
  {
    id: 3,
    title: "Periodic Data Modeling",
    topic: "Trig Modeling",
    description: "Plot tide data and find the best fit sine function (Unit 6).",
    excelFeatures: ["Periodic Curve Fitting", "Solver Add-in"],
    chapterLink: 6
  },
  {
    id: 4,
    title: "Financial Math & Sequences",
    topic: "Recursive Formulas",
    description: "Build an amortization schedule using recursive formulas from Unit 4.",
    excelFeatures: ["Relative References", "Auto-fill Sequences"],
    chapterLink: 4
  }
];

export interface ExamSection {
  id: string;
  title: string;
  part: 'A' | 'B';
  type: 'MCQ' | 'FRQ';
  calculator: 'Required' | 'No';
  questionsCount: number;
  timeLimit: number;
  description: string;
}

export const EXAM_SECTIONS: ExamSection[] = [
  {
    id: 'mcq-a',
    title: 'Section I: Multiple Choice',
    part: 'A',
    type: 'MCQ',
    calculator: 'No',
    questionsCount: 28,
    timeLimit: 80,
    description: 'Questions cover all units. No calculator allowed.'
  },
  {
    id: 'mcq-b',
    title: 'Section I: Multiple Choice',
    part: 'B',
    type: 'MCQ',
    calculator: 'Required',
    questionsCount: 12,
    timeLimit: 40,
    description: 'Questions cover all units. Graphing calculator required.'
  },
  {
    id: 'frq-a',
    title: 'Section II: Free Response',
    part: 'A',
    type: 'FRQ',
    calculator: 'Required',
    questionsCount: 2,
    timeLimit: 30,
    description: 'Two multi-part questions. Graphing calculator required.'
  },
  {
    id: 'frq-b',
    title: 'Section II: Free Response',
    part: 'B',
    type: 'FRQ',
    calculator: 'No',
    questionsCount: 2,
    timeLimit: 30,
    description: 'Two multi-part questions. No calculator allowed.'
  }
];
