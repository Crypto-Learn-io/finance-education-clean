import path from "path";
import * as express from "express";
import express__default from "express";
import cors from "cors";
import { z } from "zod";
const handleDemo = (req, res) => {
  const response = {
    message: "Hello from Express server"
  };
  res.status(200).json(response);
};
const ChatRequestSchema = z.object({
  message: z.string()
});
const SYSTEM_PROMPT = `You are a helpful AI finance tutor for FintechLearn, an educational platform focused on teaching basic financial literacy. Your role is to help users learn about:

- Budgeting and saving
- Credit scores and debt management
- Interest rates (simple vs compound)
- Loans and mortgages
- Investment basics (stocks, bonds, mutual funds)
- Risk vs return
- Inflation
- Tax fundamentals
- Retirement planning (401k, IRA)

Guidelines:
- Keep responses clear, friendly, and educational
- Use simple language suitable for beginners
- Provide practical, actionable advice
- Stay focused on personal finance topics
- If asked about topics outside finance, politely redirect to finance education
- Encourage users to take courses on FintechLearn for deeper learning
- Always be encouraging and supportive of their financial learning journey

Respond in a conversational, supportive tone as if you're a patient teacher helping a student understand important financial concepts.`;
const handleChat = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
    const { message } = ChatRequestSchema.parse(req.body);
    const messages = [
      {
        role: "system",
        content: SYSTEM_PROMPT
      },
      {
        role: "user",
        content: message
      }
    ];
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        max_tokens: 500,
        temperature: 0.7
      })
    });
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }
    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't process your request right now.";
    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({
      error: "I'm having trouble connecting right now. Please try again later.",
      response: "I'm sorry, I'm experiencing technical difficulties. Please try asking your question again, or explore our courses to learn more about personal finance!"
    });
  }
};
function createServer() {
  const app2 = express__default();
  app2.use(cors());
  app2.use(express__default.json());
  app2.use(express__default.urlencoded({ extended: true }));
  app2.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });
  app2.get("/api/demo", handleDemo);
  app2.post("/api/chat", handleChat);
  return app2;
}
const app = createServer();
const port = process.env.PORT || 3e3;
const __dirname = import.meta.dirname;
const distPath = path.join(__dirname, "../spa");
app.use(express.static(distPath));
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});
app.listen(port, () => {
  console.log(`🚀 Fusion Starter server running on port ${port}`);
  console.log(`📱 Frontend: http://localhost:${port}`);
  console.log(`🔧 API: http://localhost:${port}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
//# sourceMappingURL=node-build.mjs.map
