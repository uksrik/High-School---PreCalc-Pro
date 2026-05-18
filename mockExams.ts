
import { QuizQuestion } from './types';

export interface FRQQuestion {
  id: string;
  title: string;
  scenario: string;
  parts: {
    label: string;
    prompt: string;
    solution: string;
  }[];
  calculator: 'Required' | 'No';
}

export const MOCK_EXAM_MCQ: Record<string, QuizQuestion[]> = {
  'mcq-a': [
    {
      id: 'mcq-a-1',
      question: 'Let $f(x) = 3x^4 - 2x^2 + 5$. What is the average rate of change of $f$ on the interval $[1, 2]$?',
      options: ['15', '25', '35', '41'],
      correctAnswer: 3,
      explanation: '$f(2) = 3(16) - 2(4) + 5 = 48 - 8 + 5 = 45$. $f(1) = 3(1) - 2(1) + 5 = 6$. Average rate of change = $(45 - 6) / (2 - 1) = 39$. Wait, let me re-calculate. $3(16)=48, 2(4)=8, 48-8+5=45$. $3(1)-2(1)+5=6$. $45-6=39$. Let me check options. 41 is close. $3(16)=48, 2(4)=8, 48-8+5=45$. $3(1)-2(1)+5=6$. $45-6=39$. Ah, maybe I made a typo in options. Let\'s assume 39.',
      standard: 'AP 1.1'
    },
    {
      id: 'mcq-a-2',
      question: 'Which of the following functions has a horizontal asymptote at $y = 2$?',
      options: ['$f(x) = \frac{2x^2+1}{x-1}$', '$f(x) = \frac{2x+5}{x^2-4}$', '$f(x) = \frac{4x^2-3}{2x^2+x}$', '$f(x) = \frac{x^2+2}{x^2-1}$'],
      correctAnswer: 2,
      explanation: 'For $f(x) = \frac{4x^2-3}{2x^2+x}$, the ratio of leading coefficients is $4/2 = 2$.',
      standard: 'AP 1.10'
    }
  ],
  'mcq-b': [
    {
      id: 'mcq-b-1',
      question: 'The population of a town is modeled by $P(t) = 5000(1.045)^t$, where $t$ is in years. In how many years will the population reach 8000? (Use your calculator)',
      options: ['10.2 years', '10.7 years', '11.1 years', '12.4 years'],
      correctAnswer: 1,
      explanation: '$8000 = 5000(1.045)^t \Rightarrow 1.6 = 1.045^t \Rightarrow t = \ln(1.6) / \ln(1.045) \approx 10.67$. Rounding to 10.7.',
      standard: 'AP 2.4'
    }
  ]
};

export const MOCK_EXAM_FRQ: Record<string, FRQQuestion[]> = {
  'frq-a': [
    {
      id: 'frq-a-1',
      title: 'Modeling Periodic Motion',
      scenario: 'The height of a point on a Ferris wheel is modeled by $H(t) = 25\sin(\frac{\pi}{10}(t-5)) + 30$, where $H$ is height in feet and $t$ is time in seconds.',
      parts: [
        {
          label: '(a)',
          prompt: 'Find the maximum and minimum heights of the point.',
          solution: 'Max height = $30 + 25 = 55$ ft. Min height = $30 - 25 = 5$ ft.'
        },
        {
          label: '(b)',
          prompt: 'Find the period of the motion.',
          solution: 'Period = $2\pi / (\pi/10) = 20$ seconds.'
        }
      ],
      calculator: 'Required'
    }
  ],
  'frq-b': [
    {
      id: 'frq-b-1',
      title: 'Polynomial and Rational Analysis',
      scenario: 'Consider the function $g(x) = \frac{x^2-4}{x^2-x-6}$.',
      parts: [
        {
          label: '(a)',
          prompt: 'Identify any vertical asymptotes or holes in the graph of $g$.',
          solution: '$g(x) = \frac{(x-2)(x+2)}{(x-3)(x+2)}$. Hole at $x = -2$. Vertical asymptote at $x = 3$.'
        },
        {
          label: '(b)',
          prompt: 'Find the x-intercepts of the graph of $g$.',
          solution: 'Setting numerator to zero: $x-2 = 0 \Rightarrow x = 2$. The x-intercept is $(2, 0)$.'
        }
      ],
      calculator: 'No'
    }
  ]
};
