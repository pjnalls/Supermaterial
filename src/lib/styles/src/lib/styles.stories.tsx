import type { Meta } from '@storybook/react';
import { Styles } from './styles';

const Story: Meta<typeof Styles> = {
  component: Styles,
  title: 'Styles',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=0%3A1&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
