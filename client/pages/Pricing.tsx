import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Star,
  Users,
  MessageCircle,
  Video,
  Brain,
  BookOpen,
  Heart,
  Zap,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">(
    "annual",
  );

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Perfect for getting started with financial basics",
      price: { monthly: 0, annual: 0 },
      originalPrice: null,
      popular: false,
      icon: BookOpen,
      iconColor: "text-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      buttonVariant: "outline" as const,
      features: [
        "Access to basic financial literacy courses",
        "Community support",
        "Limited quizzes (3 per month)",
        "Basic progress tracking",
        "Email newsletter with tips",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      description: "Most popular choice for serious learners",
      price: { monthly: 15.99, annual: 10.99 },
      originalPrice: { monthly: null, annual: 15.99 },
      popular: true,
      icon: Star,
      iconColor: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary",
      buttonVariant: "default" as const,
      features: [
        "Everything in Free",
        "Access to premium video lessons",
        "Personalized learning paths",
        "AI tutor with advanced support",
        "Unlimited quizzes and practice tests",
        "Certificate of completion",
        "Mobile app access",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      description: "Complete solution with personal coaching",
      price: { monthly: 19.99, annual: 15.99 },
      originalPrice: { monthly: null, annual: 19.99 },
      popular: false,
      icon: Crown,
      iconColor: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      borderColor: "border-yellow-300",
      buttonVariant: "default" as const,
      features: [
        "Everything in Premium",
        "1-on-1 finance coaching sessions (2 per month)",
        "Personalized lesson feedback",
        "Priority email support (24h response)",
        "Custom learning roadmap",
        "Access to exclusive webinars",
        "Financial planning templates",
        "Direct coach messaging",
      ],
    },
  ];

  const getDisplayPrice = (plan: (typeof plans)[0]) => {
    if (plan.price[billingPeriod] === 0) return "Free";
    return `$${plan.price[billingPeriod]}`;
  };

  const getSavingsText = (plan: (typeof plans)[0]) => {
    if (billingPeriod === "annual" && plan.originalPrice?.annual) {
      const savings = Math.round(
        ((plan.originalPrice.annual - plan.price.annual) /
          plan.originalPrice.annual) *
          100,
      );
      return `Save ${savings}%`;
    }
    return null;
  };

  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start your financial literacy journey with the plan that fits your
              goals. Upgrade or downgrade anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span
                className={cn(
                  "text-sm font-medium",
                  billingPeriod === "monthly"
                    ? "text-gray-900"
                    : "text-gray-500",
                )}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingPeriod(
                    billingPeriod === "monthly" ? "annual" : "monthly",
                  )
                }
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  billingPeriod === "annual" ? "bg-primary" : "bg-gray-300",
                )}
              >
                <span
                  className={cn(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                    billingPeriod === "annual"
                      ? "translate-x-6"
                      : "translate-x-1",
                  )}
                />
              </button>
              <span
                className={cn(
                  "text-sm font-medium",
                  billingPeriod === "annual"
                    ? "text-gray-900"
                    : "text-gray-500",
                )}
              >
                Annual
              </span>
              {billingPeriod === "annual" && (
                <Badge className="bg-green-100 text-green-700 ml-2">
                  2 months free!
                </Badge>
              )}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const PlanIcon = plan.icon;
              const savings = getSavingsText(plan);

              return (
                <Card
                  key={plan.id}
                  className={cn(
                    "relative transition-all duration-200 hover:shadow-lg",
                    plan.popular
                      ? "ring-2 ring-primary shadow-lg scale-105"
                      : "hover:shadow-md",
                    plan.borderColor,
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-4 py-1 text-sm font-medium">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className={cn("text-center pb-4", plan.bgColor)}>
                    <div className="flex justify-center mb-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center",
                          plan.popular
                            ? "bg-primary/10"
                            : plan.id === "pro"
                              ? "bg-yellow-100"
                              : "bg-gray-100",
                        )}
                      >
                        <PlanIcon className={cn("w-6 h-6", plan.iconColor)} />
                      </div>
                    </div>

                    <CardTitle className="text-2xl font-bold mb-2">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mb-6">
                      {plan.description}
                    </p>

                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {getDisplayPrice(plan)}
                      </span>
                      {plan.price[billingPeriod] > 0 && (
                        <span className="text-gray-500">
                          /{billingPeriod === "annual" ? "year" : "month"}
                        </span>
                      )}
                    </div>

                    {savings && (
                      <div className="mt-2">
                        <Badge className="bg-green-100 text-green-700">
                          {savings}
                        </Badge>
                      </div>
                    )}

                    {billingPeriod === "annual" &&
                      plan.originalPrice?.annual && (
                        <p className="text-sm text-gray-500 mt-1">
                          <span className="line-through">
                            ${plan.originalPrice.annual}/year
                          </span>
                        </p>
                      )}
                  </CardHeader>

                  <CardContent className="pt-6">
                    <Button
                      className={cn(
                        "w-full mb-6",
                        plan.popular ? "shadow-md" : "",
                      )}
                      variant={plan.buttonVariant}
                      size="lg"
                    >
                      {plan.id === "free" ? (
                        <>
                          <BookOpen className="mr-2 w-4 h-4" />
                          Get Started Free
                        </>
                      ) : (
                        <>
                          <Zap className="mr-2 w-4 h-4" />
                          Choose {plan.name}
                        </>
                      )}
                    </Button>

                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-3">
                <Heart className="w-6 h-6 text-red-500" />
                <span className="text-gray-700">
                  30-day money-back guarantee
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Users className="w-6 h-6 text-blue-500" />
                <span className="text-gray-700">Join 10,000+ learners</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">24/7 support available</span>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="border-t pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Can I upgrade or downgrade my plan?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes! You can change your plan anytime. Upgrades take effect
                    immediately, and downgrades take effect at your next billing
                    cycle.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Is there a free trial for premium plans?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    All premium plans come with a 30-day money-back guarantee.
                    Try any paid plan risk-free!
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We accept all major credit cards, PayPal, and bank
                    transfers. All payments are processed securely.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Do you offer student discounts?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Yes! Students get 50% off all premium plans with a valid
                    student ID. Contact support to apply.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  We're here to help you choose the right plan for your
                  financial learning journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">
                      <MessageCircle className="mr-2 w-4 h-4" />
                      Contact Support
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/courses">
                      <Video className="mr-2 w-4 h-4" />
                      View Course Preview
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
