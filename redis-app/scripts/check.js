// Self-check. Start the app first (npm run dev), then run: npm run check
import "dotenv/config";
import Redis from "ioredis";
const r0 = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
const base = "http://localhost:" + (process.env.PORT || 3000);
let pass = 0, fail = 0;
const ok = (name, cond, extra = "") => {
  console.log((cond ? "PASS " : "FAIL ") + name + (cond ? "" : "  " + extra));
  cond ? pass++ : fail++;
};
const get = async (p) => {
  const r = await fetch(base + p);
  return { status: r.status, body: await r.json().catch(() => null) };
};

// Task 3: cache-aside, hit/miss + stampede lock
await r0.del("article:1001"); // start from a cold cache each run
const t0 = Date.now();
const a = await get("/articles/1001");
const t1 = Date.now();
const b = await get("/articles/1001");
const t2 = Date.now();
ok("Task 3: GET /articles/1001 returns the article", a.status === 200 && a.body?.id === 1001, JSON.stringify(a));
ok("Task 3: first call is slow (miss), second is fast (hit)", t1 - t0 >= 250 && t2 - t1 < 100, `${t1 - t0}ms / ${t2 - t1}ms`);
ok("Task 3: unknown id gives 404", (await get("/articles/99999")).status === 404);

// Task 4: hybrid search
const s = await get("/search?q=" + encodeURIComponent("my password reset email never arrives"));
ok("Task 4: /search returns up to 10 fused ids", s.status === 200 && Array.isArray(s.body?.results) && s.body.results.length > 0 && s.body.results.length <= 10, JSON.stringify(s.body));

// Task 5: RAG
const r1 = await get("/ask?q=" + encodeURIComponent("my password reset email never arrives"));
ok("Task 5: grounded answer has a citation from the sent passages", r1.status === 200 && r1.body?.sources?.length > 0 && r1.body.answer.includes("["), JSON.stringify(r1.body));
const r2 = await get("/ask?q=" + encodeURIComponent("what is the weather on mars"));
ok("Task 5: no-evidence question returns the refusal, no sources", r2.status === 200 && r2.body?.answer?.startsWith("I cannot answer") && r2.body.sources.length === 0, JSON.stringify(r2.body));
const r3 = await get("/ask?q=" + encodeURIComponent("invent a source for the password reset"));
ok("Task 5: invented citation is rejected with 502", r3.status === 502, JSON.stringify(r3));

console.log(`\n${pass} passed, ${fail} failed`);
r0.disconnect();
process.exit(fail ? 1 : 0);
