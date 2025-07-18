import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Play,
  Clock,
  BookOpen,
  Target,
  ArrowLeft,
} from "lucide-react";

interface LessonSection {
  title: string;
  content: string;
}

interface LessonLayoutProps {
  title: string;
  intro: string;
  sections: LessonSection[];
  videoEmbed?: ReactNode;
  duration: string;
  difficulty: string;
  nextLessonPath?: string;
  nextLessonTitle?: string;
  prevLessonPath?: string;
  prevLessonTitle?: string;
  quizId?: string;
}

export default function LessonLayout({
  title,
  intro,
  sections,
  videoEmbed,
  duration,
  difficulty,
  nextLessonPath,
  nextLessonTitle,
  prevLessonPath,
  prevLessonTitle,
  quizId,
}: LessonLayoutProps) {
  const navigate = useNavigate();
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/courses" className="hover:text-primary">
              Courses
            </Link>
            <span>/</span>
            <span className="text-gray-900">{title}</span>
          </div>
        </nav>

        {/* Lesson Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Badge className={getDifficultyColor(difficulty)}>
              {difficulty}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">{intro}</p>
        </div>

        {/* Video Section */}
        {videoEmbed && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5 text-primary" />
                Watch & Learn
              </CardTitle>
            </CardHeader>
            <CardContent>{videoEmbed}</CardContent>
          </Card>
        )}

        {/* Learning Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                    {index + 1}
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {section.content.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quiz Teaser */}
        <Card className="mb-12 bg-gradient-to-r from-primary/10 to-blue-50">
          <CardContent className="p-8 text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to test yourself?
            </h3>
            <p className="text-gray-600 mb-6">
              Take a quick quiz to see how well you understand this lesson.
            </p>
            <Button
              size="lg"
              onClick={() => quizId && navigate(`/quiz/${quizId}`)}
              disabled={!quizId}
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Take Quiz
            </Button>
            {!quizId && (
              <p className="text-xs text-gray-500 mt-2">Quiz coming soon</p>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {prevLessonPath ? (
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link to={prevLessonPath}>
                <ArrowLeft className="mr-2 w-5 h-5" />
                {prevLessonTitle}
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link to="/courses">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Courses
              </Link>
            </Button>
          )}

          {nextLessonPath ? (
            <Button asChild size="lg" className="flex-1">
              <Link to={nextLessonPath}>
                {nextLessonTitle}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          ) : (
            <Button asChild size="lg" className="flex-1">
              <Link to="/courses">
                Browse More Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
}
