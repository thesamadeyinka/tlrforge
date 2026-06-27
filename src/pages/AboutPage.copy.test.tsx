import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import path from "path";

// Lightweight regression: locks down brand-critical About page copy and the
// "no em-dashes in copy" rule. Reads the source so we don't pay the cost of
// rendering the heavy AboutPage tree with framer-motion + SVG wheel.
const SRC = readFileSync(
  path.resolve(__dirname, "./AboutPage.tsx"),
  "utf-8",
);

describe("AboutPage copy", () => {
  it("contains the corrected Problem statement (comma, not em-dash)", () => {
    expect(SRC).toContain(
      "People desire and aspire to live a better life, often accompanied by great expectations, yet are disappointed by realities that deviate from those dreams, due to the absence of balanced, purpose-driven action for a life of fulfilment.",
    );
  });

  it("contains the corrected Belief statement (comma, not em-dash)", () => {
    expect(SRC).toContain(
      "Anyone can be great and live a fulfilling life if they engage early the things they would otherwise learn later, and if they have and utilise opportunities for learning and growth on time.",
    );
  });

  it("preserves the AKA-RB Repeat Better description", () => {
    expect(SRC).toContain(
      "Refine, iterate, and compound, every action better than the last.",
    );
  });

  it("preserves the hero subtitle without em-dashes", () => {
    expect(SRC).toContain(
      "More than a school, a dynamic ecosystem for strategic growth and intentional transformation.",
    );
  });

  it("has no em-dashes in user-facing copy (string literals)", () => {
    // Strip line comments so editor notes can still use em-dashes.
    const codeOnly = SRC.replace(/\/\/.*$/gm, "");
    const stringLiterals = codeOnly.match(/(["'`])(?:\\.|(?!\1).)*\1/g) ?? [];
    const offenders = stringLiterals.filter((s) => s.includes("\u2014"));
    expect(offenders, `Found em-dashes in: ${offenders.join("\n")}`).toEqual([]);
  });
});
