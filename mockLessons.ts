
export const MOCK_LESSONS: Record<number, any> = {
  1: {
    textbookExcerpt: `### Unit 1: Functions
**What is a Function?**
A function is a relation in which each element of the domain is paired with exactly one element of the range.
- **Vertical Line Test:** A curve in the coordinate plane is the graph of a function if and only if no vertical line intersects the curve more than once.
- **Arithmetic of Functions:**
  - $(f+g)(x) = f(x) + g(x)$
  - $(f-g)(x) = f(x) - g(x)$
  - $(fg)(x) = f(x) \cdot g(x)$
  - $(f/g)(x) = f(x) / g(x), g(x) \neq 0$
- **Composition:** $(f \circ g)(x) = f(g(x))$`,
    standardsConnection: `### California CCSS Alignment
**F-IF.1, F-IF.2:** Understanding the concept of a function and using function notation.
**F-BF.1:** Building a function that models a relationship between two quantities.`,
    aiSynthesis: `### Mastery Note: Function Composition
When composing functions, work from the inside out. For $(f \circ g)(x)$, first evaluate $g(x)$, then use that result as the input for $f$.`,
    videoTutorial: {
      title: "Unit 1: Functions & Arithmetic",
      description: "Introduction to functions, domain, range, and operations.",
      searchQuery: "Precalculus functions and their graphs tutorial"
    }
  },
  2: {
    textbookExcerpt: `### Unit 2: Quadratic Functions
**Forms of Quadratic Functions:**
- **Standard Form:** $f(x) = ax^2 + bx + c$
- **Vertex Form:** $f(x) = a(x-h)^2 + k$, where $(h, k)$ is the vertex.
- **Quadratic Formula:** $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
- **Complex Numbers:** $i = \sqrt{-1}$. Solutions to quadratics can be complex if the discriminant $b^2 - 4ac < 0$.`,
    standardsConnection: `### California CCSS Alignment
**A-SSE.3:** Choose and produce an equivalent form of an expression to reveal and explain properties.
**N-CN.7:** Solve quadratic equations with real coefficients that have complex solutions.`,
    aiSynthesis: `### Mastery Note: Optimization
The vertex $(h, k)$ represents the maximum or minimum value of the quadratic function. In real-world problems, finding the vertex is often the key to optimization.`,
    videoTutorial: {
      title: "Unit 2: Quadratic Mastery",
      description: "Graphing quadratics and solving with complex numbers.",
      searchQuery: "Precalculus quadratic functions and complex numbers"
    }
  },
  3: {
    textbookExcerpt: `### Unit 3: Polynomial & Rational Functions
**Polynomials:**
- **Synthetic Division:** A shortcut method for dividing a polynomial by a linear factor $(x - k)$.
- **Fundamental Theorem of Algebra:** A polynomial of degree $n$ has exactly $n$ complex zeros (counting multiplicity).
**Rational Functions:**
- **Asymptotes:**
  - Vertical: Where the denominator is zero (after simplification).
  - Horizontal: Determined by the ratio of the leading coefficients if degrees are equal.`,
    standardsConnection: `### California CCSS Alignment
**A-APR.2, A-APR.3:** Remainder Theorem and identifying zeros of polynomials.
**F-IF.7d:** Graphing rational functions and identifying asymptotes.`,
    aiSynthesis: `### Mastery Note: End Behavior
For large values of $|x|$, a polynomial's behavior is dominated by its leading term $a_n x^n$. This determines whether the graph goes to $\infty$ or $-\infty$.`,
    videoTutorial: {
      title: "Unit 3: Polynomials & Rational Functions",
      description: "Zeros of polynomials and rational function asymptotes.",
      searchQuery: "Precalculus polynomial and rational functions tutorial"
    }
  },
  4: {
    textbookExcerpt: `### Unit 4: Exponential & Logarithmic Functions
**Exponential Functions:** $f(x) = ab^x$.
- **Natural Base $e$:** $e \approx 2.71828$. Used in continuous growth $A = Pe^{rt}$.
**Logarithmic Functions:** The inverse of exponential functions. $y = \log_b x \iff b^y = x$.
- **Properties:**
  - $\log_b(MN) = \log_b M + \log_b N$
  - $\log_b(M/N) = \log_b M - \log_b N$
  - $\log_b(M^p) = p \log_b M$`,
    standardsConnection: `### California CCSS Alignment
**F-LE.4:** Solve exponential equations using logarithms.
**A-SSE.4:** Derive the formula for the sum of a finite geometric series.`,
    aiSynthesis: `### Mastery Note: Change of Base
To evaluate $\log_b a$ on a calculator, use the change of base formula: $\frac{\ln a}{\ln b}$ or $\frac{\log a}{\log b}$.`,
    videoTutorial: {
      title: "Unit 4: Exponents & Logs",
      description: "Solving exponential and logarithmic equations.",
      searchQuery: "Precalculus exponential and logarithmic functions"
    }
  },
  5: {
    textbookExcerpt: `### Unit 5: Conic Sections
**The Four Conics:**
- **Circle:** $(x-h)^2 + (y-k)^2 = r^2$
- **Ellipse:** $\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1$
- **Hyperbola:** $\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1$
- **Parabola:** $(y-k)^2 = 4p(x-h)$ or $(x-h)^2 = 4p(y-k)$`,
    standardsConnection: `### California CCSS Alignment
**G-GPE.1, 2, 3:** Deriving equations of circles, parabolas, ellipses, and hyperbolas.`,
    aiSynthesis: `### Mastery Note: Identifying Conics
Look at the coefficients of $x^2$ and $y^2$. If they are the same, it's a circle. If different signs, it's a hyperbola. If one is zero, it's a parabola.`,
    videoTutorial: {
      title: "Unit 5: Conic Sections",
      description: "Graphing and identifying circles, ellipses, and hyperbolas.",
      searchQuery: "Precalculus conic sections tutorial"
    }
  },
  7: {
    textbookExcerpt: `### Unit 7: Introduction to Trigonometry
**Angles and Radians:**
- $180^\circ = \pi$ radians.
- **Arc Length:** $s = r\theta$ ($\theta$ in radians).
**The Unit Circle:**
- A circle with radius 1 centered at the origin.
- $(x, y) = (\cos \theta, \sin \theta)$.
- $\tan \theta = y/x$.`,
    standardsConnection: `### California CCSS Alignment
**F-TF.1, F-TF.2:** Understanding radian measure and the unit circle.`,
    aiSynthesis: `### Mastery Note: Reference Angles
The reference angle is the acute angle formed by the terminal side and the x-axis. It helps find trig values in any quadrant.`,
    videoTutorial: {
      title: "Unit 7: Trig Basics",
      description: "Radians, degrees, and the unit circle.",
      searchQuery: "Precalculus introduction to trigonometry"
    }
  },
  8: {
    textbookExcerpt: `### Unit 8: Trigonometric Functions
**Sine and Cosine Graphs:**
- $y = A \sin(B(x - C)) + D$
- $|A|$ is the **amplitude**.
- $2\pi/B$ is the **period**.
- $C$ is the **phase shift**.
- $D$ is the **vertical shift** (midline).`,
    standardsConnection: `### California CCSS Alignment
**F-TF.5:** Model periodic phenomena with trigonometric functions.`,
    aiSynthesis: `### Mastery Note: Periodicity
Trig functions repeat their values in regular intervals. For $\sin$ and $\cos$, the standard period is $2\pi$. For $\tan$, it is $\pi$.`,
    videoTutorial: {
      title: "Unit 8: Graphing Trig Functions",
      description: "Transforming sine and cosine graphs.",
      searchQuery: "Precalculus graphing trigonometric functions"
    }
  },
  9: {
    textbookExcerpt: `### Unit 9: Working with Trig Functions
**Inverse Trig Functions:**
- $\arcsin x$, $\arccos x$, $\arctan x$.
- Used to find the angle when the ratio is known.
- **Restrictions:** Each inverse function has a restricted range to ensure it is a function.
**Simple Harmonic Motion:**
- $d = a \cos(\omega t)$ or $d = a \sin(\omega t)$.`,
    standardsConnection: `### California CCSS Alignment
**F-TF.4, F-TF.6:** Using inverse functions to solve trigonometric equations.`,
    aiSynthesis: `### Mastery Note: Principal Values
Calculators only give the "principal" value for inverse trig functions. You must use the unit circle to find all possible solutions in a given interval.`,
    videoTutorial: {
      title: "Unit 9: Inverse Trig & Equations",
      description: "Solving trig equations and inverse functions.",
      searchQuery: "Precalculus solving trigonometric equations"
    }
  },
  10: {
    textbookExcerpt: `### Unit 10: Trigonometric Identities
**Fundamental Identities:**
- **Pythagorean:** $\sin^2 \theta + \cos^2 \theta = 1$
- **Reciprocal:** $\csc \theta = 1/\sin \theta$, etc.
- **Quotient:** $\tan \theta = \sin \theta / \cos \theta$
**Sum and Difference Formulas:**
- $\sin(u \pm v) = \sin u \cos v \pm \cos u \sin v$
- $\cos(u \pm v) = \cos u \cos v \mp \sin u \sin v$`,
    standardsConnection: `### California CCSS Alignment
**F-TF.8, F-TF.9:** Proving and using trigonometric identities.`,
    aiSynthesis: `### Mastery Note: Proving Identities
Always start with the more complex side and use substitutions to make it match the simpler side. Don't "solve" across the equals sign.`,
    videoTutorial: {
      title: "Unit 10: Trig Identities & Proofs",
      description: "Verifying and using trigonometric identities.",
      searchQuery: "Precalculus trigonometric identities tutorial"
    }
  },
  11: {
    textbookExcerpt: `### Unit 11: Applications of Trigonometry
**Law of Sines:** $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$
- Used for AAS, ASA, and SSA (ambiguous case).
**Law of Cosines:** $a^2 = b^2 + c^2 - 2bc \cos A$
- Used for SSS and SAS.
**Vectors:**
- Magnitude: $\|v\| = \sqrt{x^2 + y^2}$.
- Direction: $\theta = \arctan(y/x)$.`,
    standardsConnection: `### California CCSS Alignment
**G-SRT.10, G-SRT.11:** Applying Laws of Sines and Cosines to solve triangles.
**N-VM.1, 3:** Understanding and using vectors.`,
    aiSynthesis: `### Mastery Note: The Ambiguous Case
When using the Law of Sines with SSA, always check if a second triangle is possible by calculating $180^\circ - \theta$.`,
    videoTutorial: {
      title: "Unit 11: Oblique Triangles & Vectors",
      description: "Laws of Sines/Cosines and vector operations.",
      searchQuery: "Precalculus law of sines and cosines tutorial"
    }
  },
  12: {
    textbookExcerpt: `### Unit 12: Complex Numbers
**Polar Form of Complex Numbers:**
- $z = r(\cos \theta + i \sin \theta)$ or $z = r e^{i\theta}$.
- $r = |z| = \sqrt{a^2 + b^2}$.
- $\theta = \text{arg}(z)$.
**De Moivre's Theorem:**
- $z^n = r^n(\cos n\theta + i \sin n\theta)$.`,
    standardsConnection: `### California CCSS Alignment
**N-CN.3, 4, 5:** Representing complex numbers in polar form and performing operations.`,
    aiSynthesis: `### Mastery Note: Roots of Unity
De Moivre's Theorem is extremely powerful for finding the $n$-th roots of a complex number, which are equally spaced around a circle in the complex plane.`,
    videoTutorial: {
      title: "Unit 12: Complex Numbers & Polars",
      description: "Complex numbers in polar form and De Moivre's Theorem.",
      searchQuery: "Precalculus complex numbers in polar form"
    }
  }
};
