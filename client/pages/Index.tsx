import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  MessageCircle,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";
import { courses, pillars } from "@/data/courses";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const steps = [
  {
    icon: BookOpen,
    title: "Pick a course",
    text: "Start with saving and budgeting. Every course shows the right age.",
  },
  {
    icon: PlayCircle,
    title: "Read and watch",
    text: "Short parts and a video make each idea easy to follow.",
  },
  {
    icon: Brain,
    title: "Take the quiz",
    text: "Check what you learned and earn points as you go.",
  },
];

export default function Index() {
  const featured = courses.filter((c) => c.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-mint via-mint-soft to-sun-soft">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-brand/10"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 md:pt-20 md:pb-24 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left">
            <p className="hero-animate inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-bold text-primary shadow-sm">
              <Star className="w-4 h-4 text-amber-500" aria-hidden="true" />
              Money lessons for kids and parents
            </p>
            <h1
              className="hero-animate mt-5 text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-ink"
              style={delay(80)}
            >
              Money skills that help kids{" "}
              <span className="relative whitespace-nowrap text-brand-dark">
                THRIVE
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 w-full h-3 text-sun"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 2 150 2 198 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p
              className="hero-animate mt-6 text-lg md:text-xl text-ink-muted max-w-xl mx-auto lg:mx-0"
              style={delay(160)}
            >
              Short lessons, fun videos, and quick quizzes. Kids learn to save,
              spend wisely, and grow their money. Parents can learn right
              alongside them.
            </p>

            <div
              className="hero-animate mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
              style={delay(240)}
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/courses">
                  Start for free
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link to="/quizzes">Try a quiz</Link>
              </Button>
              <span className="free-pill">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                Always free
              </span>
            </div>
            <p
              className="hero-animate mt-4 text-sm text-ink-muted"
              style={delay(300)}
            >
              No sign-up. No credit card. Just start.
            </p>
          </div>

          {/* Hero illustration: inline SVG, a few KB, gentle motion */}
          <div
            className="hero-animate mx-auto w-64 sm:w-80 lg:w-full max-w-sm"
            style={delay(200)}
          >
            <svg
              viewBox="0 0 320 300"
              role="img"
              aria-label="A sprout growing out of a stack of coins"
              className="w-full h-auto drop-shadow-sm"
            >
              <ellipse
                cx="160"
                cy="268"
                rx="120"
                ry="16"
                fill="#0A7A4A"
                opacity="0.12"
              />
              {/* coin stack */}
              {[0, 1, 2, 3].map((i) => (
                <g key={i} transform={`translate(0 ${-i * 22})`}>
                  <ellipse cx="160" cy="250" rx="70" ry="18" fill="#E8A92E" />
                  <rect x="90" y="236" width="140" height="14" fill="#E8A92E" />
                  <ellipse cx="160" cy="236" rx="70" ry="18" fill="#FFC857" />
                  <ellipse
                    cx="160"
                    cy="236"
                    rx="44"
                    ry="10"
                    fill="none"
                    stroke="#E8A92E"
                    strokeWidth="3"
                  />
                </g>
              ))}
              {/* sprout */}
              <g
                className="sway"
                style={{ transformBox: "fill-box" } as CSSProperties}
              >
                <path
                  d="M160 170V92"
                  stroke="#0A7A4A"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M160 128c-34 0-52-20-52-52 33 0 52 19 52 52Z"
                  fill="#0F9D58"
                />
                <path
                  d="M160 104c0-34 19-56 56-56 0 35-21 56-56 56Z"
                  fill="#0A7A4A"
                />
              </g>
              {/* floating coins */}
              <g className="float-slow">
                <circle
                  cx="62"
                  cy="96"
                  r="20"
                  fill="#FFC857"
                  stroke="#E8A92E"
                  strokeWidth="4"
                />
                <text
                  x="62"
                  y="103"
                  textAnchor="middle"
                  fontSize="20"
                  fontWeight="900"
                  fill="#8A5A00"
                >
                  $
                </text>
              </g>
              <g className="float-slow" style={{ animationDelay: "1.2s" }}>
                <circle
                  cx="262"
                  cy="150"
                  r="15"
                  fill="#FFC857"
                  stroke="#E8A92E"
                  strokeWidth="3.5"
                />
                <text
                  x="262"
                  y="156"
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="900"
                  fill="#8A5A00"
                >
                  $
                </text>
              </g>
              <g className="float-slow" style={{ animationDelay: "2.1s" }}>
                <circle cx="96" cy="30" r="10" fill="#D6F5E3" />
                <circle cx="250" cy="54" r="7" fill="#D6F5E3" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* What THRIVE stands for */}
      <section
        aria-labelledby="thrive-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="thrive-heading"
            className="reveal text-3xl md:text-4xl font-black text-ink"
          >
            Six skills. One word.
          </h2>
          <p className="reveal mt-3 text-lg text-ink-muted" style={delay(80)}>
            Every lesson builds one of these money skills.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {pillars.map((p, i) => (
            <li
              key={p.key}
              className="reveal card-lift rounded-3xl border border-border bg-white p-5 text-center shadow-sm"
              style={delay((i % 6) * 60)}
            >
              <span
                aria-hidden="true"
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-black text-white"
              >
                {p.key}
              </span>
              <h3 className="mt-3 text-lg font-extrabold text-ink">{p.word}</h3>
              <p className="mt-1 text-sm text-ink-muted">{p.line}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-heading" className="bg-mint-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2
            id="how-heading"
            className="reveal text-center text-3xl md:text-4xl font-black text-ink"
          >
            How it works
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="reveal relative rounded-3xl bg-white p-6 shadow-sm"
                style={delay(i * 80)}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-6 rounded-full bg-sun px-3 py-0.5 text-sm font-black text-sun-foreground"
                >
                  Step {i + 1}
                </span>
                <s.icon className="w-9 h-9 text-brand" aria-hidden="true" />
                <h3 className="mt-3 text-xl font-extrabold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1 text-ink-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured courses */}
      <section
        aria-labelledby="popular-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2
              id="popular-heading"
              className="reveal text-3xl md:text-4xl font-black text-ink"
            >
              Popular courses
            </h2>
            <p className="reveal mt-2 text-lg text-ink-muted" style={delay(80)}>
              Great places to start.
            </p>
          </div>
          <Link
            to="/courses"
            className="link-underline inline-flex items-center gap-1 self-start sm:self-auto font-bold text-primary"
          >
            See all {courses.length} courses
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c, i) => (
            <CourseCard key={c.slug} course={c} index={i} compact />
          ))}
        </div>
      </section>

      {/* For parents */}
      <section
        aria-labelledby="parents-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20"
      >
        <div className="reveal grid gap-8 rounded-3xl bg-sun-soft p-8 md:p-10 md:grid-cols-2 items-center">
          <div>
            <h2
              id="parents-heading"
              className="text-2xl md:text-3xl font-black text-ink"
            >
              Parents, learn together
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Money talks are easier with a plan. Do a lesson side by side, then
              chat about it at dinner.
            </p>
          </div>
          <ul className="space-y-3 text-ink">
            {[
              { icon: Users, text: "Each course lists an age range." },
              { icon: PlayCircle, text: "Videos make tricky ideas simple." },
              {
                icon: MessageCircle,
                text: "Stuck? Ask the money tutor in the corner.",
              },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 font-semibold">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white">
                  <Icon
                    className="w-5 h-5 text-brand-dark"
                    aria-hidden="true"
                  />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="reveal text-3xl md:text-4xl font-black">
            Ready to start?
          </h2>
          <p
            className="reveal mt-3 text-lg md:text-xl text-white/90 max-w-xl mx-auto"
            style={delay(80)}
          >
            Pick a course and do your first lesson today. It's free.
          </p>
          <div className="reveal mt-8" style={delay(160)}>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-mint"
            >
              <Link to="/courses">
                Start for free
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
