import LessonLayout from "@/components/LessonLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function InterestRates() {
  const sections = [
    {
      title: "Understanding Interest: The Foundation of Finance",
      content: `Interest is one of the most fundamental concepts in personal finance, yet it's often misunderstood. At its core, interest represents the time value of money - the idea that money available today is worth more than the same amount in the future because of its earning potential.

**The Dual Nature of Interest**
Interest serves two distinct purposes depending on your position:

**For Borrowers**: Interest is the cost of accessing money you don't currently have. It compensates lenders for the risk they take and the opportunity cost of not using their money elsewhere.

**For Savers/Investors**: Interest is the reward for delaying consumption and providing your money to others to use. It's how your money can grow over time without additional effort from you.

**Factors That Influence Interest Rates**
Understanding what drives interest rates helps you make better financial decisions:

**Economic Conditions**: During economic growth, interest rates typically rise as demand for money increases. During recessions, rates often fall to stimulate borrowing and spending.

**Inflation**: Lenders demand higher rates when inflation is expected to rise, ensuring their returns maintain purchasing power.

**Risk Assessment**: Higher-risk borrowers pay higher rates. This is why credit scores matter so much for loan terms.

**Time Frame**: Longer-term loans typically carry higher rates due to increased uncertainty over time.

**Market Competition**: More competition among lenders generally leads to better rates for consumers.

**Central Bank Policy**: The Federal Reserve's decisions significantly influence all other interest rates in the economy.

**Real vs. Nominal Interest Rates**
**Nominal Rate**: The stated interest rate before adjusting for inflation.
**Real Rate**: The interest rate after accounting for inflation.

If you earn 3% interest but inflation is 2%, your real return is only 1%. This distinction is crucial for long-term financial planning.`,
    },
    {
      title: "Simple Interest: The Foundation",
      content: `Simple interest is calculated only on the original principal amount, making it the most straightforward form of interest calculation.

**The Simple Interest Formula**
Interest = Principal × Rate × Time

**Example Calculation**
If you invest $1,000 at 5% simple interest for 3 years:
Interest = $1,000 × 0.05 × 3 = $150
Total Amount = $1,000 + $150 = $1,150

**Where You'll Encounter Simple Interest**
• Short-term loans (some personal loans, payday loans)
• Certificate of deposits (CDs) that pay interest at maturity
• Some government bonds
• Basic savings calculations

**Advantages of Simple Interest**
• Easy to calculate and understand
• Predictable returns or costs
• No compounding complexity

**Disadvantages of Simple Interest**
• Lower growth potential for investments
• Less favorable for long-term wealth building
• Doesn't reflect how money actually grows in most real-world scenarios

**Real-World Example: Car Loan**
A $20,000 car loan at 6% simple interest for 5 years:
Interest = $20,000 × 0.06 × 5 = $6,000
Total Payment = $20,000 + $6,000 = $26,000
Monthly Payment = $26,000 ÷ 60 months = $433.33

However, most car loans use compound interest with monthly compounding, which would result in lower total interest due to principal reduction over time.

**Simple Interest vs. Daily Life**
While simple interest calculations are rare in modern finance, understanding them helps you:
• Quickly estimate costs and returns
• Understand the baseline before compounding effects
• Appreciate the power of compound interest by comparison
• Make rough calculations for financial planning`,
    },
    {
      title: "Compound Interest: The Eighth Wonder of the World",
      content: `Compound interest is arguably the most powerful force in personal finance. Unlike simple interest, compound interest calculates returns not only on your original principal but also on all previously earned interest.

**The Compound Interest Formula**
A = P(1 + r/n)^(nt)
Where:
• A = Final amount
• P = Principal
• r = Annual interest rate (decimal)
• n = Number of times interest compounds per year
• t = Number of years

**The Magic of Compounding**
Let's compare $1,000 invested at 7% for 30 years:

**Simple Interest**: $1,000 + ($1,000 × 0.07 × 30) = $3,100

**Compound Interest (Annual)**: $1,000 × (1.07)^30 = $7,612

The difference? $4,512 in additional growth, just from compounding!

**Compounding Frequency Matters**
The same $1,000 at 7% for 30 years compounded:
• Annually: $7,612
• Semi-annually: $7,738
• Quarterly: $7,804
• Monthly: $7,841
• Daily: $7,847

**The Rule of 72**
This quick calculation estimates how long it takes money to double:
Time to Double = 72 ÷ Interest Rate

Examples:
• At 6% interest: 72 ÷ 6 = 12 years to double
• At 9% interest: 72 ÷ 9 = 8 years to double
• At 3% interest: 72 ÷ 3 = 24 years to double

**Real-World Compounding Examples**

**Retirement Savings**
Starting at age 25, saving $200/month at 7% annual return:
• By age 35 (10 years): $33,014
• By age 45 (20 years): $98,846
• By age 55 (30 years): $224,370
• By age 65 (40 years): $479,632

The last 10 years alone add $255,262 - more than the first 30 years combined!

**Credit Card Debt (Compound Interest Working Against You)**
A $5,000 credit card balance at 18% APR with minimum payments (2% of balance):
• Year 1: $5,900 balance
• Year 5: $6,923 balance
• Year 10: $8,813 balance
• Total time to pay off: 47 years
• Total interest paid: $13,931

**The Early Start Advantage**
Compare two investors:
• Early Eddie: Invests $2,000/year from age 25-35 (10 years), then stops
• Late Larry: Invests $2,000/year from age 35-65 (30 years)

Both earn 10% annually. At age 65:
• Early Eddie: $973,704 (invested $20,000)
• Late Larry: $328,988 (invested $60,000)

Eddie invested less money but started earlier, demonstrating the incredible power of time in compounding.

**Maximizing Compound Interest**
• Start as early as possible
• Contribute regularly and consistently
• Reinvest all earnings and dividends
• Choose accounts with higher compounding frequency
• Avoid early withdrawals that break the compounding chain
• Focus on long-term growth rather than short-term fluctuations`,
    },
    {
      title: "APR vs APY: Understanding the True Cost and Return",
      content: `APR and APY are two critical terms that can make the difference between good and poor financial decisions. Understanding their differences helps you compare financial products accurately.

**APR (Annual Percentage Rate)**
APR represents the total cost of borrowing money for a year, including:
• Base interest rate
• Loan origination fees
• Points (for mortgages)
• Other lender fees

**What APR Tells You**
APR provides a standardized way to compare loan costs. A loan with a 5% interest rate plus $1,000 in fees might have a 5.5% APR, while a loan with 5.5% interest and no fees also has a 5.5% APR.

**APR Examples by Loan Type**

**Credit Cards**
• APR typically ranges from 15-25%
• Often variable, tied to prime rate
• Different APRs for purchases, balance transfers, and cash advances
• No additional fees included since credit cards don't have origination fees

**Mortgages**
• Purchase APR includes interest rate plus fees
• Refinance APR accounts for new loan fees
• Lower APR means lower total borrowing cost
• Compare APRs when mortgage shopping

**Personal Loans**
• APR includes interest plus origination fees
• Can range from 6% (excellent credit) to 36% (poor credit)
• Fixed APR provides payment certainty

**Auto Loans**
• Dealer financing often has higher APRs than banks/credit unions
• 0% APR promotions usually require excellent credit
• Compare dealer financing APR to outside lender options

**APY (Annual Percentage Yield)**
APY represents what you actually earn on savings or investments, accounting for compound interest.

**APY Formula**
APY = (1 + r/n)^n - 1
Where r = nominal rate, n = compounding periods per year

**APY Examples**

**Savings Accounts**
A 2% interest rate compounded:
• Annually: 2% APY
• Semi-annually: 2.01% APY
• Quarterly: 2.015% APY
• Monthly: 2.018% APY
• Daily: 2.020% APY

**Certificates of Deposit (CDs)**
• Higher rates typically offer higher APY
• Longer terms generally provide higher APY
• Shop APY, not just interest rate

**Investment Accounts**
• Money market accounts often compound daily
• Compare APY across different institutions
• Consider minimum balance requirements

**Key Differences Summary**
• APR = Cost of borrowing (lower is better)
• APY = Return on savings (higher is better)
• APR includes fees; APY shows compounding effect
• APR is for loans; APY is for savings/investments

**Making Better Financial Decisions**
• Always compare APRs when borrowing
• Always compare APYs when saving
• Don't be fooled by promotional rates without considering APR/APY
• Factor in all fees and terms, not just the headline rate
• Consider how long you'll keep the loan or investment`,
    },
    {
      title: "Interest Rate Types and Structures",
      content: `Understanding different types of interest rates helps you choose the right financial products and manage risk effectively.

**Fixed vs. Variable Interest Rates**

**Fixed Interest Rates**
• Rate stays the same throughout the loan or investment term
• Provides payment predictability and budgeting certainty
• Protection against rising interest rate environments
• Typically higher initial rates than variable options

**Best For**: Long-term planning, risk-averse borrowers, when rates are expected to rise

**Variable Interest Rates**
• Rate changes based on an underlying benchmark (prime rate, LIBOR, etc.)
• Often start lower than fixed rates
• Payments can increase or decrease over time
• Can include rate caps and floors for protection

**Best For**: Short-term needs, when rates are expected to fall, borrowers who can handle payment fluctuations

**Common Interest Rate Benchmarks**

**Prime Rate**: The rate banks charge their most creditworthy customers, typically 3% above the federal funds rate

**LIBOR (being phased out)**: London Interbank Offered Rate, historically used for many variable rate products

**SOFR**: Secured Overnight Financing Rate, replacing LIBOR for new products

**Federal Funds Rate**: The rate banks charge each other for overnight loans, set by the Federal Reserve

**Treasury Rates**: Interest rates on U.S. government securities, used as benchmarks for many consumer products

**Specialized Interest Rate Products**

**Teaser Rates**: Low introductory rates that increase after a specified period
• Common in credit cards (0% APR promotions)
• Adjustable-rate mortgages (ARM)
• Balance transfer offers

**Tiered Interest Rates**: Different rates based on account balance or loan amount
• Higher balances often earn higher rates
• Larger loans may qualify for better rates

**Promotional Rates**: Temporary rates to attract new customers
• May require meeting specific conditions
• Important to understand post-promotional rates

**Interest Rate Risk Management**

**For Borrowers**:
• Lock in fixed rates when rates are low
• Consider variable rates for short-term needs
• Understand rate adjustment mechanisms
• Plan for potential payment increases

**For Savers/Investors**:
• Diversify across different rate types
• Consider rate laddering strategies
• Monitor rate environments for opportunities
• Balance liquidity needs with rate maximization

**Economic Factors Affecting Interest Rates**

**Inflation**: Higher inflation expectations lead to higher rates
**Economic Growth**: Strong growth typically increases rates
**Government Policy**: Federal Reserve actions directly impact rates
**Global Events**: International crises can affect U.S. rates
**Supply and Demand**: Money supply and borrowing demand influence rates

Understanding these factors helps you time major financial decisions and anticipate rate changes.`,
    },
    {
      title: "Strategic Applications of Interest Knowledge",
      content: `Understanding interest rates empowers you to make strategic financial decisions that can save or earn you thousands of dollars over your lifetime.

**Debt Management Strategies**

**Interest Rate Arbitrage**
• Pay off high-interest debt before investing
• If investment returns exceed debt interest rates, consider keeping low-rate debt
• Example: Keep a 3% mortgage while investing in accounts earning 7%

**Debt Consolidation Analysis**
Before consolidating debt, calculate:
• Total interest under current structure
• Total interest under consolidation
• Impact on monthly cash flow
• Any fees associated with consolidation

**Refinancing Decisions**
Refinance when:
• Current rates are at least 0.5-1% below your existing rate
• You plan to stay in the home long enough to recoup closing costs
• Your credit score has improved significantly
• You want to change loan terms (15-year vs. 30-year)

**Investment Strategies Based on Interest Rates**

**Rate Environment Analysis**
**Rising Rate Environment**:
• Consider shorter-term bonds and CDs
• Variable rate investments may become more attractive
• Focus on dividend-paying stocks over bonds
• Lock in current fixed-rate debt

**Falling Rate Environment**:
• Lock in longer-term fixed-rate investments
• Consider refinancing existing debt
• Growth stocks may outperform dividend stocks
• Fixed-rate bonds increase in value

**Laddering Strategies**
Create a bond or CD ladder by purchasing securities with staggered maturity dates. This provides:
• Regular income as securities mature
• Protection against interest rate changes
• Opportunities to reinvest at new rates

**Emergency Fund Optimization**
• Keep 3-6 months expenses in high-yield savings
• Consider money market accounts for higher rates
• Use CDs for portions you won't need immediately
• Monitor online banks for competitive rates

**Advanced Interest Strategies**

**Float vs. Fixed Decisions**
For businesses and sophisticated investors:
• Analyze interest rate forecasts
• Consider hedging strategies
• Evaluate swap opportunities
• Balance risk tolerance with cost savings

**Tax Implications**
• Municipal bonds for high-income earners
• Consider after-tax yields when comparing investments
• Understand how interest income affects your tax bracket
• Time investment sales for optimal tax treatment

**International Considerations**
• Currency risk in foreign investments
• International interest rate differentials
• Impact of global economic conditions
• Diversification benefits and risks

**Psychological Aspects of Interest Decisions**

**Present Bias**: Tendency to overweight immediate costs and benefits
**Loss Aversion**: Feeling losses more acutely than equivalent gains
**Anchoring**: Over-relying on first information received (like initial rates quoted)
**Optimism Bias**: Assuming rates will move in your favor

**Making Better Interest-Based Decisions**
• Use calculators to quantify different scenarios
• Consider total cost/return over time, not just monthly payments
• Factor in your risk tolerance and life circumstances
• Regularly review and adjust strategies as conditions change
• Seek professional advice for complex decisions

**Long-Term Wealth Building with Interest**
• Start early to maximize compound interest benefits
• Reinvest all interest and dividends
• Gradually increase savings rates over time
• Balance growth investments with stable, interest-bearing accounts
• Use interest knowledge to evaluate all financial products

Remember: Understanding interest rates isn't just about calculations - it's about making informed decisions that align with your financial goals and risk tolerance. The knowledge you gain here will serve you throughout your financial life, helping you build wealth more effectively and avoid costly mistakes.`,
    },
  ];

  return (
    <LessonLayout
      title="Interest Rates Explained"
      intro="Understand how interest rates work and how they impact your borrowing and saving decisions."
      sections={sections}
      videoEmbed={
        <YouTubeEmbed
          videoId="lMVwYoiiV0w"
          title="Simple vs. Compound Interest | Simple Beginners Guide"
        />
      }
      duration="10 min"
      difficulty="Beginner"
      prevLessonPath="/lessons/understanding-credit"
      prevLessonTitle="Understanding Credit"
      nextLessonPath="/lessons/loans-and-mortgages"
      nextLessonTitle="Loans & Mortgages"
      quizId="interest-rates"
    />
  );
}
