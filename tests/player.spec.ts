import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  const loggedUser = page.locator('.logged-user');
  await expect(loggedUser).toHaveText('Fernando Papito');
});
