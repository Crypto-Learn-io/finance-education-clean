import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CheckCircle,
  XCircle,
  Trophy,
  Star,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { Quiz, QuizQuestion, calculateScore } from "@/data/quizzes";
import {
  loadUserProgress,
  markQuizCompleted,
  getXPProgress,
  UserProgress,
} from "@/data/xpSystem";
import { cn } from "@/lib/utils";

interface QuizComponentProps {
  quiz: Quiz;
  onComplete?: () => void;
}

export default function QuizComponent({
  quiz,
  onComplete,
}: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(quiz.questions.length).fill(-1),
  );
  const [showResults, setShowResults] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [levelUpModal, setLevelUpModal] = useState(false);
  const [newLevel, setNewLevel] = useState<number | null>(null);

  useEffect(() => {
    setUserProgress(loadUserProgress());
  }, []);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      handleFinishQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishQuiz = () => {
    if (!userProgress) return;

    const results = calculateScore(quiz, selectedAnswers);
    const oldLevel = userProgress.currentLevel;
    const updatedProgress = markQuizCompleted(
      userProgress,
      quiz.id,
      results.xpEarned,
    );

    setUserProgress(updatedProgress);

    // Check if user leveled up
    if (updatedProgress.currentLevel > oldLevel) {
      setNewLevel(updatedProgress.currentLevel);
      setLevelUpModal(true);
    }

    setShowResults(true);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(quiz.questions.length).fill(-1));
    setShowResults(false);
  };

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

  const getMasteryColor = (level: string) => {
    switch (level) {
      case "excellent":
        return "text-green-600";
      case "good":
        return "text-yellow-600";
      case "needsImprovement":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  if (showResults) {
    const results = calculateScore(quiz, selectedAnswers);
    const xpInfo = userProgress ? getXPProgress(userProgress.totalXP) : null;

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              {results.masteryLevel === "excellent" ? (
                <Trophy className="w-16 h-16 text-yellow-500" />
              ) : results.masteryLevel === "good" ? (
                <Star className="w-16 h-16 text-blue-500" />
              ) : (
                <RotateCcw className="w-16 h-16 text-gray-500" />
              )}
            </div>
            <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
            <div className="text-6xl font-bold mb-2">
              {results.score}/{quiz.questions.length}
            </div>
            <div className="text-xl text-gray-600 mb-4">
              {results.percentage}% Correct
            </div>
            <Badge
              className={cn(
                "text-lg px-4 py-2",
                getMasteryColor(results.masteryLevel),
              )}
            >
              {results.masteryLevel === "excellent"
                ? "Excellent!"
                : results.masteryLevel === "good"
                  ? "Good Work!"
                  : "Keep Learning!"}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">{results.message}</p>

            <div className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-lg p-6">
              <div className="text-lg font-semibold mb-2">
                XP Earned: +{results.xpEarned}
              </div>
              {xpInfo && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      {xpInfo.currentLevel.badge} Level{" "}
                      {xpInfo.currentLevel.level}: {xpInfo.currentLevel.title}
                    </span>
                    <span>
                      {userProgress?.totalXP} /{" "}
                      {xpInfo.nextLevel?.minXP || "Max Level"}
                    </span>
                  </div>
                  <Progress value={xpInfo.progressToNext} className="h-3" />
                  {xpInfo.nextLevel && (
                    <div className="text-sm text-gray-600">
                      {xpInfo.xpNeededForNext} XP to {xpInfo.nextLevel.badge}{" "}
                      {xpInfo.nextLevel.title}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={handleRetry} variant="outline" size="lg">
                <RotateCcw className="mr-2 w-5 h-5" />
                Retake Quiz
              </Button>
              <Button onClick={onComplete} size="lg">
                Continue Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Review Answers */}
            <div className="mt-8 text-left">
              <h3 className="text-xl font-semibold mb-4">Review Answers</h3>
              <div className="space-y-4">
                {quiz.questions.map((question, index) => (
                  <Card
                    key={question.id}
                    className={cn(
                      "border-l-4",
                      selectedAnswers[index] === question.correctAnswer
                        ? "border-l-green-500"
                        : "border-l-red-500",
                    )}
                  >
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">
                          {index + 1}. {question.question}
                        </h4>
                        <Badge
                          className={getDifficultyColor(question.difficulty)}
                        >
                          {question.difficulty}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={cn(
                              "p-2 rounded text-sm",
                              optionIndex === question.correctAnswer
                                ? "bg-green-100 text-green-800"
                                : optionIndex === selectedAnswers[index] &&
                                    selectedAnswers[index] !==
                                      question.correctAnswer
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-50",
                            )}
                          >
                            <div className="flex items-center gap-2">
                              {optionIndex === question.correctAnswer ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : optionIndex === selectedAnswers[index] &&
                                selectedAnswers[index] !==
                                  question.correctAnswer ? (
                                <XCircle className="w-4 h-4 text-red-600" />
                              ) : null}
                              {option}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Level Up Modal */}
        <Dialog open={levelUpModal} onOpenChange={setLevelUpModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center">Level Up! 🎉</DialogTitle>
              <DialogDescription className="text-center">
                Congratulations! You've reached a new level!
              </DialogDescription>
            </DialogHeader>
            <div className="text-center py-6">
              <div className="text-6xl mb-4">{xpInfo?.currentLevel.badge}</div>
              <div className="text-2xl font-bold mb-2">
                Level {newLevel}: {xpInfo?.currentLevel.title}
              </div>
              <p className="text-gray-600">
                {xpInfo?.currentLevel.description}
              </p>
            </div>
            <Button
              onClick={() => setLevelUpModal(false)}
              className="w-full"
              size="lg"
            >
              Awesome!
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Quiz Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{quiz.title} Quiz</h1>
          <Badge className="text-lg px-3 py-1">
            {currentQuestionIndex + 1} of {quiz.questions.length}
          </Badge>
        </div>
        <Progress
          value={((currentQuestionIndex + 1) / quiz.questions.length) * 100}
          className="h-3"
        />
      </div>

      {/* Question Card */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <CardTitle className="text-xl flex-1">
              {currentQuestion.question}
            </CardTitle>
            <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
              {currentQuestion.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={cn(
                  "w-full p-4 text-left rounded-lg border-2 transition-all hover:bg-gray-50",
                  selectedAnswer === index
                    ? "border-primary bg-primary/5"
                    : "border-gray-200",
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center",
                      selectedAnswer === index
                        ? "border-primary bg-primary text-white"
                        : "border-gray-300",
                    )}
                  >
                    {selectedAnswer === index && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          variant="outline"
          size="lg"
        >
          Previous
        </Button>

        <Button onClick={handleNext} disabled={selectedAnswer === -1} size="lg">
          {isLastQuestion ? "Finish Quiz" : "Next"}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
