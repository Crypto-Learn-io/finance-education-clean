import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { GraduationCap, BookOpen, Users, Brain, Target } from "lucide-react";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: GraduationCap },
    { href: "/courses", label: "Courses", icon: BookOpen },
    { href: "/pricing", label: "Pricing", icon: Target },
    { href: "/about", label: "About", icon: Users },
    { href: "/quizzes", label: "Quizzes", icon: Brain },
  ];

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                FintechLearn
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                to={href}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === href
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5",
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
