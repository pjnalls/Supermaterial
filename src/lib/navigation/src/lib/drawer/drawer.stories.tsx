import type { Meta } from '@storybook/react';
import { Drawer } from './drawer';

const Story: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Navigation/Drawer',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EUQyB3jTGkj0ND03W0qNtB/MUI-(Material-Design-Component-Figma-Library-For-React)-(Community)?node-id=14%3A753&mode=dev',
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
