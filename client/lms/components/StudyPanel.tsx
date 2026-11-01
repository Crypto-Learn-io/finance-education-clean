import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  Download,
  Loader2,
  MessageSquare,
  NotebookPen,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CourseData } from "../schema";
import type { FlatItem } from "../registry";
import {
  DiscussionStore,
  localDiscussionStore,
  Post,
  useCourseNotes,
} from "../stores";

export type PanelTab = "notes" | "assistant" | "discussion";

const TABS: { id: PanelTab; label: string; icon: typeof Bot }[] = [
  { id: "notes", label: "Notes", icon: NotebookPen },
  { id: "assistant", label: "AI Study Assistant", icon: Bot },
  { id: "discussion", label: "Discussion", icon: MessageSquare },
];

interface Props {
  course: CourseData;
  current: FlatItem;
  flat: FlatItem[];
  tab: PanelTab;
  onTab: (t: PanelTab) => void;
  onClose?: () => void;
  onJump?: (itemId: string) => void;
  discussionStore?: DiscussionStore;
}

export default function StudyPanel({
  course,
  current,
  flat,
  tab,
  onTab,
  onClose,
  onJump,
  discussionStore = localDiscussionStore,
}: Props) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center gap-1 border-b border-border p-2">
        <div
          role="tablist"
          aria-label="Study tools"
          className="flex flex-1 gap-1"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`panel-tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => onTab(t.id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-xs font-bold transition-colors duration-200",
                tab === t.id
                  ? "bg-primary text-white"
                  : "text-ink-muted hover:bg-mint",
              )}
            >
              <t.icon className="h-4 w-4" aria-hidden="true" />
              <span className="whitespace-nowrap">
                {t.id === "assistant" ? "Ask AI" : t.label}
              </span>
              {t.id === "assistant" && (
                <span className="sr-only"> (AI Study Assistant)</span>
              )}
            </button>
          ))}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close study panel"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-ink-muted hover:bg-mint"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
      <div
        role="tabpanel"
        key={tab}
        id={`panel-${tab}`}
        aria-labelledby={`panel-tab-${tab}`}
        className="min-h-0 flex-1 overflow-y-auto p-4 animate-in fade-in slide-in-from-right-2 duration-300"
      >
        {tab === "notes" && (
          <NotesTab
            course={course}
            current={current}
            flat={flat}
            onJump={onJump}
          />
        )}
        {tab === "assistant" && (
          <AssistantTab course={course} current={current} />
        )}
        {tab === "discussion" && (
          <DiscussionTab
            course={course}
            current={current}
            store={discussionStore}
          />
        )}
      </div>
    </div>
  );
}

/* ---------- Notes ---------- */

function NotesTab({
  course,
  current,
  flat,
  onJump,
}: {
  course: CourseData;
  current: FlatItem;
  flat: FlatItem[];
  onJump?: (id: string) => void;
}) {
  const { notes, setNote, saved } = useCourseNotes(course.slug);
  const value = notes[current.item.id]?.text ?? "";
  const others = flat.filter(
    (f) => f.item.id !== current.item.id && notes[f.item.id],
  );

  const download = () => {
    const text = [
      `${course.meta.title} notes`,
      "",
      ...flat
        .filter((f) => notes[f.item.id])
        .flatMap((f) => [`## ${f.item.title}`, notes[f.item.id].text, ""]),
    ].join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    a.download = `${course.slug}-notes.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div>
      <label htmlFor="note-input" className="text-sm font-extrabold text-ink">
        Notes for:{" "}
        <span className="font-semibold text-ink-muted">
          {current.item.title}
        </span>
      </label>
      <textarea
        id="note-input"
        value={value}
        onChange={(e) => setNote(current.item.id, e.target.value)}
        rows={8}
        placeholder="Write what you learned, or a question to ask later."
        className="mt-2 w-full resize-y rounded-2xl border-2 border-border bg-white p-3 text-[15px] text-ink outline-none transition-colors focus:border-primary"
      />
      <p className="mt-1 text-xs text-ink-muted" aria-live="polite">
        {saved === "saving"
          ? "Saving…"
          : saved === "saved"
            ? "Saved on this device"
            : saved === "error"
              ? "Couldn't save. Storage may be blocked."
              : "Notes save on this device."}
      </p>

      {others.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-ink">
            Your other notes
          </h3>
          <ul className="mt-2 space-y-2">
            {others.map((f) => (
              <li key={f.item.id}>
                <button
                  type="button"
                  onClick={() => onJump?.(f.item.id)}
                  className="hover-glow w-full rounded-2xl border border-border bg-white p-3 text-left"
                >
                  <span className="block text-xs font-bold text-primary">
                    {f.item.title}
                  </span>
                  <span className="line-clamp-2 text-sm text-ink-muted">
                    {notes[f.item.id].text}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {Object.keys(notes).length > 0 && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-4"
          onClick={download}
        >
          <Download aria-hidden="true" />
          Download all notes
        </Button>
      )}
    </div>
  );
}

/* ---------- AI Study Assistant ---------- */

interface Msg {
  role: "user" | "bot";
  text: string;
}

function AssistantTab({
  course,
  current,
}: {
  course: CourseData;
  current: FlatItem;
}) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs, busy]);

  const ask = async (q: string) => {
    if (!q.trim() || busy) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setBusy(true);
    try {
      const context = `I'm studying the THRIVE course "${course.meta.title}", module "${current.module.title}", item "${current.item.title}". Keep the answer short and simple.`;
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `${context}\n\nMy question: ${q}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      setMsgs((m) => [
        ...m,
        {
          role: "bot",
          text:
            data.response ||
            "Sorry, I didn't get an answer. Try asking another way.",
        },
      ]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: "bot",
          text: "The study assistant isn't available right now. Try again later, or write your question in Notes.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  const suggestions = [
    `Explain "${current.item.title}" simply`,
    "Give me a real-life example",
    "Quiz me with one question",
  ];

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex items-start gap-2 rounded-2xl bg-mint-soft p-3 text-sm text-ink">
        <Sparkles
          className="mt-0.5 h-4 w-4 flex-none text-primary"
          aria-hidden="true"
        />
        <p>
          Ask anything about <strong>{current.item.title}</strong>. The
          assistant knows which part you're on.
        </p>
      </div>

      <div className="mt-3 flex-1 space-y-3" aria-live="polite">
        {msgs.length === 0 && (
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => ask(s)}
                className="hover-glow rounded-full border border-border bg-white px-3 py-1.5 text-left text-sm font-semibold text-primary"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        {msgs.map((m, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[90%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-[15px] animate-in fade-in slide-in-from-bottom-1 duration-300",
              m.role === "user"
                ? "ml-auto bg-primary text-white"
                : "bg-white text-ink ring-1 ring-border",
            )}
          >
            <span className="sr-only">
              {m.role === "user" ? "You: " : "Assistant: "}
            </span>
            {m.text}
          </div>
        ))}
        {busy && (
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />{" "}
            Thinking…
          </div>
        )}
        <div ref={endRef} />
      </div>

      <form
        className="sticky bottom-0 mt-3 flex gap-2 bg-white pt-2"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <label htmlFor="ai-input" className="sr-only">
          Ask the study assistant
        </label>
        <input
          id="ai-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question…"
          className="min-w-0 flex-1 rounded-full border-2 border-border px-4 py-2 text-[15px] outline-none focus:border-primary"
        />
        <Button
          type="submit"
          size="icon"
          aria-label="Send question"
          disabled={!input.trim() || busy}
        >
          <Send aria-hidden="true" />
        </Button>
      </form>
    </div>
  );
}

/* ---------- Discussion ---------- */

function DiscussionTab({
  course,
  current,
  store,
}: {
  course: CourseData;
  current: FlatItem;
  store: DiscussionStore;
}) {
  const threadId = `${course.slug}_${current.module.id}`;
  const [posts, setPosts] = useState<Post[]>([]);
  const [text, setText] = useState("");
  const [name, setName] = useState(() => {
    try {
      return window.localStorage.getItem("thrive_display_name") ?? "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    let on = true;
    store.list(threadId).then((p) => on && setPosts(p));
    return () => {
      on = false;
    };
  }, [store, threadId]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    const author = name.trim() || "You";
    try {
      window.localStorage.setItem("thrive_display_name", name.trim());
    } catch {
      /* ignore */
    }
    const p = await store.post(threadId, text.trim(), author);
    setPosts((ps) => [...ps, p]);
    setText("");
  };

  return (
    <div>
      <p className="text-xs font-extrabold uppercase tracking-wide text-primary">
        Module {course.modules.indexOf(current.module) + 1}:{" "}
        {current.module.title}
      </p>
      {current.module.discussionPrompt && (
        <div className="mt-2 rounded-2xl bg-sun-soft p-3">
          <p className="text-xs font-bold text-ink-muted">Discussion prompt</p>
          <p className="mt-1 font-extrabold text-ink">
            {current.module.discussionPrompt}
          </p>
        </div>
      )}
      {!store.shared && (
        <p className="mt-3 rounded-2xl border border-dashed border-border p-3 text-sm text-ink-muted">
          Discussion is in preview. Posts are saved on this device only, so
          others can't see them yet. Use it to plan your answer or talk it
          through with a parent.
        </p>
      )}

      <ul className="mt-4 space-y-3" aria-label="Posts">
        {posts.length === 0 && (
          <li className="text-sm text-ink-muted">
            No posts yet. Be the first to answer.
          </li>
        )}
        {posts.map((p) => (
          <li
            key={p.id}
            className="rounded-2xl bg-white p-3 ring-1 ring-border animate-in fade-in slide-in-from-bottom-1 duration-300"
          >
            <p className="flex items-center gap-2 text-sm">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-black text-white"
              >
                {p.author.slice(0, 1).toUpperCase()}
              </span>
              <strong className="text-ink">{p.author}</strong>
              <time
                className="text-xs text-ink-muted"
                dateTime={new Date(p.createdAt).toISOString()}
              >
                {new Date(p.createdAt).toLocaleDateString()}
              </time>
            </p>
            <p className="mt-2 whitespace-pre-wrap text-[15px] text-ink">
              {p.text}
            </p>
          </li>
        ))}
      </ul>

      <form onSubmit={submit} className="mt-4 space-y-2">
        <label htmlFor="disc-name" className="sr-only">
          Your first name or nickname
        </label>
        <input
          id="disc-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name or nickname (optional)"
          maxLength={30}
          className="w-full rounded-full border-2 border-border px-4 py-2 text-sm outline-none focus:border-primary"
        />
        <label htmlFor="disc-text" className="sr-only">
          Your answer
        </label>
        <textarea
          id="disc-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="Share your answer…"
          className="w-full resize-y rounded-2xl border-2 border-border p-3 text-[15px] outline-none focus:border-primary"
        />
        <Button type="submit" size="sm" disabled={!text.trim()}>
          <Send aria-hidden="true" />
          Post
        </Button>
      </form>
    </div>
  );
}
