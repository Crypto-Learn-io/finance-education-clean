import { Fragment, ReactNode } from "react";

/**
 * Renders the light markdown used in lesson text so it reads cleanly:
 *  - "**Heading**" on its own line  -> small heading
 *  - "• item" lines                 -> bullet list
 *  - "1. item" lines                -> numbered list
 *  - "**bold**" inside a line       -> <strong>
 *  - blank line                     -> new block
 * Anything else becomes a short paragraph.
 */

type Block =
  | { kind: "h"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] };

const BULLET = /^\s*[•▪◦]\s+/;
const NUMBERED = /^\s*\d+\.\s+/;
const HEADING = /^\*\*([^*]+)\*\*:?\s*$/;

function parse(content: string): Block[] {
  const blocks: Block[] = [];
  const lines = content.split("\n");

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;

    const last = blocks[blocks.length - 1];

    if (BULLET.test(line)) {
      const item = line.replace(BULLET, "");
      if (last?.kind === "ul") last.items.push(item);
      else blocks.push({ kind: "ul", items: [item] });
      continue;
    }

    if (NUMBERED.test(line)) {
      const item = line.replace(NUMBERED, "");
      if (last?.kind === "ol") last.items.push(item);
      else blocks.push({ kind: "ol", items: [item] });
      continue;
    }

    const heading = line.trim().match(HEADING);
    if (heading) {
      blocks.push({ kind: "h", text: heading[1] });
      continue;
    }

    blocks.push({ kind: "p", text: line.trim() });
  }

  return blocks;
}

function inline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-extrabold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export default function LessonContent({ content }: { content: string }) {
  const blocks = parse(content);

  return (
    <div className="space-y-4 text-[17px] leading-relaxed text-ink-muted">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "h":
            return (
              <h4
                key={i}
                className="pt-2 text-lg font-extrabold text-ink flex items-center gap-2"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-sun flex-none"
                />
                {b.text}
              </h4>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 rounded-2xl bg-mint-soft p-4">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-1.5 w-1.5 flex-none rounded-full bg-brand"
                    />
                    <span>{inline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2 rounded-2xl bg-mint-soft p-4">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-xs font-black text-white"
                    >
                      {j + 1}
                    </span>
                    <span>{inline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          default:
            return <p key={i}>{inline(b.text)}</p>;
        }
      })}
    </div>
  );
}
