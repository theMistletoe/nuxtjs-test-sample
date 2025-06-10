import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  "stories": [
    "../features/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook-vue/nuxt",
    "options": {}
  }
};
export default config;