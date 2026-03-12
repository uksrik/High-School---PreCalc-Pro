
export const MOCK_LESSONS: Record<number, any> = {
  1: {
    textbookExcerpt: `### Larson 2007: Chapter 1 Concept Summary
**Parent Functions:**
A parent function is the simplest form of a function family. Key parent functions include:
- **Linear:** $f(x) = x$
- **Quadratic:** $f(x) = x^2$
- **Absolute Value:** $f(x) = |x|$
- **Square Root:** $f(x) = \sqrt{x}$
- **Cubic:** $f(x) = x^3$
- **Reciprocal:** $f(x) = \frac{1}{x}$

**Transformations of Graphs:**
For a function $y = f(x)$, the transformed function $g(x) = a \cdot f(b(x - h)) + k$ involves:
1. **Vertical Shift:** $k$ units up/down.
2. **Horizontal Shift:** $h$ units left/right.
3. **Reflections:** $-f(x)$ (x-axis), $f(-x)$ (y-axis).
4. **Stretches/Shrinks:** $a$ (vertical), $b$ (horizontal).`,
    standardsConnection: `### California CCSS Alignment
**Standard F-IF.7:**
Graph functions expressed symbolically and show key features of the graph. In Larson Chapter 1, students master the sketches of parent functions and their shifted counterparts.

**Standard F-BF.3:**
Identify the effect on the graph of replacing $f(x)$ by $f(x) + k$, $k \cdot f(x)$, $f(kx)$, and $f(x + k)$. This is the "heart" of Chapter 1.`,
    aiSynthesis: `### Mastery Note: The Composition & Transformation Interaction
When analyzing a function like $g(x) = 2(x+3)^2 - 5$, view it as a composition of transformations applied to $f(x) = x^2$. Factor out 'b' first to find the true phase shift!`,
    videoTutorial: {
      title: "Larson Ch 1: Functions, Transformations & Compositions",
      description: "Walkthrough of parent functions and systematic transformations.",
      searchQuery: "Larson Precalculus 2007 Chapter 1 transformations tutorial"
    }
  },
  2: {
    textbookExcerpt: `### Larson 2007: Chapter 2 Concept Summary
**Polynomial Functions:**
A polynomial function of degree $n$ is $f(x) = a_n x^n + ... + a_0$.
- **Zeros:** Found using the Rational Zero Test and Synthetic Division.
- **Complex Zeros:** If $a + bi$ is a zero, then $a - bi$ is also a zero (Complex Conjugate Theorem).

**Rational Functions:**
Functions of the form $f(x) = \frac{N(x)}{D(x)}$.
- **Asymptotes:** Vertical where $D(x)=0$, Horizontal by comparing degrees of $N(x)$ and $D(x)$.`,
    standardsConnection: `### California CCSS Alignment
**Standard N-CN.7:** Solve quadratic equations with real coefficients that have complex solutions. Larson extends this to higher-degree polynomials.
**Standard A-APR.3:** Identify zeros of polynomials when suitable factorizations are available and use zeros to construct a rough graph.`,
    aiSynthesis: `### Mastery Note: The Intermediate Value Theorem (IVT)
The IVT states that if $f$ is continuous on $[a, b]$ and $f(a) \neq f(b)$, then for any $d$ between $f(a)$ and $f(b)$, there exists $c \in [a, b]$ such that $f(c) = d$. In Larson, we use this to prove the existence of zeros between sign changes.`,
    videoTutorial: {
      title: "Larson Ch 2: Polynomials & Rational Functions",
      description: "Mastering synthetic division and finding horizontal/vertical asymptotes.",
      searchQuery: "Larson Precalculus 2007 Chapter 2 polynomial zeros rational functions"
    }
  },
  3: {
    textbookExcerpt: `### Larson 2007: Chapter 3 Concept Summary
**Exponential Functions:** $f(x) = a^x$. The natural base $e \approx 2.718$ is vital for continuous growth.
**Logarithmic Functions:** $f(x) = \log_a(x)$ is the inverse of $a^x$.
- **Properties:**
  1. $\log_a(uv) = \log_a u + \log_a v$
  2. $\log_a(u/v) = \log_a u - \log_a v$
  3. $\log_a(u^n) = n\log_a u$`,
    standardsConnection: `### California CCSS Alignment
**Standard F-LE.4:** For exponential models, express as a logarithm the solution to $ab^{ct} = d$.
**Standard F-IF.7e:** Graph exponential and logarithmic functions, showing intercepts and end behavior.`,
    aiSynthesis: `### Mastery Note: The Power of 'e'
Continuous compounding uses $A = Pe^{rt}$. When solving for time $t$, always isolate the exponential term before taking the natural log ($\ln$) of both sides. This is a common point of error in ALEKS assessments.`,
    videoTutorial: {
      title: "Larson Ch 3: Logs & Exponentials",
      description: "Solving real-world growth and decay problems using properties of logarithms.",
      searchQuery: "Larson Precalculus 2007 Chapter 3 exponential logarithmic modeling"
    }
  },
  4: {
    textbookExcerpt: `### Larson 2007: Chapter 4 Concept Summary
**The Unit Circle:**
$\sin t = y, \cos t = x, \tan t = y/x$.
**Graphing:**
$y = a \sin(b(x-c)) + d$
- $a$: Amplitude
- $2\pi/b$: Period
- $c$: Phase Shift
- $d$: Vertical Shift`,
    standardsConnection: `### California CCSS Alignment
**Standard F-TF.5:** Choose trigonometric functions to model periodic phenomena with specified amplitude, frequency, and midline.`,
    aiSynthesis: `### Mastery Note: Radians vs Degrees
Calculus relies exclusively on radians because the derivative of $\sin(x)$ is only $\cos(x)$ when $x$ is in radians. Standard F-TF.1 focuses on this transition.`,
    videoTutorial: {
      title: "Larson Ch 4: Unit Circle & Graphs",
      description: "Detailed walkthrough of the unit circle and the 5-point graphing method.",
      searchQuery: "Larson Precalculus 2007 Chapter 4 trigonometry unit circle"
    }
  },
  5: {
    textbookExcerpt: `### Larson 2007: Chapter 5 Concept Summary
**Analytic Trigonometry:**
Using algebraic manipulation to simplify expressions and solve equations.
- **Sum & Difference:** $\sin(u \pm v) = \sin u \cos v \pm \cos u \sin v$
- **Double Angle:** $\sin 2u = 2\sin u \cos u$
- **Power-Reducing:** $\sin^2 u = \frac{1-\cos 2u}{2}$`,
    standardsConnection: `### California CCSS Alignment
**Standard F-TF.8:** Prove the Pythagorean identity $\sin^2(\theta) + \cos^2(\theta) = 1$ and use it to find trig values.
**Standard F-TF.9:** Prove and use sum and difference formulas for sine, cosine, and tangent.`,
    aiSynthesis: `### Mastery Note: Verifying Identities
Never move terms across the equals sign when verifying an identity. Treat each side as a separate expression. Start with the more complicated side and use fundamental identities to transform it into the simpler side.`,
    videoTutorial: {
      title: "Larson Ch 5: Trig Identities",
      description: "Step-by-step verification of complex trigonometric identities.",
      searchQuery: "Larson Precalculus 2007 Chapter 5 trigonometric identities tutorial"
    }
  },
  6: {
    textbookExcerpt: `### Larson 2007: Chapter 6 Concept Summary
**Non-Right Triangle Trigonometry:**
- **Law of Sines:** $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ (Use for AAS, ASA, or SSA).
- **Law of Cosines:** $a^2 = b^2 + c^2 - 2bc \cos A$ (Use for SSS or SAS).
- **Heron's Formula:** Area $= \sqrt{s(s-a)(s-b)(s-c)}$ where $s = (a+b+c)/2$.`,
    standardsConnection: `### California CCSS Alignment
**Standard G-SRT.10:** Prove the Laws of Sines and Cosines and use them to solve problems.
**Standard G-SRT.11:** Understand and apply the Law of Sines and Law of Cosines to find unknown measurements in right and non-right triangles.`,
    aiSynthesis: `### Mastery Note: The Ambiguous Case (SSA)
When given SSA, you might have 0, 1, or 2 triangles. Use the Law of Sines to find the first angle. If $\sin \theta > 1$, no triangle exists. If valid, check the supplement ($180^\circ - \theta$) to see if it allows for a second valid triangle.`,
    videoTutorial: {
      title: "Larson Ch 6: Law of Sines & Cosines",
      description: "Solving oblique triangles and handling the SSA ambiguous case.",
      searchQuery: "Larson Precalculus 2007 Chapter 6 law of sines cosines heron"
    }
  },
  7: {
    textbookExcerpt: `### Larson 2007: Chapter 7 Concept Summary
**Matrices and Systems:**
A matrix is a rectangular array of numbers.
- **Gaussian Elimination:** Row-echelon form.
- **Operations:** Addition, Scalar Multiplication, and Matrix Multiplication (Rows $\times$ Columns).
- **Inverse:** $A^{-1}$ exists if $|A| \neq 0$.
- **Cramer's Rule:** Using determinants to solve systems.`,
    standardsConnection: `### California CCSS Alignment
**Standard N-VM.8:** Add, subtract, and multiply matrices of appropriate dimensions.
**Standard A-REI.8:** Represent a system of linear equations as a single matrix equation in a vector variable.`,
    aiSynthesis: `### Mastery Note: Matrix Multiplication Order
Matrix multiplication is NOT commutative ($AB \neq BA$). The number of columns in $A$ must equal the number of rows in $B$. This is a fundamental concept for computer graphics and engineering models in CA industry.`,
    videoTutorial: {
      title: "Larson Ch 7: Matrix Operations",
      description: "Solving systems using inverse matrices and determinants.",
      searchQuery: "Larson Precalculus 2007 Chapter 7 matrix algebra systems"
    }
  },
  9: {
    textbookExcerpt: `### Larson 2007: Chapter 9 Concept Summary
**Sequences & Series:**
- **Arithmetic:** $a_n = a_1 + (n-1)d$
- **Geometric:** $a_n = a_1 r^{n-1}$
- **Sum of Finite Geometric:** $S_n = a_1 \frac{1-r^n}{1-r}$
- **Mathematical Induction:** Proving statements for all $n$.
- **Binomial Theorem:** Expanding $(x+y)^n$ using Pascal's Triangle or combinations.`,
    standardsConnection: `### California CCSS Alignment
**Standard A-SSE.4:** Derive the formula for the sum of a finite geometric series, and use the formula to solve problems (e.g., mortgage interest).
**Standard F-IF.3:** Recognize that sequences are functions, sometimes defined recursively.`,
    aiSynthesis: `### Mastery Note: Convergent Infinite Series
An infinite geometric series converges ONLY if $|r| < 1$. The sum is $S = \frac{a_1}{1-r}$. If $|r| \geq 1$, the series diverges. This concept is the gateway to Calculus series tests.`,
    videoTutorial: {
      title: "Larson Ch 9: Sequences & Probability",
      description: "Understanding recursive patterns and the Binomial Theorem.",
      searchQuery: "Larson Precalculus 2007 Chapter 9 sequences series binomial"
    }
  },
  106: {
    textbookExcerpt: `### Larson 2007: Chapter 10A Concept Summary
**Vectors:**
Quantities with both magnitude and direction.
- **Dot Product:** $u \cdot v = u_1 v_1 + u_2 v_2 = |u||v| \cos \theta$.
- **Polar Coordinates:** $(r, \theta)$. Conversions: $x = r \cos \theta, y = r \sin \theta$.
- **Parametric Equations:** $x = f(t), y = g(t)$. Used to model motion over time.`,
    standardsConnection: `### California CCSS Alignment
**Standard N-VM.1:** Recognize vector quantities as having both magnitude and direction.
**Standard N-VM.4:** Add and subtract vectors.
**Standard N-VM.5:** Multiply a vector by a scalar.`,
    aiSynthesis: `### Mastery Note: DeMoivre's Theorem
To find powers of complex numbers in polar form: $[r(\cos \theta + i\sin \theta)]^n = r^n(\cos n\theta + i\sin n\theta)$. This simplifies what would be an impossible binomial expansion into a simple multiplication.`,
    videoTutorial: {
      title: "Larson Ch 10: Vectors & Polars",
      description: "Converting between coordinate systems and vector applications.",
      searchQuery: "Larson Precalculus 2007 Chapter 10 vectors polar coordinates"
    }
  },
  110: {
    textbookExcerpt: `### Larson 2007: Chapter 10B Concept Summary
**Conic Sections:**
- **Parabola:** $(x-h)^2 = 4p(y-k)$
- **Ellipse:** $\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1$
- **Hyperbola:** $\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1$
Each is formed by the intersection of a plane and a double-napped cone.`,
    standardsConnection: `### California CCSS Alignment
**Standard G-GPE.1:** Derive the equation of a circle of given center and radius using the Pythagorean Theorem.
**Standard G-GPE.3:** Derive the equations of ellipses and hyperbolas given the foci.`,
    aiSynthesis: `### Mastery Note: Eccentricity
Eccentricity $e = c/a$ measures the "flatness" of a conic. For a circle $e=0$, for an ellipse $0 < e < 1$, for a parabola $e=1$, and for a hyperbola $e > 1$. Understanding $e$ helps identify the conic from its general form.`,
    videoTutorial: {
      title: "Larson Ch 10: Conic Sections",
      description: "Identifying and graphing parabolas, ellipses, and hyperbolas.",
      searchQuery: "Larson Precalculus 2007 Chapter 10 conic sections tutorial"
    }
  },
  12: {
    textbookExcerpt: `### Larson 2007: Chapter 12 Concept Summary
**Introduction to Calculus:**
- **Limits:** Finding the value a function approaches as $x$ nears $c$.
- **Limits at Infinity:** Horizontal asymptotes are limits as $x \to \pm \infty$.
- **Tangents:** The slope of the tangent line is the limit of the secant line slopes.
- **The Derivative:** $f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$.`,
    standardsConnection: `### California CCSS Alignment
**Modeling (+):** This chapter serves as the "Calculus Bridge" for high-achieving California students. It introduces the formal definition of change, moving from average rate of change to instantaneous rate of change.`,
    aiSynthesis: `### Mastery Note: The Difference Quotient
The expression $\frac{f(x+h)-f(x)}{h}$ represents the average rate of change. By taking the limit as $h \to 0$, we find the exact slope at a point. Mastering this algebraic simplification is the single most important skill for AP Calculus success.`,
    videoTutorial: {
      title: "Larson Ch 12: Intro to Limits",
      description: "The conceptual foundation of the derivative and limits.",
      searchQuery: "Larson Precalculus 2007 Chapter 12 limits derivative tutorial"
    }
  }
};
