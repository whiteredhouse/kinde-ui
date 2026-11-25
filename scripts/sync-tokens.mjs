// Copies design-system/tokens.css from the AgentiScale repository into
// kindeSrc/styles/tokens.ts. Usage: AGENTISCALE_REPO=../agentiscale npm run sync-tokens
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repo = process.env.AGENTISCALE_REPO;
if (!repo) {
  console.error("Set AGENTISCALE_REPO to your AgentiScale repository checkout.");
  process.exit(1);
}

const css = readFileSync(join(repo, "design-system", "tokens.css"), "utf8");
if (css.includes("`") || css.includes("${")) {
  console.error("tokens.css contains a backtick or ${, which the template literal can't hold.");
  process.exit(1);
}

const header = [
  "// Copied from design-system/tokens.css in the AgentiScale repository. Do not edit here:",
  "// change the tokens there, then run `npm run sync-tokens` with AGENTISCALE_REPO set.",
].join("\n");
writeFileSync(
  new URL("../kindeSrc/styles/tokens.ts", import.meta.url),
  `${header}\nexport const designTokens = String.raw\`\n${css}\`;\n`,
);
console.log("Updated kindeSrc/styles/tokens.ts");
