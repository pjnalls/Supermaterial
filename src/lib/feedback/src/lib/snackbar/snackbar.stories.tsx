import type { Meta } from '@storybook/react';
import { Snackbar } from './snackbar';

const Story: Meta<typeof Snackbar> = {
  component: Snackbar,
  title: 'Feedback/Snackbar',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=138%3A668&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
