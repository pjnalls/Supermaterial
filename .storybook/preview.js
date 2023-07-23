import '../src/styles.scss';

import supermaterialTheme from './super-material.theme';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: supermaterialTheme,
    },
  },
};

export default preview;
