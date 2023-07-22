import type { Meta } from '@storybook/react';
import { Dialog } from './dialog';

const Story: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Feedback/Dialog',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A741&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
