export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct answer (0-3)
  difficulty: "Easy" | "Medium" | "Hard";
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  xpReward: number;
  masteryScoring: {
    excellent: { min: number; message: string };
    good: { min: number; max: number; message: string };
    needsImprovement: { max: number; message: string };
  };
}

export const quizzes: Quiz[] = [
  {
    id: "budgeting-and-saving",
    title: "Budgeting & Saving",
    description:
      "Test your knowledge of budgeting fundamentals and saving strategies",
    xpReward: 100,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You're ready to create and manage budgets like a pro.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good grasp of budgeting basics, but review recommended for stronger foundation.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the budgeting lesson to strengthen your knowledge.",
      },
    },
    questions: [
      {
        id: "budget-1",
        question: "What is the 50/30/20 rule in budgeting?",
        options: [
          "50% savings, 30% needs, 20% wants",
          "50% needs, 30% wants, 20% savings",
          "50% wants, 30% savings, 20% needs",
          "50% income, 30% expenses, 20% taxes",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "budget-2",
        question: "Which expense is considered a 'need' in budgeting?",
        options: [
          "Netflix subscription",
          "Dining out at restaurants",
          "Rent or mortgage payment",
          "Gaming console",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "budget-3",
        question: "How much should you aim to save in an emergency fund?",
        options: [
          "1-2 months of expenses",
          "3-6 months of expenses",
          "6-12 months of expenses",
          "1 year of income",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "budget-4",
        question: "What is 'paying yourself first'?",
        options: [
          "Paying your salary before others",
          "Saving money before paying any expenses",
          "Investing before saving",
          "Buying wants before needs",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "budget-5",
        question: "Which is the best place to keep your emergency fund?",
        options: [
          "Under your mattress",
          "In a checking account",
          "In a high-yield savings account",
          "In the stock market",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "budget-6",
        question:
          "What percentage of income is typically recommended for housing costs?",
        options: [
          "No more than 20%",
          "No more than 28%",
          "No more than 40%",
          "No more than 50%",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "budget-7",
        question:
          "Which budgeting method assigns every dollar a specific purpose?",
        options: [
          "50/30/20 budgeting",
          "Envelope method",
          "Zero-based budgeting",
          "Percentage budgeting",
        ],
        correctAnswer: 2,
        difficulty: "Hard",
      },
      {
        id: "budget-8",
        question: "How often should you review and adjust your budget?",
        options: ["Once a year", "Every 6 months", "Monthly", "Daily"],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "budget-9",
        question: "What should you do if your expenses exceed your income?",
        options: [
          "Use credit cards to cover the difference",
          "Ignore it and hope it improves",
          "Cut expenses or increase income",
          "Borrow money from family",
        ],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "budget-10",
        question: "Which app feature is most helpful for tracking spending?",
        options: [
          "Social media integration",
          "Automatic transaction categorization",
          "Gaming features",
          "Photo filters",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
    ],
  },
  {
    id: "understanding-credit",
    title: "Understanding Credit",
    description:
      "Test your knowledge of credit scores, credit reports, and credit management",
    xpReward: 120,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You're well-prepared to build and maintain great credit.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good foundation in credit basics, but review recommended for optimal credit management.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the credit lesson to better understand this crucial topic.",
      },
    },
    questions: [
      {
        id: "credit-1",
        question: "What is a good credit score range?",
        options: ["300-579", "580-669", "670-739", "740-850"],
        correctAnswer: 3,
        difficulty: "Easy",
      },
      {
        id: "credit-2",
        question: "What factor has the biggest impact on your credit score?",
        options: [
          "Length of credit history",
          "Payment history",
          "Credit utilization",
          "Types of credit",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "credit-3",
        question: "What should your credit utilization ratio be?",
        options: ["Below 10%", "Below 30%", "Below 50%", "Below 70%"],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "credit-4",
        question: "How often can you check your credit report for free?",
        options: [
          "Once per month",
          "Once per quarter",
          "Once per year from each bureau",
          "Only when applying for credit",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "credit-5",
        question:
          "What happens if you only make minimum payments on credit cards?",
        options: [
          "You build credit faster",
          "You pay more interest over time",
          "Your credit score improves quickly",
          "You get rewards points faster",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "credit-6",
        question: "Which action will hurt your credit score the most?",
        options: [
          "Applying for a new credit card",
          "Paying off a loan early",
          "Missing several payments",
          "Checking your credit score",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "credit-7",
        question: "What is a secured credit card?",
        options: [
          "A card with no credit limit",
          "A card that requires a cash deposit",
          "A card with guaranteed approval",
          "A card that builds credit faster",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "credit-8",
        question:
          "How long do negative items typically stay on your credit report?",
        options: ["2 years", "5 years", "7 years", "10 years"],
        correctAnswer: 2,
        difficulty: "Hard",
      },
      {
        id: "credit-9",
        question:
          "What should you do if you find an error on your credit report?",
        options: [
          "Ignore it, it will fix itself",
          "Wait for your next credit report",
          "Dispute it with the credit bureau",
          "Apply for a new credit card",
        ],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "credit-10",
        question: "Which is better for your credit score?",
        options: [
          "Closing old credit cards you don't use",
          "Keeping old credit cards open",
          "Opening many new credit cards",
          "Using all available credit",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
    ],
  },
  {
    id: "interest-rates",
    title: "Interest Rates Explained",
    description:
      "Test your understanding of simple vs compound interest and how rates work",
    xpReward: 110,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You grasp how interest works in borrowing and investing.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good knowledge of interest basics, but review recommended for stronger comprehension.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the interest rates lesson to master this important concept.",
      },
    },
    questions: [
      {
        id: "interest-1",
        question: "What is simple interest?",
        options: [
          "Interest calculated on principal and accumulated interest",
          "Interest calculated only on the principal amount",
          "Interest that changes daily",
          "Interest that is tax-free",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "interest-2",
        question: "What is compound interest?",
        options: [
          "Interest calculated only on principal",
          "Interest that compounds monthly",
          "Interest calculated on principal plus accumulated interest",
          "Interest that never changes",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "interest-3",
        question: "Which grows your money faster over time?",
        options: [
          "Simple interest",
          "Compound interest",
          "They grow at the same rate",
          "It depends on the principal amount",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "interest-4",
        question: "What does APR stand for?",
        options: [
          "Annual Payment Rate",
          "Average Percentage Rate",
          "Annual Percentage Rate",
          "Automatic Payment Rate",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "interest-5",
        question: "What does APY stand for?",
        options: [
          "Annual Percentage Yield",
          "Average Payment Yearly",
          "Annual Payment Year",
          "Automatic Percentage Yield",
        ],
        correctAnswer: 0,
        difficulty: "Easy",
      },
      {
        id: "interest-6",
        question: "For borrowers, which is better?",
        options: [
          "Higher interest rates",
          "Lower interest rates",
          "Variable interest rates",
          "Interest rates don't matter",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "interest-7",
        question: "For savers, which is better?",
        options: [
          "Lower APY",
          "Higher APY",
          "APY doesn't matter",
          "Variable APY only",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "interest-8",
        question:
          "How often does compound interest typically compound in savings accounts?",
        options: ["Annually", "Quarterly", "Monthly", "Daily"],
        correctAnswer: 3,
        difficulty: "Medium",
      },
      {
        id: "interest-9",
        question:
          "If you invest $1,000 at 5% compound interest annually, how much will you have after 2 years?",
        options: ["$1,100", "$1,102.50", "$1,105", "$1,050"],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "interest-10",
        question: "What is the 'Rule of 72'?",
        options: [
          "A way to calculate loan payments",
          "A method to estimate how long it takes money to double",
          "A credit score calculation",
          "A budgeting rule",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
    ],
  },
  {
    id: "loans-and-mortgages",
    title: "Loans & Mortgages",
    description:
      "Test your knowledge of different types of loans and mortgage basics",
    xpReward: 130,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You're prepared to make informed borrowing decisions.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good grasp of loan basics, but review recommended before major borrowing decisions.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the loans lesson before considering any major borrowing.",
      },
    },
    questions: [
      {
        id: "loans-1",
        question: "What is a secured loan?",
        options: [
          "A loan that's guaranteed to be approved",
          "A loan backed by collateral",
          "A loan with no interest",
          "A loan from a secure bank",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "loans-2",
        question: "What is an unsecured loan?",
        options: [
          "A loan without collateral",
          "A loan that's not safe",
          "A loan with variable rates",
          "A loan from an online bank",
        ],
        correctAnswer: 0,
        difficulty: "Medium",
      },
      {
        id: "loans-3",
        question: "What is PMI in mortgages?",
        options: [
          "Principal Monthly Interest",
          "Private Mortgage Insurance",
          "Property Management Income",
          "Primary Mortgage Investment",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "loans-4",
        question: "When is PMI typically required?",
        options: [
          "When you put down less than 10%",
          "When you put down less than 20%",
          "When you put down less than 30%",
          "PMI is always required",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "loans-5",
        question: "What is a typical mortgage term length?",
        options: [
          "10 years",
          "15 years",
          "30 years",
          "Both 15 and 30 years are common",
        ],
        correctAnswer: 3,
        difficulty: "Easy",
      },
      {
        id: "loans-6",
        question: "What does 'pre-approved' mean for a mortgage?",
        options: [
          "You're guaranteed to get the house",
          "The bank has checked your finances and given you a loan estimate",
          "You don't need a down payment",
          "You get the best interest rate",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "loans-7",
        question: "Which loan type typically has the highest interest rate?",
        options: ["Mortgage", "Auto loan", "Personal loan", "Student loan"],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "loans-8",
        question: "What is refinancing?",
        options: [
          "Taking out a second loan",
          "Paying off a loan early",
          "Replacing an existing loan with a new one",
          "Increasing your loan amount",
        ],
        correctAnswer: 2,
        difficulty: "Hard",
      },
      {
        id: "loans-9",
        question: "What's included in a mortgage payment (PITI)?",
        options: [
          "Principal, Interest, Taxes, Insurance",
          "Payment, Interest, Transfer, Insurance",
          "Principal, Investment, Taxes, Income",
          "Payment, Investment, Transfer, Income",
        ],
        correctAnswer: 0,
        difficulty: "Hard",
      },
      {
        id: "loans-10",
        question: "Which factor most affects your loan interest rate?",
        options: [
          "Your age",
          "Your credit score",
          "Your job title",
          "Your education level",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
    ],
  },
  {
    id: "investment-basics",
    title: "Investment Basics",
    description:
      "Test your knowledge of stocks, bonds, funds, and investment principles",
    xpReward: 140,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You're ready to start building an investment portfolio.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good foundation in investing, but review recommended before making investment decisions.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the investment lesson before considering any investments.",
      },
    },
    questions: [
      {
        id: "invest-1",
        question: "What does a stock represent?",
        options: [
          "A loan to a company",
          "Ownership in a company",
          "A government bond",
          "A savings account",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "invest-2",
        question: "What is a bond?",
        options: [
          "Ownership in a company",
          "A type of stock",
          "A loan to a company or government",
          "A savings account",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "invest-3",
        question: "What is diversification?",
        options: [
          "Buying only one stock",
          "Spreading investments across different assets",
          "Investing all money at once",
          "Only investing in bonds",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "invest-4",
        question: "What is an ETF?",
        options: [
          "Electronic Transfer Fund",
          "Exchange Traded Fund",
          "Emergency Trust Fund",
          "Equity Trading Fund",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "invest-5",
        question: "What is dollar-cost averaging?",
        options: [
          "Investing a large sum all at once",
          "Investing a fixed amount regularly regardless of market conditions",
          "Only investing when markets are down",
          "Only investing when markets are up",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "invest-6",
        question:
          "Which investment typically has the highest long-term returns?",
        options: ["Savings accounts", "Bonds", "Stocks", "CDs"],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "invest-7",
        question: "What is a mutual fund?",
        options: [
          "A single stock",
          "A pooled investment vehicle managed by professionals",
          "A type of bond",
          "A savings account",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "invest-8",
        question: "When should you start investing?",
        options: [
          "When you have $10,000 saved",
          "When you're 30 years old",
          "As early as possible",
          "Only when markets are performing well",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "invest-9",
        question: "What is market volatility?",
        options: [
          "Steady, predictable returns",
          "Up and down movements in investment values",
          "Only upward movements",
          "Only downward movements",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "invest-10",
        question: "Which investment approach is recommended for beginners?",
        options: [
          "Day trading individual stocks",
          "Low-cost index funds or ETFs",
          "Cryptocurrency only",
          "Individual company stocks only",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
    ],
  },
  {
    id: "risk-vs-return",
    title: "Risk vs Return",
    description:
      "Test your understanding of investment risk and return relationships",
    xpReward: 125,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You can balance risk and return to meet your goals.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good grasp of risk concepts, but review recommended for better risk management.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the risk vs return lesson for safer investing.",
      },
    },
    questions: [
      {
        id: "risk-1",
        question: "What is the general relationship between risk and return?",
        options: [
          "Higher risk, lower return",
          "Higher risk, higher potential return",
          "Risk and return are unrelated",
          "Lower risk, higher return",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "risk-2",
        question: "Which investment is typically considered the safest?",
        options: [
          "Individual stocks",
          "Corporate bonds",
          "Government bonds",
          "Cryptocurrency",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
      {
        id: "risk-3",
        question: "What is risk tolerance?",
        options: [
          "How much money you can invest",
          "How much loss you can emotionally and financially handle",
          "How long you plan to invest",
          "How much return you expect",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "risk-4",
        question: "Who typically can take more investment risk?",
        options: [
          "Someone near retirement",
          "Someone who needs money in 1 year",
          "A young person with decades until retirement",
          "Someone with no emergency fund",
        ],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "risk-5",
        question: "What is systematic risk?",
        options: [
          "Risk specific to one company",
          "Risk that affects the entire market",
          "Risk you can eliminate through diversification",
          "Risk from poor management",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "risk-6",
        question: "How can you reduce investment risk?",
        options: [
          "Put all money in one stock",
          "Diversify across different investments",
          "Only invest when markets are up",
          "Avoid all investments",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "risk-7",
        question: "What is inflation risk?",
        options: [
          "Risk of market crashes",
          "Risk that returns won't keep up with rising prices",
          "Risk of company bankruptcy",
          "Risk of interest rate changes",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "risk-8",
        question: "Which asset allocation is more aggressive?",
        options: [
          "80% bonds, 20% stocks",
          "50% bonds, 50% stocks",
          "20% bonds, 80% stocks",
          "100% bonds",
        ],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "risk-9",
        question: "What should drive your risk tolerance?",
        options: [
          "Current market performance",
          "Your friend's investment choices",
          "Your age, goals, and financial situation",
          "Latest investment trends",
        ],
        correctAnswer: 2,
        difficulty: "Hard",
      },
      {
        id: "risk-10",
        question: "When should you reassess your risk tolerance?",
        options: [
          "Never, it should stay the same",
          "Only during market crashes",
          "Regularly, as your life circumstances change",
          "Only when you lose money",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
    ],
  },
  {
    id: "understanding-inflation",
    title: "Understanding Inflation",
    description:
      "Test your knowledge of inflation and its impact on your money",
    xpReward: 105,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You know how to protect your money from inflation.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good grasp of inflation basics, but review recommended for better protection strategies.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the inflation lesson to protect your purchasing power.",
      },
    },
    questions: [
      {
        id: "inflation-1",
        question: "What is inflation?",
        options: [
          "When prices go down over time",
          "When prices go up over time",
          "When money becomes worth more",
          "When interest rates are high",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "inflation-2",
        question: "How does inflation affect your money?",
        options: [
          "It increases purchasing power",
          "It decreases purchasing power",
          "It has no effect on money",
          "It only affects investments",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "inflation-3",
        question: "What is a typical healthy inflation rate?",
        options: ["0%", "2%", "5%", "10%"],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "inflation-4",
        question: "Which type of account is most hurt by inflation?",
        options: [
          "Stock investments",
          "Real estate",
          "Cash in a low-interest savings account",
          "Commodities",
        ],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "inflation-5",
        question: "What are TIPS?",
        options: [
          "Tax Interest Proof Securities",
          "Treasury Inflation-Protected Securities",
          "Total Investment Protection Schemes",
          "Time Interest Payment Systems",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "inflation-6",
        question: "Which often provides better inflation protection?",
        options: [
          "Cash under a mattress",
          "Low-interest savings accounts",
          "Stock investments",
          "Fixed-rate bonds",
        ],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "inflation-7",
        question: "What causes inflation?",
        options: [
          "Increased demand for goods and services",
          "Rising production costs",
          "Monetary policy changes",
          "All of the above",
        ],
        correctAnswer: 3,
        difficulty: "Hard",
      },
      {
        id: "inflation-8",
        question: "How does inflation affect fixed-rate debt?",
        options: [
          "It makes debt more expensive",
          "It makes debt easier to pay off",
          "It has no effect on debt",
          "It only affects variable-rate debt",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "inflation-9",
        question: "Which group is most hurt by unexpected inflation?",
        options: [
          "Young workers",
          "People on fixed incomes",
          "Stock investors",
          "Real estate owners",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "inflation-10",
        question: "What is deflation?",
        options: [
          "Very high inflation",
          "Moderate inflation",
          "When prices decrease over time",
          "When inflation stops",
        ],
        correctAnswer: 2,
        difficulty: "Easy",
      },
    ],
  },
  {
    id: "tax-fundamentals",
    title: "Tax Fundamentals",
    description:
      "Test your knowledge of taxes, deductions, and tax planning strategies",
    xpReward: 135,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You're ready to optimize your tax strategy.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good tax knowledge foundation, but review recommended for better tax planning.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the tax lesson for better financial planning.",
      },
    },
    questions: [
      {
        id: "tax-1",
        question: "What is a progressive tax system?",
        options: [
          "Everyone pays the same rate",
          "Higher earners pay higher rates",
          "Lower earners pay higher rates",
          "No one pays taxes",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "tax-2",
        question: "What is the difference between deductions and credits?",
        options: [
          "There is no difference",
          "Deductions reduce taxable income, credits reduce tax owed",
          "Credits reduce taxable income, deductions reduce tax owed",
          "Both reduce tax owed dollar-for-dollar",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "tax-3",
        question: "Which is more valuable?",
        options: [
          "A $1,000 tax deduction",
          "A $1,000 tax credit",
          "They have the same value",
          "It depends on your tax bracket",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "tax-4",
        question: "What is the standard deduction for 2024 (single filer)?",
        options: ["$12,550", "$13,850", "$14,600", "$15,000"],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "tax-5",
        question: "What are payroll taxes used for?",
        options: [
          "General government operations",
          "Social Security and Medicare",
          "Military spending",
          "Education funding",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "tax-6",
        question: "When are taxes typically due?",
        options: ["April 1st", "April 15th", "March 15th", "May 1st"],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "tax-7",
        question: "What is a traditional 401(k)?",
        options: [
          "A post-tax retirement account",
          "A pre-tax retirement account",
          "A type of savings account",
          "A government bond",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "tax-8",
        question: "What is capital gains tax?",
        options: [
          "Tax on your salary",
          "Tax on investment profits",
          "Tax on your home",
          "Tax on business income",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "tax-9",
        question:
          "How long must you hold an investment for long-term capital gains treatment?",
        options: ["6 months", "1 year", "More than 1 year", "2 years"],
        correctAnswer: 2,
        difficulty: "Hard",
      },
      {
        id: "tax-10",
        question: "What is tax loss harvesting?",
        options: [
          "Growing vegetables to reduce taxes",
          "Selling losing investments to offset gains",
          "Avoiding all investments",
          "Only investing in tax-free accounts",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
    ],
  },
  {
    id: "retirement-planning",
    title: "Retirement Planning",
    description:
      "Test your knowledge of 401(k)s, IRAs, and retirement strategies",
    xpReward: 150,
    masteryScoring: {
      excellent: {
        min: 8,
        message:
          "Excellent understanding! You're well-prepared to plan for a secure retirement.",
      },
      good: {
        min: 5,
        max: 7,
        message:
          "Good retirement planning foundation, but review recommended for optimal planning.",
      },
      needsImprovement: {
        max: 4,
        message:
          "Needs improvement — revisit the retirement lesson to secure your financial future.",
      },
    },
    questions: [
      {
        id: "retirement-1",
        question:
          "What is the main difference between a traditional and Roth IRA?",
        options: [
          "Traditional is for young people, Roth is for older people",
          "Traditional offers tax deduction now, Roth offers tax-free withdrawals later",
          "Traditional has higher contribution limits",
          "There is no difference",
        ],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "retirement-2",
        question: "What is employer matching in a 401(k)?",
        options: [
          "When your employer pays your salary",
          "When your employer contributes money based on your contributions",
          "When your employer manages your investments",
          "When your employer pays your taxes",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
      {
        id: "retirement-3",
        question: "What is the 2024 contribution limit for 401(k)s?",
        options: ["$20,500", "$22,500", "$23,000", "$25,000"],
        correctAnswer: 2,
        difficulty: "Hard",
      },
      {
        id: "retirement-4",
        question: "When can you withdraw from a 401(k) without penalty?",
        options: ["Age 55", "Age 59½", "Age 62", "Age 65"],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "retirement-5",
        question: "What percentage of income should you save for retirement?",
        options: ["5-8%", "10-15%", "20-25%", "30%+"],
        correctAnswer: 1,
        difficulty: "Medium",
      },
      {
        id: "retirement-6",
        question: "What is Social Security?",
        options: [
          "A government retirement program",
          "A type of 401(k)",
          "A private insurance plan",
          "A savings account",
        ],
        correctAnswer: 0,
        difficulty: "Easy",
      },
      {
        id: "retirement-7",
        question: "At what age can you collect full Social Security benefits?",
        options: ["62", "65", "67 (for most people)", "70"],
        correctAnswer: 2,
        difficulty: "Medium",
      },
      {
        id: "retirement-8",
        question: "What is a target-date fund?",
        options: [
          "A fund that expires on a certain date",
          "A fund that automatically adjusts allocation as you age",
          "A fund that only invests in one company",
          "A fund with guaranteed returns",
        ],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "retirement-9",
        question: "What is the penalty for early 401(k) withdrawal?",
        options: ["5%", "10%", "15%", "20%"],
        correctAnswer: 1,
        difficulty: "Hard",
      },
      {
        id: "retirement-10",
        question: "Why is starting retirement savings early important?",
        options: [
          "You get better investment options",
          "Compound interest has more time to work",
          "Early savers get government bonuses",
          "You can retire at 50",
        ],
        correctAnswer: 1,
        difficulty: "Easy",
      },
    ],
  },
];

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === id);
}

export function calculateScore(
  quiz: Quiz,
  answers: number[],
): {
  score: number;
  percentage: number;
  masteryLevel: "excellent" | "good" | "needsImprovement";
  message: string;
  xpEarned: number;
} {
  const correctAnswers = quiz.questions.reduce((count, question, index) => {
    return count + (question.correctAnswer === answers[index] ? 1 : 0);
  }, 0);

  const percentage = Math.round((correctAnswers / quiz.questions.length) * 100);

  let masteryLevel: "excellent" | "good" | "needsImprovement";
  let message: string;
  let xpEarned: number;

  if (correctAnswers >= quiz.masteryScoring.excellent.min) {
    masteryLevel = "excellent";
    message = quiz.masteryScoring.excellent.message;
    xpEarned = quiz.xpReward;
  } else if (correctAnswers >= quiz.masteryScoring.good.min) {
    masteryLevel = "good";
    message = quiz.masteryScoring.good.message;
    xpEarned = Math.round(quiz.xpReward * 0.7); // 70% XP for good performance
  } else {
    masteryLevel = "needsImprovement";
    message = quiz.masteryScoring.needsImprovement.message;
    xpEarned = Math.round(quiz.xpReward * 0.3); // 30% XP for participation
  }

  return {
    score: correctAnswers,
    percentage,
    masteryLevel,
    message,
    xpEarned,
  };
}
