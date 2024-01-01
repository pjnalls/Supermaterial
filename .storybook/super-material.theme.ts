import { create } from '@storybook/theming/create';

const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
export const SuperMaterialTheme = create(
  isLightMode
    ? {
        base: 'light',

        // Typography
        fontBase: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        fontCode: 'monospace',

        brandTitle: 'Super Material',
        brandUrl: 'https://pjnalls.com/works/supermat/',
        brandImage: 'https://pjnalls.com/works/supermat/logo.svg',
        brandTarget: '_self',

        colorPrimary: '#76ff3b',
        colorSecondary: '#4032af',

        // UI
        appBg: '#e0e4e8',
        appContentBg: '#f0f4fa',
        appBorderColor: '#c3c4c8',
        appBorderRadius: 4,

        // // Text colors
        textInverseColor: '#e0e4e8',
        textColor: '#101418',
        textMutedColor: '#3b3640',

        // // Toolbar default and active colors
        // barTextColor: '#8698ff',
        // barSelectedColor: '#6669e5',
        barBg: '#fff',

        // // Form colors
        inputBg: '#e0e4e8',
        inputBorder: '#939498',
        inputTextColor: '#303438',
        inputBorderRadius: 2,
      }
    : {
        base: 'dark',

        // Typography
        fontBase: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        fontCode: 'monospace',

        brandTitle: 'Super Material',
        brandUrl: 'https://pjnalls.com/works/super-material/',
        brandImage: 'https://pjnalls.com/works/super-material/logo.svg',
        brandTarget: '_self',

        colorPrimary: '#9a00c5',
        colorSecondary: '#90a2ef',

        // UI
        appBg: '#14181b',
        appContentBg: '#101418',
        appBorderColor: '#332d3a',
        appBorderRadius: 4,

        // // Text colors
        textInverseColor: '#101418',
        textColor: '#fff',
        textMutedColor: '#8b9ab0',

        // // Toolbar default and active colors
        barTextColor: '#90a2ef',
        barSelectedColor: '#8689f9',
        barBg: '#0c0e13',

        // // Form colors
        // inputBg: '#101418',
        // inputBorder: '#534d6a',
        // inputTextColor: '#dce',
        inputBorderRadius: 2,
      }
);

export default SuperMaterialTheme;
