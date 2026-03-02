import { test, expect } from '@playwright/test'

test('Deve tocar uma música', async ({ page }) => {
  const song = {
    title: 'Bughium'
  }
  
  await page.goto('/')

  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito')

  await page.click('//div[contains(@class, "song")]//h6[text()="Bughium"]/..//button')
  await page.waitForTimeout(5000)
});
