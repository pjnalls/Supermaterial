import type { Meta } from '@storybook/react';
import { AppBar } from './app-bar';

const Story: Meta<typeof AppBar> = {
  component: AppBar,
  title: 'Surfaces/App Bar',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A731&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
