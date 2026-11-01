import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import QuizComponent from "@/components/Quiz";
import { getQuizById } from "@/data/quizzes";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function QuizPage() {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();

  const quiz = quizId ? getQuizById(quizId) : null;

  if (!quiz) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Quiz Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The quiz you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/quizzes")} size="lg">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Quizzes
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <QuizComponent quiz={quiz} onComplete={() => navigate("/quizzes")} />
    </Layout>
  );
}
