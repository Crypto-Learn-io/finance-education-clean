import LessonLayout from "@/components/LessonLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function LoansAndMortgages() {
  const sections = [
    {
      title: "Understanding Different Types of Loans",
      content: `Loans are essential financial tools that allow you to make major purchases and investments by borrowing money today and repaying it over time. Understanding the different types helps you choose the right financing for your needs.

**Secured vs. Unsecured Loans**

**Secured Loans** are backed by collateral - an asset the lender can seize if you don't repay:
• **Mortgages**: Your home serves as collateral
• **Auto Loans**: The vehicle secures the loan
• **Home Equity Loans**: Your home's equity backs the loan
• **Secured Personal Loans**: Various assets can serve as collateral

Benefits: Lower interest rates, larger loan amounts, easier approval
Risks: Loss of collateral if you default

**Unsecured Loans** don't require collateral but rely on your creditworthiness:
• **Personal Loans**: For various purposes, 2-7 year terms
• **Credit Cards**: Revolving credit lines
• **Student Loans**: Education financing with special protections
• **Signature Loans**: Based solely on your promise to repay

Benefits: No risk of losing specific assets, faster approval process
Drawbacks: Higher interest rates, stricter qualification requirements

**Installment vs. Revolving Credit**

**Installment Loans** have fixed payments over a set period:
• Predictable monthly payments
• Declining balance over time
• Fixed or variable interest rates
• Examples: auto loans, mortgages, personal loans

**Revolving Credit** allows you to borrow, repay, and borrow again:
• Variable payment amounts
• Reusable credit line
• Interest only on outstanding balance
• Examples: credit cards, home equity lines of credit (HELOC)

**Specialized Loan Categories**

**Government-Backed Loans**:
• **FHA Loans**: Lower down payment mortgages (3.5%)
• **VA Loans**: Military veteran mortgages (0% down)
• **USDA Loans**: Rural area mortgages
• **SBA Loans**: Small business financing

**Alternative Lending**:
• **Peer-to-Peer Loans**: Individual investors fund your loan
• **Payday Loans**: Short-term, high-cost emergency loans (avoid if possible)
• **Title Loans**: Your car title secures a short-term loan
• **Online Lenders**: Fast approval, often higher rates`,
    },
    {
      title: "Comprehensive Mortgage Guide",
      content: `A mortgage is likely the largest loan you'll ever take, making it crucial to understand every aspect of the process.

**How Mortgages Work**
When you get a mortgage, the lender pays the seller for your home, and you agree to repay the lender over time (typically 15-30 years) with interest. Your home serves as collateral, meaning the lender can foreclose if you don't make payments.

**Types of Mortgages**

**Fixed-Rate Mortgages**:
• Interest rate stays the same throughout the loan
• Predictable monthly payments
• Protection against rising interest rates
• Most popular choice for long-term homeowners

**Adjustable-Rate Mortgages (ARMs)**:
• Interest rate changes periodically (annually after initial period)
• Often start with lower rates than fixed mortgages
• Payments can increase or decrease over time
• Better for short-term ownership or falling rate environments

**Government-Insured Mortgages**:

**FHA Loans**:
• 3.5% down payment minimum
• More flexible credit requirements
• Mortgage insurance required
• Loan limits vary by area

**VA Loans** (Veterans):
• 0% down payment option
• No mortgage insurance required
• Competitive interest rates
• Reusable benefit

**USDA Loans** (Rural areas):
• 0% down payment in eligible areas
• Income limits apply
• Property must be in qualifying rural area

**Conventional Loans**:
• Not government-insured
• Typically require 5-20% down
• PMI required if less than 20% down
• More flexible property types and locations

**Jumbo Loans**:
• Exceed conforming loan limits ($766,550+ in most areas)
• Stricter qualification requirements
• Typically require larger down payments
• Higher interest rates than conventional loans

**Understanding Mortgage Terms**

**Principal**: The actual loan amount you borrow
**Interest**: The cost of borrowing, expressed as an annual percentage
**Property Taxes**: Local government taxes on your property value
**Insurance**: Homeowner's insurance and possibly mortgage insurance
**Escrow**: Account where lender collects taxes and insurance payments

**PITI Calculation Example**:
$300,000 home, $250,000 loan at 6.5% for 30 years:
• Principal & Interest: $1,580/month
• Property Taxes: $400/month
• Insurance: $100/month
• PMI: $125/month
• **Total PITI**: $2,205/month`,
    },
    {
      title: "Down Payments and Private Mortgage Insurance (PMI)",
      content: `Your down payment significantly impacts your mortgage terms, monthly payments, and total cost of homeownership.

**Down Payment Basics**
The down payment is money you pay upfront toward the home's purchase price. It reduces your loan amount and demonstrates your commitment to the lender.

**Down Payment Amounts by Loan Type**:
• **Conventional**: 5-20% (3% for first-time buyers)
• **FHA**: 3.5% minimum
• **VA**: 0% for qualified veterans
• **USDA**: 0% in eligible rural areas

**Impact of Down Payment Size**

**Example: $400,000 Home Purchase**

**5% Down ($20,000)**:
• Loan Amount: $380,000
• Monthly Payment: $2,406 (plus PMI $190)
• Total Monthly: $2,596

**10% Down ($40,000)**:
• Loan Amount: $360,000
• Monthly Payment: $2,279 (plus PMI $180)
• Total Monthly: $2,459

**20% Down ($80,000)**:
• Loan Amount: $320,000
• Monthly Payment: $2,027 (no PMI)
• Total Monthly: $2,027

**Private Mortgage Insurance (PMI) Explained**

PMI protects the lender if you default on your loan. It's required on conventional loans with less than 20% down.

**PMI Costs**:
• Typically 0.3% to 1.5% of loan amount annually
• Paid monthly as part of mortgage payment
• Can be removed once you reach 20% equity

**PMI Removal Strategies**:
• **Automatic**: Removed at 78% loan-to-value ratio
• **Request Removal**: At 80% loan-to-value with good payment history
• **Refinance**: If home value increased significantly
• **Extra Payments**: Accelerate principal reduction

**PMI vs. FHA Mortgage Insurance Premium (MIP)**:
• PMI (conventional loans): Can be removed
• MIP (FHA loans): Often permanent for the life of the loan

**Down Payment Sources**
• Personal savings (most common)
• Gift from family members (with proper documentation)
• Down payment assistance programs
• 401(k) loans (for first-time buyers)
• IRA withdrawals (up to $10,000 penalty-free for first home)

**Strategies for Low Down Payment Buyers**
• Start with FHA loan, refinance to conventional later
• Look for first-time buyer programs
• Consider homes below maximum budget to minimize PMI
• Factor PMI into affordability calculations
• Build equity quickly with extra principal payments`,
    },
    {
      title: "The Complete Loan Application Process",
      content: `Understanding the loan application process helps you prepare properly and increases your chances of approval at the best terms.

**Pre-Qualification vs. Pre-Approval**

**Pre-Qualification** (Soft inquiry):
• Basic financial overview
• Estimated loan amount
• No verification of information
• Takes minutes to complete
• Good for initial house hunting

**Pre-Approval** (Hard inquiry):
• Thorough financial review
• Verification of income, assets, credit
• Conditional loan commitment
• Expires in 60-90 days
• Strengthens purchase offers

**Required Documentation**
Gather these documents before applying:

**Income Verification**:
• 2 years of tax returns
• Recent pay stubs (30-60 days)
• W-2 forms for past 2 years
• 1099s for contract work
• Profit & loss statements (self-employed)

**Asset Documentation**:
• Bank statements (2-3 months)
• Investment account statements
• 401(k)/retirement account statements
• Gift letters for down payment assistance

**Credit Information**:
• Credit reports from all three bureaus
• Explanations for any credit issues
• Debt statements (credit cards, loans)

**Property Information** (for home purchases):
• Purchase contract
• Property appraisal
• Homeowner's insurance quote
• HOA documentation (if applicable)

**The Underwriting Process**

**Initial Review**: Loan officer reviews your application and documents
**Automated Underwriting**: Computer system evaluates your creditworthiness
**Manual Underwriting**: Human underwriter reviews complex applications
**Conditional Approval**: Approval subject to meeting specific conditions
**Final Approval**: All conditions met, ready to close

**Common Reasons for Loan Denial**:
• Insufficient income or employment history
• High debt-to-income ratio
• Poor credit history or low credit score
• Insufficient down payment or assets
• Property issues (appraisal problems, condition)
• Changes in financial situation during process

**Tips for Smooth Loan Processing**:
• Don't make large purchases during the process
• Don't change jobs unless absolutely necessary
• Respond quickly to lender requests
• Keep all financial documentation organized
• Don't close credit accounts during the process
• Maintain consistent banking patterns`,
    },
    {
      title: "Loan Shopping and Rate Comparison",
      content: `Shopping for loans effectively can save you thousands of dollars over the life of your loan. Here's how to compare options systematically.

**The Loan Shopping Timeline**
• **Rate Shopping Window**: 14-45 days for mortgage/auto loans (multiple inquiries count as one on credit report)
• **Application Process**: 30-45 days for mortgages
• **Closing Preparation**: 7-14 days before closing

**Key Factors to Compare**

**Interest Rates and APR**:
• **Interest Rate**: The cost of borrowing before fees
• **APR**: Total cost including fees and closing costs
• **Points**: Upfront fees to reduce interest rate (1 point = 1% of loan amount)

**Loan Terms**:
• **Loan Length**: 15-year vs. 30-year mortgages
• **Fixed vs. Variable**: Rate stability vs. potential savings
• **Prepayment Penalties**: Fees for paying off early

**Closing Costs and Fees**:
• **Origination Fees**: Lender charges for processing
• **Application Fees**: Upfront processing costs
• **Appraisal Fees**: Property valuation costs
• **Title Insurance**: Protection against ownership issues

**Lender Comparison**

**Traditional Banks**:
• Established relationships
• In-person service
• Often higher rates
• Stricter qualification requirements

**Credit Unions**:
• Member-owned, not-for-profit
• Often better rates and terms
• Personalized service
• Membership requirements

**Online Lenders**:
• Streamlined application process
• Competitive rates
• Lower overhead costs
• Less personal interaction

**Mortgage Brokers**:
• Access to multiple lenders
• Can find specialized programs
• Broker fees to consider
• May not represent all options

**Rate Lock Strategies**
• **Rate Lock Period**: 30-60 days typical
• **Float-Down Options**: Ability to take lower rate if rates fall
• **Extension Fees**: Cost to extend lock period
• **Timing**: Lock when you find acceptable rate and are ready to close

**Calculating True Loan Costs**

**Example: $300,000 Mortgage Comparison**

**Lender A**: 6.25% rate, $2,000 closing costs
• Monthly Payment: $1,847
• Total Interest (30 years): $364,932
• Total Cost: $366,932

**Lender B**: 6.5% rate, $500 closing costs
• Monthly Payment: $1,896
• Total Interest (30 years): $382,632
• Total Cost: $383,132

**Break-even**: Lender A saves $16,200 over 30 years despite higher upfront costs

**Red Flags When Loan Shopping**:
• Pressure to sign immediately
• Rates significantly below market
• Excessive upfront fees
• Unclear terms and conditions
• Unlicensed lenders
• Promises that seem too good to be true

**Negotiation Strategies**:
• Get quotes from multiple lenders
• Use competing offers to negotiate
• Ask about fee waivers
• Consider timing (rates change daily)
• Don't be afraid to walk away
• Read all documents carefully before signing`,
    },
    {
      title: "Advanced Loan Strategies and Optimization",
      content: `Once you understand the basics, these advanced strategies can help you optimize your borrowing and build wealth more effectively.

**Loan Acceleration Strategies**

**Extra Principal Payments**:
Making additional payments toward principal can significantly reduce interest costs:
• **Monthly Extra**: $100 extra on $300k mortgage saves $63,000 interest
• **Annual Bonus**: Use tax refunds or bonuses for principal reduction
• **Bi-weekly Payments**: 26 payments per year instead of 12 (equivalent to 13 monthly payments)

**Refinancing Strategies**

**Rate-and-Term Refinancing**:
• Lower interest rate reduces payments
• Change loan term (30-year to 15-year)
• Remove PMI with increased home value
• Generally worth it if rate drops 0.5-1%

**Cash-Out Refinancing**:
• Borrow against home equity
• Use funds for improvements, debt consolidation, investments
• Higher loan amount, potentially higher rate
• Consider tax implications

**Debt Consolidation with Loans**

**Benefits**:
• Single monthly payment
• Potentially lower interest rate
• Fixed payment schedule
• Simplified debt management

**Considerations**:
• Total interest cost over loan term
• Fees associated with consolidation
• Risk of accumulating new debt
• Impact on credit utilization

**Investment Property Financing**

**Primary vs. Investment Property Rates**:
• Investment properties typically 0.5-1% higher rates
• Larger down payment requirements (20-25%)
• Stricter qualification requirements
• Different tax implications

**House Hacking Strategies**:
• Live in duplex, rent other unit
• FHA loans allow 3.5% down on 2-4 unit properties
• Rental income can help qualify for larger loans
• Build wealth through appreciation and cash flow

**Business Loan Strategies**

**SBA Loans**:
• Government-backed business financing
• Lower down payments and rates
• Longer repayment terms
• More complex application process

**Equipment Financing**:
• Equipment serves as collateral
• Preserve working capital
• Potential tax advantages through depreciation

**Lines of Credit**:
• Flexible access to funds
• Interest only on used portion
• Good for seasonal businesses
• Variable interest rates

**Loan Portfolio Management**

**Diversification Strategies**:
• Mix of fixed and variable rate loans
• Different maturity dates
• Various collateral types
• Balance risk and return

**Tax Optimization**:
• Mortgage interest deduction (up to $750,000 loan amount)
• Business loan interest deductibility
• Investment property depreciation
• Home office deductions

**Exit Strategies**:
• Refinancing when rates drop
• Selling assets to pay off loans
• Using other investments to pay down debt
• Strategic default considerations (last resort)

**Risk Management**:
• Disability insurance to cover payments
• Life insurance to protect family
• Emergency funds for payment continuity
• Regular review of loan portfolio performance

Remember: Loans are tools that can either build or destroy wealth depending on how they're used. Focus on borrowing for appreciating assets and investments that generate returns exceeding the loan's cost.`,
    },
  ];

  return (
    <LessonLayout
      title="Loans & Mortgages"
      intro="Navigate the world of borrowing with confidence, from personal loans to home mortgages."
      sections={sections}
      videoEmbed={
        <div className="space-y-4">
          <YouTubeEmbed
            videoId="fuiiJuB7tJs"
            title="Loans 101 (Loan Basics 1/3)"
          />
          <YouTubeEmbed
            videoId="l4J5RvGB-iM"
            title="Mortgage Explained | Personal Finance 101"
          />
        </div>
      }
      duration="18 min"
      difficulty="Intermediate"
      prevLessonPath="/lessons/interest-rates"
      prevLessonTitle="Interest Rates Explained"
      nextLessonPath="/lessons/investment-basics"
      nextLessonTitle="Investment Basics"
      quizId="loans-and-mortgages"
    />
  );
}
