import express from "express";
import articles from "./routes/articles.js";
import { getLists, testSet } from "./search.js";
import { rrfFuse } from "./rrf.js";
import { answerQuestion } from "./rag.js";

export const app = express();
app.use(express.json());

app.use("/articles", articles);

// Provided: hybrid search over the saved result lists.
app.get("/search", (req, res) => {
  const q = String(req.query.q || "").trim();
  if (!q) return res.status(400).json({ error: "q is required" });
  const { keyword, semantic } = getLists(q);
  res.json({ results: rrfFuse(keyword, semantic).slice(0, 10) });
});

// Provided: ask a question, get a grounded answer with sources.
app.get("/ask", async (req, res) => {
  const q = String(req.query.q || "").trim();
  if (!q) return res.status(400).json({ error: "q is required" });
  try {
    res.json(await answerQuestion(q));
  } catch (err) {
    res.status(502).json({ error: err.message });
  }
});

app.get("/health", (_req, res) => res.json({ ok: true, queries: testSet.length }));
