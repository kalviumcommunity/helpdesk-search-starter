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
  // TODO
  return { system: "", user: "" };
}

/**
 * Task 5b: return the unique numbers found inside [ ] in the answer.
 * "See [1001] and [1001] and [1004]"  ->  [1001, 1004]
 */
export function extractCitations(answer) {
  // TODO
  return [];
}

/**
 * Task 5c: the full flow.
 *  1. Get the two lists for the question and fuse them with rrfFuse.
 *  2. Keep the top 3 ids and load their passages from `passages`.
 *  3. Call llm(buildMessages(question, retrieved)).
 *  4. Take the cited ids. If ANY cited id is not one of the 3 ids you sent,
 *     throw new Error("Generated citation was not in the supplied context").
 *  5. Return { answer, sources: citedIds }.
 */
export async function answerQuestion(question) {
  // TODO
  return { answer: "", sources: [] };
}
