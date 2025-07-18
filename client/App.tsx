import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Quizzes from "./pages/Quizzes";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";

// Lesson pages
import BudgetingAndSaving from "./pages/lessons/BudgetingAndSaving";
import UnderstandingCredit from "./pages/lessons/UnderstandingCredit";
import InterestRates from "./pages/lessons/InterestRates";
import LoansAndMortgages from "./pages/lessons/LoansAndMortgages";
import InvestmentBasics from "./pages/lessons/InvestmentBasics";
import RiskVsReturn from "./pages/lessons/RiskVsReturn";
import UnderstandingInflation from "./pages/lessons/UnderstandingInflation";
import TaxFundamentals from "./pages/lessons/TaxFundamentals";
import RetirementPlanning from "./pages/lessons/RetirementPlanning";
import QuizPage from "./pages/quizzes/QuizPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/quizzes" element={<Quizzes />} />

            {/* Lesson Routes */}
            <Route
              path="/lessons/budgeting-and-saving"
              element={<BudgetingAndSaving />}
            />
            <Route
              path="/lessons/understanding-credit"
              element={<UnderstandingCredit />}
            />
            <Route path="/lessons/interest-rates" element={<InterestRates />} />
            <Route
              path="/lessons/loans-and-mortgages"
              element={<LoansAndMortgages />}
            />
            <Route
              path="/lessons/investment-basics"
              element={<InvestmentBasics />}
            />
            <Route path="/lessons/risk-vs-return" element={<RiskVsReturn />} />
            <Route
              path="/lessons/understanding-inflation"
              element={<UnderstandingInflation />}
            />
            <Route
              path="/lessons/tax-fundamentals"
              element={<TaxFundamentals />}
            />
            <Route
              path="/lessons/retirement-planning"
              element={<RetirementPlanning />}
            />

            {/* Quiz Route */}
            <Route path="/quiz/:quizId" element={<QuizPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
