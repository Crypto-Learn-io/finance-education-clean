import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  PiggyBank,
  CreditCard,
  TrendingUp,
  Target,
  Calculator,
  Shield,
  Building,
  TrendingDown,
  Percent,
  Clock,
  Users,
  Play,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Budgeting & Saving",
      description:
        "Master the fundamentals of personal budgeting, tracking expenses, and building a solid savings foundation for your future.",
      icon: PiggyBank,
      lessons: 6,
      duration: "2 hours",
      difficulty: "Beginner",
      progress: 0,
      color: "bg-blue-100 text-blue-600",
      topics: [
        "Creating a Budget",
        "Tracking Expenses",
        "Emergency Funds",
        "Savings Goals",
        "50/30/20 Rule",
        "Money-Saving Tips",
      ],
    },
    {
      id: 2,
      title: "Understanding Credit",
      description:
        "Learn about credit scores, debt management, and how to build and maintain excellent credit throughout your life.",
      icon: CreditCard,
      lessons: 5,
      duration: "1.5 hours",
      difficulty: "Beginner",
      progress: 0,
      color: "bg-purple-100 text-purple-600",
      topics: [
        "Credit Scores Explained",
        "Building Credit History",
        "Debt Management",
        "Credit Cards vs Loans",
        "Improving Your Score",
      ],
    },
    {
      id: 3,
      title: "Interest Rates Explained",
      description:
        "Understand simple vs compound interest, how rates affect loans and investments, and make informed financial decisions.",
      icon: Percent,
      lessons: 4,
      duration: "1 hour",
      difficulty: "Beginner",
      progress: 0,
      color: "bg-yellow-100 text-yellow-600",
      topics: [
        "Simple Interest",
        "Compound Interest",
        "APR vs APY",
        "Rate Comparisons",
      ],
    },
    {
      id: 4,
      title: "Loans & Mortgages",
      description:
        "Navigate the world of borrowing, from personal loans to mortgages, and understand terms that affect your payments.",
      icon: Building,
      lessons: 7,
      duration: "2.5 hours",
      difficulty: "Intermediate",
      progress: 0,
      color: "bg-indigo-100 text-indigo-600",
      topics: [
        "Types of Loans",
        "Mortgage Basics",
        "Down Payments",
        "Loan Terms",
        "Refinancing",
        "PMI Explained",
        "First-Time Buyer Tips",
      ],
    },
    {
      id: 5,
      title: "Investment Basics",
      description:
        "Introduction to stocks, bonds, mutual funds, ETFs, and building a diversified investment portfolio.",
      icon: TrendingUp,
      lessons: 8,
      duration: "3 hours",
      difficulty: "Intermediate",
      progress: 0,
      color: "bg-green-100 text-green-600",
      topics: [
        "Stock Market Basics",
        "Bonds & Fixed Income",
        "Mutual Funds",
        "ETFs",
        "Portfolio Diversification",
        "Dollar-Cost Averaging",
        "Index Investing",
        "Risk Assessment",
      ],
    },
    {
      id: 6,
      title: "Risk vs Return",
      description:
        "Learn to balance investment risk with potential returns and create a strategy that matches your risk tolerance.",
      icon: Shield,
      lessons: 5,
      duration: "1.5 hours",
      difficulty: "Intermediate",
      progress: 0,
      color: "bg-red-100 text-red-600",
      topics: [
        "Risk Types",
        "Risk Tolerance",
        "Asset Allocation",
        "Risk-Return Relationship",
        "Diversification Benefits",
      ],
    },
    {
      id: 7,
      title: "Understanding Inflation",
      description:
        "Discover how inflation affects your money over time and strategies to protect your purchasing power.",
      icon: TrendingDown,
      lessons: 3,
      duration: "45 minutes",
      difficulty: "Beginner",
      progress: 0,
      color: "bg-orange-100 text-orange-600",
      topics: [
        "What is Inflation",
        "Historical Inflation Rates",
        "Inflation Protection Strategies",
      ],
    },
    {
      id: 8,
      title: "Tax Fundamentals",
      description:
        "Learn about different types of taxes, deductions, credits, and strategies to minimize your tax burden legally.",
      icon: Calculator,
      lessons: 6,
      duration: "2 hours",
      difficulty: "Intermediate",
      progress: 0,
      color: "bg-teal-100 text-teal-600",
      topics: [
        "Income Tax Basics",
        "Tax Brackets",
        "Deductions vs Credits",
        "Tax-Advantaged Accounts",
        "Tax Planning",
        "Filing Basics",
      ],
    },
    {
      id: 9,
      title: "Retirement Planning",
      description:
        "Plan for your future with 401k, IRA, and other retirement accounts. Learn about contribution limits and strategies.",
      icon: Target,
      lessons: 7,
      duration: "2.5 hours",
      difficulty: "Intermediate",
      progress: 0,
      color: "bg-pink-100 text-pink-600",
      topics: [
        "401k Basics",
        "Traditional vs Roth IRA",
        "Contribution Limits",
        "Employer Matching",
        "Retirement Timeline",
        "Social Security",
        "Withdrawal Strategies",
      ],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700";
      case "Advanced":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Literacy Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master essential financial skills through our comprehensive course
            library. Each course includes interactive lessons, expert videos,
            and quizzes to test your knowledge.
          </p>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">9</div>
              <div className="text-sm text-gray-600">Total Courses</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Play className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Video Lessons</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Hours of Content</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600">Students</div>
            </CardContent>
          </Card>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="hover:shadow-lg transition-shadow border-0 shadow-md"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${course.color}`}
                  >
                    <course.icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getDifficultyColor(course.difficulty)}>
                      {course.difficulty}
                    </Badge>
                    <Badge variant="outline">{course.lessons} lessons</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {course.description}
                </CardDescription>

                {/* Course Info */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {course.lessons} lessons
                  </div>
                </div>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Topics */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Topics Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.slice(0, 4).map((topic, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {topic}
                      </Badge>
                    ))}
                    {course.topics.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{course.topics.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link
                    to={`/lessons/${
                      course.id === 1
                        ? "budgeting-and-saving"
                        : course.id === 2
                          ? "understanding-credit"
                          : course.id === 3
                            ? "interest-rates"
                            : course.id === 4
                              ? "loans-and-mortgages"
                              : course.id === 5
                                ? "investment-basics"
                                : course.id === 6
                                  ? "risk-vs-return"
                                  : course.id === 7
                                    ? "understanding-inflation"
                                    : course.id === 8
                                      ? "tax-fundamentals"
                                      : course.id === 9
                                        ? "retirement-planning"
                                        : "budgeting-and-saving"
                    }`}
                  >
                    {course.progress > 0 ? (
                      <>
                        <Play className="mr-2 w-4 h-4" />
                        Continue Course
                      </>
                    ) : (
                      <>
                        <BookOpen className="mr-2 w-4 h-4" />
                        Start Course
                      </>
                    )}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path Suggestion */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Recommended Learning Path
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              New to finance? Start with these courses in order for the best
              learning experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Budgeting & Saving",
                "Understanding Credit",
                "Interest Rates Explained",
                "Investment Basics",
              ].map((course, index) => (
                <div key={course} className="flex items-center">
                  <div className="bg-white rounded-full px-4 py-2 shadow-sm">
                    <span className="text-sm font-medium">
                      {index + 1}. {course}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="w-8 h-px bg-gray-300 mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
