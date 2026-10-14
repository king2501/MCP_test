import { test, expect } from '@playwright/test';

test.describe('Google Navigation', () => {
  test('should navigate to Google homepage', async ({ page }) => {
    // Navigate to Google
    await page.goto('http://www.google.com');

    // Wait for the page to load and verify the title contains "Google"
    await expect(page).toHaveTitle(/Google/);

    // Verify the Google logo or main search element is visible
    const searchBox = page.locator('input[aria-label="Search"]');
    await expect(searchBox).toBeVisible();
  });

  test('should search on Google', async ({ page }) => {
    // Navigate to Google
    await page.goto('http://www.google.com');

    // Find and fill the search box
    const searchBox = page.locator('input[aria-label="Search"]');
    await searchBox.fill('Playwright automation');

    // Press Enter to search
    await searchBox.press('Enter');

    // Wait for search results and verify page has changed
    await page.waitForURL('**/search**');
    await expect(page).toHaveURL(/search/);

    // Verify search results are displayed
    const results = page.locator('div[data-sokoban-container]').first();
    await expect(results).toBeVisible();
  });

  test('should verify Google page elements', async ({ page }) => {
    // Navigate to Google
    await page.goto('http://www.google.com');

    // Verify presence of key elements on homepage
    const googleLogo = page.locator('img[alt="Google"]');
    await expect(googleLogo).toBeVisible();

    // Verify search button is present
    const searchButton = page.locator('button:has-text("Google Search")').first();
    await expect(searchButton).toBeVisible();

    // Verify "I'm Feeling Lucky" button
    const luckyButton = page.locator('button:has-text("I\'m Feeling Lucky")').first();
    await expect(luckyButton).toBeVisible();
  });
});
