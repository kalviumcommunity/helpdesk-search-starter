// Pretend database. Each call takes 300 ms and is counted, so you can
// see how many times the "database" was really hit.
import { readFileSync } from "node:fs";

const passages = JSON.parse(
  readFileSync(new URL("./data/passages.json", import.meta.url))
);

export const stats = { calls: 0 };

export async function getArticleSlowly(id) {
  stats.calls++;
  await new Promise((r) => setTimeout(r, 300));
  return passages.find((p) => p.id === Number(id)) ?? null;
}
