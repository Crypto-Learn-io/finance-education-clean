import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { PlayerSkeleton } from "./lms/components/Skeletons";

const CoursePlayer = lazy(() => import("./lms/CoursePlayer"));
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Quizzes from "./pages/Quizzes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";

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
            {/* Pricing was removed: THRIVE is free. Old links go to courses. */}
            <Route
              path="/pricing"
              element={<Navigate to="/courses" replace />}
            />
            {/* About section was removed. Old links go home. */}
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/contact" element={<Contact />} />

            {/* Course player: every course comes from client/content/courses/*.json */}
            <Route
              path="/lessons/:slug/*"
              element={
                <Suspense fallback={<PlayerSkeleton />}>
                  <CoursePlayer />
                </Suspense>
              }
            />

            {/* Quiz Route */}
            <Route path="/quiz/:quizId" element={<QuizPage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GlobalChatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

/** The floating chat is hidden inside the course player, which has its own assistant. */
function GlobalChatbot() {
  const { pathname } = useLocation();
  if (/^\/lessons\/[^/]+\/[^/]+/.test(pathname)) return null;
  return <Chatbot />;
}
