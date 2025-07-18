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
import {
  TrendingUp,
  PiggyBank,
  CreditCard,
  Target,
  BookOpen,
  Play,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Shield,
  BarChart3,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description:
        "Learn through engaging text lessons and real-world examples",
    },
    {
      icon: Play,
      title: "Video Content",
      description: "Watch curated YouTube videos from finance experts",
    },
    {
      icon: CheckCircle,
      title: "Progress Tracking",
      description: "Track your learning journey with completion checkmarks",
    },
    {
      icon: Shield,
      title: "AI Tutor",
      description: "Get personalized help from our AI finance tutor",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Budgeting & Saving",
      description:
        "Master the fundamentals of personal budgeting and building your savings",
      icon: PiggyBank,
      lessons: 6,
      difficulty: "Beginner",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Understanding Credit",
      description:
        "Learn about credit scores, debt management, and responsible borrowing",
      icon: CreditCard,
      lessons: 5,
      difficulty: "Beginner",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      title: "Investment Basics",
      description:
        "Introduction to stocks, bonds, mutual funds, and investment strategies",
      icon: TrendingUp,
      lessons: 8,
      difficulty: "Intermediate",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      title: "Retirement Planning",
      description:
        "Plan for your future with 401k, IRA, and retirement strategies",
      icon: Target,
      lessons: 7,
      difficulty: "Intermediate",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-white via-green-50 to-blue-50">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Your
              <span className="text-primary block">Financial Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Learn essential financial skills through interactive lessons,
              expert videos, and personalized AI tutoring. From budgeting basics
              to investment strategies, we'll guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <Link to="/courses">
                  Start Learning
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">25+</h3>
              <p className="text-gray-600">Interactive Lessons</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">9</h3>
              <p className="text-gray-600">Core Topics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600">Free to Use</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FintechLearn?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform combines proven educational methods
              with modern technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Courses Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start with these foundational courses designed for beginners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-shadow cursor-pointer border-0 shadow-md"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${course.color}`}
                    >
                      <course.icon className="w-6 h-6" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{course.difficulty}</Badge>
                      <Badge variant="outline">{course.lessons} lessons</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="/courses">
                      Start Course
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start free or unlock premium features with personalized coaching
              and advanced AI support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-gray-200 hover:border-gray-300 transition-colors">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  Free
                </div>
                <div className="text-gray-600 mb-4">
                  Basic courses & community
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/courses">Start Free</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-colors relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-white">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $10.99<span className="text-lg text-gray-600">/year</span>
                </div>
                <div className="text-gray-600 mb-4">
                  Premium lessons & AI tutor
                </div>
                <Button asChild className="w-full">
                  <Link to="/pricing">Choose Premium</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-colors">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $15.99<span className="text-lg text-gray-600">/year</span>
                </div>
                <div className="text-gray-600 mb-4">
                  Personal coaching included
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white"
                >
                  <Link to="/pricing">Go Pro</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="ghost" size="lg">
              <Link to="/pricing">
                View All Plans & Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of learners who have improved their financial
                literacy with our comprehensive courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-3"
                >
                  <Link to="/courses">
                    Start Learning Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-primary"
                >
                  <Link to="/pricing">
                    View Pricing
                    <Target className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
