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
    test(`${story.title}: ${story.name}`, async ({ page }) => {
      // Storybookの該当ストーリーにアクセス
      await page.goto(`http://localhost:6006/iframe.html?id=${story.id}`);
      
      // ローディング完了を待機
      await page.waitForSelector('#storybook-root > *');
      
      // スクリーンショット撮影と比較
      await expect(page).toHaveScreenshot(`${story.id}.png`);
    });
  }
});