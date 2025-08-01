import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [],
    framework: {
        name: '@analogjs/storybook-angular',
        options: {},
    },
};
export default config;
