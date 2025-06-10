// tests/visual.spec.ts
import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';

type StorybookEntry = {
    v: number;
    entries: {
      [key: string]: {
        id: string;
        title: string;
        name: string;
        importPath: string;
        type: 'docs' | 'story';
        tags: string[];
        storiesImports?: string[];
        componentPath?: string;
      };
    };
  };

// Storybookのstories.jsonを読み込み
const storybookDir = resolve(__dirname, '../../storybook-static');
const storiesData: StorybookEntry = JSON.parse(
  readFileSync(resolve(storybookDir, 'index.json')).toString()
);

// console.log(storiesData);

test.describe.parallel('Visual Regression Testing', () => {
  const stories:any = Object.values(storiesData.entries);
  
  for (const story of stories) {
    if (story.type === 'docs') {
      test.skip(`${story.title}: ${story.name}`, async () => {});
      continue;
    }
    test(`${story.title}: ${story.name}`, async ({ page }) => {
      // Storybookの該当ストーリーにアクセス
      await page.goto(`http://localhost:6006/iframe.html?id=${story.id}`, {
        waitUntil: 'networkidle',
        timeout: 60000
      });
      
      // ローディング完了を待機（タイムアウト時間を延長）
      await page.waitForSelector('#storybook-root', {
        timeout: 60000,
        state: 'attached'
      });

      if (story.type === 'docs') {
        // Docsページの場合は #storybook-root のみを待つ
        await page.waitForSelector('#storybook-root', {
          timeout: 60000,
          state: 'visible'
        });
      } else {
        // 通常ストーリーは子要素がvisibleになるのを待つ
        await page.waitForSelector('#storybook-root > *', {
          timeout: 60000,
          state: 'visible'
        });
      }
      
      // アニメーションやレンダリングの完了を待つ
      await page.waitForTimeout(2000);
      
      // スクリーンショット撮影と比較
      await expect(page).toHaveScreenshot(`${story.id}.png`, {
        timeout: 60000
      });
    });
  }
});