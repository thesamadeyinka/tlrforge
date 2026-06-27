"""
About page visual regression — captures key sections across breakpoints.

Run from sandbox:
  python3 tests/visual/about_visual.py

Output: tests/visual/screenshots/<breakpoint>/<section>.png
"""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

BASE_URL = "http://localhost:8080/about"
OUT = Path(__file__).parent / "screenshots"
OUT.mkdir(parents=True, exist_ok=True)

BREAKPOINTS = [
    ("mobile", 390, 1800),
    ("tablet", 820, 1800),
    ("desktop", 1280, 1800),
]

# Section anchors via comment-derived headings/labels we can locate reliably.
SECTIONS = [
    ("hero", "About"),
    ("who-we-are", "WHO WE ARE"),
    ("commitment-aka", "OUR COMMITMENT"),
    ("vision-mission", "VISION"),
    ("core-values", "WHAT GUIDES US"),
    ("strategic-pillars", "OUR ARCHITECTURE"),
    ("audience", "OUR AUDIENCE"),
    ("leadership", "LEADERSHIP"),
    ("quote", "we lead it"),
    ("cta", "START TODAY"),
]


async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        for name, w, h in BREAKPOINTS:
            (OUT / name).mkdir(exist_ok=True)
            ctx = await browser.new_context(
                viewport={"width": w, "height": h},
                reduced_motion="reduce",  # stabilise animations for visual regression
            )
            page = await ctx.new_page()
            await page.goto(BASE_URL, wait_until="networkidle")
            await page.wait_for_timeout(400)

            for slug, text in SECTIONS:
                try:
                    loc = page.get_by_text(text, exact=False).first
                    await loc.scroll_into_view_if_needed(timeout=2500)
                    await page.wait_for_timeout(350)
                    section = loc.locator(
                        "xpath=ancestor::section[1]"
                    )
                    await section.screenshot(path=str(OUT / name / f"{slug}.png"))
                    print(f"[{name}] {slug} OK")
                except Exception as e:
                    print(f"[{name}] {slug} FAILED: {e}")
            await ctx.close()
        await browser.close()


if __name__ == "__main__":
    asyncio.run(main())
