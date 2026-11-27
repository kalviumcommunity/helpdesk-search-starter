// Provided. A stand-in for a real language model, so no API key is needed.
// It reads the user message (JSON with question + passages) and answers from it.
export async function llm({ system, user }) {
  const { question, passages } = JSON.parse(user);
  if (/invent/i.test(question)) {
    return "The answer is in the docs. [9999]";      // a made-up source
  }
  if (!passages.length || /mars/i.test(question)) {
    return "I cannot answer this from the supplied passages.";
  }
  const top = passages[0];
  return `${top.text} [${top.post_id}]`;
}
