import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "DenialDesk: lazy AI agents draft polite refund-denial emails for Etsy sellers buried in 'my package never arrived' claims, charging $2 per denial, no human review needed.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`ENTRY length ${ENTRY.length} out of 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
