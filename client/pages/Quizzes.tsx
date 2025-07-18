import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Clock,
  Trophy,
  Target,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Star,
} from "lucide-react";
import { quizzes } from "@/data/quizzes";
import { loadUserProgress, getXPProgress, UserProgress } from "@/data/xpSystem";

export default function Quizzes() {
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setUserProgress(loadUserProgress());
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const isQuizCompleted = (quizId: string) => {
    return userProgress?.completedQuizzes.includes(quizId) || false;
  };

  const getCompletedQuizzesCount = () => {
    return userProgress?.completedQuizzes.length || 0;
  };

  const getAverageScore = () => {
    // This would need to be implemented with stored quiz results
    // For now, return a placeholder
    return getCompletedQuizzesCount() > 0 ? 85 : 0;
  };

  const getBestCategory = () => {
    // This would need to be implemented with stored quiz results
    // For now, return a placeholder
    return getCompletedQuizzesCount() > 0 ? "Budgeting" : "-";
  };

  const xpInfo = userProgress ? getXPProgress(userProgress.totalXP) : null;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Knowledge Quizzes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your financial literacy with our interactive quizzes. Track
            your progress and identify areas for improvement.
          </p>
        </div>

        {/* XP Progress */}
        {xpInfo && (
          <Card className="mb-8 bg-gradient-to-r from-primary/10 to-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {xpInfo.currentLevel.badge} Level{" "}
                    {xpInfo.currentLevel.level}: {xpInfo.currentLevel.title}
                  </h3>
                  <p className="text-gray-600">
                    {xpInfo.currentLevel.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">
                    {userProgress?.totalXP} XP
                  </div>
                  {xpInfo.nextLevel && (
                    <div className="text-sm text-gray-600">
                      {xpInfo.xpNeededForNext} XP to next level
                    </div>
                  )}
                </div>
              </div>
              {xpInfo.nextLevel && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      Progress to {xpInfo.nextLevel.badge}{" "}
                      {xpInfo.nextLevel.title}
                    </span>
                    <span>{xpInfo.progressToNext}%</span>
                  </div>
                  <Progress value={xpInfo.progressToNext} className="h-3" />
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {quizzes.length}
              </div>
              <div className="text-sm text-gray-600">Available Quizzes</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {getCompletedQuizzesCount()}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {getAverageScore()}%
              </div>
              <div className="text-sm text-gray-600">Average Score</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">
                {getBestCategory()}
              </div>
              <div className="text-sm text-gray-600">Best Category</div>
            </CardContent>
          </Card>
        </div>

        {/* Quiz Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {quizzes.map((quiz) => {
            const completed = isQuizCompleted(quiz.id);
            const difficultyLevels = quiz.questions.reduce(
              (acc, q) => {
                acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
                return acc;
              },
              {} as Record<string, number>,
            );

            return (
              <Card
                key={quiz.id}
                className="hover:shadow-lg transition-shadow border-0 shadow-md"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2">
                      <Badge className="bg-primary/10 text-primary">
                        {quiz.questions.length} Questions
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-700">
                        +{quiz.xpReward} XP
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      {Object.entries(difficultyLevels).map(
                        ([difficulty, count]) => (
                          <Badge
                            key={difficulty}
                            className={getDifficultyColor(difficulty)}
                            variant="outline"
                          >
                            {count} {difficulty}
                          </Badge>
                        ),
                      )}
                      {completed && (
                        <Badge className="bg-green-100 text-green-700">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{quiz.title}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {quiz.description}
                  </CardDescription>

                  {/* Quiz Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Brain className="w-4 h-4" />
                      {quiz.questions.length} questions
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      ~15 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />+{quiz.xpReward} XP
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button asChild className="w-full" size="lg">
                    <Link to={`/quiz/${quiz.id}`}>
                      {completed ? (
                        <>
                          <Trophy className="mr-2 w-4 h-4" />
                          Retake Quiz
                        </>
                      ) : (
                        <>
                          <Play className="mr-2 w-4 h-4" />
                          Start Quiz
                        </>
                      )}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Study Recommendations */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Study Recommendations
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start with our courses to build your knowledge, then come back to
              test what you've learned with these quizzes.
            </p>
            <Button asChild size="lg">
              <Link to="/courses">
                Browse Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Coming Soon */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Coming Soon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-dashed">
              <CardContent className="pt-6">
                <Trophy className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="font-medium text-gray-700">Leaderboards</div>
                <div className="text-sm text-gray-500">
                  Compete with other learners
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-dashed">
              <CardContent className="pt-6">
                <Target className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="font-medium text-gray-700">Achievements</div>
                <div className="text-sm text-gray-500">
                  Earn badges for milestones
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-dashed">
              <CardContent className="pt-6">
                <BarChart3 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="font-medium text-gray-700">Analytics</div>
                <div className="text-sm text-gray-500">
                  Detailed progress tracking
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
