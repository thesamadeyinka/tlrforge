import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import PillarsSection from "./PillarsSection";

/**
 * Reuse guard: render PillarsSection inside a different route wrapper
 * (simulating a secondary page importing it) and assert the same white
 * brand styling is preserved — no parent theme can flip it to navy.
 */
const ReusePage = () => (
  <main className="bg-background text-foreground">
    <PillarsSection />
  </main>
);

describe("PillarsSection reuse styling", () => {
  it("keeps white background + navy text when reused on another route", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/reuse-test"]}>
        <Routes>
          <Route path="/reuse-test" element={<ReusePage />} />
        </Routes>
      </MemoryRouter>
    );

    const section = container.querySelector("section");
    expect(section).toBeTruthy();
    const cls = section!.className;

    expect(cls).toMatch(/\bbg-white\b/);
    expect(cls).not.toMatch(/\bdark:/);
    expect(cls).not.toMatch(/\bbg-primary\b/);
    expect(cls).not.toMatch(/(sm|md|lg|xl|2xl):bg-(?!white\b)/);

    const paragraph = section!.querySelector("p");
    expect(paragraph?.className ?? "").toMatch(/text-primary/);
    expect(paragraph?.className ?? "").not.toMatch(/\btext-white\b/);
  });
});
