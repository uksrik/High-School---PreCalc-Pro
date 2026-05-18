
export const MOCK_LESSONS: Record<number, any> = {
  1: {
    textbookExcerpt: `### Unit 1: Polynomial Functions
**Polynomial Zeros:**
According to the **Fundamental Theorem of Algebra**, a polynomial of degree $n$ has exactly $n$ complex zeros (counting multiplicity).
- **Multiplicity:** If $(x-c)^k$ is a factor, $c$ is a zero of multiplicity $k$. If $k$ is even, the graph touches the x-axis. If $k$ is odd, it crosses.
- **End Behavior:** Determined by the leading term $a_n x^n$.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 1.1-1.6:** Change in functions, linear/quadratic models, and polynomial behavior.`,
    aiSynthesis: `### Mastery Note: Rates of Change
Polynomials exhibit varying rates of change. Linear functions have a constant first difference, while quadratics have a constant second difference.`,
    videoTutorial: {
      title: "Unit 1: Polynomial Analysis",
      description: "Analyzing zeros, multiplicity, and end behavior.",
      searchQuery: "AP Precalculus polynomial functions tutorial"
    }
  },
  2: {
    textbookExcerpt: `### Unit 2: Rational Functions
**Asymptotes & Holes:**
- **Vertical Asymptotes:** Occur where the denominator is zero (after simplification).
- **Holes (Removable Discontinuities):** Occur where a factor is common to both numerator and denominator.
- **Horizontal Asymptotes:** Compare degrees of $P(x)$ and $Q(x)$.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 1.7-1.10:** Rational functions and their graphical features.`,
    aiSynthesis: `### Mastery Note: Limits at Infinity
Horizontal asymptotes describe the limit of the function as $x \to \pm \infty$.`,
    videoTutorial: {
      title: "Unit 2: Rational Graphs",
      description: "Mastering asymptotes and discontinuities.",
      searchQuery: "AP Precalculus rational functions tutorial"
    }
  },
  3: {
    textbookExcerpt: `### Unit 3: Function Composition & Inverses
**Composition:** $(f \circ g)(x) = f(g(x))$.
**Inverses:** $f(f^{-1}(x)) = x$.
- **Domain Restriction:** Some functions (like $x^2$) require domain restrictions to be invertible.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 1.11-1.13:** Function composition and inverse properties.`,
    aiSynthesis: `### Mastery Note: Reversing Operations
Inverse functions 'undo' each other. Graphically, they are reflections across the line $y=x$.`,
    videoTutorial: {
      title: "Unit 3: Composition & Inverses",
      description: "Algebraic and graphical inverse relationships.",
      searchQuery: "AP Precalculus function inverses tutorial"
    }
  },
  4: {
    textbookExcerpt: `### Unit 4: Exponential Functions
**Exponential Growth:** $f(x) = ab^x$.
- **Arithmetic vs Geometric:** Arithmetic sequences model linear growth; Geometric sequences model exponential growth.
- **Natural Base e:** $f(x) = ae^{rx}$ for continuous growth.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 2.1-2.8:** Exponential growth, sequences, and modeling.`,
    aiSynthesis: `### Mastery Note: Constant Ratios
Exponential functions have a constant ratio of outputs for equal intervals of inputs.`,
    videoTutorial: {
      title: "Unit 4: Exponential Models",
      description: "Growth, decay, and the natural base e.",
      searchQuery: "AP Precalculus exponential functions tutorial"
    }
  },
  5: {
    textbookExcerpt: `### Unit 5: Logarithmic Functions
**Logarithms:** $y = \log_b(x) \iff b^y = x$.
- **Properties:** $\log(MN) = \log M + \log N$, $\log(M/N) = \log M - \log N$, $\log(M^p) = p \log M$.
- **Semi-Log Plots:** Used to linearize exponential data.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 2.9-2.15:** Logarithmic properties and equations.`,
    aiSynthesis: `### Mastery Note: Logarithmic Scales
Logarithms allow us to work with data spanning many orders of magnitude, such as pH or the Richter scale.`,
    videoTutorial: {
      title: "Unit 5: Logarithmic Analysis",
      description: "Log properties and solving exponential equations.",
      searchQuery: "AP Precalculus logarithms tutorial"
    }
  },
  6: {
    textbookExcerpt: `### Unit 6: Trigonometric Functions
**Sinusoidal Models:** $y = A \sin(B(x-C)) + D$.
- **Amplitude:** $|A|$.
- **Period:** $2\pi/B$.
- **Midline:** $y=D$.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 3.1-3.11:** Unit circle and sinusoidal modeling.`,
    aiSynthesis: `### Mastery Note: Periodic Motion
Trigonometric functions model cycles in nature, such as tides, sound waves, and seasonal temperatures.`,
    videoTutorial: {
      title: "Unit 6: Trig Modeling",
      description: "Modeling periodic phenomena with sine and cosine.",
      searchQuery: "AP Precalculus trigonometry tutorial"
    }
  },
  7: {
    textbookExcerpt: `### Unit 7: Polar Functions & Complex Numbers
**Polar Coordinates:** $(r, \theta)$.
**Complex Polar Form:** $z = r(\cos \theta + i \sin \theta)$.
- **De Moivre's Theorem:** $z^n = r^n(\cos n\theta + i \sin n\theta)$.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 3.12-3.15:** Polar coordinates and complex operations.`,
    aiSynthesis: `### Mastery Note: Circular Geometry
Polar coordinates are ideal for systems with central symmetry, like planetary orbits or circular motion.`,
    videoTutorial: {
      title: "Unit 7: Polar & Complex",
      description: "Graphing in polar and complex plane operations.",
      searchQuery: "AP Precalculus polar functions tutorial"
    }
  },
  8: {
    textbookExcerpt: `### Unit 8: Parametric Equations & Conic Sections
**Parametrics:** $x(t)$ and $y(t)$ define position as a function of time.
**Conics:**
- **Ellipse:** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.
- **Hyperbola:** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 4.1-4.4:** Parametric motion and conic sections.`,
    aiSynthesis: `### Mastery Note: Motion Modeling
Parametric equations allow us to separate horizontal and vertical motion, essential for physics applications.`,
    videoTutorial: {
      title: "Unit 8: Parametrics & Conics",
      description: "Modeling motion and analyzing geometric curves.",
      searchQuery: "AP Precalculus parametric equations tutorial"
    }
  },
  9: {
    textbookExcerpt: `### Unit 9: Vectors & Matrices
**Vectors:** $\vec{v} = \langle a, b \rangle$.
**Matrices:** Used for linear transformations.
- **Determinant:** $|A|$ determines if a matrix is invertible.`,
    standardsConnection: `### AP Precalculus Alignment
**Topic 4.5-4.14:** Vectors, matrices, and linear systems.`,
    aiSynthesis: `### Mastery Note: Linear Algebra
Matrices provide a powerful framework for solving large systems of equations and transforming geometric objects.`,
    videoTutorial: {
      title: "Unit 9: Vectors & Matrices",
      description: "Vector operations and matrix transformations.",
      searchQuery: "AP Precalculus matrices tutorial"
    }
  },
  10: {
    textbookExcerpt: `### Unit 10: Limits & Series
**Limits:** $\lim_{x \to c} f(x) = L$.
**Series:** $\sum_{n=1}^\infty a_n$.
- **Geometric Series:** Converges if $|r| < 1$.`,
    standardsConnection: `### Honors/Calculus Prep
Foundational concepts for Calculus and discrete mathematics.`,
    aiSynthesis: `### Mastery Note: Infinite Sums
The concept of a limit allows us to find the exact sum of an infinite number of terms in a convergent series.`,
    videoTutorial: {
      title: "Unit 10: Limits & Series",
      description: "Preparing for Calculus with limits and sums.",
      searchQuery: "Precalculus limits and series tutorial"
    }
  }
};
