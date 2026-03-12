
import { Chapter, Lab } from './types';

export const CURRICULUM: Chapter[] = [
  // SEMESTER 1: ADVANCED FUNCTION ANALYSIS & TRIGONOMETRY
  {
    id: 1,
    title: "Advanced Function Analysis I",
    weeks: "1–2",
    focus: "Parent functions, transformations, composition, and inverses.",
    standards: ["F-IF.7", "F-BF.3", "F-BF.4"],
    semester: 1,
    description: "Master parent functions and their transformations. Study function composition (f ∘ g) and the conditions for inverses.",
    suggestedEquations: ["f(g(x))", "f^{-1}(x)", "y = a f(b(x-c)) + d"],
    lessons: [
      { title: "Parent Functions & Transformations", type: "Study", duration: "1 hr", description: "Shifts, reflections, and stretches" },
      { title: "Function Composition", type: "Study", duration: "0 hrs 50 mins", description: "Combining functions algebraically" },
      { title: "Inverses of Functions", type: "Study", duration: "1 hr", description: "One-to-one functions and horizontal line test" },
      { title: "Functions Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" },
      { title: "Unit 1 Review", type: "Review", duration: "0 hrs 50 mins" }
    ]
  },
  {
    id: 2,
    title: "Advanced Function Analysis II",
    weeks: "3–4",
    focus: "Polynomial and rational function behavior.",
    standards: ["A-APR.2", "A-APR.3", "F-IF.7d"],
    semester: 1,
    description: "Find real and complex zeros using the Rational Root Theorem. Analyze rational functions for vertical, horizontal, and slant asymptotes.",
    suggestedEquations: ["P(x) = (x-r)Q(x) + R", "y = \frac{ax^n}{bx^m}"],
    lessons: [
      { title: "Polynomial Zeros", type: "Study", duration: "1 hr", description: "Rational Root Theorem and Descartes' Rule of Signs" },
      { title: "Rational Function Graphs", type: "Study", duration: "1 hr", description: "Vertical, Horizontal, and Slant Asymptotes" },
      { title: "Complex Zeros", type: "Study", duration: "0 hrs 50 mins", description: "Fundamental Theorem of Algebra" },
      { title: "Polynomials Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" },
      { title: "Unit 2 Review", type: "Review", duration: "0 hrs 50 mins" }
    ]
  },
  {
    id: 3,
    title: "Advanced Function Analysis III",
    weeks: "5–6",
    focus: "Exponential and logarithmic modeling.",
    standards: ["F-LE.1", "F-LE.4", "F-IF.7e"],
    semester: 1,
    description: "Properties of logs and solving complex exponential equations. Model real-world growth and decay.",
    suggestedEquations: ["\log_b(xy) = \log_b x + \log_b y", "A = Pe^{rt}"],
    lessons: [
      { title: "Logarithmic Properties", type: "Study", duration: "1 hr", description: "Product, Quotient, and Power rules" },
      { title: "Exponential Equations", type: "Study", duration: "1 hr", description: "Solving using logarithms" },
      { title: "Growth & Decay Modeling", type: "Study", duration: "1 hr", description: "Population and radioactive decay" },
      { title: "Logs Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" },
      { title: "Unit 3 Review", type: "Review", duration: "0 hrs 50 mins" }
    ]
  },
  {
    id: 4,
    title: "Trigonometry I",
    weeks: "7–8",
    focus: "Unit circle and radian measure.",
    standards: ["F-TF.1", "F-TF.2", "G-SRT.6"],
    semester: 1,
    description: "Mastery of exact values for sine, cosine, and tangent on the unit circle using radian measure.",
    suggestedEquations: ["s = r\theta", "(x, y) = (\cos\theta, \sin\theta)"],
    lessons: [
      { title: "Radian Measure", type: "Study", duration: "0 hrs 50 mins", description: "Degrees to Radians conversion" },
      { title: "The Unit Circle", type: "Study", duration: "1 hr", description: "Exact values and reference angles" },
      { title: "Right Triangle Trig", type: "Study", duration: "1 hr", description: "SOH CAH TOA applications" },
      { title: "Trig Basics Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" }
    ]
  },
  {
    id: 5,
    title: "Trigonometry II",
    weeks: "9–10",
    focus: "Graphing periodic functions.",
    standards: ["F-TF.5", "F-IF.7e"],
    semester: 1,
    description: "Graph periodic functions including phase shifts and vertical translations.",
    suggestedEquations: ["y = A \sin(B(x-C)) + D"],
    lessons: [
      { title: "Sine & Cosine Graphs", type: "Study", duration: "1 hr", description: "Amplitude, Period, and Midline" },
      { title: "Phase Shifts", type: "Study", duration: "1 hr", description: "Horizontal translations of sinusoids" },
      { title: "Other Trig Graphs", type: "Study", duration: "1 hr", description: "Tangent, Cotangent, Secant, Cosecant" },
      { title: "Trig Graphs Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" }
    ]
  },
  {
    id: 6,
    title: "Analytic Trigonometry",
    weeks: "11–13",
    focus: "Identities, proofs, and non-right triangles.",
    standards: ["F-TF.8", "G-SRT.10", "G-SRT.11"],
    semester: 1,
    description: "Verify Pythagorean, sum/difference, and double/half-angle identities. Solve non-right triangles using Law of Sines/Cosines.",
    suggestedEquations: ["\sin^2\theta + \cos^2\theta = 1", "a^2 = b^2 + c^2 - 2bc \cos A"],
    lessons: [
      { title: "Trig Identities & Proofs", type: "Study", duration: "1 hr 20 mins", description: "Verifying Pythagorean and fundamental identities" },
      { title: "Sum, Difference & Double-Angle", type: "Study", duration: "1 hr", description: "Sum, difference, and double/half-angle formulas" },
      { title: "Law of Sines & Cosines", type: "Study", duration: "1 hr", description: "Solving oblique triangles and word problems" },
      { title: "Analytic Trig Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "30 points" },
      { title: "Semester 1 Final", type: "Test", duration: "1 hr 30 mins", scoring: "100 points" }
    ]
  },
  // SEMESTER 2: ANALYTIC GEOMETRY, DISCRETE MATH & LIMITS
  {
    id: 7,
    title: "Analytic Geometry I",
    weeks: "1–3",
    focus: "Conic sections with shifted centers.",
    standards: ["G-GPE.1", "G-GPE.2", "G-GPE.3"],
    semester: 2,
    description: "In-depth study of the parabola, circle, ellipse, and hyperbola, including shifted centers and focal properties.",
    suggestedEquations: ["\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1"],
    lessons: [
      { title: "Circles & Parabolas", type: "Study", duration: "1 hr", description: "Standard form and focal points" },
      { title: "Ellipses", type: "Study", duration: "1 hr", description: "Major/minor axes and eccentricity" },
      { title: "Hyperbolas", type: "Study", duration: "1 hr", description: "Asymptotes and transverse axes" },
      { title: "Conics Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" }
    ]
  },
  {
    id: 8,
    title: "Analytic Geometry II",
    weeks: "4–5",
    focus: "Polar and parametric equations.",
    standards: ["N-CN.4", "N-CN.5"],
    semester: 2,
    description: "Graphing in the polar coordinate system and representing motion over time with parametric equations.",
    suggestedEquations: ["x = r \cos\theta", "x = f(t), y = g(t)"],
    lessons: [
      { title: "Polar Coordinates", type: "Study", duration: "1 hr", description: "Plotting and converting coordinates" },
      { title: "Polar Graphs", type: "Study", duration: "1 hr", description: "Rose curves, limaçons, and lemniscates" },
      { title: "Parametric Equations", type: "Study", duration: "1 hr", description: "Eliminating the parameter and motion" },
      { title: "Polar/Parametric Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" }
    ]
  },
  {
    id: 9,
    title: "Systems & Matrices",
    weeks: "6–7",
    focus: "Matrix operations and determinants.",
    standards: ["N-VM.6", "N-VM.7", "N-VM.8"],
    semester: 2,
    description: "Performing matrix operations, using determinants, Cramer's Rule, and inverse matrices to solve systems.",
    suggestedEquations: ["A \cdot X = B", "\det(A)"],
    lessons: [
      { title: "Matrix Operations", type: "Study", duration: "1 hr", description: "Addition, subtraction, and multiplication" },
      { title: "Determinants & Cramer's Rule", type: "Study", duration: "1 hr", description: "Solving systems with matrices" },
      { title: "Inverse Matrices", type: "Study", duration: "1 hr", description: "Matrix equations and identity matrices" },
      { title: "Matrices Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" }
    ]
  },
  {
    id: 10,
    title: "Vectors",
    weeks: "8–9",
    focus: "Vector operations and dot products.",
    standards: ["N-VM.1", "N-VM.3", "N-VM.4"],
    semester: 2,
    description: "Calculate vector magnitudes, directions, dot products, and work with orthogonal vectors.",
    suggestedEquations: ["\vec{u} \cdot \vec{v} = |\vec{u}||\vec{v}| \cos\theta"],
    lessons: [
      { title: "Vector Basics", type: "Study", duration: "1 hr", description: "Component form and magnitude" },
      { title: "Dot Products", type: "Study", duration: "1 hr", description: "Angle between vectors and work" },
      { title: "Vector Applications", type: "Study", duration: "1 hr", description: "Force and velocity vectors" },
      { title: "Vectors Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" }
    ]
  },
  {
    id: 11,
    title: "Discrete Math",
    weeks: "10–12",
    focus: "Sequences, series, and the Binomial Theorem.",
    standards: ["A-SSE.4", "F-IF.3"],
    semester: 2,
    description: "Arithmetic and geometric sequences, sigma notation, and the Binomial Theorem using Pascal's Triangle.",
    suggestedEquations: ["\sum_{i=1}^n a_i", "(a+b)^n = \sum \binom{n}{k} a^{n-k} b^k"],
    lessons: [
      { title: "Sequences & Series", type: "Study", duration: "1 hr", description: "Arithmetic and geometric patterns" },
      { title: "Sigma Notation", type: "Study", duration: "0 hrs 50 mins", description: "Summation properties" },
      { title: "Binomial Theorem", type: "Study", duration: "1 hr", description: "Pascal's Triangle and expansions" },
      { title: "Discrete Math Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "25 points" }
    ]
  },
  {
    id: 12,
    title: "Introduction to Calculus",
    weeks: "13–15",
    focus: "Limits, continuity, and rates of change.",
    standards: ["Calculus Prep"],
    semester: 2,
    description: "Understand function behavior as it approaches a value. Analyze continuity and find average/instantaneous rates of change.",
    suggestedEquations: ["\lim_{x \to c} f(x)", "\frac{f(x+h)-f(x)}{h}"],
    lessons: [
      { title: "Introduction to Limits", type: "Study", duration: "1 hr 20 mins", description: "Graphical and algebraic limits" },
      { title: "Continuity", type: "Study", duration: "1 hr", description: "Types of discontinuities" },
      { title: "Rates of Change", type: "Study", duration: "1 hr", description: "Difference quotient and tangent lines" },
      { title: "Calculus Prep Quiz", type: "Quiz", duration: "0 hrs 40 mins", scoring: "30 points" },
      { title: "Semester 2 Final", type: "Test", duration: "1 hr 30 mins", scoring: "100 points" }
    ]
  }
];

export const LABS: Lab[] = [
  {
    id: 1,
    title: "The Regression Master",
    topic: "Exponential Growth Modeling",
    description: "Use Excel’s LINEST and Trendline to model population data from Unit 3.",
    excelFeatures: ["LINEST", "Scatter Plot", "Trendline Equation"],
    chapterLink: 3
  },
  {
    id: 2,
    title: "Matrix Solver",
    topic: "System of Equations",
    description: "Learning MMULT and MINVERSE to solve 3x3 systems from Unit 9.",
    excelFeatures: ["MMULT", "MINVERSE", "Array Formulas"],
    chapterLink: 9
  },
  {
    id: 3,
    title: "Periodic Data Modeling",
    topic: "Trig Modeling",
    description: "Plot tide data and find the best fit sine function (Unit 5).",
    excelFeatures: ["Periodic Curve Fitting", "Solver Add-in"],
    chapterLink: 5
  },
  {
    id: 4,
    title: "Financial Math & Sequences",
    topic: "Recursive Formulas",
    description: "Build an amortization schedule using recursive formulas from Unit 11.",
    excelFeatures: ["Relative References", "Auto-fill Sequences"],
    chapterLink: 11
  }
];
