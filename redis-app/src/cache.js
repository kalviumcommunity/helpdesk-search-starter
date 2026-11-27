import { redis } from "./redis.js";

/**
 * Task 3: cache-aside.
 *
 * cached(key, ttl, fetcher)
 *   1. Hit:  redis.get(key) returns a value -> JSON.parse it and return it.
 *            (Do not call fetcher.)
 *   2. Miss: run fetcher(), store the result with
 *            redis.set(key, JSON.stringify(data), "EX", ttl),
 *            and return the data.
 */
export async function cached(key, ttl, fetcher) {
  // TODO
  return fetcher();
}
