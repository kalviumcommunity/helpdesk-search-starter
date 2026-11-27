import { getLists, passages } from "./search.js";
import { rrfFuse } from "./rrf.js";
import { llm } from "./llm.js";

export const NO_ANSWER = "I cannot answer this from the supplied passages.";

/**
 * Task 5a: build the evidence-only prompt.
 * Return { system, user }.
 *  - system: must tell the model to answer using ONLY the supplied passages,
 *    to say exactly NO_ANSWER if they do not contain the answer, to cite with
 *    [post_id], and to never invent an id.
 *  - user:   JSON.stringify({ question, passages: [{ post_id, text }, ...] })
 */
export function buildMessages(question, retrieved) {
  // TODO (5a): write the system prompt (see the four rules above).
  const system = "";
  const user = JSON.stringify({
    question,
    passages: retrieved.map((p) => ({ post_id: p.id, text: p.text })),
  });
  return { system, user };
}

/**
 * Task 5b: return the unique numbers found inside [ ] in the answer.
 * "See [1001] and [1001] and [1004]"  ->  [1001, 1004]
 */
export function extractCitations(answer) {
  // TODO (5b): hint, from the RAG unit:
  //   [...new Set([...answer.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1])))]
  return [];
}

/**
 * Task 5c: the full flow. Steps 1 to 3 and 5 are written for you.
 *  Your job is step 4: reject any cited id that was not one of the 3 ids sent.
 */
export async function answerQuestion(question) {
  const { keyword, semantic } = getLists(question);
  const ids = rrfFuse(keyword, semantic).slice(0, 3);
  const retrieved = ids.map((id) => passages.find((p) => p.id === id));

  const answer = await llm(buildMessages(question, retrieved));
  const cited = extractCitations(answer);
  // TODO (5c): if ANY id in `cited` is not in `ids`, throw
  // new Error("Generated citation was not in the supplied context").
  // Hint: cited.some((id) => !ids.includes(id))
  return { answer, sources: cited };
}
