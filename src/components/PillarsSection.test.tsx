import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PillarsSection from "./PillarsSection";

/**
 * Visual regression guard for the "More Than a School" / Pillars section.
 * Locks in the brand-mandated white background + navy text styling so future
 * edits (including responsive/dark-mode overrides) can't silently revert it
 * back to navy.
 */
describe("PillarsSection styling", () => {
  const renderSection = () => {
    const { container } = render(
      <MemoryRouter>
        <PillarsSection />
      </MemoryRouter>
    );
    const section = container.querySelector("section");
    if (!section) throw new Error("PillarsSection root <section> not found");
    return section;
  };

  it("uses the white brand background with no dark/responsive overrides", () => {
    const section = renderSection();
    const cls = section.className;

    expect(cls).toMatch(/\bbg-white\b/);

    // Guard against regressions to navy / background-token / dark variants.
    expect(cls).not.toMatch(/\bdark:/);
    expect(cls).not.toMatch(/\bbg-background\b/);
    expect(cls).not.toMatch(/\bbg-primary\b/);
    expect(cls).not.toMatch(/bg-\[hsl\(224/);
    expect(cls).not.toMatch(/(sm|md|lg|xl|2xl):bg-(?!white\b)/);
  });

  it("renders headline and pillar copy in navy (text-primary), not white", () => {
    const section = renderSection();
    const headline = section.querySelector("h1, h2, h3, h4");
    expect(headline).toBeTruthy();
    // Body paragraph under the headline should use navy text token.
    const paragraph = section.querySelector("p");
    expect(paragraph?.className ?? "").toMatch(/text-primary/);
    expect(paragraph?.className ?? "").not.toMatch(/\btext-white\b/);
  });

  it("renders all three pillars", () => {
    const section = renderSection();
    expect(section.textContent).toContain("EVOLVE");
    expect(section.textContent).toContain("Luminaries Network");
    expect(section.textContent).toContain("Amplify Impact Fund");
  });
});
