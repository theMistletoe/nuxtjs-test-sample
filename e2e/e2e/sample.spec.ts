import { test, expect } from '@playwright/test';

test.describe('TODOリスト', () => {
  test('ページが正しく表示される', async ({ page }) => {
    await page.goto('http://localhost:3000'); // TODOリストのURLに置き換えてください
    
    await expect(page.locator('h1')).toHaveText('TODOリスト');
    await expect(page.locator('input[placeholder="新しいTODOを入力"]')).toBeVisible();
    await expect(page.locator('button:has-text("追加")')).toBeVisible();
  });

  test('新しいTODOを追加できる', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await page.fill('input[placeholder="新しいTODOを入力"]', 'テストTODO');
    await page.click('button:has-text("追加")');
    
    await expect(page.locator('label:has-text("テストTODO")')).toBeVisible();
  });

  test('TODOをチェックできる', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await page.fill('input[placeholder="新しいTODOを入力"]', 'チェックするTODO');
    await page.click('button:has-text("追加")');
    
    const checkbox = page.locator('input[type="checkbox"]').last();
    await checkbox.check();
    
    await expect(checkbox).toBeChecked();
  });
});
