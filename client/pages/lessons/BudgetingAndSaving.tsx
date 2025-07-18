import LessonLayout from "@/components/LessonLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function BudgetingAndSaving() {
  const sections = [
    {
      title: "Understanding the Fundamentals of Budgeting",
      content: `Budgeting is the cornerstone of personal financial success. At its core, budgeting is the process of creating a detailed plan that outlines how you'll allocate your income across various expenses, savings, and financial goals over a specific period, typically monthly.

Think of a budget as your financial GPS - it shows you where your money is currently going, helps you navigate toward your destination (financial goals), and alerts you when you're getting off track. Without a budget, you're essentially driving blindfolded through your financial life.

Many people avoid budgeting because they think it's restrictive or complicated, but the opposite is true. A well-crafted budget actually gives you more freedom because you're making conscious decisions about your money rather than wondering where it all went at the end of the month.

The key to successful budgeting isn't perfection - it's awareness and intentionality. When you track where every dollar goes, you gain control over your financial destiny and can make informed decisions that align with your values and goals.`,
    },
    {
      title: "The Psychology of Money and Spending",
      content: `Before diving into budgeting mechanics, it's crucial to understand the emotional and psychological aspects of money management. Our relationship with money is deeply personal and often shaped by childhood experiences, cultural background, and societal pressures.

Common psychological barriers to effective budgeting include:

**Emotional Spending**: Using purchases to cope with stress, sadness, or boredom. This "retail therapy" can derail even the best-planned budgets.

**Lifestyle Inflation**: As income increases, expenses tend to increase proportionally, leaving little room for additional savings despite earning more money.

**Present Bias**: Humans naturally prioritize immediate gratification over future benefits, making it challenging to save for long-term goals.

**Analysis Paralysis**: Some people become so overwhelmed by budgeting options and strategies that they never start at all.

Understanding these tendencies helps you develop strategies to overcome them. For example, if you're an emotional spender, you might build a small "fun money" category into your budget or find alternative ways to manage stress.`,
    },
    {
      title: "The Complete Guide to the 50/30/20 Rule",
      content: `The 50/30/20 rule, popularized by Senator Elizabeth Warren, provides a simple framework for dividing your after-tax income. This rule is particularly effective for beginners because it's straightforward and flexible.

**50% for Needs (Essential Expenses)**
These are expenses you cannot avoid:
• Housing (rent/mortgage, property taxes, essential repairs)
• Transportation (car payments, gas, insurance, public transit)
• Utilities (electricity, water, gas, basic phone/internet)
• Groceries and essential household items
• Insurance (health, life, disability)
• Minimum debt payments
• Basic clothing

**30% for Wants (Discretionary Spending)**
These enhance your quality of life but aren't essential:
• Dining out and entertainment
• Hobbies and recreation
• Cable/streaming services
• Gym memberships
• Non-essential shopping
• Travel and vacations
• Personal care beyond basics

**20% for Savings and Debt Repayment**
This category secures your financial future:
• Emergency fund contributions
• Retirement savings (401k, IRA)
• Extra debt payments beyond minimums
• Short-term savings goals
• Investment contributions

**Adapting the Rule**: If your housing costs exceed 50% of your income (common in expensive cities), you might need to adjust to 60/20/20 or focus on increasing income or reducing housing costs.`,
    },
    {
      title: "Building a Bulletproof Emergency Fund",
      content: `An emergency fund is your financial safety net - money set aside specifically for unexpected expenses or income disruptions. This fund serves as a buffer between you and debt when life throws curveballs.

**Why Emergency Funds Matter**
Without an emergency fund, unexpected expenses often get charged to credit cards, creating a cycle of debt that can take years to overcome. Studies show that people with emergency funds experience significantly less financial stress and are better positioned to take advantage of opportunities.

**The Building Strategy**
Start with micro-goals to build momentum:
• Week 1-2: Save $100 (even if it's $5-10 per day)
• Month 1: Reach $500
• Months 2-3: Build to $1,000
• Months 4-12: Work toward 3-6 months of expenses

**Calculating Your Target Amount**
Add up your essential monthly expenses:
• Housing (rent/mortgage, utilities)
• Food and groceries
• Transportation
• Insurance premiums
• Minimum debt payments
• Basic personal care

Multiply this total by 3-6 months. If you have stable employment, 3 months might suffice. If you're self-employed or in an unstable industry, aim for 6 months or more.

**Where to Keep Emergency Funds**
• High-yield savings account (separate from checking)
• Money market account
• Short-term CDs (if you won't need immediate access)

**What Constitutes an Emergency**
True emergencies include:
• Job loss or significant income reduction
• Medical emergencies not covered by insurance
• Major home or car repairs
• Unexpected travel for family emergencies

Not emergencies: vacations, holidays gifts, or predictable expenses like car registration.`,
    },
    {
      title: "Advanced Saving Strategies and Automation",
      content: `The secret to consistent saving isn't willpower - it's automation and strategic planning. By removing the decision-making process from saving, you're more likely to stick to your goals.

**Pay Yourself First Philosophy**
This fundamental principle means treating savings like a non-negotiable bill. Before spending on anything else, allocate money to savings. This ensures your future self gets "paid" before present you spends everything.

**Automation Strategies**
Set up automatic transfers for:
• Savings accounts (the day after payday)
• Retirement contributions
• Investment accounts
• Bill payments to avoid late fees

**The Power of Small Amounts**
Don't underestimate small savings:
• $25 per week = $1,300 per year
• $5 per day = $1,825 per year
• Rounding up purchases to the nearest dollar can save $300-500 annually

**High-Yield Savings Accounts**
Traditional savings accounts often earn less than 0.5% interest, while high-yield accounts can earn 4-5%. On a $10,000 emergency fund, this difference amounts to hundreds of dollars per year.

**Savings Challenges**
• 52-week challenge: Save $1 week 1, $2 week 2, etc. (Total: $1,378)
• $5 challenge: Save every $5 bill you receive
• No-spend weekends: Choose one weekend per month to avoid unnecessary spending

**Multiple Savings Goals**
Use separate accounts for different goals:
• Emergency fund
• Vacation fund
• Home down payment
• Car replacement fund
• Holiday gift fund

This prevents you from "borrowing" from one goal to fund another.`,
    },
    {
      title: "Budgeting Methods and Tools",
      content: `Different budgeting methods work for different personalities and lifestyles. Experiment to find what resonates with you.

**Zero-Based Budgeting**
Every dollar gets assigned a purpose before the month begins. Income minus expenses and savings should equal zero. This method ensures intentional spending but requires detailed planning.

**Envelope Method**
Allocate cash into physical or digital "envelopes" for each spending category. When the envelope is empty, you're done spending in that category for the month.

**Pay-Check Budgeting**
Instead of monthly budgeting, plan how you'll use each paycheck. This works well for irregular income or people paid bi-weekly.

**Digital Tools and Apps**
• Mint: Free, comprehensive tracking and categorization
• YNAB (You Need A Budget): Zero-based budgeting philosophy
• Personal Capital: Great for investment tracking
• Spreadsheets: Ultimate customization and control

**The Importance of Tracking**
You can't manage what you don't measure. Track spending for at least one month before creating a budget to understand your actual spending patterns vs. perceived spending.`,
    },
    {
      title: "Overcoming Common Budgeting Obstacles",
      content: `Even the best budgets face challenges. Anticipating and preparing for these obstacles increases your likelihood of long-term success.

**Irregular Income**
If your income varies monthly:
• Use your lowest income month as your baseline budget
• Save excess income from good months in a "income smoothing" account
• Prioritize building a larger emergency fund (6-9 months of expenses)

**Overspending in Categories**
When you consistently overspend in specific categories:
• Increase the budget for that category and decrease another
• Examine if the overspending is due to poor estimates or lack of discipline
• Consider if it's a "need" miscategorized as a "want"

**Budget Fatigue**
To prevent burnout:
• Review and adjust your budget monthly, not daily
• Build in some flexibility with a "miscellaneous" category
• Focus on progress, not perfection
• Celebrate small wins and milestones

**Spousal or Family Conflicts**
Money disagreements are common. Strategies include:
• Regular budget meetings to discuss goals and concerns
• Separate "fun money" allowances for each person
• Compromise on spending priorities
• Focus on shared values and goals

**Lifestyle Changes**
Life events require budget adjustments:
• Job changes: Wait 2-3 months before increasing lifestyle expenses
• New baby: Plan for reduced income and increased expenses
• Moving: Factor in one-time costs and ongoing changes

**The 80/20 Rule**
Focus on the 20% of expenses that make up 80% of your spending (usually housing, transportation, and food). Small improvements in these areas have the biggest impact.`,
    },
    {
      title: "Advanced Budgeting: Beyond the Basics",
      content: `Once you've mastered basic budgeting, these advanced strategies can accelerate your financial progress.

**Sinking Funds**
These are mini-savings accounts for predictable but irregular expenses:
• Annual insurance premiums
• Holiday gifts
• Car maintenance and repairs
• Property taxes
• Vacation costs

Calculate the annual cost and save monthly amounts to avoid budget shocks.

**The Anti-Budget**
For those who hate detailed tracking:
• Automate all savings and fixed expenses
• Spend whatever remains guilt-free
• Requires strong automation and higher savings rates

**Percentage-Based Budgeting**
Instead of fixed dollar amounts, use percentages that adjust with income changes:
• Housing: 25-30%
• Transportation: 15-20%
• Food: 10-15%
• Savings: 20%+

**Value-Based Budgeting**
Align spending with personal values:
• Identify your top 5 values (family, health, education, etc.)
• Ensure your budget reflects these priorities
• Cut spending on things that don't align with your values

**The Abundance Mindset**
Shift from "I can't afford it" to "How can I afford it?" This reframes money conversations from restriction to opportunity and can motivate income-increasing activities.

**Budgeting for Financial Independence**
If your goal is early retirement or financial independence:
• Track your savings rate (savings ÷ income)
• Aim for 25-50% savings rates
• Focus on reducing expenses and increasing income
• Calculate your "financial independence number" (annual expenses × 25)

Remember: budgeting is a skill that improves with practice. Start simple, be consistent, and gradually incorporate more sophisticated strategies as you become comfortable with the basics.`,
    },
  ];

  return (
    <LessonLayout
      title="Budgeting & Saving"
      intro="Learn how to create a budget that works for you and build a strong savings foundation for your financial future."
      sections={sections}
      videoEmbed={
        <YouTubeEmbed
          videoId="-Of_WRjDrx0"
          title="How to Make a Budget | Beginner's Guide to Budgeting"
        />
      }
      duration="15 min"
      difficulty="Beginner"
      nextLessonPath="/lessons/understanding-credit"
      nextLessonTitle="Understanding Credit"
      quizId="budgeting-and-saving"
    />
  );
}
