
import { Chapter, Lab } from './types';

export const CURRICULUM: Chapter[] = [
  // SEMESTER 1
  {
    id: 1,
    title: "Functions & Their Graphs",
    weeks: "1–3",
    focus: "Parent functions, transformations, and compositions.",
    standards: ["F-IF.7", "F-BF.3", "F-BF.1c"],
    semester: 1,
    description: "Master the foundational language of precalculus by exploring how functions behave, shift, and combine.",
    suggestedEquations: ["y=x^2", "y=(x-3)^2+2", "y=|x|", "y=\\sqrt{x}", "y=x^3"]
  },
  {
    id: 2,
    title: "Polynomial & Rational Functions",
    weeks: "4–6",
    focus: "Complex numbers (N-CN), zeros of polynomials, and asymptotes.",
    standards: ["N-CN.7", "A-APR.3", "F-IF.7d"],
    semester: 1,
    description: "Analyze higher-degree functions and understand the complex roots that define them.",
    suggestedEquations: ["y=x^3-3x^2+2x", "y=1/(x-2)", "y=(x^2-1)/(x-1)"]
  },
  {
    id: 3,
    title: "Exponential & Logarithmic Functions",
    weeks: "7–8",
    focus: "Modeling growth/decay and using properties of logs.",
    standards: ["F-LE.1", "F-LE.4", "F-IF.7e"],
    semester: 1,
    description: "Explore the inverse relationship between exponents and logs to solve real-world growth problems.",
    suggestedEquations: ["y=2^x", "y=\log_2(x)", "y=e^{-x}", "y=100(0.5)^{x/5}"]
  },
  {
    id: 4,
    title: "Trigonometry",
    weeks: "10–13",
    focus: "Radian measure, unit circle (F-TF), and graphing sine/cosine.",
    standards: ["F-TF.1", "F-TF.2", "F-TF.5"],
    semester: 1,
    description: "Transition from triangle geometry to the circular functions of trigonometry.",
    suggestedEquations: ["y=\sin(x)", "y=3\cos(2x-\pi/2)+1", "y=\tan(x)"]
  },
  {
    id: 5,
    title: "Analytic Trigonometry",
    weeks: "14–16",
    focus: "Identities, sum/difference formulas, and solving trig equations.",
    standards: ["F-TF.8", "F-TF.9"],
    semester: 1,
    description: "Prove complex relationships and solve equations using trigonometric identities.",
    suggestedEquations: ["y=\sin^2(x) + \cos^2(x)", "y=2\sin(x)\cos(x)"]
  },
  {
    id: 6,
    title: "Additional Trig Topics (Part A)",
    weeks: "17",
    focus: "Law of Sines and Cosines (G-SRT).",
    standards: ["G-SRT.9", "G-SRT.10", "G-SRT.11"],
    semester: 1,
    description: "Apply trigonometry to non-right triangles to find missing sides and angles."
  },
  // SEMESTER 2
  {
    id: 7,
    title: "Systems & Matrices",
    weeks: "1–3",
    focus: "Matrix operations (N-VM) and determinants.",
    standards: ["N-VM.6", "N-VM.7", "N-VM.8", "A-REI.8", "A-REI.9"],
    semester: 2,
    description: "Utilize matrices to solve complex systems of linear equations and perform geometric transformations.",
    suggestedEquations: ["x+y=5, x-y=1"]
  },
  {
    id: 106, // Representing Ch 6-B & Ch 10 combined
    title: "Vectors, Polars & Parametrics",
    weeks: "4–6",
    focus: "Dot products, polar coordinates, and parametric equations.",
    standards: ["N-VM.1", "N-VM.4", "N-VM.5"],
    semester: 2,
    description: "Explore alternate coordinate systems and directional forces in two dimensions.",
    suggestedEquations: ["r=3\cos(2\theta)", "x=5\cos(t), y=5\sin(t)"]
  },
  {
    id: 9,
    title: "Sequences, Series & Probability",
    weeks: "7–9",
    focus: "Binomial theorem, limits of sequences, and mathematical induction.",
    standards: ["A-SSE.4", "F-IF.3", "S-CP.1"],
    semester: 2,
    description: "Explore patterns, infinite sums, and the foundations of statistical probability.",
    suggestedEquations: ["a_n = 2n+1", "S_n = a_1(1-r^n)/(1-r)"]
  },
  {
    id: 110, // Ch 10 continued
    title: "Analytic Geometry (Conics)",
    weeks: "11–13",
    focus: "Conic sections (parabolas, ellipses, hyperbolas).",
    standards: ["G-GPE.1", "G-GPE.2", "G-GPE.3"],
    semester: 2,
    description: "Analyze the properties and graphs of sections of a cone.",
    suggestedEquations: ["x^2/9 + y^2/4 = 1", "y^2 - x^2 = 1", "x^2 + y^2 = 25"]
  },
  {
    id: 12,
    title: "Intro to Calculus",
    weeks: "14–16",
    focus: "Limits at infinity, tangent line problems, and the derivative.",
    standards: ["F-IF.3", "Limits (+)"],
    semester: 2,
    description: "The bridge to AP Calculus: understanding change at the infinitesimal level.",
    suggestedEquations: ["y=x^2", "y=2x", "y=1/x", "y=(f(x+h)-f(x))/h"]
  }
];

export const LABS: Lab[] = [
  {
    id: 1,
    title: "The Regression Master",
    topic: "Exponential Growth Modeling",
    description: "Use Excel’s LINEST and Trendline to model population data from Chapter 3.",
    excelFeatures: ["LINEST", "Scatter Plot", "Trendline Equation"],
    chapterLink: 3
  },
  {
    id: 2,
    title: "Matrix Solver",
    topic: "System of Equations",
    description: "Learning MMULT and MINVERSE to solve 3x3 systems from Chapter 8.",
    excelFeatures: ["MMULT", "MINVERSE", "Array Formulas"],
    chapterLink: 7
  },
  {
    id: 3,
    title: "Periodic Data Modeling",
    topic: "Trig Modeling",
    description: "Plot tide data and find the best fit sine function (Chapter 4).",
    excelFeatures: ["Periodic Curve Fitting", "Solver Add-in"],
    chapterLink: 4
  },
  {
    id: 4,
    title: "Financial Math & Sequences",
    topic: "Recursive Formulas",
    description: "Build an amortization schedule using recursive formulas from Chapter 9.",
    excelFeatures: ["Relative References", "Auto-fill Sequences"],
    chapterLink: 9
  }
];
