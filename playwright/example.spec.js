// @ts-check
import { test, expect } from "@playwright/test";

// const { test, describe, expect, beforeEach } = require('@playwright/test')

test.describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(page.getByText("Pokémon and Pokémon character names are trademarks of Nintendo.")).toBeVisible();
  });
});
