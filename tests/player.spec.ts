import { test, expect } from '@playwright/test'

test('Deve tocar uma música', async ({ page }) => {
  const song = {
    title: 'Bughium'
  }

  await page.goto('/')

  const loggedUser = page.locator('.logged-user')
  await expect(loggedUser).toHaveText('Fernando Papito')

  const songCard = page.locator('.song').filter({ hasText: song.title })
  const play = songCard.locator('.play')
  const pause = songCard.locator('.pause')
  await play.click()
  await expect(pause).toBeVisible({ timeout: 5000 })
  await expect(play).toBeVisible({ timeout: 171000 })

  //await page.click(`//div[contains(@class, "song")]//h6[text()="${song.title}"]/..//button`)
});
