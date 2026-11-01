import { CSSProperties, useState } from "react";
import { Bug, Check, Copy, Lightbulb, Mail, School } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BUILDER, contactHref } from "@/data/site";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const reasons = [
  {
    icon: Lightbulb,
    title: "Ideas",
    text: "A course or tool you'd like to see.",
  },
  { icon: Bug, title: "Found a mistake?", text: "Tell us what to fix." },
  {
    icon: School,
    title: "Schools and parents",
    text: "Want to use THRIVE with a group?",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BUILDER.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the email is visible to copy by hand */
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-mint to-white">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-14 text-center sm:px-6">
          <span className="free-pill hero-animate">
            We'd love to hear from you
          </span>
          <h1
            className="hero-animate mt-4 text-4xl font-black text-ink md:text-5xl"
            style={delay(80)}
          >
            Contact us
          </h1>
          <p
            className="hero-animate mx-auto mt-4 max-w-xl text-lg text-ink-muted"
            style={delay(160)}
          >
            THRIVE was built by {BUILDER.name}. Questions, ideas or feedback?
            Send an email.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <article
          aria-labelledby="builder-name"
          className="reveal card-lift flex flex-col items-center gap-6 rounded-3xl border border-border bg-white p-6 text-center shadow-sm sm:flex-row sm:p-8 sm:text-left"
        >
          <span
            aria-hidden="true"
            className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-primary text-2xl font-black text-white shadow-md"
          >
            {BUILDER.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-extrabold uppercase tracking-wide text-primary">
              {BUILDER.role}
            </p>
            <h2 id="builder-name" className="mt-1 text-2xl font-black text-ink">
              {BUILDER.name}
            </h2>
            <a
              href={contactHref()}
              className="link-underline mt-1 inline-block break-all font-semibold text-ink-muted hover:text-primary"
            >
              {BUILDER.email}
            </a>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg">
                <a href={contactHref()}>
                  <Mail aria-hidden="true" />
                  Send an email
                </a>
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={copy}>
                {copied ? (
                  <Check aria-hidden="true" />
                ) : (
                  <Copy aria-hidden="true" />
                )}
                {copied ? "Copied!" : "Copy email"}
              </Button>
            </div>
            <p className="sr-only" aria-live="polite">
              {copied ? "Email address copied" : ""}
            </p>
          </div>
        </article>

        <h2 className="reveal mt-12 text-center text-xl font-black text-ink">
          What can you write about?
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              className="reveal hover-glow rounded-3xl border border-border bg-white p-5 text-center"
              style={delay(i * 80)}
            >
              <r.icon
                className="mx-auto h-7 w-7 text-brand"
                aria-hidden="true"
              />
              <h3 className="mt-2 font-extrabold text-ink">{r.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
