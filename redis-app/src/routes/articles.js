import { Router } from "express";
import { cached } from "../cache.js";
import { getArticleSlowly } from "../slowSource.js";

const router = Router();

// Task 3: serve the article through the cache.
// Use cached("article:" + id, 60, () => getArticleSlowly(id)).
router.get("/:id", async (req, res) => {
  // TODO
  res.status(501).json({ error: "not implemented" });
});

export default router;
