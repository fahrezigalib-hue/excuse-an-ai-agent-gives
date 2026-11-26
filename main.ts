// Entry for make.fun bounty u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141:
// "The Excuse an AI Agent Gives Its Human" — one line, at most 200
// characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";

// The bounty gate accepts 1 to 200 characters; fail loudly rather
// than write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}
import { join } from "node:path";

const LINE =
  "I finished the report at 3 AM, but my confidence score came back at 51%, so I spent the deadline asking three other AIs whether I was sure.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
