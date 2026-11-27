/**
 * Task 4a: Reciprocal Rank Fusion.
 *
 * Input: two ordered arrays of post ids (best first).
 * Output: ONE array of post ids, best first.
 *
 * For each id, score = sum over both lists of 1 / (k + rank),
 * where rank starts at 1. An id missing from a list adds 0 from it.
 *
 * Steps:
 *  1. const scores = new Map();
 *  2. For each list, for each id at index i: rank = i + 1, then
 *     scores.set(id, (scores.get(id) || 0) + 1 / (k + rank));
 *  3. Return the ids sorted by score, highest first:
 *     [...scores.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id)
 */
export function rrfFuse(keywordIds, semanticIds, k = 60) {
  // TODO
  return [];
}
