import { testSet, getLists } from "./search.js";
import { rrfFuse } from "./rrf.js";

/**
 * Task 4b: metrics.
 *
 * reciprocalRank(ranked, correctIds): rank = position (starting at 1) of the
 * first id in `ranked` that is in `correctIds`. Return 1 / rank, or 0 if none
 * appears in the top 10.
 */
export function reciprocalRank(ranked, correctIds) {
  // TODO
  return 0;
}

/** Same rule, but returns 1 if a correct id is in the top 10, else 0. */
export function hitAt10(ranked, correctIds) {
  // TODO
  return 0;
}

function evaluate(getRanked) {
  // TODO: loop over testSet. For each { query, correct } call getRanked(query),
  // add up reciprocalRank and hitAt10, then return
  // { mrr: <average>, recall: <hits / number of queries> }.
  return { mrr: 0, recall: 0 };
}

if (process.argv[1].endsWith("eval.js")) {
  const keyword = evaluate((q) => getLists(q).keyword);
  const semantic = evaluate((q) => getLists(q).semantic);
  const hybrid = evaluate((q) => {
    const { keyword, semantic } = getLists(q);
    return rrfFuse(keyword, semantic).slice(0, 10);
  });

  const row = (name, r) => `| ${name} | ${r.mrr.toFixed(2)} | ${r.recall.toFixed(2)} |`;
  console.log("| System | MRR | Recall@10 |");
  console.log("|---|---|---|");
  console.log(row("Keyword", keyword));
  console.log(row("Semantic", semantic));
  console.log(row("Hybrid (RRF)", hybrid));
}
