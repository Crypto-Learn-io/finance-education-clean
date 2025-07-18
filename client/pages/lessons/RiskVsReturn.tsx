import LessonLayout from "@/components/LessonLayout";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function RiskVsReturn() {
  const sections = [
    {
      title: "The Complete Guide to Investment Risk",
      content: `Investment risk is the possibility that your actual returns will differ from your expected returns. Understanding different types of risk helps you make informed investment decisions and build appropriate portfolios.

**Systematic Risk (Market Risk)**
Risk that affects the entire market or economy and cannot be eliminated through diversification.

**Types of Systematic Risk**:
• **Market Risk**: Overall stock market fluctuations
• **Interest Rate Risk**: Changes in interest rates affecting all investments
• **Inflation Risk**: Rising prices reducing purchasing power
• **Political Risk**: Government policy changes affecting markets
• **Economic Risk**: Recession, unemployment, GDP changes

**Example**: During the 2008 financial crisis, nearly all asset classes declined regardless of company quality or diversification.

**Unsystematic Risk (Specific Risk)**
Risk specific to individual companies or industries that can be reduced through diversification.

**Types of Unsystematic Risk**:
• **Business Risk**: Company-specific operational challenges
• **Financial Risk**: Company's debt levels and financial structure
• **Industry Risk**: Sector-specific challenges (e.g., energy price swings)
• **Management Risk**: Poor leadership decisions
• **Regulatory Risk**: Industry-specific regulation changes

**Example**: Enron's collapse in 2001 was primarily unsystematic risk that could have been mitigated through diversification.

**Measuring Risk**

**Standard Deviation**:
Measures how much returns vary from the average return. Higher standard deviation indicates higher volatility.

**Historical Annual Returns and Standard Deviation**:
• **Large-cap stocks**: 10% return, 20% standard deviation
• **Small-cap stocks**: 12% return, 32% standard deviation
• **Bonds**: 5% return, 6% standard deviation
• **Treasury bills**: 3% return, 3% standard deviation

**Beta**:
Measures a stock's volatility relative to the overall market (beta = 1.0).
• **Beta > 1**: More volatile than market
• **Beta < 1**: Less volatile than market
• **Beta = 0**: No correlation with market

**Value at Risk (VaR)**:
Estimates potential losses over a specific time period with a given confidence level.

**Example**: A portfolio with 5% VaR of $10,000 means there's a 5% chance of losing $10,000 or more in the specified period.

**Risk vs. Uncertainty**
• **Risk**: Possible outcomes and probabilities are known
• **Uncertainty**: Possible outcomes or probabilities are unknown

**Example**: Rolling dice is risk (known outcomes), but predicting new technology disruption is uncertainty.

**The Risk Premium**
The extra return investors demand for taking on additional risk compared to risk-free investments.

**Risk Premium = Expected Return - Risk-Free Rate**

**Example**: If stocks are expected to return 8% and Treasury bills yield 2%, the equity risk premium is 6%.`,
    },
    {
      title: "The Risk-Return Relationship: Foundation of Finance",
      content: `The relationship between risk and return is fundamental to all investing. Understanding this relationship helps you set realistic expectations and make appropriate investment choices.

**The Risk-Return Spectrum**

**Conservative Investments (Low Risk, Low Return)**:
• **Savings accounts**: 0.5-2% annual return, virtually no risk
• **CDs**: 2-4% annual return, FDIC insured
• **Treasury bonds**: 3-5% annual return, government backed
• **Money market funds**: 1-3% annual return, very stable

**Moderate Investments (Medium Risk, Medium Return)**:
• **Investment-grade corporate bonds**: 4-6% annual return
• **Dividend-paying stocks**: 6-8% annual return
• **Balanced mutual funds**: 5-7% annual return
• **REITs**: 6-10% annual return

**Aggressive Investments (High Risk, High Return)**:
• **Growth stocks**: 8-12% potential annual return
• **Small-cap stocks**: 10-15% potential annual return
• **Emerging markets**: 8-15% potential annual return
• **Individual stocks**: -100% to +500%+ potential annual return

**Historical Risk-Return Evidence**

**90-Year Historical Returns (1928-2018)**:
• **Large-cap stocks**: 10.1% average annual return
• **Small-cap stocks**: 12.1% average annual return
• **Long-term government bonds**: 5.5% average annual return
• **Treasury bills**: 3.4% average annual return
• **Inflation**: 2.9% average annual rate

**The Risk-Return Trade-off in Action**

**Conservative Portfolio (30% stocks, 70% bonds)**:
• **Expected return**: 6-7% annually
• **Standard deviation**: 8-10%
• **Best year**: +15% to +20%
• **Worst year**: -5% to -10%

**Moderate Portfolio (60% stocks, 40% bonds)**:
• **Expected return**: 7-8% annually
• **Standard deviation**: 12-15%
• **Best year**: +25% to +30%
• **Worst year**: -15% to -20%

**Aggressive Portfolio (90% stocks, 10% bonds)**:
• **Expected return**: 8-10% annually
• **Standard deviation**: 18-22%
�� **Best year**: +35% to +40%
• **Worst year**: -25% to -35%

**Why Higher Risk Demands Higher Returns**

**Rational Investor Behavior**: Investors are risk-averse and require compensation for taking on additional risk.

**Market Efficiency**: If lower-risk investments offered the same returns as higher-risk investments, everyone would choose the lower-risk option, driving down its price and increasing its expected return.

**Risk Capacity vs. Risk Tolerance**

**Risk Capacity**: Your financial ability to withstand losses
• **High capacity**: Large emergency fund, stable income, long time horizon
• **Low capacity**: Limited savings, unstable income, short time horizon

**Risk Tolerance**: Your emotional comfort with volatility
• **High tolerance**: Stay calm during market downturns
• **Low tolerance**: Lose sleep over portfolio fluctuations

**Optimal Risk Level**: Where your risk capacity and tolerance intersect

**Common Risk-Return Mistakes**

**Reaching for Yield**: Taking excessive risk for slightly higher returns
**Example**: Buying junk bonds yielding 8% instead of Treasury bonds yielding 5%, dramatically increasing default risk for just 3% additional yield.

**Risk Perception Errors**: Misunderstanding actual risk levels
**Example**: Thinking individual stocks are safer than diversified funds because you "understand" the companies.

**Timing Risk**: Trying to time market cycles
**Example**: Moving to cash during volatility, missing subsequent recovery.`,
    },
    {
      title: "Comprehensive Risk Tolerance Assessment",
      content: `Accurately assessing your risk tolerance is crucial for building an appropriate investment portfolio. Your risk tolerance is influenced by multiple factors that change over time.

**Financial Factors**

**Time Horizon**:
• **Short-term (1-3 years)**: Conservative approach, preserve capital
• **Medium-term (3-10 years)**: Moderate risk acceptable
• **Long-term (10+ years)**: Can withstand significant volatility

**Example**: Money for a house down payment in 2 years should be in safe investments, while retirement funds for a 30-year-old can be aggressive.

**Income Stability**:
• **Stable employment**: Can take more investment risk
• **Variable income**: Need more conservative approach
• **Multiple income sources**: Allows for higher risk tolerance

**Emergency Fund Status**:
• **6+ months expenses saved**: Higher risk tolerance
• **3-6 months expenses saved**: Moderate risk tolerance
• **Less than 3 months expenses saved**: Conservative approach

**Debt Levels**:
• **No high-interest debt**: Can focus on growth
�� **Some low-interest debt**: Moderate approach
• **High-interest debt**: Pay off debt before aggressive investing

**Psychological Factors**

**Investment Experience**:
• **Novice investors**: Often overestimate risk tolerance
• **Experienced investors**: Better understand their actual reactions
• **Market veterans**: Have lived through multiple cycles

**Loss Aversion**:
Most people feel losses about twice as strongly as equivalent gains.

**Test**: Would you rather:
A) Guaranteed gain of $500
B) 50% chance of gaining $1,000, 50% chance of gaining nothing

Most choose A, despite B having higher expected value ($500 vs. $500).

**Behavioral Biases Affecting Risk Tolerance**:

**Overconfidence**: Believing you can predict market movements
**Herding**: Following crowd behavior during market extremes
**Anchoring**: Over-relying on recent performance
**Recency bias**: Giving too much weight to recent events

**Life Stage Considerations**

**Young Adults (20s-30s)**:
• **High risk tolerance**: Long time horizon for recovery
• **Growth focus**: Emphasize capital appreciation
• **Learning phase**: Can afford to make mistakes

**Middle Age (40s-50s)**:
• **Moderate risk tolerance**: Balancing growth and stability
• **Peak earning years**: May have higher risk capacity
• **Goal clarity**: Clearer picture of retirement needs

**Pre-Retirement (50s-60s)**:
• **Decreasing risk tolerance**: Less time to recover from losses
• **Sequence of returns risk**: Early retirement losses are devastating
• **Transition planning**: Gradually reducing risk

**Retirement (65+)**:
• **Conservative approach**: Emphasis on income and preservation
• **Longevity risk**: Money must last 20-30 years
• **Flexibility needed**: Some growth to combat inflation

**Risk Tolerance Questionnaire**

**Financial Situation Questions**:
1. How many years until you need this money?
2. What percentage of your income can you afford to lose?
3. How stable is your employment?
4. Do you have adequate emergency funds?

**Behavioral Questions**:
1. How would you react to a 20% portfolio loss?
2. Have you invested during market downturns before?
3. Do you check your portfolio balance frequently?
4. Would you panic sell during a market crash?

**Scenario-Based Questions**:
1. Your portfolio loses 30% in a year. Do you:
   a) Sell everything and go to cash
   b) Stop contributing and wait
   c) Continue your investment plan
   d) Invest more money

**Risk Tolerance Adjustments**

**Increasing Risk Tolerance**:
• **Education**: Understanding reduces fear
• **Experience**: Living through market cycles
• **Improved financial situation**: Higher income, more savings
• **Longer time horizon**: More time to recover

**Decreasing Risk Tolerance**:
• **Market losses**: Bad experiences reduce appetite for risk
• **Life changes**: Marriage, children, job loss
• **Approaching goals**: Less time to recover from setbacks
• **Reduced income**: Less ability to handle losses

**Aligning Portfolio with Risk Tolerance**

**Conservative Investors**:
• **Asset allocation**: 30% stocks, 70% bonds
• **Stock focus**: Large-cap dividend stocks, utilities
• **Bond focus**: High-quality government and corporate bonds
• **Alternatives**: REITs, money market funds

**Moderate Investors**:
• **Asset allocation**: 50-70% stocks, 30-50% bonds
• **Stock focus**: Broad market index funds, some international
• **Bond focus**: Mix of government and corporate bonds
• **Alternatives**: Small allocation to REITs or commodities

**Aggressive Investors**:
• **Asset allocation**: 80-100% stocks, 0-20% bonds
• **Stock focus**: Growth stocks, small-cap, emerging markets
• **Bond focus**: Minimal allocation, perhaps high-yield bonds
• **Alternatives**: Individual stocks, sector funds, alternatives

Remember: Your risk tolerance should drive your investment strategy, not the other way around. It's better to earn lower returns that you can stick with than to chase higher returns that cause you to panic and sell at the wrong time.`,
    },
    {
      title: "Diversification: The Only Free Lunch in Investing",
      content: `Diversification is the practice of spreading investments across different assets to reduce overall portfolio risk. It's often called the only "free lunch" in investing because it can reduce risk without necessarily reducing expected returns.

**The Mathematics of Diversification**

**Correlation**: Measures how investments move relative to each other
• **+1.0**: Perfect positive correlation (move exactly together)
• **0.0**: No correlation (move independently)
• **-1.0**: Perfect negative correlation (move in opposite directions)

**Example**: If two investments both return 10% annually but have 0.5 correlation, a portfolio of both will have lower volatility than either individual investment.

**Portfolio Standard Deviation Formula**:
For two assets: σp = √[(w₁σ₁)² + (w₂σ₂)² + 2w₁w₂σ₁σ₂ρ₁₂]

Where:
• w = weight of each asset
• σ = standard deviation of each asset
• ρ = correlation between assets

**Diversification Benefits Example**:
• **Asset A**: 12% return, 25% standard deviation
• **Asset B**: 8% return, 15% standard deviation
• **Correlation**: 0.3
• **50/50 Portfolio**: 10% return, 17% standard deviation

The portfolio has lower risk than either individual asset!

**Types of Diversification**

**Asset Class Diversification**:
Spreading investments across different categories:
• **Stocks**: Growth potential, higher volatility
• **Bonds**: Stability, income generation
• **Real Estate**: Inflation hedge, low correlation with stocks
• **Commodities**: Inflation protection, portfolio insurance
• **Cash**: Liquidity, safety, opportunity for rebalancing

**Geographic Diversification**:
• **Domestic investments**: Home country bias, familiar markets
• **International developed**: Lower correlation, currency exposure
• **Emerging markets**: Higher growth potential, higher volatility
• **Global approach**: Reduces country-specific risks

**Sector Diversification**:
• **Technology**: Growth potential, innovation exposure
• **Healthcare**: Defensive characteristics, aging population
• **Financial services**: Economic cycle sensitivity
• **Consumer staples**: Recession-resistant, steady demand
• **Energy**: Commodity exposure, inflation hedge
• **Utilities**: Stable dividends, interest rate sensitivity

**Company Size Diversification**:
• **Large-cap**: Stability, established businesses
• **Mid-cap**: Growth potential, less analyst coverage
• **Small-cap**: Highest growth potential, highest volatility
• **Micro-cap**: Speculative, illiquid, highest risk/reward

**Time Diversification**:
• **Dollar-cost averaging**: Investing regularly over time
• **Rebalancing**: Buying low, selling high systematically
• **Laddering**: Staggering bond maturities
• **Lifecycle funds**: Automatically adjusting over time

**Style Diversification**:
• **Growth investing**: Companies with above-average growth
• **Value investing**: Companies trading below intrinsic value
• **Blend approach**: Combination of growth and value
• **Momentum investing**: Following price trends

**Limits of Diversification**

**Systematic Risk Cannot Be Eliminated**:
During major market crises, correlations between assets tend to increase toward 1.0, reducing diversification benefits when you need them most.

**Example**: During the 2008 financial crisis, both stocks and bonds declined, and even alternative investments like REITs and commodities were affected.

**Over-Diversification (Diworsification)**:
• **Too many holdings**: Increased costs without meaningful risk reduction
• **Overlapping investments**: Multiple funds holding similar assets
• **Complexity**: Difficult to monitor and manage
• **Diluted returns**: Outstanding performers get averaged out

**Optimal Number of Holdings**:
• **Individual stocks**: 20-30 stocks provide most diversification benefits
• **Mutual funds/ETFs**: 5-10 funds can provide broad diversification
• **Asset classes**: 4-6 major asset classes are typically sufficient

**Diversification Strategies by Investment Level**

**Beginning Investors ($1,000-$10,000)**:
• **Target-date fund**: Instant diversification in one fund
• **Broad market ETF**: S&P 500 or Total Stock Market
• **Balanced fund**: Pre-mixed stocks and bonds
• **Robo-advisor**: Automated diversification

**Intermediate Investors ($10,000-$100,000)**:
• **Core-satellite approach**: Broad market core with specialized satellites
• **Asset allocation funds**: Separate stock and bond funds
• **International exposure**: Add developed and emerging market funds
• **REIT allocation**: Real estate exposure for diversification

**Advanced Investors ($100,000+)**:
• **Individual stocks**: 20-30 stocks across sectors
• **Sector rotation**: Tactical allocation based on economic cycles
• **Alternative investments**: Commodities, private equity, hedge funds
• **Tax-loss harvesting**: Systematic realization of losses

**Measuring Diversification Effectiveness**

**Sharpe Ratio**: Risk-adjusted return measure
Sharpe Ratio = (Return - Risk-free rate) / Standard deviation

**Example**:
• **Undiversified portfolio**: 10% return, 25% volatility, Sharpe ratio = 0.32
• **Diversified portfolio**: 10% return, 18% volatility, Sharpe ratio = 0.44

**Correlation Matrix**: Shows how different investments move together
• **Effective diversification**: Low correlations between holdings
• **Poor diversification**: High correlations between holdings

**Maximum Drawdown**: Largest peak-to-trough decline
• **Diversified portfolios**: Typically lower maximum drawdowns
• **Concentrated portfolios**: Higher potential for large losses

**Rebalancing for Diversification**

**Rebalancing Frequency**:
• **Calendar-based**: Quarterly or annually
• **Threshold-based**: When allocation drifts 5-10% from target
• **Combination approach**: Check quarterly, rebalance if needed

**Rebalancing Example**:
Target: 60% stocks, 40% bonds
After market gains: 70% stocks, 30% bonds
Rebalance: Sell 10% stocks, buy 10% bonds

**Tax Considerations**:
• **Tax-advantaged accounts**: Rebalance freely
• **Taxable accounts**: Consider tax implications
• **Tax-loss harvesting**: Offset gains with losses

Remember: Diversification is about managing risk, not eliminating it. The goal is to achieve the highest possible return for your acceptable level of risk, not to avoid all risk entirely.`,
    },
    {
      title: "Advanced Risk Management Strategies",
      content: `Beyond basic diversification, sophisticated investors can employ additional risk management techniques to protect and optimize their portfolios.

**Dynamic Asset Allocation**

**Tactical Asset Allocation**:
Short-term adjustments based on market conditions while maintaining long-term strategic allocation.

**Example Strategy**:
• **Normal allocation**: 60% stocks, 40% bonds
• **Bull market**: Increase to 70% stocks, 30% bonds
• **Bear market**: Decrease to 50% stocks, 50% bonds

**Strategic Asset Allocation**:
Long-term, buy-and-hold approach based on investor goals and risk tolerance.

**Constant Proportion Portfolio Insurance (CPPI)**:
Maintains a minimum portfolio value while allowing for upside participation.

**Formula**: Stock allocation = (Portfolio Value - Floor Value) × Multiplier

**Risk Parity Strategies**

**Traditional 60/40 Portfolio Risk**:
• **Stocks contribute**: ~85% of portfolio risk
• **Bonds contribute**: ~15% of portfolio risk

**Risk Parity Approach**:
• **Equal risk contribution**: Each asset class contributes equally to portfolio risk
• **Leverage bonds**: Use borrowed money to increase bond allocation
• **Result**: More balanced risk distribution

**Hedge Strategies**

**Put Options**:
Insurance against portfolio declines
• **Cost**: Premium paid (typically 1-3% annually)
• **Benefit**: Limits downside losses
• **Trade-off**: Reduces overall returns

**Covered Calls**:
Selling call options on owned stocks
• **Benefit**: Additional income from premiums
• **Trade-off**: Limits upside potential
• **Best for**: Sideways or moderately bullish markets

**Inverse ETFs**:
Funds that move opposite to their underlying index
• **Use**: Hedge against market declines
• **Risk**: Daily rebalancing can cause tracking errors
• **Caution**: Not suitable for long-term holding

**Volatility-Based Strategies**

**Low-Volatility Investing**:
Focus on stocks with historically low price volatility
• **Benefit**: Lower portfolio volatility
• **Risk**: May underperform in strong bull markets
• **Research**: Low-vol stocks often provide better risk-adjusted returns

**VIX-Based Strategies**:
Using volatility index (VIX) products for portfolio insurance
• **VIX spikes**: During market stress, providing hedge benefits
• **Contango decay**: VIX products typically lose value over time
• **Timing critical**: Difficult to implement successfully

**Alternative Risk Measures**

**Value at Risk (VaR)**:
Estimates potential losses at a given confidence level
• **Example**: 5% VaR of $10,000 means 5% chance of losing $10,000+ in a given period
• **Limitation**: Doesn't capture tail risks or extreme events

**Conditional Value at Risk (CVaR)**:
Expected loss beyond the VaR threshold
• **More comprehensive**: Considers severity of losses beyond VaR
• **Better for**: Extreme event planning

**Maximum Drawdown**:
Largest peak-to-trough decline in portfolio value
• **Historical analysis**: Look at worst-case scenarios
• **Forward-looking**: Estimate potential future drawdowns

**Risk Budgeting**

**Risk Budget Allocation**:
Instead of allocating dollars, allocate risk across investments
• **High-risk investments**: Smaller dollar allocation
• **Low-risk investments**: Larger dollar allocation
• **Goal**: Equal risk contribution from each position

**Risk Budget Example**:
$100,000 portfolio with 10% risk budget per position:
• **High-risk stock** (30% volatility): $3,333 allocation
• **Moderate-risk stock** (20% volatility): $5,000 allocation
• **Low-risk bond** (5% volatility): $20,000 allocation

**Behavioral Risk Management**

**Systematic Rebalancing**:
Remove emotion from buy/sell decisions
• **Calendar-based**: Quarterly or annual rebalancing
• **Threshold-based**: Rebalance when allocation drifts 5-10%
• **Combination**: Check regularly, rebalance when needed

**Dollar-Cost Averaging**:
Reduces timing risk through regular investments
• **Benefit**: Avoid lump-sum timing risk
• **Trade-off**: May underperform lump-sum investing in bull markets
• **Behavioral**: Easier to stick with during volatility

**Stop-Loss Orders**:
Automatic sell orders when investments decline to specific levels
• **Benefit**: Limits losses on individual positions
• **Risk**: May sell at temporary bottoms
• **Consideration**: Best for speculative investments

**Stress Testing**

**Scenario Analysis**:
Test portfolio performance under various market conditions
• **Historical scenarios**: How would portfolio perform in 2008, 2000, etc.?
• **Hypothetical scenarios**: What if interest rates rise 3%?
• **Extreme scenarios**: What if stock market falls 50%?

**Monte Carlo Simulation**:
Uses random sampling to model potential outcomes
• **Thousands of scenarios**: Tests wide range of possibilities
• **Probability distributions**: Shows range of likely outcomes
• **Confidence intervals**: Estimates probability of achieving goals

**Risk Management for Different Life Stages**

**Young Investors (20s-30s)**:
• **High risk tolerance**: Can recover from losses
• **Focus on growth**: Emphasize capital appreciation
• **Simple strategies**: Broad diversification, regular investing

**Middle Age (40s-50s)**:
• **Moderate risk management**: Balance growth and protection
• **Diversification**: Geographic, sector, and asset class spreading
• **Hedge strategies**: Consider protective puts on large positions

**Pre-Retirement (50s-60s)**:
• **Sequence of returns risk**: Early retirement losses are devastating
• **Bond ladders**: Predictable income stream
• **Glide path**: Gradually reducing risk as retirement approaches

**Retirement (65+)**:
• **Withdrawal rate management**: Sustainable spending levels
• **Bucket strategy**: Different time horizons for different needs
• **Inflation protection**: Maintain purchasing power over time

**Professional Risk Management**

**When to Seek Help**:
• **Complex portfolios**: Multiple account types, significant assets
• **Lack of time**: Busy professionals who can't monitor investments
• **Emotional challenges**: Difficulty making objective decisions
• **Specialized needs**: Tax planning, estate planning, business ownership

**Types of Professional Help**:
• **Fee-only advisors**: Fiduciary duty, no commission conflicts
• **Robo-advisors**: Automated, low-cost portfolio management
• **Hybrid advisors**: Combination of human and automated advice
• **Institutional managers**: High-net-worth and institutional investors

Remember: Risk management is not about eliminating all risk—it's about taking appropriate risks for your situation and goals while avoiding catastrophic losses that could derail your financial future.`,
    },
  ];

  return (
    <LessonLayout
      title="Risk vs Return"
      intro="Learn to balance investment risk with potential returns to create a strategy that matches your goals."
      sections={sections}
      videoEmbed={
        <YouTubeEmbed
          videoId="7mo167ohvJw"
          title="What is risk and return? | Financial Literacy | Khan Academy"
        />
      }
      duration="15 min"
      difficulty="Intermediate"
      prevLessonPath="/lessons/investment-basics"
      prevLessonTitle="Investment Basics"
      nextLessonPath="/lessons/understanding-inflation"
      nextLessonTitle="Understanding Inflation"
      quizId="risk-vs-return"
    />
  );
}
