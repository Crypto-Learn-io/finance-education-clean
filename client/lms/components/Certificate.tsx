import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Printer } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { CourseData } from "../schema";

interface Props {
  course: CourseData;
  done: number;
  total: number;
  completedOn?: string;
}

/** Printable certificate, unlocked when every item in the course is done. */
export default function Certificate({ course, done, total }: Props) {
  const unlocked = done >= total;
  const base = `/lessons/${course.slug}`;
  const [name, setName] = useState(() => {
    try {
      return window.localStorage.getItem("thrive_display_name") ?? "";
    } catch {
      return "";
    }
  });
  useEffect(() => {
    try {
      window.localStorage.setItem("thrive_display_name", name);
    } catch {
      /* ignore */
    }
  }, [name]);
  const date = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [],
  );

  if (!unlocked) {
    const pct = Math.round((done / total) * 100);
    return (
      <Layout>
        <section className="mx-auto max-w-lg px-4 py-20 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint">
            <Lock className="h-7 w-7 text-primary" aria-hidden="true" />
          </span>
          <h1 className="mt-5 text-3xl font-black text-ink">
            Finish the course to unlock your certificate
          </h1>
          <p className="mt-2 text-ink-muted">
            You've done {done} of {total} items in {course.meta.title}.
          </p>
          <Progress
            value={pct}
            className="mx-auto mt-4 h-3 max-w-xs"
            aria-label="Course progress"
          />
          <Button asChild size="lg" className="mt-8">
            <Link to={base}>Keep going</Link>
          </Button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="print:hidden">
          <Link
            to={base}
            className="link-underline inline-flex items-center gap-1 text-sm font-bold text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to{" "}
            {course.meta.title}
          </Link>
          <h1 className="mt-4 text-3xl font-black text-ink">
            Your certificate
          </h1>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label htmlFor="cert-name" className="text-sm font-bold text-ink">
                Name on the certificate
              </label>
              <input
                id="cert-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={40}
                placeholder="Type your name"
                className="mt-1 w-full rounded-full border-2 border-border px-4 py-2.5 text-[15px] outline-none focus:border-primary"
              />
            </div>
            <Button size="lg" onClick={() => window.print()}>
              <Printer aria-hidden="true" />
              Print or save as PDF
            </Button>
          </div>
        </div>

        {/* The certificate itself */}
        <article
          id="certificate"
          aria-label={`Certificate of completion for ${course.meta.title}`}
          className="relative mt-8 aspect-[1.414/1] w-full overflow-hidden rounded-3xl border-[10px] border-double border-primary bg-white p-[5%] text-center shadow-xl print:mt-0 print:rounded-none print:shadow-none"
        >
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-mint"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-sun-soft"
          />
          <div className="relative flex h-full flex-col items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/favicon.svg"
                alt=""
                width={40}
                height={40}
                className="h-[clamp(28px,5vw,44px)] w-auto"
              />
              <span className="text-[clamp(18px,3.2vw,30px)] font-black tracking-[0.2em] text-ink">
                THRIVE
              </span>
            </div>
            <div>
              <p className="text-[clamp(11px,1.6vw,15px)] font-extrabold uppercase tracking-[0.3em] text-primary">
                Certificate of completion
              </p>
              <p className="mt-[2%] text-[clamp(12px,1.8vw,17px)] text-ink-muted">
                This certifies that
              </p>
              <p className="mt-[1.5%] min-h-[1.2em] border-b-2 border-ink/20 px-6 text-[clamp(26px,5.5vw,52px)] font-black leading-tight text-ink">
                {name.trim() || " "}
              </p>
              <p className="mt-[2.5%] text-[clamp(12px,1.8vw,17px)] text-ink-muted">
                has completed the course
              </p>
              <p className="mt-[1%] text-[clamp(20px,3.8vw,36px)] font-black text-brand-dark">
                {course.meta.title}
              </p>
              <p className="mx-auto mt-[2%] max-w-xl text-[clamp(10px,1.4vw,14px)] text-ink-muted">
                {course.meta.outcome}
              </p>
            </div>
            <div className="flex w-full items-end justify-between text-[clamp(10px,1.4vw,14px)] text-ink-muted">
              <div className="text-left">
                <p className="font-bold text-ink">{date}</p>
                <p>Date</p>
              </div>
              <p className="max-w-[45%] text-center font-semibold">
                Track · Habits · Responsibility · Invest · Value · Earn
              </p>
              <div className="text-right">
                <p className="font-bold text-ink">{course.meta.level}</p>
                <p>Level</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}
