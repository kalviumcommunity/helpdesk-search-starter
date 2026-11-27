// Provided. Returns the two ranked lists (top 10 post ids) that the keyword
// search and the semantic search produced for each test query.
import { readFileSync } from "node:fs";

const read = (f) => JSON.parse(readFileSync(new URL("./data/" + f, import.meta.url)));

export const passages = read("passages.json");
export const testSet = read("test-set.json");
export const results = read("search-results.json");

export function getLists(query) {
  return results[query] ?? { keyword: [], semantic: [] };
}
