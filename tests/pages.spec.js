const { test, expect } = require('@playwright/test');

test.describe('Home page', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Taylor Helman Tattoo/);
  });

  test('has correct theme color', async ({ page }) => {
    await page.goto('/');
    const meta = page.locator('meta[name="theme-color"]');
    await expect(meta).toHaveAttribute('content', '#9f6d67');
  });

  test('has viewport meta tag', async ({ page }) => {
    await page.goto('/');
    const meta = page.locator('meta[name="viewport"]');
    await expect(meta).toHaveAttribute('content', /width=device-width/);
  });
});

test.describe('Portfolio page', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/portfolio.html');
    await expect(page).toHaveTitle(/Portfolio.*Taylor Helman Tattoo/);
  });
});

test.describe('Availability page', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/availability.html');
    await expect(page).toHaveTitle(/Availability.*Taylor Helman Tattoo/);
  });
});

test.describe('Policies page', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/policies.html');
    await expect(page).toHaveTitle(/Tattoo Policies.*Taylor Helman Tattoo/);
  });
});

test.describe('Navigation', () => {
  test('all pages are accessible (no 404s)', async ({ page }) => {
    const pages = ['/', '/portfolio.html', '/availability.html', '/policies.html'];
    for (const path of pages) {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
    }
  });
});
