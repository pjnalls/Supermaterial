import { Preview } from '@storybook/react';
import '../src/styles.scss';
import SuperMaterialThemes from './super-material.theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: SuperMaterialThemes,
    },
  },
};

export default preview;
